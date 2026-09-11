import { Coffee, Utensils } from 'lucide-react';
import { timetableTimeSlots, type TimetableSession } from '../../data/student-timetable';
import { TimetableClassCard } from './timetable-class-card';

interface TimetableDayViewProps {
    date: Date;
    sessions: TimetableSession[];
    todayKey: string;
    onSelectSession: (session: TimetableSession) => void;
    isCurrentSession: (session: TimetableSession) => boolean;
}

const formatTime = (hour: number) => `${String(hour > 12 ? hour - 12 : hour).padStart(2, '0')}:00 ${hour >= 12 ? 'PM' : 'AM'}`;
const getHour = (time: string) => Number(time.split(':')[0]);

export const TimetableDayView = ({ date, sessions, todayKey, onSelectSession, isCurrentSession }: TimetableDayViewProps) => {
    const dateKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    const daySessions = sessions.filter((session) => session.date === dateKey).sort((first, second) => first.startTime.localeCompare(second.startTime));

    return (
        <section className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm sm:p-6">
            <div className={`mb-5 rounded-xl p-4 ${dateKey === todayKey ? 'bg-indigo-50' : 'bg-slate-50'}`}>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-600">{dateKey === todayKey ? 'Today' : 'Selected day'}</p>
                <h2 className="mt-1 text-lg font-extrabold text-slate-900">{date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</h2>
            </div>
            <div className="space-y-3">
                {timetableTimeSlots.map((hour) => {
                    if (hour === 13) return <div key="lunch" className="flex items-center justify-between rounded-xl border border-dashed border-orange-200 bg-orange-50/70 px-4 py-3"><span className="flex items-center gap-2 text-xs font-bold text-orange-700"><Utensils className="h-4 w-4" />Lunch Break</span><span className="text-xs text-orange-600">01:00 - 02:00 PM</span></div>;
                    const session = daySessions.find((item) => getHour(item.startTime) === hour);
                    if (session) return <TimetableClassCard key={session.id} session={session} isCurrent={isCurrentSession(session)} onClick={() => onSelectSession(session)} />;
                    return <div key={`free-${hour}`} className="flex items-center justify-between rounded-xl border border-dashed border-slate-200 px-4 py-3"><span className="text-xs font-bold text-slate-400">{formatTime(hour)}</span><span className="flex items-center gap-1.5 text-xs font-semibold text-slate-300"><Coffee className="h-3.5 w-3.5" />Free Period</span></div>;
                })}
            </div>
        </section>
    );
};