import { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, CalendarDays, Clock3, MapPin, UserRound, X } from 'lucide-react';
import { subjectsBySemester, getAttendancePercentage } from '../../data/student-subjects';
import { timetableSessions, timetableTimeSlots, type TimetableSession } from '../../data/student-timetable';
import { TimetableDayView, TimetableGrid, TimetableMonthView, TimetableViewSwitcher, type TimetableView } from '../../components/student';

const getDateKey = (date: Date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
const getWeekStart = (date: Date) => {
    const day = date.getDay();
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + (day === 0 ? -6 : 1 - day), 12);
};
const getWeekDates = (weekStart: Date) => Array.from({ length: 6 }, (_, index) => new Date(weekStart.getFullYear(), weekStart.getMonth(), weekStart.getDate() + index, 12));
const getMinutes = (time: string) => { const [hours, minutes] = time.split(':').map(Number); return hours * 60 + minutes; };
const formatTime = (time: string) => { const [hours, minutes] = time.split(':').map(Number); const suffix = hours >= 12 ? 'PM' : 'AM'; return `${String(hours > 12 ? hours - 12 : hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${suffix}`; };
const formatWeekLabel = (dates: Date[]) => `${dates[0].toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} - ${dates[dates.length - 1].toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`;

interface SessionDetailsProps { session: TimetableSession; onClose: () => void; }

const SessionDetails = ({ session, onClose }: SessionDetailsProps) => {
    const subject = subjectsBySemester['5th Semester'].find((item) => item.code === session.subjectCode);
    const attendance = subject ? getAttendancePercentage(subject) : 0;
    const date = new Date(`${session.date}T12:00:00`).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

    return <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/35 p-4 sm:items-center" role="presentation" onClick={onClose}><section className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl sm:p-6" role="dialog" aria-modal="true" aria-labelledby="session-details-title" onClick={(event) => event.stopPropagation()}><div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-600">Class details</p><h2 id="session-details-title" className="mt-1 text-xl font-extrabold text-slate-900">{session.subjectName}</h2><p className="mt-1 text-sm font-semibold text-slate-500">{session.subjectCode} <span className="px-1 text-slate-300">•</span> {session.type}</p></div><button type="button" aria-label="Close class details" className="rounded-lg p-2 text-slate-400 hover:bg-slate-50 hover:text-slate-700" onClick={onClose}><X className="h-5 w-5" /></button></div><div className="mt-5 grid gap-4 sm:grid-cols-2"><div className="flex items-start gap-3"><CalendarDays className="mt-0.5 h-4 w-4 text-indigo-500" /><div><p className="text-xs font-semibold text-slate-400">Date</p><p className="mt-1 text-sm font-bold text-slate-800">{date}</p></div></div><div className="flex items-start gap-3"><Clock3 className="mt-0.5 h-4 w-4 text-indigo-500" /><div><p className="text-xs font-semibold text-slate-400">Time</p><p className="mt-1 text-sm font-bold text-slate-800">{formatTime(session.startTime)} - {formatTime(session.endTime)}</p></div></div><div className="flex items-start gap-3"><UserRound className="mt-0.5 h-4 w-4 text-indigo-500" /><div><p className="text-xs font-semibold text-slate-400">Faculty</p><p className="mt-1 text-sm font-bold text-slate-800">{session.facultyName}</p></div></div><div className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-indigo-500" /><div><p className="text-xs font-semibold text-slate-400">Room</p><p className="mt-1 text-sm font-bold text-slate-800">{session.room}</p></div></div></div><div className="mt-5 flex items-center justify-between rounded-xl bg-indigo-50 p-4"><div><p className="text-xs font-bold uppercase tracking-wider text-indigo-600">Attendance for this subject</p><p className="mt-1 text-sm font-semibold text-slate-600">Based on recorded classes</p></div><p className="text-2xl font-extrabold text-indigo-700">{attendance}%</p></div></section></div>;
};

