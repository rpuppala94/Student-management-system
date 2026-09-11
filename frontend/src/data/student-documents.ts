export type DocumentCategory = 'Question Papers' | 'Study Materials' | 'Assignments' | 'Notes' | 'Other';
export type DocumentSemester = '3rd Semester' | '4th Semester' | '5th Semester';

export interface StudentDocument {
    id: string;
    title: string;
    subject: string;
    category: DocumentCategory;
    semester: DocumentSemester;
    uploadedBy: string;
    uploadedDate: string;
    fileType: string;
    fileSize: string;
}

export const documentCategories: Array<'All' | DocumentCategory> = ['All', 'Question Papers', 'Study Materials', 'Assignments', 'Notes', 'Other'];
export const documentSemesters: Array<'All Semesters' | DocumentSemester> = ['All Semesters', '5th Semester', '4th Semester', '3rd Semester'];

export const mockDocuments: StudentDocument[] = [
    { id: 'document-001', title: 'Data Structures Unit 1 Notes', subject: 'Data Structures', category: 'Study Materials', semester: '5th Semester', uploadedBy: 'Dr. Priya Sharma', uploadedDate: '2026-09-08', fileType: 'PDF', fileSize: '2.4 MB' },
    { id: 'document-002', title: 'Database Management Systems Mid-Term Question Paper', subject: 'Database Management Systems', category: 'Question Papers', semester: '5th Semester', uploadedBy: 'Prof. Rahul Kumar', uploadedDate: '2026-09-05', fileType: 'PDF', fileSize: '1.1 MB' },
    { id: 'document-003', title: 'Operating Systems Unit 2 Notes', subject: 'Operating Systems', category: 'Notes', semester: '5th Semester', uploadedBy: 'Dr. Anitha Rao', uploadedDate: '2026-09-02', fileType: 'PDF', fileSize: '3.2 MB' },
    { id: 'document-004', title: 'Computer Networks Assignment 1', subject: 'Computer Networks', category: 'Assignments', semester: '5th Semester', uploadedBy: 'Prof. Kiran Reddy', uploadedDate: '2026-08-30', fileType: 'DOCX', fileSize: '850 KB' },
    { id: 'document-005', title: 'Software Engineering Previous Year Paper', subject: 'Software Engineering', category: 'Question Papers', semester: '5th Semester', uploadedBy: 'Dr. Meena Patel', uploadedDate: '2026-08-28', fileType: 'PDF', fileSize: '1.6 MB' },
    { id: 'document-006', title: 'Programming Fundamentals Reference Slides', subject: 'Programming Fundamentals', category: 'Study Materials', semester: '4th Semester', uploadedBy: 'Dr. Arun Das', uploadedDate: '2026-08-20', fileType: 'PPTX', fileSize: '4.8 MB' },
    { id: 'document-007', title: 'Discrete Mathematics Question Bank', subject: 'Discrete Mathematics', category: 'Other', semester: '3rd Semester', uploadedBy: 'Prof. Neha Singh', uploadedDate: '2026-08-16', fileType: 'PDF', fileSize: '980 KB' },
    { id: 'document-008', title: 'DBMS Laboratory Manual', subject: 'DBMS Laboratory', category: 'Study Materials', semester: '5th Semester', uploadedBy: 'Ms. Kavya', uploadedDate: '2026-08-12', fileType: 'PDF', fileSize: '2.1 MB' },
];