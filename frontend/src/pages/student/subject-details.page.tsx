import { ArrowLeft, BookOpen, CalendarDays, CheckCircle2, GraduationCap, MapPin, UserX } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { getAttendancePercentage, getAttendanceStatus, subjectsBySemester } from '../../data/student-subjects';

const recentClasses = [
    { date: 'Sep 10, 2026', time: '10:00 AM', topic: 'Indexing and query optimization', status: 'Present' },
    { date: 'Sep 08, 2026', time: '11:00 AM', topic: 'Normalization and functional dependencies', status: 'Present' },
    { date: 'Sep 07, 2026', time: '02:00 PM', topic: 'Relational algebra', status: 'Absent' },
];

const allSubjects = Object.values(subjectsBySemester).flat();

export const SubjectDetails = () => {
    const { subjectCode } = useParams();
    const subject = allSubjects.find((item) => item.code === subjectCode);

    if (!subject) {
        return <main className="mx-auto max-w-[1500px] p-4 sm:p-6 lg:p-8"><section className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm"><h1 className="text-xl font-extrabold text-slate-900">Subject not found</h1><Link className="mt-4 inline-flex text-sm font-bold text-indigo-600" to="/subjects">Back to subjects</Link></section></main>;
    }

    const percentage = getAttendancePercentage(subject);
    const status = getAttendanceStatus(subject);
    const statusStyles = { Good: 'bg-emerald-50 text-emerald-700', Warning: 'bg-amber-50 text-amber-700', Low: 'bg-rose-50 text-rose-700' };

    return (
        <main className="mx-auto max-w-[1500px] p-4 sm:p-6 lg:p-8">
            <Link className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-indigo-600" to="/subjects"><ArrowLeft className="h-4 w-4" />Back to subjects</Link>
            <section className="mt-5 rounded-2xl border border-indigo-100 bg-white p-5 shadow-sm sm:p-7">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4"><div className="rounded-2xl bg-indigo-50 p-3 text-indigo-600"><BookOpen className="h-6 w-6" /></div><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-600">{subject.code}</p><h1 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-950">{subject.name}</h1><p className="mt-2 text-sm text-slate-500">{subject.type} <span className="px-1 text-slate-300">•</span> {subject.credits} credits</p></div></div>
                    <span className={`w-fit rounded-full px-3 py-1.5 text-xs font-bold ${statusStyles[status]}`}>{status} attendance</span>
                </div>
                <div className="mt-6 grid gap-4 border-t border-slate-100 pt-5 sm:grid-cols-3"><div className="flex items-center gap-3"><GraduationCap className="h-5 w-5 text-slate-400" /><div><p className="text-xs font-semibold text-slate-400">Faculty</p><p className="mt-0.5 text-sm font-bold text-slate-800">{subject.faculty}</p></div></div><div className="flex items-center gap-3"><BookOpen className="h-5 w-5 text-slate-400" /><div><p className="text-xs font-semibold text-slate-400">Subject type</p><p className="mt-0.5 text-sm font-bold text-slate-800">{subject.type}</p></div></div><div className="flex items-center gap-3"><CalendarDays className="h-5 w-5 text-slate-400" /><div><p className="text-xs font-semibold text-slate-400">Credits</p><p className="mt-0.5 text-sm font-bold text-slate-800">{subject.credits}</p></div></div></div>
            </section>

            <div className="mt-6 grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
                <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6"><h2 className="text-lg font-bold text-slate-900">Attendance summary</h2><div className="mt-5 flex items-end justify-between"><div><p className="text-4xl font-extrabold tracking-tight text-slate-900">{percentage}%</p><p className="mt-1 text-sm text-slate-500">{subject.presentClasses} of {subject.totalClasses} classes attended</p></div><p className="text-sm font-bold text-slate-500">{subject.totalClasses - subject.presentClasses} absent</p></div><div className="mt-5 h-2.5 overflow-hidden rounded-full bg-slate-100"><div className={`h-full rounded-full ${status === 'Good' ? 'bg-emerald-500' : status === 'Warning' ? 'bg-amber-500' : 'bg-rose-500'}`} style={{ width: `${percentage}%` }} /></div></section>
                <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6"><div className="flex items-center gap-3"><div className="rounded-xl bg-indigo-50 p-2 text-indigo-600"><CalendarDays className="h-5 w-5" /></div><div><h2 className="font-bold text-slate-900">Upcoming classes</h2><p className="text-xs text-slate-500">Next sessions for this subject</p></div></div><div className="mt-4 rounded-xl bg-slate-50 p-4"><p className="text-sm font-bold text-slate-800">Next class: Sep 15, 2026 at 10:00 AM</p><p className="mt-1 flex items-center gap-1 text-xs text-slate-500"><MapPin className="h-3.5 w-3.5" /> Room 301</p></div></section>
            </div>

            <section className="mt-6 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6"><h2 className="text-lg font-bold text-slate-900">Recent class attendance</h2><div className="mt-4 divide-y divide-slate-100">{recentClasses.map((classItem) => { const isPresent = classItem.status === 'Present'; const Icon = isPresent ? CheckCircle2 : UserX; return <div key={`${classItem.date}-${classItem.topic}`} className="flex items-center gap-3 py-3"><div className={`rounded-lg p-2 ${isPresent ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-500'}`}><Icon className="h-4 w-4" /></div><div className="min-w-0 flex-1"><p className="text-sm font-semibold text-slate-800">{classItem.topic}</p><p className="mt-0.5 text-xs text-slate-500">{classItem.date} <span className="px-1 text-slate-300">•</span> {classItem.time}</p></div><span className={`rounded-full px-2.5 py-1 text-xs font-bold ${isPresent ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-600'}`}>{classItem.status}</span></div>; })}</div></section>
        </main>
    );
};