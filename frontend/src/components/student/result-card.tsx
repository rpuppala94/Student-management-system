import { Award, BookOpen, CheckCircle2, XCircle } from 'lucide-react';
import { getGradeFromMarks, getResultGradePoint, getResultPercentage, getResultStatus, type SubjectResult } from '../../data/student-results';

interface ResultCardProps {
    result: SubjectResult;
}

export const ResultCard = ({ result }: ResultCardProps) => {
    const grade = getGradeFromMarks(result.marks, result.maxMarks);
    const status = getResultStatus(grade);
    const StatusIcon = status === 'PASS' ? CheckCircle2 : XCircle;

    return (
        <article className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-200/60">
            <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-start gap-3"><div className="rounded-xl bg-indigo-50 p-2.5 text-indigo-600"><BookOpen className="h-5 w-5" /></div><div className="min-w-0"><p className="text-xs font-bold uppercase tracking-[0.14em] text-indigo-600">{result.subjectCode}</p><h3 className="mt-1 text-base font-extrabold leading-5 text-slate-900">{result.subjectName}</h3></div></div>
                <span className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold ${status === 'PASS' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}><StatusIcon className="h-3.5 w-3.5" />{status}</span>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-4 border-t border-slate-100 pt-4"><div><p className="text-xs font-semibold text-slate-400">Marks</p><p className="mt-1 text-sm font-bold text-slate-800">{result.marks} / {result.maxMarks} <span className="font-medium text-slate-400">({getResultPercentage(result)}%)</span></p></div><div><p className="text-xs font-semibold text-slate-400">Grade</p><p className="mt-1 flex items-center gap-1.5 text-sm font-extrabold text-slate-800"><Award className="h-4 w-4 text-amber-500" />{grade}</p></div><div><p className="text-xs font-semibold text-slate-400">Grade Point</p><p className="mt-1 text-sm font-bold text-slate-800">{getResultGradePoint(result).toFixed(1)}</p></div><div><p className="text-xs font-semibold text-slate-400">Credits</p><p className="mt-1 text-sm font-bold text-slate-800">{result.credits}</p></div></div>
        </article>
    );
};