export const gradePoints = {
    O: 10,
    'A+': 9,
    A: 8,
    'B+': 7,
    B: 6,
    C: 5,
    F: 0,
} as const;

export type Grade = keyof typeof gradePoints;
export type ResultStatus = 'PASS' | 'FAIL';

export interface SubjectResult {
    subjectCode: string;
    subjectName: string;
    credits: number;
    marks: number;
    maxMarks: number;
}

export interface SemesterHistory {
    semester: string;
    sgpa: number;
    credits: number;
}

export interface ClassRank {
    rank: number;
    totalStudents: number;
    scope: 'section';
}

export const classRank: ClassRank = {
    rank: 3,
    totalStudents: 60,
    scope: 'section',
};

export const resultSemesterOptions = ['3rd Semester', '4th Semester', '5th Semester', '6th Semester'] as const;
export type ResultSemester = (typeof resultSemesterOptions)[number];

export const resultsBySemester: Record<ResultSemester, SubjectResult[]> = {
    '3rd Semester': [
        { subjectCode: 'CS301', subjectName: 'Object Oriented Programming', credits: 4, marks: 84, maxMarks: 100 },
        { subjectCode: 'CS302', subjectName: 'Discrete Mathematics', credits: 4, marks: 78, maxMarks: 100 },
        { subjectCode: 'CS303', subjectName: 'Digital Logic Design', credits: 3, marks: 82, maxMarks: 100 },
        { subjectCode: 'CS304', subjectName: 'Data Structures', credits: 4, marks: 88, maxMarks: 100 },
        { subjectCode: 'CS305', subjectName: 'Computer Organization', credits: 3, marks: 76, maxMarks: 100 },
        { subjectCode: 'CS306', subjectName: 'Programming Laboratory', credits: 4, marks: 91, maxMarks: 100 },
    ],
    '4th Semester': [
        { subjectCode: 'CS401', subjectName: 'Design and Analysis of Algorithms', credits: 4, marks: 87, maxMarks: 100 },
        { subjectCode: 'CS402', subjectName: 'Database Management Systems', credits: 4, marks: 82, maxMarks: 100 },
        { subjectCode: 'CS403', subjectName: 'Operating Systems', credits: 4, marks: 79, maxMarks: 100 },
        { subjectCode: 'CS404', subjectName: 'Probability and Statistics', credits: 3, marks: 85, maxMarks: 100 },
        { subjectCode: 'CS405', subjectName: 'Microprocessors', credits: 3, marks: 74, maxMarks: 100 },
        { subjectCode: 'CS406', subjectName: 'Database Laboratory', credits: 4, marks: 94, maxMarks: 100 },
    ],
    '5th Semester': [
        { subjectCode: 'CS501', subjectName: 'Data Structures', credits: 4, marks: 86, maxMarks: 100 },
        { subjectCode: 'CS502', subjectName: 'Database Management Systems', credits: 4, marks: 78, maxMarks: 100 },
        { subjectCode: 'CS503', subjectName: 'Operating Systems', credits: 4, marks: 82, maxMarks: 100 },
        { subjectCode: 'CS504', subjectName: 'Computer Networks', credits: 3, marks: 74, maxMarks: 100 },
        { subjectCode: 'CS505', subjectName: 'Software Engineering', credits: 3, marks: 88, maxMarks: 100 },
        { subjectCode: 'CS506', subjectName: 'DBMS Laboratory', credits: 4, marks: 92, maxMarks: 100 },
    ],
    '6th Semester': [
        { subjectCode: 'CS601', subjectName: 'Artificial Intelligence', credits: 4, marks: 89, maxMarks: 100 },
        { subjectCode: 'CS602', subjectName: 'Machine Learning', credits: 4, marks: 84, maxMarks: 100 },
        { subjectCode: 'CS603', subjectName: 'Compiler Design', credits: 4, marks: 81, maxMarks: 100 },
        { subjectCode: 'CS604', subjectName: 'Cloud Computing', credits: 3, marks: 86, maxMarks: 100 },
        { subjectCode: 'CS605', subjectName: 'Cyber Security', credits: 3, marks: 78, maxMarks: 100 },
        { subjectCode: 'CS606', subjectName: 'Machine Learning Laboratory', credits: 4, marks: 95, maxMarks: 100 },
    ],
};

export const previousSemesterHistory: SemesterHistory[] = [
    { semester: '3rd Semester', sgpa: 8.12, credits: 22 },
    { semester: '4th Semester', sgpa: 8.34, credits: 22 },
];

export const getGradeFromMarks = (marks: number, maxMarks: number): Grade => {
    const percentage = (marks / maxMarks) * 100;

    if (percentage >= 90) return 'O';
    if (percentage >= 85) return 'A+';
    if (percentage >= 80) return 'A';
    if (percentage >= 75) return 'B+';
    if (percentage >= 70) return 'B';
    if (percentage >= 60) return 'C';
    return 'F';
};

export const getResultStatus = (grade: Grade): ResultStatus => grade === 'F' ? 'FAIL' : 'PASS';
export const getResultPercentage = (result: SubjectResult) => Number(((result.marks / result.maxMarks) * 100).toFixed(1));
export const getResultGradePoint = (result: SubjectResult) => gradePoints[getGradeFromMarks(result.marks, result.maxMarks)];
export const getCreditsEarned = (results: SubjectResult[]) => results.reduce((total, result) => total + (getResultStatus(getGradeFromMarks(result.marks, result.maxMarks)) === 'PASS' ? result.credits : 0), 0);

export const calculateSemesterSgpa = (results: SubjectResult[]) => {
    const totalCredits = results.reduce((total, result) => total + result.credits, 0);
    const weightedPoints = results.reduce((total, result) => total + result.credits * getResultGradePoint(result), 0);

    return totalCredits ? Number((weightedPoints / totalCredits).toFixed(2)) : 0;
};

export const calculateCgpa = (history: SemesterHistory[]) => {
    const totalCredits = history.reduce((total, semester) => total + semester.credits, 0);
    const weightedSgpa = history.reduce((total, semester) => total + semester.sgpa * semester.credits, 0);

    return totalCredits ? Number((weightedSgpa / totalCredits).toFixed(2)) : 0;
};