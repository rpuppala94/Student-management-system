export type SubjectType = 'Theory' | 'Lab';

export interface Subject {
    code: string;
    name: string;
    type: SubjectType;
    credits: number;
    faculty: string;
    presentClasses: number;
    totalClasses: number;
}

export const semesterOptions = [
    '3rd Semester',
    '4th Semester',
    '5th Semester',
    '6th Semester',
] as const;

export type Semester = (typeof semesterOptions)[number];

export const subjectsBySemester: Record<Semester, Subject[]> = {
    '3rd Semester': [
        { code: 'CS301', name: 'Object Oriented Programming', type: 'Theory', credits: 4, faculty: 'Dr. Anil Kumar', presentClasses: 24, totalClasses: 27 },
        { code: 'CS302', name: 'Discrete Mathematics', type: 'Theory', credits: 4, faculty: 'Dr. Priya Sharma', presentClasses: 21, totalClasses: 25 },
        { code: 'CS303', name: 'Digital Logic Design', type: 'Theory', credits: 3, faculty: 'Dr. Ravi Kumar', presentClasses: 20, totalClasses: 24 },
        { code: 'CS304', name: 'Data Structures', type: 'Theory', credits: 4, faculty: 'Dr. Suresh Rao', presentClasses: 23, totalClasses: 26 },
        { code: 'CS305', name: 'Computer Organization', type: 'Theory', credits: 3, faculty: 'Dr. Meena Reddy', presentClasses: 19, totalClasses: 23 },
        { code: 'CS306', name: 'Programming Laboratory', type: 'Lab', credits: 4, faculty: 'Ms. Kavya', presentClasses: 18, totalClasses: 20 },
    ],
    '4th Semester': [
        { code: 'CS401', name: 'Design and Analysis of Algorithms', type: 'Theory', credits: 4, faculty: 'Dr. Anil Kumar', presentClasses: 25, totalClasses: 28 },
        { code: 'CS402', name: 'Database Management Systems', type: 'Theory', credits: 4, faculty: 'Dr. Priya Sharma', presentClasses: 22, totalClasses: 26 },
        { code: 'CS403', name: 'Operating Systems', type: 'Theory', credits: 4, faculty: 'Dr. Ravi Kumar', presentClasses: 20, totalClasses: 25 },
        { code: 'CS404', name: 'Probability and Statistics', type: 'Theory', credits: 3, faculty: 'Dr. Suresh Rao', presentClasses: 23, totalClasses: 25 },
        { code: 'CS405', name: 'Microprocessors', type: 'Theory', credits: 3, faculty: 'Dr. Meena Reddy', presentClasses: 18, totalClasses: 23 },
        { code: 'CS406', name: 'Database Laboratory', type: 'Lab', credits: 4, faculty: 'Ms. Kavya', presentClasses: 19, totalClasses: 21 },
    ],
    '5th Semester': [
        { code: 'CS501', name: 'Data Structures', type: 'Theory', credits: 4, faculty: 'Dr. Anil Kumar', presentClasses: 23, totalClasses: 25 },
        { code: 'CS502', name: 'Database Management Systems', type: 'Theory', credits: 4, faculty: 'Dr. Priya Sharma', presentClasses: 19, totalClasses: 22 },
        { code: 'CS503', name: 'Operating Systems', type: 'Theory', credits: 4, faculty: 'Dr. Ravi Kumar', presentClasses: 18, totalClasses: 23 },
        { code: 'CS504', name: 'Computer Networks', type: 'Theory', credits: 3, faculty: 'Dr. Suresh Rao', presentClasses: 20, totalClasses: 22 },
        { code: 'CS505', name: 'Software Engineering', type: 'Theory', credits: 3, faculty: 'Dr. Meena Reddy', presentClasses: 22, totalClasses: 25 },
        { code: 'CS506', name: 'DBMS Laboratory', type: 'Lab', credits: 4, faculty: 'Ms. Kavya', presentClasses: 19, totalClasses: 20 },
    ],
    '6th Semester': [
        { code: 'CS601', name: 'Artificial Intelligence', type: 'Theory', credits: 4, faculty: 'Dr. Anil Kumar', presentClasses: 22, totalClasses: 25 },
        { code: 'CS602', name: 'Machine Learning', type: 'Theory', credits: 4, faculty: 'Dr. Priya Sharma', presentClasses: 20, totalClasses: 24 },
        { code: 'CS603', name: 'Compiler Design', type: 'Theory', credits: 4, faculty: 'Dr. Ravi Kumar', presentClasses: 21, totalClasses: 25 },
        { code: 'CS604', name: 'Cloud Computing', type: 'Theory', credits: 3, faculty: 'Dr. Suresh Rao', presentClasses: 19, totalClasses: 22 },
        { code: 'CS605', name: 'Cyber Security', type: 'Theory', credits: 3, faculty: 'Dr. Meena Reddy', presentClasses: 23, totalClasses: 26 },
        { code: 'CS606', name: 'Machine Learning Laboratory', type: 'Lab', credits: 4, faculty: 'Ms. Kavya', presentClasses: 17, totalClasses: 19 },
    ],
};

export const getAttendancePercentage = (subject: Subject) => {
    return Number(((subject.presentClasses / subject.totalClasses) * 100).toFixed(1));
};

export const getAttendanceStatus = (subject: Subject) => {
    const percentage = getAttendancePercentage(subject);

    if (percentage >= 85) return 'Good';
    if (percentage >= 75) return 'Warning';
    return 'Low';
};