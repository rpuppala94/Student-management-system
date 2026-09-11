import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Sidebar } from '../components/student';

export const StudentLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-slate-50">
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            <div className="min-h-screen min-w-0 md:ml-64">
                <Header onMenuClick={() => setIsSidebarOpen(true)} />
                <Outlet />
            </div>
        </div>
    );
};