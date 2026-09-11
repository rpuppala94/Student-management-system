export interface Exam {
    id: string;
    semester: string;
    name: string;
    examType: string;
    subjectCode: string;
    subjectName: string;
    date: string;
    startTime: string;
    endTime: string;
    room: string;
    instructions: string[];
}

export const examSemesterOptions = ['3rd Semester', '4th Semester', '5th Semester', '6th Semester'] as const;
export type ExamSemester = (typeof examSemesterOptions)[number];

export const examsBySemester: Record<ExamSemester, Exam[]> = {
    '3rd Semester': [
        { id: 'exam-301', semester: '3rd Semester', name: 'Internal Assessment 1', examType: 'Internal Assessment', subjectCode: 'CS301', subjectName: 'Object Oriented Programming', date: '2026-08-12', startTime: '10:00', endTime: '12:00', room: 'Room 204', instructions: ['Bring your college ID.', 'Report 15 minutes before the exam.'] },
        { id: 'exam-302', semester: '3rd Semester', name: 'Practical Examination', examType: 'Practical', subjectCode: 'CS306', subjectName: 'Programming Laboratory', date: '2026-08-19', startTime: '14:00', endTime: '16:00', room: 'Lab 1', instructions: ['Bring your lab record.', 'Follow the laboratory safety instructions.'] },
        { id: 'exam-303', semester: '3rd Semester', name: 'End Semester Examination', examType: 'End Semester Examination', subjectCode: 'CS304', subjectName: 'Data Structures', date: '2026-10-18', startTime: '10:00', endTime: '13:00', room: 'Main Hall', instructions: ['Bring your college ID.', 'Electronic devices are not permitted.'] },
    ],
    '4th Semester': [
        { id: 'exam-401', semester: '4th Semester', name: 'Internal Assessment 2', examType: 'Internal Assessment', subjectCode: 'CS402', subjectName: 'Database Management Systems', date: '2026-08-20', startTime: '09:00', endTime: '10:00', room: 'Room 301', instructions: ['Bring your college ID.', 'Report 15 minutes before the exam.'] },
        { id: 'exam-402', semester: '4th Semester', name: 'Mid-Term Examination', examType: 'Mid-Term Examination', subjectCode: 'CS403', subjectName: 'Operating Systems', date: '2026-09-22', startTime: '10:00', endTime: '13:00', room: 'Room 205', instructions: ['Bring required stationery.', 'Electronic devices are not permitted.'] },
        { id: 'exam-403', semester: '4th Semester', name: 'Practical Examination', examType: 'Practical', subjectCode: 'CS406', subjectName: 'Database Laboratory', date: '2026-10-08', startTime: '14:00', endTime: '16:00', room: 'Lab 2', instructions: ['Bring your lab record.', 'Report 15 minutes before the exam.'] },
    ],
    '5th Semester': [
        { id: 'exam-501', semester: '5th Semester', name: 'Mid-Term Examination', examType: 'Mid-Term Examination', subjectCode: 'CS502', subjectName: 'Database Management Systems', date: '2026-09-15', startTime: '10:00', endTime: '13:00', room: 'Room 301', instructions: ['Bring your college ID.', 'Report 15 minutes before the exam.', 'Electronic devices are not permitted.'] },
        { id: 'exam-502', semester: '5th Semester', name: 'Internal Assessment 2', examType: 'Internal Assessment', subjectCode: 'CS501', subjectName: 'Data Structures', date: '2026-09-17', startTime: '09:00', endTime: '10:00', room: 'Room 204', instructions: ['Bring your college ID.', 'Bring required stationery.'] },
        { id: 'exam-503', semester: '5th Semester', name: 'Practical Examination', examType: 'Practical', subjectCode: 'CS506', subjectName: 'DBMS Laboratory', date: '2026-09-19', startTime: '14:00', endTime: '16:00', room: 'Lab 2', instructions: ['Bring your lab record.', 'Follow the laboratory safety instructions.'] },
        { id: 'exam-504', semester: '5th Semester', name: 'Internal Assessment 1', examType: 'Internal Assessment', subjectCode: 'CS503', subjectName: 'Operating Systems', date: '2026-09-02', startTime: '10:00', endTime: '12:00', room: 'Room 205', instructions: ['Bring your college ID.', 'Report 15 minutes before the exam.'] },
        { id: 'exam-505', semester: '5th Semester', name: 'End Semester Examination', examType: 'End Semester Examination', subjectCode: 'CS504', subjectName: 'Computer Networks', date: '2026-07-28', startTime: '10:00', endTime: '13:00', room: 'Main Hall', instructions: ['Bring your college ID.', 'Electronic devices are not permitted.'] },
        { id: 'exam-506', semester: '5th Semester', name: 'End Semester Examination', examType: 'End Semester Examination', subjectCode: 'CS505', subjectName: 'Software Engineering', date: '2026-10-20', startTime: '10:00', endTime: '13:00', room: 'Main Hall', instructions: ['Bring your college ID.', 'Report 15 minutes before the exam.'] },
    ],
    '6th Semester': [
        { id: 'exam-601', semester: '6th Semester', name: 'Internal Assessment 1', examType: 'Internal Assessment', subjectCode: 'CS601', subjectName: 'Artificial Intelligence', date: '2026-08-14', startTime: '09:00', endTime: '11:00', room: 'Room 301', instructions: ['Bring your college ID.', 'Bring required stationery.'] },
        { id: 'exam-602', semester: '6th Semester', name: 'Mid-Term Examination', examType: 'Mid-Term Examination', subjectCode: 'CS602', subjectName: 'Machine Learning', date: '2026-09-24', startTime: '10:00', endTime: '13:00', room: 'Room 205', instructions: ['Report 15 minutes before the exam.', 'Electronic devices are not permitted.'] },
        { id: 'exam-603', semester: '6th Semester', name: 'Practical Examination', examType: 'Practical', subjectCode: 'CS606', subjectName: 'Machine Learning Laboratory', date: '2026-10-12', startTime: '14:00', endTime: '16:00', room: 'Lab 3', instructions: ['Bring your lab record.', 'Follow the laboratory safety instructions.'] },
    ],
};

