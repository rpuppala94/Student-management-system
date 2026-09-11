import {
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock3,
  GraduationCap,
  ShieldCheck,
  UserCheck,
  UserX,
} from 'lucide-react';
import { AttendanceCalendar, type AttendanceDay } from '../../components/student';

const subjects = [
  { name: 'Data Structures', total: 30, present: 27, absent: 3, percentage: 90 },
  { name: 'DBMS', total: 28, present: 25, absent: 3, percentage: 89.3 },
  { name: 'Operating Systems', total: 32, present: 27, absent: 5, percentage: 84.4 },
  { name: 'Computer Networks', total: 30, present: 25, absent: 5, percentage: 83.3 },
  { name: 'Software Engineering', total: 26, present: 22, absent: 4, percentage: 84.6 },
];

const monthlyAttendanceRecords: AttendanceDay[] = [
  { date: '2026-07-02', sessions: [{ time: '09:00 AM', subject: 'Data Structures', room: 'Room 301', status: 'present' }, { time: '11:00 AM', subject: 'DBMS', room: 'Lab 2', status: 'present' }, { time: '02:00 PM', subject: 'Operating Systems', room: 'Room 204', status: 'present' }] },
  { date: '2026-07-03', sessions: [{ time: '10:00 AM', subject: 'Computer Networks', room: 'Room 305', status: 'present' }, { time: '02:00 PM', subject: 'Software Engineering', room: 'Room 201', status: 'absent' }, { time: '03:00 PM', subject: 'Data Structures', room: 'Room 301', status: 'present' }] },
  { date: '2026-07-06', sessions: [{ time: '09:00 AM', subject: 'DBMS', room: 'Lab 2', status: 'absent' }, { time: '11:00 AM', subject: 'Operating Systems', room: 'Room 204', status: 'absent' }] },
  { date: '2026-08-04', sessions: [{ time: '09:00 AM', subject: 'Data Structures', room: 'Room 301', status: 'present' }, { time: '10:00 AM', subject: 'DBMS', room: 'Lab 2', status: 'present' }, { time: '02:00 PM', subject: 'Computer Networks', room: 'Room 305', status: 'present' }] },
  { date: '2026-08-05', sessions: [{ time: '09:00 AM', subject: 'Operating Systems', room: 'Room 204', status: 'present' }, { time: '11:00 AM', subject: 'Software Engineering', room: 'Room 201', status: 'absent' }, { time: '03:00 PM', subject: 'DBMS', room: 'Lab 2', status: 'present' }] },
  { date: '2026-08-06', sessions: [{ time: '10:00 AM', subject: 'Computer Networks', room: 'Room 305', status: 'absent' }, { time: '02:00 PM', subject: 'Data Structures', room: 'Room 301', status: 'absent' }] },
  { date: '2026-09-01', sessions: [{ time: '09:00 AM', subject: 'Data Structures', room: 'Room 301', status: 'present' }, { time: '10:00 AM', subject: 'DBMS', room: 'Lab 2', status: 'present' }, { time: '02:00 PM', subject: 'Software Engineering', room: 'Room 201', status: 'present' }] },
  { date: '2026-09-02', sessions: [{ time: '09:00 AM', subject: 'Operating Systems', room: 'Room 204', status: 'present' }, { time: '11:00 AM', subject: 'Computer Networks', room: 'Room 305', status: 'present' }, { time: '02:00 PM', subject: 'Data Structures', room: 'Room 301', status: 'absent' }] },
  { date: '2026-09-03', sessions: [{ time: '10:00 AM', subject: 'DBMS', room: 'Lab 2', status: 'present' }, { time: '11:00 AM', subject: 'Operating Systems', room: 'Room 204', status: 'present' }, { time: '03:00 PM', subject: 'Computer Networks', room: 'Room 305', status: 'present' }] },
  { date: '2026-09-04', sessions: [{ time: '09:00 AM', subject: 'Software Engineering', room: 'Room 201', status: 'present' }, { time: '10:00 AM', subject: 'Data Structures', room: 'Room 301', status: 'absent' }, { time: '02:00 PM', subject: 'DBMS', room: 'Lab 2', status: 'present' }] },
  { date: '2026-09-07', sessions: [{ time: '09:00 AM', subject: 'Operating Systems', room: 'Room 204', status: 'present' }, { time: '11:00 AM', subject: 'Computer Networks', room: 'Room 305', status: 'present' }, { time: '03:00 PM', subject: 'Software Engineering', room: 'Room 201', status: 'present' }] },
  { date: '2026-09-08', sessions: [{ time: '10:00 AM', subject: 'Data Structures', room: 'Room 301', status: 'present' }, { time: '11:00 AM', subject: 'DBMS', room: 'Lab 2', status: 'absent' }, { time: '02:00 PM', subject: 'Operating Systems', room: 'Room 204', status: 'absent' }] },
  { date: '2026-09-09', sessions: [{ time: '10:00 AM', subject: 'Computer Networks', room: 'Room 305', status: 'absent' }, { time: '11:00 AM', subject: 'Software Engineering', room: 'Room 201', status: 'present' }, { time: '02:00 PM', subject: 'DBMS', room: 'Lab 2', status: 'present' }] },
  { date: '2026-09-10', sessions: [{ time: '09:00 AM', subject: 'Data Structures', room: 'Room 301', status: 'present' }, { time: '10:00 AM', subject: 'Database Management Systems', room: 'Lab 2', status: 'present' }, { time: '11:00 AM', subject: 'Operating Systems', room: 'Room 204', status: 'absent' }, { time: '02:00 PM', subject: 'Computer Networks', room: 'Room 305', status: 'present' }, { time: '03:00 PM', subject: 'Software Engineering', room: 'Room 201', status: 'present' }] },
  { date: '2026-09-11', sessions: [{ time: '09:00 AM', subject: 'DBMS', room: 'Lab 2', status: 'present' }, { time: '11:00 AM', subject: 'Operating Systems', room: 'Room 204', status: 'present' }, { time: '02:00 PM', subject: 'Computer Networks', room: 'Room 305', status: 'present' }] },
  { date: '2026-09-14', sessions: [{ time: '09:00 AM', subject: 'Data Structures', room: 'Room 301', status: 'present' }, { time: '10:00 AM', subject: 'Software Engineering', room: 'Room 201', status: 'present' }, { time: '02:00 PM', subject: 'DBMS', room: 'Lab 2', status: 'present' }] },
  { date: '2026-09-15', sessions: [{ time: '10:00 AM', subject: 'Operating Systems', room: 'Room 204', status: 'present' }, { time: '11:00 AM', subject: 'Computer Networks', room: 'Room 305', status: 'present' }, { time: '03:00 PM', subject: 'Data Structures', room: 'Room 301', status: 'present' }] },
  { date: '2026-09-16', sessions: [{ time: '09:00 AM', subject: 'DBMS', room: 'Lab 2', status: 'present' }, { time: '11:00 AM', subject: 'Software Engineering', room: 'Room 201', status: 'present' }, { time: '02:00 PM', subject: 'Operating Systems', room: 'Room 204', status: 'present' }] },
  { date: '2026-10-01', sessions: [{ time: '09:00 AM', subject: 'Data Structures', room: 'Room 301', status: 'present' }, { time: '11:00 AM', subject: 'DBMS', room: 'Lab 2', status: 'present' }] },
  { date: '2026-10-02', sessions: [{ time: '10:00 AM', subject: 'Operating Systems', room: 'Room 204', status: 'present' }, { time: '02:00 PM', subject: 'Computer Networks', room: 'Room 305', status: 'absent' }] },
];

