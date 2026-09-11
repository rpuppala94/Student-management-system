import { Bell, Menu } from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface HeaderProps {
    onMenuClick: () => void;
}

export const Header = ({ onMenuClick }: HeaderProps) => {
    const { pathname } = useLocation();
    const title = pathname === '/dashboard'
        ? 'Student Dashboard'
        : pathname.startsWith('/subjects/')
            ? 'Subject Details'
            : pathname.split('/')[1]
                ? pathname.split('/')[1].charAt(0).toUpperCase() + pathname.split('/')[1].slice(1)
                : 'Student Dashboard';

    return (
        <header className="sticky top-0 z-20 flex h-[72px] items-center justify-between border-b border-indigo-100/70 bg-white/85 px-4 backdrop-blur-xl sm:px-7 lg:px-8">
            <div className="flex items-center gap-3">
                <button aria-label="Open navigation" className="rounded-xl p-2 text-slate-500 hover:bg-indigo-50 hover:text-indigo-700 md:hidden" onClick={onMenuClick}>
                    <Menu className="h-5 w-5" />
                </button>
                <div>
                    <h2 className="text-base font-bold text-slate-900 sm:text-lg">
                        {title}
                    </h2>
                    <p className="hidden text-xs font-medium text-slate-500 sm:block">B.Tech CSE <span className="px-1 text-slate-300">•</span> 3rd Year <span className="px-1 text-slate-300">•</span> 5th Semester <span className="px-1 text-slate-300">•</span> Section A</p>
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
