export interface AttendanceSession {
    time: string;
    subject: string;
    room: string;
    status: 'present' | 'absent';
}

export interface AttendanceDay {
    date: string;
    sessions: AttendanceSession[];
}

export type DailyAttendanceStatus = 'present' | 'partial' | 'absent' | 'none';

export const getDateKey = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
};

export const getSessionSummary = (attendanceDay?: AttendanceDay) => {
    const total = attendanceDay?.sessions.length ?? 0;
    const present = attendanceDay?.sessions.filter((session) => session.status === 'present').length ?? 0;
    const absent = total - present;

    return {
        total,
        present,
        absent,
        percentage: total ? Number(((present / total) * 100).toFixed(1)) : 0,
    };
};

export const getDailyAttendanceStatus = (attendanceDay?: AttendanceDay): DailyAttendanceStatus => {
    const { total, present } = getSessionSummary(attendanceDay);

    if (!total) return 'none';
    if (present === total) return 'present';
    if (!present) return 'absent';
    return 'partial';
};

export const getMonthlyAttendanceSummary = (attendanceRecords: AttendanceDay[], month: Date) => {
    const recordsInMonth = attendanceRecords.filter((record) => {
        const date = new Date(`${record.date}T12:00:00`);
        return date.getFullYear() === month.getFullYear() && date.getMonth() === month.getMonth();
    });
    const total = recordsInMonth.reduce((sum, record) => sum + getSessionSummary(record).total, 0);
    const present = recordsInMonth.reduce((sum, record) => sum + getSessionSummary(record).present, 0);

    return {
        total,
        present,
        absent: total - present,
        percentage: total ? Number(((present / total) * 100).toFixed(1)) : 0,
    };
};