import { ArrowUpRight, BookOpen, FlaskConical, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAttendancePercentage, getAttendanceStatus, type Subject } from '../../data/student-subjects';

interface SubjectCardProps {
    subject: Subject;
}

export const SubjectCard = ({ subject }: SubjectCardProps) => {
    const percentage = getAttendancePercentage(subject);
    const status = getAttendanceStatus(subject);
    const isLab = subject.type === 'Lab';
    const statusStyles = {
        Good: 'bg-emerald-50 text-emerald-700',
        Warning: 'bg-amber-50 text-amber-700',
        Low: 'bg-rose-50 text-rose-700',
    };
    const progressStyles = {
        Good: 'bg-emerald-500',
        Warning: 'bg-amber-500',
        Low: 'bg-rose-500',
    };
    const Icon = isLab ? FlaskConical : BookOpen;

    return (
        <article className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-200/60 transition-shadow hover:shadow-md sm:p-6">
            <div className="flex items-start justify-between gap-4">
                <div className="flex min-w-0 items-start gap-3">
                    <div className={`shrink-0 rounded-xl p-2.5 ${isLab ? 'bg-amber-50 text-amber-600' : 'bg-indigo-50 text-indigo-600'}`}>
                        <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-indigo-600">{subject.code}</p>
                        <h3 className="mt-1 text-base font-extrabold leading-5 text-slate-900">{subject.name}</h3>
                        <p className="mt-1 text-xs font-medium text-slate-500">{subject.type}</p>
                    </div>
                </div>
                <span className="shrink-0 rounded-lg bg-slate-50 px-2.5 py-1.5 text-xs font-bold text-slate-600">{subject.credits} Credits</span>
            </div>

            <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4 text-sm text-slate-600">
                <GraduationCap className="h-4 w-4 text-slate-400" />
                <span className="truncate">{subject.faculty}</span>
            </div>

            <div className="mt-5">
                <div className="flex items-end justify-between gap-3">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Attendance</p>
                        <p className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900">{percentage}%</p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs font-semibold text-slate-500">{subject.presentClasses} / {subject.totalClasses} classes</p>
                        <span className={`mt-1 inline-flex rounded-full px-2.5 py-1 text-xs font-bold ${statusStyles[status]}`}>{status}</span>
                    </div>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100" aria-label={`${percentage}% attendance`} role="progressbar" aria-valuemax={100} aria-valuemin={0} aria-valuenow={percentage}>
                    <div className={`h-full rounded-full ${progressStyles[status]}`} style={{ width: `${percentage}%` }} />
                </div>
            </div>

            <Link className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 transition-colors hover:text-indigo-700" to={`/subjects/${subject.code}`}>
                View Details
                <ArrowUpRight className="h-4 w-4" />
            </Link>
        </article>
    );
};