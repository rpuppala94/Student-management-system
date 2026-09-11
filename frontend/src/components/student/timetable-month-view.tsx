import { CalendarDays } from 'lucide-react';
import type { TimetableSession } from '../../data/student-timetable';
import { TimetableClassCard } from './timetable-class-card';

interface TimetableMonthViewProps {
    date: Date;
    sessions: TimetableSession[];
    todayKey: string;
    onSelectDate: (date: Date) => void;
    selectedDate: Date;
    onSelectSession: (session: TimetableSession) => void;
    isCurrentSession: (session: TimetableSession) => boolean;
}

const getDateKey = (date: Date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

export const TimetableMonthView = ({ date, sessions, todayKey, onSelectDate, selectedDate, onSelectSession, isCurrentSession }: TimetableMonthViewProps) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1, 12);
    const firstMonday = new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate() - (firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1), 12);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0, 12);
    const lastSaturday = new Date(lastDay.getFullYear(), lastDay.getMonth(), lastDay.getDate() + (6 - (lastDay.getDay() === 0 ? 6 : lastDay.getDay() - 1)), 12);
    const dates: Date[] = [];
    for (let current = firstMonday; current <= lastSaturday; current = new Date(current.getFullYear(), current.getMonth(), current.getDate() + 1, 12)) {
        if (current.getDay() !== 0) dates.push(current);
    }
    const selectedKey = getDateKey(selectedDate);
    const selectedSessions = sessions.filter((session) => session.date === selectedKey).sort((first, second) => first.startTime.localeCompare(second.startTime));
    const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
            <section className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm sm:p-6">
                <div className="mb-5 flex items-center gap-2"><CalendarDays className="h-5 w-5 text-indigo-600" /><h2 className="text-lg font-bold text-slate-900">{date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h2></div>
                <div className="grid grid-cols-6 gap-1.5 text-center sm:gap-2">
                    {weekdays.map((weekday) => <div key={weekday} className="pb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">{weekday}</div>)}
                    {dates.map((calendarDate) => {
                        const key = getDateKey(calendarDate);
                        const daySessions = sessions.filter((session) => session.date === key);
                        const isSelected = key === selectedKey;
                        const isToday = key === todayKey;
                        const isCurrentMonth = calendarDate.getMonth() === date.getMonth();

                        return <button key={key} type="button" aria-label={`${calendarDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}, ${daySessions.length} classes`} aria-pressed={isSelected} onClick={() => onSelectDate(calendarDate)} className={`min-h-[76px] rounded-xl border p-2 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${isSelected ? 'border-indigo-600 bg-indigo-600 text-white shadow-sm' : isToday ? 'border-indigo-200 bg-indigo-50' : isCurrentMonth ? 'border-slate-100 bg-slate-50/60 hover:border-indigo-200 hover:bg-indigo-50' : 'border-transparent bg-white text-slate-300'}`}><span className={`text-sm font-extrabold ${isSelected ? 'text-white' : isToday ? 'text-indigo-700' : ''}`}>{calendarDate.getDate()}</span>{daySessions.length > 0 ? <span className={`mt-2 block text-[10px] font-bold ${isSelected ? 'text-indigo-100' : 'text-slate-500'}`}>{daySessions.length} {daySessions.length === 1 ? 'class' : 'classes'}</span> : <span className={`mt-2 block text-[10px] ${isSelected ? 'text-indigo-100' : 'text-slate-300'}`}>No classes</span>}</button>;
                    })}
                </div>
            </section>
            <section className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-600">Selected day</p>
                <h2 className="mt-1 text-lg font-extrabold text-slate-900">{selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</h2>
                <p className="mt-1 text-sm text-slate-500">{selectedSessions.length} {selectedSessions.length === 1 ? 'class' : 'classes'} scheduled</p>
                <div className="mt-4 space-y-3">{selectedSessions.length > 0 ? selectedSessions.map((session) => <TimetableClassCard key={session.id} session={session} isCurrent={isCurrentSession(session)} onClick={() => onSelectSession(session)} />) : <p className="rounded-xl border border-dashed border-slate-200 p-6 text-center text-sm font-semibold text-slate-400">No classes scheduled</p>}</div>
            </section>
        </div>
    );
};