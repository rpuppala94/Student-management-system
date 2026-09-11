import { useState } from 'react';
import { BookOpen, FlaskConical, Layers3, Search } from 'lucide-react';
import { StatCard } from '../../components/student';
import { semesterOptions, subjectsBySemester, type Semester, type Subject, type SubjectType } from '../../data/student-subjects';
import { SubjectCard } from '../../components/student/subject-card';

const subjectTypes: Array<'All' | SubjectType> = ['All', 'Theory', 'Lab'];

export const Subjects = () => {
    const [semester, setSemester] = useState<Semester>('5th Semester');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState<'All' | SubjectType>('All');
    const subjects = subjectsBySemester[semester];
    const normalizedSearch = searchTerm.trim().toLowerCase();
    const filteredSubjects = subjects.filter((subject) => {
        const matchesSearch = [subject.code, subject.name, subject.faculty].some((value) => value.toLowerCase().includes(normalizedSearch));
        const matchesType = selectedType === 'All' || subject.type === selectedType;

        return matchesSearch && matchesType;
    });
    const totalCredits = subjects.reduce((sum, subject) => sum + subject.credits, 0);
    const theoryCount = subjects.filter((subject) => subject.type === 'Theory').length;
    const labCount = subjects.filter((subject) => subject.type === 'Lab').length;

    const summaryCards = [
        { title: 'Total Subjects', value: String(subjects.length), description: 'Enrolled this semester', icon: BookOpen, accent: 'blue' as const },
        { title: 'Total Credits', value: String(totalCredits), description: 'Credit load', icon: Layers3, accent: 'emerald' as const },
        { title: 'Theory', value: String(theoryCount), description: 'Theory subjects', icon: BookOpen, accent: 'amber' as const },
        { title: 'Labs', value: String(labCount), description: 'Practical subjects', icon: FlaskConical, accent: 'rose' as const },
    ];

    return (
        <main className="mx-auto max-w-[1500px] p-4 sm:p-6 lg:p-8">
            <section className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">Academic structure</p>
                    <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">Subjects</h1>
                    <p className="mt-1.5 text-sm text-slate-500">B.Tech CSE <span className="px-1 text-slate-300">•</span> 3rd Year <span className="px-1 text-slate-300">•</span> {semester} <span className="px-1 text-slate-300">•</span> Section A</p>
                </div>
                <label className="relative block w-full sm:w-48">
                    <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-400">Semester</span>
                    <select aria-label="Select semester" value={semester} onChange={(event) => setSemester(event.target.value as Semester)} className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100">
                        {semesterOptions.map((option) => <option key={option}>{option}</option>)}
                    </select>
                </label>
            </section>

            <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {summaryCards.map((card) => <StatCard key={card.title} {...card} />)}
            </section>

            <section className="mt-6 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm sm:p-5">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <label className="relative block w-full lg:max-w-md">
                        <span className="sr-only">Search subjects</span>
                        <Search className="pointer-events-none absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                        <input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search subjects..." className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100" />
                    </label>
                    <div className="flex flex-wrap gap-2" aria-label="Subject type filter">
                        {subjectTypes.map((type) => <button key={type} type="button" aria-pressed={selectedType === type} onClick={() => setSelectedType(type)} className={`rounded-lg px-3.5 py-2 text-sm font-bold transition-colors ${selectedType === type ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/20' : 'bg-slate-50 text-slate-500 hover:bg-indigo-50 hover:text-indigo-700'}`}>{type}</button>)}
                    </div>
                </div>
            </section>

            <section className="mt-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                    <div><h2 className="text-lg font-bold text-slate-900">Your subjects</h2><p className="mt-1 text-sm text-slate-500">{filteredSubjects.length} of {subjects.length} subjects shown</p></div>
                </div>
                {filteredSubjects.length > 0 ? <div className="grid gap-4 lg:grid-cols-2">{filteredSubjects.map((subject: Subject) => <SubjectCard key={subject.code} subject={subject} />)}</div> : <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center"><Search className="mx-auto h-7 w-7 text-slate-300" /><h2 className="mt-3 text-base font-bold text-slate-800">No subjects found</h2><p className="mt-1 text-sm text-slate-500">Try changing your search or filter.</p></div>}
            </section>
        </main>
    );
};