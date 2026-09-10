import {
    LayoutDashboard,
    CalendarCheck,
    ClipboardList,
    FileText,
    Receipt,
    User,
    Bell,
    LogOut,
    GraduationCap,
    X,
} from 'lucide-react';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const menuItems = [
    { label: 'Dashboard', icon: LayoutDashboard, active: true },
    { label: 'Attendance', icon: CalendarCheck },
    { label: 'Exams', icon: ClipboardList },
    { label: 'Results', icon: FileText },
    { label: 'Documents', icon: FileText },
    { label: 'Fees', icon: Receipt },
    { label: 'Profile', icon: User },
];

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
    return (
        <>
            <button
                aria-label="Close navigation"
                className={`fixed inset-0 z-30 bg-slate-950/35 transition-opacity md:hidden ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
                onClick={onClose}
            />
            <aside className={`fixed inset-y-0 left-0 z-40 flex h-dvh w-72 flex-col border-r border-indigo-950/10 bg-white shadow-2xl shadow-indigo-950/10 transition-transform duration-200 md:w-64 md:translate-x-0 md:shadow-none ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex h-[72px] items-center justify-between border-b border-indigo-100/80 px-5">
                    <div className="flex items-center gap-3">
                        <div className="rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 p-2.5 shadow-lg shadow-indigo-600/25">
                            <GraduationCap className="h-5 w-5 text-white" />
                        </div>

                        <div>
                            <h1 className="font-bold tracking-tight text-slate-900">ABC School</h1>
                            <p className="text-xs font-medium text-slate-400">Student Portal</p>
                        </div>
                    </div>
                    <button aria-label="Close navigation" className="rounded-lg p-2 text-slate-400 hover:bg-slate-50 md:hidden" onClick={onClose}>
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <nav className="flex-1 space-y-1.5 overflow-y-auto px-4 py-5">
                    <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">Menu</p>
                    {menuItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <button
                                key={item.label}
                                className={`flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold transition-colors ${item.active
                                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                                    : 'text-slate-500 hover:bg-indigo-50 hover:text-indigo-700'
                                    }`}
                                onClick={onClose}
                            >
                                <Icon className="h-[18px] w-[18px]" />
                                {item.label}
                            </button>
                        );
                    })}
                </nav>

                <div className="border-t border-indigo-100/80 bg-slate-50/60 p-4">
                    <button className="flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900">
                        <Bell className="h-[18px] w-[18px]" />
                        Notifications
                        <span className="ml-auto h-2 w-2 rounded-full bg-rose-400" />
                    </button>

                    <button className="mt-1 flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold text-slate-500 transition-colors hover:bg-rose-50 hover:text-rose-600">
                        <LogOut className="h-[18px] w-[18px]" />
                        Logout
                    </button>
                </div>
            </aside>
        </>
    );
};
