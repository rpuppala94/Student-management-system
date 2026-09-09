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
} from 'lucide-react';

const menuItems = [
    { label: 'Dashboard', icon: LayoutDashboard, active: true },
    { label: 'Attendance', icon: CalendarCheck },
    { label: 'Exams', icon: ClipboardList },
    { label: 'Results', icon: FileText },
    { label: 'Documents', icon: FileText },
    { label: 'Fees', icon: Receipt },
    { label: 'Profile', icon: User },
];

export const Sidebar = () => {
    return (
        <aside className="flex h-screen w-64 flex-col border-r border-slate-200 bg-white">
            <div className="flex h-16 items-center gap-3 border-b border-slate-200 px-6">
                <div className="rounded-lg bg-indigo-600 p-2">
                    <GraduationCap className="h-5 w-5 text-white" />
                </div>

                <div>
                    <h1 className="font-semibold text-slate-900">ABC School</h1>
                    <p className="text-xs text-slate-500">Student Portal</p>
                </div>
            </div>

            <nav className="flex-1 space-y-1 p-4">
                {menuItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <button
                            key={item.label}
                            className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium ${item.active
                                ? 'bg-indigo-50 text-indigo-600'
                                : 'text-slate-600 hover:bg-slate-50'
                                }`}
                        >
                            <Icon className="h-5 w-5" />
                            {item.label}
                        </button>
                    );
                })}
            </nav>

            <div className="border-t border-slate-200 p-4">
                <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm text-slate-600 hover:bg-slate-50">
                    <Bell className="h-5 w-5" />
                    Notifications
                </button>

                <button className="mt-1 flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm text-slate-600 hover:bg-slate-50">
                    <LogOut className="h-5 w-5" />
                    Logout
                </button>
            </div>
        </aside>
    );
}