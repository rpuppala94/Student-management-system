import { ArrowRight, Construction } from 'lucide-react';

interface StudentPlaceholderProps {
    title: string;
}

export const StudentPlaceholder = ({ title }: StudentPlaceholderProps) => {
    return (
        <main className="mx-auto max-w-[1500px] p-4 sm:p-6 lg:p-8">
            <section className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-white p-8 text-center shadow-sm">
                <div className="rounded-2xl bg-indigo-50 p-4 text-indigo-600">
                    <Construction className="h-8 w-8" />
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">Student portal</p>
                <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950">{title}</h1>
                <p className="mt-2 max-w-md text-sm text-slate-500">This section is ready for the next feature build.</p>
                <button className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm shadow-indigo-600/20 transition-colors hover:bg-indigo-700">
                    Coming soon
                    <ArrowRight className="h-4 w-4" />
                </button>
            </section>
        </main>
    );
};