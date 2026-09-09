import { Bell } from 'lucide-react';

export const Header = () => {
    return (
        <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-8">
            <div>
                <h2 className="text-lg font-semibold text-slate-900">
                    Student Dashboard
                </h2>
            </div>

            <div className="flex items-center gap-4">
                <button className="relative rounded-full p-2 text-slate-500 hover:bg-slate-100">
                    <Bell className="h-5 w-5" />
                    <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
                </button>

                <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-600">
                        RK
                    </div>

                    <div className="hidden sm:block">
                        <p className="text-sm font-medium text-slate-900">Rahul Kumar</p>
                        <p className="text-xs text-slate-500">Student</p>
                    </div>
                </div>
            </div>
        </header>
    );
}