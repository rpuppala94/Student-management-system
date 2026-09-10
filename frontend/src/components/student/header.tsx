import { Bell, Menu } from 'lucide-react';

interface HeaderProps {
    onMenuClick: () => void;
}

export const Header = ({ onMenuClick }: HeaderProps) => {
    return (
        <header className="sticky top-0 z-20 flex h-[72px] items-center justify-between border-b border-indigo-100/70 bg-white/85 px-4 backdrop-blur-xl sm:px-7 lg:px-8">
            <div className="flex items-center gap-3">
                <button aria-label="Open navigation" className="rounded-xl p-2 text-slate-500 hover:bg-indigo-50 hover:text-indigo-700 md:hidden" onClick={onMenuClick}>
                    <Menu className="h-5 w-5" />
                </button>
                <div>
                    <p className="hidden text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-500 sm:block">ABC College portal</p>
                    <h2 className="text-base font-bold text-slate-900 sm:text-lg">
                    Student Dashboard
                    </h2>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button aria-label="Notifications" className="relative rounded-xl p-2 text-slate-500 hover:bg-indigo-50 hover:text-indigo-700">
                    <Bell className="h-5 w-5" />
                    <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
                </button>

                <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 text-sm font-bold text-white shadow-md shadow-indigo-200">
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
