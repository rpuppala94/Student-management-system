import { Coffee, Utensils } from 'lucide-react';
import { timetableTimeSlots, type TimetableSession } from '../../data/student-timetable';
import { TimetableClassCard } from './timetable-class-card';

interface TimetableGridProps {
    dates: Date[];
    sessions: TimetableSession[];
    todayKey: string;
    onSelectSession: (session: TimetableSession) => void;
    isCurrentSession: (session: TimetableSession) => boolean;
}

const HOUR_HEIGHT = 96;
const GRID_START_MINUTES = 9 * 60;
const getDateKey = (date: Date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
const formatTime = (hour: number) => `${String(hour > 12 ? hour - 12 : hour).padStart(2, '0')}:00 ${hour >= 12 ? 'PM' : 'AM'}`;
export const getTimeMinutes = (time: string) => {
    const [hours, minutes] = time.split(':').map(Number);

    return hours * 60 + minutes;
};

const getEventLayout = (sessions: TimetableSession[]) => {
    const columns: TimetableSession[][] = [];
    const placements = sessions
        .slice()
        .sort((first, second) => getTimeMinutes(first.startTime) - getTimeMinutes(second.startTime))
        .map((session) => {
            let columnIndex = columns.findIndex((column) => {
                const previous = column[column.length - 1];

                return getTimeMinutes(previous.endTime) <= getTimeMinutes(session.startTime);
            });

            if (columnIndex === -1) {
                columnIndex = columns.length;
                columns.push([]);
            }
            columns[columnIndex].push(session);

            return { session, columnIndex };
        });

    return placements.map((placement) => ({ ...placement, columnCount: columns.length }));
};

export const TimetableGrid = ({ dates, sessions, todayKey, onSelectSession, isCurrentSession }: TimetableGridProps) => {
    return (
        <div className="hidden overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm md:block">
            <div className="grid grid-cols-[76px_repeat(6,minmax(0,1fr))] border-b border-slate-200 bg-slate-50/80">
                <div className="border-r border-slate-200 p-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">Time</div>
                {dates.map((date) => {
                    const dateKey = getDateKey(date);
                    const isToday = dateKey === todayKey;

                    return <div key={dateKey} className={`border-r border-slate-200 p-3 text-center last:border-r-0 ${isToday ? 'bg-indigo-50/80' : ''}`}><p className={`text-[11px] font-extrabold uppercase tracking-wider ${isToday ? 'text-indigo-600' : 'text-slate-400'}`}>{date.toLocaleDateString('en-US', { weekday: 'short' })}</p><p className={`mt-1 text-sm font-extrabold ${isToday ? 'text-indigo-700' : 'text-slate-800'}`}>{date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>{isToday && <span className="mt-1 inline-flex rounded-full bg-indigo-600 px-2 py-0.5 text-[9px] font-bold text-white">Today</span>}</div>;
                })}
            </div>
            <div className="grid grid-cols-[76px_repeat(6,minmax(0,1fr))]">
                <div className="bg-slate-50/50">{timetableTimeSlots.map((hour) => <div key={hour} className="flex h-[88px] items-start justify-end border-b border-r border-slate-100 px-2 pt-2 text-[10px] font-bold text-slate-400">{formatTime(hour)}</div>)}</div>
                {dates.map((date) => {
                    const dateKey = getDateKey(date);
                    const daySessions = sessions.filter((session) => session.date === dateKey);
                    const eventLayouts = getEventLayout(daySessions);

                    return <div key={dateKey} className={`relative h-[768px] border-r border-slate-100 last:border-r-0 ${dateKey === todayKey ? 'bg-indigo-50/20' : ''}`}>
                        {timetableTimeSlots.map((hour) => <div key={hour} className="h-24 border-b border-slate-100" />)}
                        {timetableTimeSlots.map((hour) => {
                            const hourStart = hour * 60;
                            const hourEnd = hourStart + 60;
                            const isOccupied = daySessions.some((session) => getTimeMinutes(session.startTime) < hourEnd && getTimeMinutes(session.endTime) > hourStart);

                            if (hour === 13 && !isOccupied) return <div key="lunch" className="absolute left-1 right-1 top-[388px] flex h-[88px] flex-col items-center justify-center rounded-lg border border-dashed border-orange-200 bg-orange-50/70 text-center"><Utensils className="h-4 w-4 text-orange-400" /><span className="mt-1 text-[10px] font-bold text-orange-700">Lunch Break</span><span className="text-[9px] text-orange-600">01:00 - 02:00 PM</span></div>;
                            if (isOccupied) return null;
                            return <div key={`free-${hour}`} className="absolute left-1 right-1 flex items-center justify-center" style={{ top: `${(hour - 9) * HOUR_HEIGHT + 4}px`, height: `${HOUR_HEIGHT - 8}px` }}><div className="flex items-center gap-1 text-[10px] font-semibold text-slate-300"><Coffee className="h-3.5 w-3.5" />Free Period</div></div>;
                        })}
                        {eventLayouts.map(({ session, columnIndex, columnCount }) => {
                            const startMinutes = getTimeMinutes(session.startTime);
                            const durationMinutes = Math.max(30, getTimeMinutes(session.endTime) - startMinutes);
                            const top = ((startMinutes - GRID_START_MINUTES) / 60) * HOUR_HEIGHT + 4;
                            const height = (durationMinutes / 60) * HOUR_HEIGHT - 8;

                            return <div key={session.id} className="absolute z-10 px-0.5" style={{ top: `${top}px`, height: `${height}px`, left: `${(columnIndex * 100) / columnCount}%`, width: `${100 / columnCount}%` }}><TimetableClassCard session={session} isCurrent={isCurrentSession(session)} onClick={() => onSelectSession(session)} compact /></div>;
                        })}
                    </div>;
                })}
            </div>
        </div>
    );
};