export const formatExamDate = (date: string, options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' }) => new Intl.DateTimeFormat('en-US', options).format(new Date(`${date}T12:00:00`));

export const formatExamTime = (time: string) => {
    const [hours, minutes] = time.split(':').map(Number);
    const suffix = hours >= 12 ? 'PM' : 'AM';
    const displayHour = hours % 12 || 12;

    return `${displayHour}:${String(minutes).padStart(2, '0')} ${suffix}`;
};

export const getExamDuration = (exam: Exam) => {
    const [startHours, startMinutes] = exam.startTime.split(':').map(Number);
    const [endHours, endMinutes] = exam.endTime.split(':').map(Number);
    const minutes = endHours * 60 + endMinutes - (startHours * 60 + startMinutes);

    return minutes % 60 === 0 ? `${minutes / 60} ${minutes === 60 ? 'Hour' : 'Hours'}` : `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
};

export type ExamStatus = 'Upcoming' | 'Today' | 'Completed';

export const getExamStatus = (exam: Exam, now = new Date()): ExamStatus => {
    const start = new Date(`${exam.date}T${exam.startTime}:00`);
    const end = new Date(`${exam.date}T${exam.endTime}:00`);

    if (now < start) return 'Upcoming';
    if (now <= end) return 'Today';
    return 'Completed';
};

export const getDaysRemaining = (exam: Exam, now = new Date()) => {
    const start = new Date(`${exam.date}T${exam.startTime}:00`);
    const millisecondsPerDay = 24 * 60 * 60 * 1000;

    return Math.max(0, Math.ceil((start.getTime() - now.getTime()) / millisecondsPerDay));
};

export const getNextUpcomingExam = (exams: Exam[], now = new Date()) => exams.filter((exam) => getExamStatus(exam, now) === 'Upcoming').sort((first, second) => `${first.date}${first.startTime}`.localeCompare(`${second.date}${second.startTime}`))[0];