const recentAttendance = [
  { date: 'September 10', subject: 'Database Management Systems', time: '10:00 AM', status: 'Present' },
  { date: 'September 10', subject: 'Operating Systems', time: '11:00 AM', status: 'Present' },
  { date: 'September 9', subject: 'Computer Networks', time: '2:00 PM', status: 'Absent' },
  { date: 'September 9', subject: 'Software Engineering', time: '3:00 PM', status: 'Present' },
];

export const StudentAttendance = () => {
  return (
    <main className="mx-auto max-w-[1500px] p-4 sm:p-6 lg:p-8">
      <section className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">Academic progress</p>
          <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">Attendance</h1>
          <p className="mt-1.5 max-w-2xl text-sm text-slate-500">Track your attendance across subjects and stay on top of your academic requirements.</p>
        </div>
        <label className="relative block w-full sm:w-44">
          <span className="sr-only">Select semester</span>
          <select defaultValue="5th Semester" className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm outline-none transition-colors focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-indigo-100">
            <option>5th Semester</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-3.5 top-3.5 h-4 w-4 text-slate-400" />
        </label>
      </section>

      <section className="overflow-hidden rounded-2xl border border-indigo-100 bg-white shadow-sm shadow-slate-200/60">
        <div className="grid lg:grid-cols-[1.05fr_1.95fr]">
          <div className="flex items-center gap-5 bg-indigo-50/70 p-5 sm:p-7">
            <div className="relative grid h-28 w-28 shrink-0 place-items-center rounded-full" style={{ background: 'conic-gradient(#4f46e5 0deg 315deg, #dbeafe 315deg 360deg)' }}>
              <div className="grid h-[88px] w-[88px] place-items-center rounded-full bg-white"><div className="text-center"><p className="text-2xl font-extrabold tracking-tight text-slate-900">87.5%</p><p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Overall</p></div></div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-600">Overall attendance</p>
              <h2 className="mt-1 text-xl font-extrabold text-slate-900">On track this semester</h2>
              <p className="mt-1 text-sm leading-5 text-slate-500">You are above the college attendance requirement.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 border-t border-slate-100 sm:grid-cols-4 lg:border-l lg:border-t-0">
            <div className="border-b border-r border-slate-100 p-4 sm:p-5 lg:border-b-0"><UserCheck className="h-5 w-5 text-indigo-600" /><p className="mt-3 text-2xl font-extrabold text-slate-900">140</p><p className="mt-1 text-xs font-medium text-slate-500">Present</p></div>
            <div className="border-b border-slate-100 p-4 sm:border-b-0 sm:border-r sm:p-5"><UserX className="h-5 w-5 text-rose-500" /><p className="mt-3 text-2xl font-extrabold text-slate-900">20</p><p className="mt-1 text-xs font-medium text-slate-500">Absent</p></div>
            <div className="border-r border-slate-100 p-4 sm:p-5"><CalendarDays className="h-5 w-5 text-sky-600" /><p className="mt-3 text-2xl font-extrabold text-slate-900">160</p><p className="mt-1 text-xs font-medium text-slate-500">Total classes</p></div>
            <div className="p-4 sm:p-5"><ShieldCheck className="h-5 w-5 text-emerald-600" /><p className="mt-3 text-lg font-extrabold text-emerald-700">Eligible</p><p className="mt-1 text-xs font-medium text-slate-500">75% required</p></div>
          </div>
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-slate-200/80 bg-white shadow-sm">
        <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-4 sm:px-6"><div className="rounded-xl bg-indigo-50 p-2 text-indigo-600"><GraduationCap className="h-5 w-5" /></div><div><h2 className="font-bold text-slate-900">Subject-wise Attendance</h2><p className="text-xs text-slate-500">Attendance percentage for the current semester</p></div></div>
        <div className="hidden grid-cols-[minmax(190px,1.7fr)_0.7fr_0.65fr_0.65fr_minmax(130px,1fr)_0.7fr] gap-4 border-b border-slate-100 px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-slate-400 md:grid"><span>Subject</span><span>Total</span><span>Present</span><span>Absent</span><span>Attendance</span><span>Status</span></div>
        <div className="divide-y divide-slate-100">
          {subjects.map((subject) => (
            <div key={subject.name} className="grid gap-3 px-5 py-4 md:grid-cols-[minmax(190px,1.7fr)_0.7fr_0.65fr_0.65fr_minmax(130px,1fr)_0.7fr] md:items-center md:gap-4 md:px-6">
              <p className="text-sm font-bold text-slate-800">{subject.name}</p>
              <p className="text-sm text-slate-500"><span className="mr-1 text-xs font-semibold text-slate-400 md:hidden">Total:</span>{subject.total} classes</p>
              <p className="text-sm text-slate-500"><span className="mr-1 text-xs font-semibold text-slate-400 md:hidden">Present:</span>{subject.present}</p>
              <p className="text-sm text-slate-500"><span className="mr-1 text-xs font-semibold text-slate-400 md:hidden">Absent:</span>{subject.absent}</p>
              <div><div className="flex items-center justify-between text-xs font-bold text-slate-600"><span>{subject.percentage}%</span><span className="text-slate-400 md:hidden">Attendance</span></div><div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-indigo-500" style={{ width: `${subject.percentage}%` }} /></div></div>
              <span className="inline-flex w-fit rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">Good</span>
            </div>
          ))}
        </div>
      </section>

      <AttendanceCalendar attendanceRecords={monthlyAttendanceRecords} />

      <section className="mt-6 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex items-center gap-3"><div className="rounded-xl bg-indigo-50 p-2 text-indigo-600"><Clock3 className="h-5 w-5" /></div><div><h2 className="font-bold text-slate-900">Recent Attendance</h2><p className="text-xs text-slate-500">Your latest class records</p></div></div>
        <div className="mt-4 divide-y divide-slate-100">
          {recentAttendance.map((record) => {
            const isPresent = record.status === 'Present';
            const Icon = isPresent ? CheckCircle2 : UserX;

            return <div key={`${record.date}-${record.subject}`} className="flex items-center gap-3 py-3"><div className={`rounded-lg p-2 ${isPresent ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-500'}`}><Icon className="h-4 w-4" /></div><div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold text-slate-800">{record.subject}</p><p className="mt-0.5 text-xs text-slate-500">{record.date} <span className="px-1 text-slate-300">•</span> {record.time}</p></div><span className={`rounded-full px-2.5 py-1 text-xs font-bold ${isPresent ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-600'}`}>{record.status}</span></div>;
          })}
        </div>
      </section>
    </main>
  );
};
