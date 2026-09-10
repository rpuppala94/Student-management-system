import type { LucideIcon } from 'lucide-react';

interface StatCardProps {
    title: string;
    value: string;
    description: string;
    icon: LucideIcon;
    accent: 'blue' | 'emerald' | 'amber' | 'rose';
}

export const StatCard = ({
    title,
    value,
    description,
    icon: Icon,
    accent,
}: StatCardProps) => {
    const accents = {
        blue: {
            icon: 'bg-blue-100 text-blue-700 ring-blue-200/70',
            glow: 'bg-blue-100/70',
            border: 'border-blue-100/80',
        },
        emerald: {
            icon: 'bg-emerald-100 text-emerald-700 ring-emerald-200/70',
            glow: 'bg-emerald-100/70',
            border: 'border-emerald-100/80',
        },
        amber: {
            icon: 'bg-amber-100 text-amber-700 ring-amber-200/70',
            glow: 'bg-amber-100/70',
            border: 'border-amber-100/80',
        },
        rose: {
            icon: 'bg-rose-100 text-rose-700 ring-rose-200/70',
            glow: 'bg-rose-100/70',
            border: 'border-rose-100/80',
        },
    };
    const styles = accents[accent];

    return (
        <div className={`group relative overflow-hidden rounded-2xl border bg-white p-5 shadow-sm shadow-slate-200/60 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${styles.border}`}>
            <div className={`absolute -right-7 -top-7 h-24 w-24 rounded-full blur-2xl ${styles.glow}`} />
            <div className="flex items-start justify-between">
                <p className="text-sm font-semibold text-slate-500">{title}</p>
                <div className={`relative rounded-xl p-2.5 ring-1 ${styles.icon}`}>
                    <Icon className="h-5 w-5" />
                </div>
            </div>

            <p className="relative mt-4 text-3xl font-extrabold tracking-tight text-slate-900">{value}</p>

            <p className="mt-1 text-xs font-medium text-slate-400">{description}</p>
        </div>
    );
};
