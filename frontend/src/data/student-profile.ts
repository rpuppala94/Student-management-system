export interface StudentProfile {
    id: string;
    fullName: string;
    dateOfBirth: string;
    gender: string;
    phone: string;
    personalEmail: string;
    address: string;
    department: string;
    program: string;
    batch: string;
    year: string;
    semester: string;
    section: string;
    admissionYear: number;
    academicStatus: string;
    guardianName: string;
    guardianRelationship: string;
    guardianPhone: string;
    guardianEmail: string;
    role: string;
    accountStatus: string;
}

export const mockStudentProfile: StudentProfile = {
    id: 'STU-2026-001',
    fullName: 'Rahul Kumar',
    dateOfBirth: '15 March 2004',
    gender: 'Male',
    phone: '+91 98765 43210',
    personalEmail: 'rahul.kumar@example.com',
    address: 'Hyderabad, Telangana',
    department: 'Computer Science and Engineering',
    program: 'B.Tech',
    batch: '2024-2028',
    year: '3rd Year',
    semester: '5th Semester',
    section: 'A',
    admissionYear: 2024,
    academicStatus: 'Active',
    guardianName: 'Suresh Kumar',
    guardianRelationship: 'Father',
    guardianPhone: '+91 98765 12345',
    guardianEmail: 'suresh.kumar@example.com',
    role: 'Student',
    accountStatus: 'Active',
};