export const Timetable = () => {
    const today = new Date();
    const todayKey = getDateKey(today);
    const [view, setView] = useState<TimetableView>('week');
    const [selectedDate, setSelectedDate] = useState(() => new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12));
    const [selectedSession, setSelectedSession] = useState<TimetableSession>();
    const weekDates = useMemo(() => getWeekDates(getWeekStart(selectedDate)), [selectedDate]);
    const weekSessions = timetableSessions.filter((session) => session.date >= getDateKey(weekDates[0]) && session.date <= getDateKey(weekDates[5]));
    const monthPrefix = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}`;
    const monthSessions = timetableSessions.filter((session) => session.date.startsWith(monthPrefix));
    const daySessions = timetableSessions.filter((session) => session.date === getDateKey(selectedDate));
    const visibleSessions = view === 'week' ? weekSessions : view === 'month' ? monthSessions : daySessions;
    const summary = useMemo(() => {
        const classHours = visibleSessions.reduce((total, session) => total + getMinutes(session.endTime) - getMinutes(session.startTime), 0) / 60;
        const periodCount = view === 'week' ? 6 * (timetableTimeSlots.length - 1) : timetableTimeSlots.length - 1;
        return { classes: visibleSessions.length, theory: visibleSessions.filter((session) => session.type === 'Theory').length, labs: visibleSessions.filter((session) => session.type === 'Lab').length, freePeriods: Math.max(0, Math.round(periodCount - classHours)) };
    }, [view, visibleSessions]);
    const isCurrentSession = (session: TimetableSession) => session.date === todayKey && getMinutes(session.startTime) <= today.getHours() * 60 + today.getMinutes() && getMinutes(session.endTime) > today.getHours() * 60 + today.getMinutes();
    const changeSelection = (offset: number) => {
        const nextDate = view === 'day' ? new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate() + offset, 12) : view === 'month' ? new Date(selectedDate.getFullYear(), selectedDate.getMonth() + offset, 1, 12) : new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate() + offset * 7, 12);
        setSelectedDate(nextDate);
        setSelectedSession(undefined);
    };
    const goToToday = () => { setSelectedDate(new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12)); setSelectedSession(undefined); };
    const navigationLabel = view === 'day' ? 'day' : view === 'month' ? 'month' : 'week';
    const viewLabel = view === 'day' ? selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }) : view === 'month' ? selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : formatWeekLabel(weekDates);

    return <main className="mx-auto max-w-[1500px] p-4 sm:p-6 lg:p-8">
        <section className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">{view === 'week' ? 'Weekly schedule' : view === 'day' ? 'Daily schedule' : 'Monthly schedule'}</p><h1 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">Timetable</h1><p className="mt-1.5 text-sm text-slate-500">B.Tech CSE <span className="px-1 text-slate-300">•</span> 3rd Year <span className="px-1 text-slate-300">•</span> 5th Semester <span className="px-1 text-slate-300">•</span> Section A</p></div><div className="flex flex-col gap-3 sm:items-end"><TimetableViewSwitcher value={view} onChange={(nextView) => { setView(nextView); setSelectedSession(undefined); }} /><div className="flex flex-wrap items-center gap-2"><button type="button" aria-label={`Previous ${navigationLabel}`} onClick={() => changeSelection(-1)} className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-bold text-slate-600 shadow-sm hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"><ArrowLeft className="h-4 w-4" />Previous {navigationLabel}</button><button type="button" aria-label={`Go to today in ${view} view`} onClick={goToToday} className="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm shadow-indigo-600/20 hover:bg-indigo-700">Today</button><button type="button" aria-label={`Next ${navigationLabel}`} onClick={() => changeSelection(1)} className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-bold text-slate-600 shadow-sm hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700">Next {navigationLabel}<ArrowRight className="h-4 w-4" /></button></div></div></section>
        <section className="mb-6 flex flex-col gap-4 rounded-2xl border border-indigo-100 bg-indigo-50/60 p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-6"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-600">Selected {view}</p><p className="mt-1 text-lg font-extrabold text-slate-900">{viewLabel}</p></div><div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm sm:grid-cols-4"><div><p className="text-xs font-semibold text-slate-400">Classes</p><p className="mt-0.5 font-extrabold text-slate-900">{summary.classes}</p></div><div><p className="text-xs font-semibold text-slate-400">Theory</p><p className="mt-0.5 font-extrabold text-slate-900">{summary.theory}</p></div><div><p className="text-xs font-semibold text-slate-400">Labs</p><p className="mt-0.5 font-extrabold text-slate-900">{summary.labs}</p></div><div><p className="text-xs font-semibold text-slate-400">Free periods</p><p className="mt-0.5 font-extrabold text-slate-900">{summary.freePeriods}</p></div></div></section>
        {view === 'day' && <TimetableDayView date={selectedDate} sessions={timetableSessions} todayKey={todayKey} onSelectSession={setSelectedSession} isCurrentSession={isCurrentSession} />}
        {view === 'week' && <TimetableGrid dates={weekDates} sessions={weekSessions} todayKey={todayKey} onSelectSession={setSelectedSession} isCurrentSession={isCurrentSession} />}
        {view === 'month' && <TimetableMonthView date={selectedDate} sessions={timetableSessions} todayKey={todayKey} selectedDate={selectedDate} onSelectDate={(date) => { setSelectedDate(date); setSelectedSession(undefined); }} onSelectSession={setSelectedSession} isCurrentSession={isCurrentSession} />}
        {selectedSession && <SessionDetails session={selectedSession} onClose={() => setSelectedSession(undefined)} />}
    </main>;
};