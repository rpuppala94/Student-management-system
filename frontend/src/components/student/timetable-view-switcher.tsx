export type TimetableView = 'day' | 'week' | 'month';

interface TimetableViewSwitcherProps {
    value: TimetableView;
    onChange: (view: TimetableView) => void;
}

const views: Array<{ value: TimetableView; label: string }> = [
    { value: 'day', label: 'Day' },
    { value: 'week', label: 'Week' },
    { value: 'month', label: 'Month' },
];

export const TimetableViewSwitcher = ({ value, onChange }: TimetableViewSwitcherProps) => {
    return (
        <div className="inline-flex rounded-xl border border-slate-200 bg-white p-1 shadow-sm" aria-label="Timetable view">
            {views.map((view) => (
                <button
                    key={view.value}
                    type="button"
                    aria-pressed={value === view.value}
                    onClick={() => onChange(view.value)}
                    className={`rounded-lg px-3.5 py-2 text-sm font-bold transition-colors sm:px-4 ${value === view.value ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/20' : 'text-slate-500 hover:bg-indigo-50 hover:text-indigo-700'}`}
                >
                    {view.label}
                </button>
            ))}
        </div>
    );
};