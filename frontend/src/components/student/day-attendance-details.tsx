import { CheckCircle2, Clock3, MapPin, UserX } from 'lucide-react';
import { getSessionSummary, type AttendanceDay } from './attendance-utils';

interface DayAttendanceDetailsProps {
    attendanceDay?: AttendanceDay;
    selectedDate: Date;
}

export const DayAttendanceDetails = ({ attendanceDay, selectedDate }: DayAttendanceDetailsProps) => {
    const summary = getSessionSummary(attendanceDay);
    const formattedDate = new Intl.DateTimeFormat('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }).format(selectedDate);

    return (
        <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-600">Day attendance</p>
            <h3 className="mt-2 text-lg font-extrabold text-slate-900">{formattedDate}</h3>

            {attendanceDay ? (
                <>
                    <div className="mt-4 rounded-xl bg-slate-50 p-3.5">
                        <p className="text-sm font-bold text-slate-800">{summary.present} of {summary.total} classes attended</p>
                        <p className="mt-1 text-xs text-slate-500">{summary.absent} absent <span className="px-1 text-slate-300">•</span> Attendance: {summary.percentage}%</p>
                    </div>

                    <div className="mt-4 divide-y divide-slate-100">
                        {attendanceDay.sessions.map((session) => {
                            const isPresent = session.status === 'present';
                            const Icon = isPresent ? CheckCircle2 : UserX;

                            return (
                                <div key={`${session.time}-${session.subject}`} className="flex items-center gap-3 py-3">
                                    <div className={`rounded-lg p-2 ${isPresent ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-500'}`}>
                                        <Icon className="h-4 w-4" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm font-semibold text-slate-800">{session.subject}</p>
                                        <p className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-slate-500"><span className="inline-flex items-center gap-1"><Clock3 className="h-3.5 w-3.5" />{session.time}</span><span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{session.room}</span></p>
                                    </div>
                                    <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${isPresent ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-600'}`}>{isPresent ? 'Present' : 'Absent'}</span>
                                </div>
                            );
                        })}
                    </div>
                </>
            ) : (
                <div className="mt-4 rounded-xl border border-dashed border-slate-200 p-5 text-center">
                    <Clock3 className="mx-auto h-5 w-5 text-slate-300" />
                    <p className="mt-2 text-sm font-semibold text-slate-600">No classes scheduled</p>
                    <p className="mt-1 text-xs text-slate-500">There are no attendance records for this date.</p>
                </div>
            )}
        </section>
    );
};
