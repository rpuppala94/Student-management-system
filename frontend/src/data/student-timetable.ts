export interface TimetableSession {
    id: string;
    date: string;
    startTime: string;
    endTime: string;
    subjectCode: string;
    subjectName: string;
    facultyName: string;
    room: string;
    type: 'Theory' | 'Lab';
}

export const timetableSessions: TimetableSession[] = [
    { id: 'session-01', date: '2026-09-07', startTime: '09:00', endTime: '10:00', subjectCode: 'CS501', subjectName: 'Data Structures', facultyName: 'Dr. Anil Kumar', room: 'Room 301', type: 'Theory' },
    { id: 'session-02', date: '2026-09-07', startTime: '10:00', endTime: '11:00', subjectCode: 'CS502', subjectName: 'Database Management Systems', facultyName: 'Dr. Priya Sharma', room: 'Room 204', type: 'Theory' },
    { id: 'session-03', date: '2026-09-07', startTime: '14:00', endTime: '16:00', subjectCode: 'CS506', subjectName: 'DBMS Laboratory', facultyName: 'Ms. Kavya', room: 'Lab 2', type: 'Lab' },
    { id: 'session-04', date: '2026-09-08', startTime: '09:00', endTime: '10:00', subjectCode: 'CS503', subjectName: 'Operating Systems', facultyName: 'Dr. Ravi Kumar', room: 'Room 204', type: 'Theory' },
    { id: 'session-05', date: '2026-09-08', startTime: '11:00', endTime: '12:00', subjectCode: 'CS504', subjectName: 'Computer Networks', facultyName: 'Dr. Suresh Rao', room: 'Room 305', type: 'Theory' },
    { id: 'session-06', date: '2026-09-08', startTime: '15:00', endTime: '16:00', subjectCode: 'CS505', subjectName: 'Software Engineering', facultyName: 'Dr. Meena Reddy', room: 'Room 201', type: 'Theory' },
    { id: 'session-07', date: '2026-09-09', startTime: '10:00', endTime: '11:00', subjectCode: 'CS501', subjectName: 'Data Structures', facultyName: 'Dr. Anil Kumar', room: 'Room 301', type: 'Theory' },
    { id: 'session-08', date: '2026-09-09', startTime: '12:00', endTime: '13:00', subjectCode: 'CS503', subjectName: 'Operating Systems', facultyName: 'Dr. Ravi Kumar', room: 'Room 204', type: 'Theory' },
    { id: 'session-09', date: '2026-09-10', startTime: '09:00', endTime: '10:00', subjectCode: 'CS504', subjectName: 'Computer Networks', facultyName: 'Dr. Suresh Rao', room: 'Room 305', type: 'Theory' },
    { id: 'session-10', date: '2026-09-10', startTime: '14:00', endTime: '16:00', subjectCode: 'CS506', subjectName: 'DBMS Laboratory', facultyName: 'Ms. Kavya', room: 'Lab 2', type: 'Lab' },
    { id: 'session-11', date: '2026-09-11', startTime: '10:00', endTime: '11:00', subjectCode: 'CS502', subjectName: 'Database Management Systems', facultyName: 'Dr. Priya Sharma', room: 'Room 204', type: 'Theory' },
    { id: 'session-12', date: '2026-09-11', startTime: '15:00', endTime: '16:00', subjectCode: 'CS505', subjectName: 'Software Engineering', facultyName: 'Dr. Meena Reddy', room: 'Room 201', type: 'Theory' },
    { id: 'session-13', date: '2026-09-14', startTime: '09:00', endTime: '10:00', subjectCode: 'CS501', subjectName: 'Data Structures', facultyName: 'Dr. Anil Kumar', room: 'Room 301', type: 'Theory' },
    { id: 'session-14', date: '2026-09-14', startTime: '11:00', endTime: '12:00', subjectCode: 'CS503', subjectName: 'Operating Systems', facultyName: 'Dr. Ravi Kumar', room: 'Room 204', type: 'Theory' },
    { id: 'session-15', date: '2026-09-15', startTime: '10:00', endTime: '11:00', subjectCode: 'CS502', subjectName: 'Database Management Systems', facultyName: 'Dr. Priya Sharma', room: 'Room 204', type: 'Theory' },
    { id: 'session-16', date: '2026-09-15', startTime: '14:00', endTime: '16:00', subjectCode: 'CS506', subjectName: 'DBMS Laboratory', facultyName: 'Ms. Kavya', room: 'Lab 2', type: 'Lab' },
    { id: 'session-17', date: '2026-09-16', startTime: '09:00', endTime: '10:00', subjectCode: 'CS504', subjectName: 'Computer Networks', facultyName: 'Dr. Suresh Rao', room: 'Room 305', type: 'Theory' },
    { id: 'session-18', date: '2026-09-16', startTime: '12:00', endTime: '13:00', subjectCode: 'CS505', subjectName: 'Software Engineering', facultyName: 'Dr. Meena Reddy', room: 'Room 201', type: 'Theory' },
    { id: 'session-19', date: '2026-09-17', startTime: '10:00', endTime: '11:00', subjectCode: 'CS503', subjectName: 'Operating Systems', facultyName: 'Dr. Ravi Kumar', room: 'Room 204', type: 'Theory' },
    { id: 'session-20', date: '2026-09-17', startTime: '14:00', endTime: '16:00', subjectCode: 'CS506', subjectName: 'DBMS Laboratory', facultyName: 'Ms. Kavya', room: 'Lab 2', type: 'Lab' },
    { id: 'session-21', date: '2026-09-18', startTime: '09:00', endTime: '10:00', subjectCode: 'CS501', subjectName: 'Data Structures', facultyName: 'Dr. Anil Kumar', room: 'Room 301', type: 'Theory' },
    { id: 'session-22', date: '2026-09-18', startTime: '11:00', endTime: '12:00', subjectCode: 'CS504', subjectName: 'Computer Networks', facultyName: 'Dr. Suresh Rao', room: 'Room 305', type: 'Theory' },
    { id: 'session-23', date: '2026-09-19', startTime: '10:00', endTime: '11:00', subjectCode: 'CS505', subjectName: 'Software Engineering', facultyName: 'Dr. Meena Reddy', room: 'Room 201', type: 'Theory' },
    { id: 'session-24', date: '2026-09-19', startTime: '14:00', endTime: '16:00', subjectCode: 'CS506', subjectName: 'DBMS Laboratory', facultyName: 'Ms. Kavya', room: 'Lab 2', type: 'Lab' },
    { id: 'session-25', date: '2026-09-21', startTime: '09:00', endTime: '10:00', subjectCode: 'CS502', subjectName: 'Database Management Systems', facultyName: 'Dr. Priya Sharma', room: 'Room 204', type: 'Theory' },
    { id: 'session-26', date: '2026-09-21', startTime: '12:00', endTime: '13:00', subjectCode: 'CS503', subjectName: 'Operating Systems', facultyName: 'Dr. Ravi Kumar', room: 'Room 204', type: 'Theory' },
    { id: 'session-27', date: '2026-09-22', startTime: '11:00', endTime: '12:00', subjectCode: 'CS504', subjectName: 'Computer Networks', facultyName: 'Dr. Suresh Rao', room: 'Room 305', type: 'Theory' },
    { id: 'session-28', date: '2026-09-22', startTime: '14:00', endTime: '16:00', subjectCode: 'CS506', subjectName: 'DBMS Laboratory', facultyName: 'Ms. Kavya', room: 'Lab 2', type: 'Lab' },
    { id: 'session-29', date: '2026-09-23', startTime: '09:00', endTime: '10:00', subjectCode: 'CS501', subjectName: 'Data Structures', facultyName: 'Dr. Anil Kumar', room: 'Room 301', type: 'Theory' },
    { id: 'session-30', date: '2026-09-24', startTime: '10:00', endTime: '11:00', subjectCode: 'CS505', subjectName: 'Software Engineering', facultyName: 'Dr. Meena Reddy', room: 'Room 201', type: 'Theory' },
    { id: 'session-31', date: '2026-09-25', startTime: '09:00', endTime: '10:00', subjectCode: 'CS503', subjectName: 'Operating Systems', facultyName: 'Dr. Ravi Kumar', room: 'Room 204', type: 'Theory' },
];

export const timetableTimeSlots = [9, 10, 11, 12, 13, 14, 15, 16];