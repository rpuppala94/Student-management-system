import {
  ArrowUpRight,
  Award,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  CreditCard,
  FileText,
  MapPin,
  Megaphone,
  TrendingUp,
} from 'lucide-react';
import { StatCard } from '../../components/student';

const upcomingExams = [
  { subject: 'Data Structures', date: 'Sep 15', type: 'Internal Assessment' },
  { subject: 'Operating Systems', date: 'Sep 18', type: 'Mid Semester' },
  { subject: 'Database Management Systems', date: 'Sep 21', type: 'Internal Assessment' },
  { subject: 'Computer Networks', date: 'Sep 24', type: 'Mid Semester' },
];

const todaysClasses = [
  { time: '10:00 AM', subject: 'Database Management Systems', room: 'C-204' },
  { time: '11:00 AM', subject: 'Operating Systems', room: 'C-311' },
  { time: '2:00 PM', subject: 'Database Management Systems Lab', room: 'Lab-3' },
  { time: '3:00 PM', subject: 'Computer Networks', room: 'C-204' },
];

const recentResults = [
  { subject: 'DBMS', grade: 'A', score: '86 / 100' },
  { subject: 'Operating Systems', grade: 'B+', score: '78 / 100' },
  { subject: 'Computer Networks', grade: 'A', score: '88 / 100' },
  { subject: 'Software Engineering', grade: 'A-', score: '82 / 100' },
];

const notices = [
  { title: 'Internal exam timetable published', date: 'Sep 08, 2026' },
  { title: 'Fee payment deadline announced', date: 'Sep 06, 2026' },
  { title: 'Semester registration is now open', date: 'Sep 03, 2026' },
  { title: 'College holiday notice', date: 'Aug 29, 2026' },
];

const quickActions = [
  { label: 'Attendance', icon: CheckCircle2 },
  { label: 'Results', icon: Award },
  { label: 'Timetable', icon: CalendarDays },
  { label: 'Documents', icon: FileText },
];

export const StudentDashboard = () => {
  return (
    <main className="mx-auto max-w-[1500px] p-4 sm:p-6 lg:p-8">
      <section className="mb-6 flex flex-col gap-4 rounded-2xl border border-indigo-100/80 bg-white p-5 shadow-sm shadow-slate-200/60 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">Academic overview</p>
          <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">Good morning, Rahul</h1>
          <p className="mt-1.5 text-sm text-slate-500">Here is a focused view of your fifth-semester progress.</p>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-3.5 py-3 sm:text-right">
          <div className="rounded-lg bg-indigo-100 p-2 text-indigo-600"><BookOpen className="h-4 w-4" /></div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Current term</p>
            <p className="text-sm font-bold text-slate-800">5th Semester <span className="font-medium text-slate-400">·</span> Section A</p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Attendance" value="87.5%" description="Above the 75% requirement" icon={CheckCircle2} accent="blue" progress={87.5} progressLabel="Overall attendance" />
        <StatCard title="Current CGPA" value="8.42" description="Strong academic standing" icon={TrendingUp} accent="emerald" progress={84.2} progressLabel="Out of 10.00" />
        <StatCard title="Pending Fees" value="₹5,000" description="Due by Sep 30, 2026" icon={CircleDollarSign} accent="rose" />
        <StatCard title="Credits" value="24 / 28" description="Registered this semester" icon={CreditCard} accent="amber" progress={86} progressLabel="Semester credits" />
      </section>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <section className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-indigo-50 p-2 text-indigo-600"><CalendarDays className="h-5 w-5" /></div>
                <div><h2 className="font-bold text-slate-900">Upcoming Exams</h2><p className="text-xs text-slate-500">Plan ahead for your assessments</p></div>
              </div>
              <button className="hidden items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-700 sm:flex">View calendar <ArrowUpRight className="h-3.5 w-3.5" /></button>
            </div>
            <div className="divide-y divide-slate-100">
              {upcomingExams.map((exam) => (
                <div key={exam.subject} className="flex items-center gap-3 px-5 py-3.5 sm:px-6">
                  <div className="flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-lg bg-indigo-50 text-indigo-700"><span className="text-[10px] font-bold">SEP</span><span className="text-sm font-extrabold leading-none">{exam.date.split(' ')[1]}</span></div>
                  <div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold text-slate-800">{exam.subject}</p><p className="mt-0.5 text-xs text-slate-500">{exam.type}</p></div>
                  <span className="hidden rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-500 sm:inline-flex">Scheduled</span>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-center gap-3"><div className="rounded-xl bg-sky-50 p-2 text-sky-600"><Clock3 className="h-5 w-5" /></div><div><h2 className="font-bold text-slate-900">Today's Classes</h2><p className="text-xs text-slate-500">Wednesday, September 10</p></div></div>
            <div className="mt-5 space-y-1">
              {todaysClasses.map((classItem, index) => (
                <div key={`${classItem.time}-${classItem.subject}`} className="relative flex gap-4 py-3 pl-1">
                  {index < todaysClasses.length - 1 && <div className="absolute bottom-0 left-[73px] top-9 w-px bg-slate-100" />}
                  <p className="w-14 pt-1 text-xs font-bold text-slate-500">{classItem.time}</p>
                  <span className="relative mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-indigo-500 ring-4 ring-indigo-50" />
                  <div className="min-w-0"><p className="text-sm font-semibold text-slate-800">{classItem.subject}</p><p className="mt-0.5 flex items-center gap-1 text-xs text-slate-500"><MapPin className="h-3.5 w-3.5" /> Room {classItem.room}</p></div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3"><div className="rounded-xl bg-emerald-50 p-2 text-emerald-600"><Award className="h-5 w-5" /></div><div><h2 className="font-bold text-slate-900">Recent Results</h2><p className="text-xs text-slate-500">Latest subject performance</p></div></div>
            <div className="mt-4 divide-y divide-slate-100">
              {recentResults.map((result) => (
                <div key={result.subject} className="flex items-center justify-between py-3"><div><p className="text-sm font-semibold text-slate-800">{result.subject}</p><p className="mt-0.5 text-xs text-slate-500">{result.score}</p></div><span className="rounded-lg bg-emerald-50 px-2.5 py-1 text-sm font-extrabold text-emerald-700">{result.grade}</span></div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3"><div className="rounded-xl bg-amber-50 p-2 text-amber-600"><Megaphone className="h-5 w-5" /></div><div><h2 className="font-bold text-slate-900">Recent Notices</h2><p className="text-xs text-slate-500">Updates from your college</p></div></div>
            <div className="mt-4 divide-y divide-slate-100">
              {notices.map((notice) => (
                <div key={notice.title} className="py-3"><p className="text-sm font-semibold leading-5 text-slate-800">{notice.title}</p><p className="mt-1 text-xs text-slate-500">{notice.date}</p></div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-5">
            <h2 className="text-sm font-bold text-slate-900">Quick Actions</h2>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {quickActions.map((action) => {
                const Icon = action.icon;

                return <button key={action.label} className="flex items-center gap-2 rounded-xl border border-white bg-white px-3 py-2.5 text-left text-xs font-bold text-slate-600 shadow-sm transition-colors hover:border-indigo-200 hover:text-indigo-700"><Icon className="h-4 w-4 text-indigo-600" />{action.label}</button>;
              })}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};
