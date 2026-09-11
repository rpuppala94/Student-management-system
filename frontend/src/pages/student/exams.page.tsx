import { useState } from 'react';
import { CalendarDays, ClipboardList, GraduationCap, Search, Timer } from 'lucide-react';
import { ExamCard } from '../../components/student/exam-card';
import { StatCard } from '../../components/student';
import { examSemesterOptions, examsBySemester, getExamStatus, getNextUpcomingExam, type ExamSemester, type ExamStatus } from '../../data/student-exams';

const filterOptions: Array<'All' | 'Upcoming' | 'Completed'> = ['All', 'Upcoming', 'Completed'];

export const Exams = () => {
    const [semester, setSemester] = useState<ExamSemester>('5th Semester');
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState<'All' | ExamStatus>('All');
    const [typeFilter, setTypeFilter] = useState('All');
    const exams = examsBySemester[semester];
    const normalizedSearch = searchTerm.trim().toLowerCase();
    const examTypes = ['All', ...Array.from(new Set(exams.map((exam) => exam.examType)))];
    const filteredExams = exams.filter((exam) => {
        const matchesSearch = [exam.name, exam.examType, exam.subjectCode, exam.subjectName].some((value) => value.toLowerCase().includes(normalizedSearch));
        const matchesStatus = statusFilter === 'All' || getExamStatus(exam) === statusFilter;
        const matchesType = typeFilter === 'All' || exam.examType === typeFilter;

        return matchesSearch && matchesStatus && matchesType;
    }).sort((first, second) => `${first.date}${first.startTime}`.localeCompare(`${second.date}${second.startTime}`));
    const upcomingCount = exams.filter((exam) => getExamStatus(exam) === 'Upcoming').length;
    const completedCount = exams.filter((exam) => getExamStatus(exam) === 'Completed').length;
    const nextExam = getNextUpcomingExam(exams);
    const summaryCards = [
        { title: 'Upcoming Exams', value: String(upcomingCount), description: 'Scheduled ahead', icon: CalendarDays, accent: 'blue' as const },
        { title: 'Completed Exams', value: String(completedCount), description: 'Past assessments', icon: ClipboardList, accent: 'emerald' as const },
        { title: 'Subjects', value: String(new Set(exams.map((exam) => exam.subjectCode)).size), description: 'Exam subjects', icon: GraduationCap, accent: 'amber' as const },
        { title: 'Next Exam', value: nextExam ? formatShortDate(nextExam.date) : 'None', description: nextExam?.subjectName ?? 'No upcoming exams', icon: Timer, accent: 'rose' as const },
    ];

    return (
        <main className="mx-auto max-w-[1500px] p-4 sm:p-6 lg:p-8">
            <section className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">Assessment schedule</p>
                    <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">Exams</h1>
                    <p className="mt-1.5 text-sm text-slate-500">B.Tech CSE <span className="px-1 text-slate-300">•</span> 3rd Year <span className="px-1 text-slate-300">•</span> {semester} <span className="px-1 text-slate-300">•</span> Section A</p>
                </div>
                <label className="relative block w-full sm:w-48">
                    <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-400">Semester</span>
                    <select aria-label="Select semester" value={semester} onChange={(event) => { setSemester(event.target.value as ExamSemester); setTypeFilter('All'); }} className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100">
                        {examSemesterOptions.map((option) => <option key={option}>{option}</option>)}
                    </select>
                </label>
            </section>

            <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {summaryCards.map((card) => <StatCard key={card.title} {...card} />)}
            </section>

            <section className="mt-6">
                <div className="mb-4 flex items-end justify-between">
                    <div><h2 className="text-lg font-bold text-slate-900">Exam Schedule</h2><p className="mt-1 text-sm text-slate-500">All assessments for {semester}</p></div>
                </div>
                <div className="w-full min-w-0 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm sm:p-5">
                    <div className="w-full min-w-0">
                        <label className="relative block w-full min-w-0">
                            <span className="sr-only">Search exams</span>
                            <Search className="pointer-events-none absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                            <input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search exams..." className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100" />
                        </label>
                        <div className="mt-3 flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex min-w-0 flex-nowrap gap-2 ml-1" aria-label="Exam status filter">
                                {filterOptions.map((filter) => <button key={filter} type="button" aria-pressed={statusFilter === filter} onClick={() => setStatusFilter(filter)} className={`whitespace-nowrap rounded-lg px-3.5 py-2 text-sm font-bold outline-none transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 ${statusFilter === filter ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/20' : 'bg-slate-50 text-slate-500 hover:bg-indigo-50 hover:text-indigo-700'}`}>{filter}</button>)}
                            </div>
                            <label className="block w-full min-w-0 sm:w-[16rem] sm:max-w-[16rem] sm:basis-[16rem] sm:shrink-0">
                                <span className="sr-only">Filter by exam type</span>
                                <select aria-label="Filter by exam type" value={typeFilter} onChange={(event) => setTypeFilter(event.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm font-semibold text-slate-600 outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100">
                                    {examTypes.map((type) => <option key={type} value={type}>{type === 'All' ? 'All exam types' : type}</option>)}
                                </select>
                            </label>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-4">
                {filteredExams.length > 0 ? <div className="grid gap-4 lg:grid-cols-2">{filteredExams.map((exam) => <ExamCard key={exam.id} exam={exam} />)}</div> : <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center"><ClipboardList className="mx-auto h-7 w-7 text-slate-300" /><h2 className="mt-3 text-base font-bold text-slate-800">No exams found</h2><p className="mt-1 text-sm text-slate-500">Try changing your search or filters.</p></div>}
            </section>
        </main>
    );
};

const formatShortDate = (date: string) => new Date(`${date}T12:00:00`).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
