import { useState } from 'react';
import { DayPicker, type DayButtonProps } from '@daypicker/react';
import '@daypicker/react/style.css';
import { CalendarDays, ChevronLeft, ChevronRight } from 'lucide-react';
import { DayAttendanceDetails } from './day-attendance-details';
import {
    getDailyAttendanceStatus,
    getDateKey,
    getMonthlyAttendanceSummary,
    getSessionSummary,
    type AttendanceDay,
} from './attendance-utils';

interface AttendanceCalendarProps {
    attendanceRecords: AttendanceDay[];
}

export const AttendanceCalendar = ({ attendanceRecords }: AttendanceCalendarProps) => {
    const [selectedDate, setSelectedDate] = useState(new Date('2026-09-10T12:00:00'));
    const [selectedMonth, setSelectedMonth] = useState(new Date('2026-09-01T12:00:00'));
    const recordsByDate = new Map(attendanceRecords.map((record) => [record.date, record]));
    const summary = getMonthlyAttendanceSummary(attendanceRecords, selectedMonth);
    const selectedRecord = recordsByDate.get(getDateKey(selectedDate));
    const formattedMonth = new Intl.DateTimeFormat('en-IN', { month: 'long', year: 'numeric' }).format(selectedMonth);

    const AttendanceDayButton = ({ day, modifiers, ...buttonProps }: DayButtonProps) => {
        const record = recordsByDate.get(getDateKey(day.date));
        const sessionSummary = getSessionSummary(record);
        const status = getDailyAttendanceStatus(record);
        const statusClasses = {
            present: 'border-emerald-100 bg-emerald-50 text-emerald-700',
            partial: 'border-amber-100 bg-amber-50 text-amber-700',
            absent: 'border-rose-100 bg-rose-50 text-rose-700',
            none: 'border-transparent text-slate-500 hover:bg-slate-50',
        };
        const statusDotClasses = {
            present: 'bg-emerald-500',
            partial: 'bg-amber-400',
            absent: 'bg-rose-500',
            none: 'bg-slate-300',
        };

        return (
            <button
                {...buttonProps}
                className={`relative flex h-12 w-full flex-col items-center justify-center rounded-lg border text-xs font-bold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 ${modifiers.selected ? 'border-indigo-600 bg-indigo-600 text-white shadow-sm' : statusClasses[status]}`}
            >
                <span>{day.date.getDate()}</span>
                {!modifiers.outside && record ? (
                    <span className="mt-0.5 flex items-center gap-1">
                        <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${modifiers.selected ? 'bg-white' : statusDotClasses[status]}`} />
                        <span className={`text-[9px] font-bold ${modifiers.selected ? 'text-indigo-100' : ''}`}>{sessionSummary.present} / {sessionSummary.total}</span>
                    </span>
                ) : !modifiers.outside && <span className="mt-0.5 text-[9px] font-medium text-slate-300">—</span>}
            </button>
        );
    };

    const handleMonthChange = (month: Date) => {
        setSelectedMonth(month);

        if (selectedDate.getFullYear() !== month.getFullYear() || selectedDate.getMonth() !== month.getMonth()) {
            setSelectedDate(new Date(month.getFullYear(), month.getMonth(), 1));
        }
    };

    const changeMonth = (offset: number) => {
        handleMonthChange(new Date(selectedMonth.getFullYear(), selectedMonth.getMonth() + offset, 1));
    };

    return (
        <section className="mt-6">
            <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div><h2 className="text-lg font-bold text-slate-900">Monthly Attendance</h2><p className="mt-1 text-sm text-slate-500">Review class sessions for each working day.</p></div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500"><span className="inline-flex items-center gap-1.5"><i className="h-2 w-2 rounded-full bg-emerald-500" />Present</span><span className="inline-flex items-center gap-1.5"><i className="h-2 w-2 rounded-full bg-amber-400" />Partial</span><span className="inline-flex items-center gap-1.5"><i className="h-2 w-2 rounded-full bg-rose-500" />Absent</span><span className="inline-flex items-center gap-1.5"><i className="h-px w-2 bg-slate-400" />No classes</span></div>
            </div>

            <div className="grid gap-6 xl:grid-cols-[minmax(0,1.5fr)_minmax(300px,0.8fr)]">
                <section className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm sm:p-6">
                    <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-slate-50 px-4 py-3">
                        <button aria-label="Previous month" className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 bg-white text-slate-500 shadow-sm transition-colors hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" onClick={() => changeMonth(-1)}>
                            <ChevronLeft className="h-4 w-4" />
                        </button>
                        <div className="flex min-w-[150px] items-center justify-center gap-2"><CalendarDays className="h-4 w-4 text-indigo-600" /><span className="text-sm font-bold text-slate-800">{formattedMonth}</span></div>
                        <button aria-label="Next month" className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 bg-white text-slate-500 shadow-sm transition-colors hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" onClick={() => changeMonth(1)}>
                            <ChevronRight className="h-4 w-4" />
                        </button>
                        <p className="text-xs font-semibold text-slate-500"><span className="text-slate-800">{summary.total}</span> total classes</p><p className="text-xs font-semibold text-slate-500"><span className="text-emerald-700">{summary.present}</span> attended</p><p className="text-xs font-semibold text-slate-500"><span className="text-rose-600">{summary.absent}</span> absent</p><p className="text-xs font-bold text-indigo-700">{summary.percentage}% attendance</p>
                    </div>
                    <DayPicker
                        month={selectedMonth}
                        mode="single"
                        selected={selectedDate}
                        onMonthChange={handleMonthChange}
                        onSelect={(date) => date && setSelectedDate(date)}
                        showOutsideDays
                        fixedWeeks
                        components={{ DayButton: AttendanceDayButton }}
                        classNames={{ root: 'w-full', months: 'w-full', month: 'w-full', month_caption: 'mb-4 flex h-8 items-center justify-center text-sm font-bold text-slate-900', nav: 'hidden', month_grid: 'w-full border-collapse', weekdays: 'border-b border-slate-100', weekday: 'pb-2 text-center text-[10px] font-bold uppercase tracking-wider text-slate-400', week: 'h-14', day: 'p-0.5 text-center' }}
                    />
                </section>
                <DayAttendanceDetails attendanceDay={selectedRecord} selectedDate={selectedDate} />
            </div>
        </section>
    );
};
