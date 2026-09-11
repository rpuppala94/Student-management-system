import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
    return (
        <main className="grid min-h-screen place-items-center bg-slate-50 p-6">
            <section className="max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-600">404</p>
                <h1 className="mt-2 text-2xl font-extrabold text-slate-950">Page not found</h1>
                <p className="mt-2 text-sm text-slate-500">The page you requested does not exist.</p>
                <Link className="mt-6 inline-flex rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-indigo-700" to="/dashboard">
                    Back to dashboard
                </Link>
            </section>
        </main>
    );
};