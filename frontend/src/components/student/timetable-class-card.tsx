import { BookOpen, Clock3, FlaskConical, MapPin, UserRound } from 'lucide-react';
import type { TimetableSession } from '../../data/student-timetable';

interface TimetableClassCardProps {
    session: TimetableSession;
    isCurrent: boolean;
    onClick: () => void;
    compact?: boolean;
}

export const TimetableClassCard = ({ session, isCurrent, onClick, compact = false }: TimetableClassCardProps) => {
    const isLab = session.type === 'Lab';
    const Icon = isLab ? FlaskConical : BookOpen;
    const [startHours, startMinutes] = session.startTime.split(':').map(Number);
    const [endHours, endMinutes] = session.endTime.split(':').map(Number);
    const durationMinutes = (endHours * 60 + endMinutes) - (startHours * 60 + startMinutes);
    const isCompactHour = compact && durationMinutes <= 60;
    const showRoom = !compact || durationMinutes >= 90;

    return (
        <button type="button" onClick={onClick} className={`group flex h-full min-h-0 w-full flex-col overflow-hidden rounded-xl border p-2 text-left shadow-sm transition-all hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 sm:p-2.5 ${isLab ? 'border-amber-200 bg-amber-50/80 hover:border-amber-300' : 'border-indigo-100 bg-indigo-50/80 hover:border-indigo-200'} ${isCurrent ? 'ring-2 ring-emerald-400 ring-offset-2' : ''}`}>
            <div className="flex items-start justify-between gap-2">
                <div className="flex min-w-0 items-center gap-1.5">
                    <Icon className={`h-3.5 w-3.5 shrink-0 ${isLab ? 'text-amber-600' : 'text-indigo-600'}`} />
                    <span className="truncate text-[11px] font-extrabold uppercase tracking-wider text-slate-500">{session.subjectCode}</span>
                </div>
                <span className={`shrink-0 text-[10px] font-bold ${isLab ? 'text-amber-700' : 'text-indigo-700'}`}>{session.type}</span>
            </div>
            <p className={`mt-1.5 overflow-hidden font-extrabold leading-4 text-slate-900 ${isCompactHour ? 'line-clamp-2 text-xs' : compact ? 'line-clamp-2 text-xs' : 'text-sm'}`}>{session.subjectName}</p>
            <p className={`mt-1 flex items-center gap-1 text-xs font-semibold text-slate-600 ${compact ? 'shrink-0' : ''}`}><Clock3 className="h-3.5 w-3.5 shrink-0" />{session.startTime} - {session.endTime}</p>
            {showRoom && <p className="mt-1 flex items-center gap-1 truncate text-xs text-slate-500"><MapPin className="h-3.5 w-3.5 shrink-0" />{session.room}</p>}
            {!compact && <p className="mt-1 flex items-center gap-1 truncate text-xs text-slate-500"><UserRound className="h-3.5 w-3.5 shrink-0" />{session.facultyName}</p>}
            {isCurrent && !isCompactHour && <span className="mt-2 inline-flex rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-extrabold text-emerald-700">Currently in progress</span>}
        </button>
    );
};