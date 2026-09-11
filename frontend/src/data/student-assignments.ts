export type AssignmentSubmissionStatus = 'Not Submitted' | 'Submitted' | 'Late' | 'Evaluated' | 'Overdue';

export interface AssignmentSubmission {
    status: 'not_submitted' | 'submitted';
    submittedAt: string | null;
    fileName: string | null;
    marks: number | null;
    feedback: string | null;
}

export interface AssignmentAttachment {
    name: string;
    type: string;
}

export interface Assignment {
    id: string;
    subjectCode: string;
    subjectName: string;
    title: string;
    description: string;
    assignedDate: string;
    dueDate: string;
    facultyName: string;
    maxMarks: number;
    attachment: AssignmentAttachment;
    allowLateSubmission: boolean;
    submission: AssignmentSubmission;
}

export const mockAssignments: Assignment[] = [
    { id: 'assignment-001', subjectCode: 'CS502', subjectName: 'Database Management Systems', title: 'SQL Query Optimization', description: 'Write and optimize SQL queries for the provided database schema.', assignedDate: '2026-09-05', dueDate: '2026-09-15T23:59:00', facultyName: 'Dr. Priya Sharma', maxMarks: 20, attachment: { name: 'assignment-brief.pdf', type: 'pdf' }, allowLateSubmission: true, submission: { status: 'not_submitted', submittedAt: null, fileName: null, marks: null, feedback: null } },
    { id: 'assignment-002', subjectCode: 'CS501', subjectName: 'Data Structures', title: 'Balanced Search Trees', description: 'Compare AVL and Red-Black trees and implement insertion operations.', assignedDate: '2026-09-01', dueDate: '2026-09-12T23:59:00', facultyName: 'Dr. Anil Kumar', maxMarks: 20, attachment: { name: 'trees-problem-set.pdf', type: 'pdf' }, allowLateSubmission: false, submission: { status: 'submitted', submittedAt: '2026-09-10T17:30:00', fileName: 'rahul-balanced-trees.pdf', marks: null, feedback: null } },
    { id: 'assignment-003', subjectCode: 'CS503', subjectName: 'Operating Systems', title: 'CPU Scheduling Analysis', description: 'Analyze scheduling algorithms for the supplied process workloads.', assignedDate: '2026-08-28', dueDate: '2026-09-05T23:59:00', facultyName: 'Dr. Ravi Kumar', maxMarks: 15, attachment: { name: 'scheduling-workloads.zip', type: 'zip' }, allowLateSubmission: true, submission: { status: 'not_submitted', submittedAt: null, fileName: null, marks: null, feedback: null } },
    { id: 'assignment-004', subjectCode: 'CS504', subjectName: 'Computer Networks', title: 'TCP Congestion Control', description: 'Explain congestion control phases and evaluate a sample network trace.', assignedDate: '2026-08-25', dueDate: '2026-09-08T23:59:00', facultyName: 'Dr. Suresh Rao', maxMarks: 20, attachment: { name: 'network-trace.pcap', type: 'pcap' }, allowLateSubmission: false, submission: { status: 'submitted', submittedAt: '2026-09-07T16:10:00', fileName: 'tcp-analysis.docx', marks: 18, feedback: 'Good work. Add more detail to the congestion window explanation.' } },
    { id: 'assignment-005', subjectCode: 'CS505', subjectName: 'Software Engineering', title: 'Requirements Specification', description: 'Prepare a concise requirements specification for a campus service.', assignedDate: '2026-09-02', dueDate: '2026-09-20T23:59:00', facultyName: 'Dr. Meena Reddy', maxMarks: 25, attachment: { name: 'requirements-template.docx', type: 'docx' }, allowLateSubmission: false, submission: { status: 'submitted', submittedAt: '2026-09-09T12:00:00', fileName: 'campus-service-srs.pdf', marks: null, feedback: null } },
    { id: 'assignment-006', subjectCode: 'CS506', subjectName: 'DBMS Laboratory', title: 'Database Design Lab', description: 'Design and implement a normalized schema for the lab case study.', assignedDate: '2026-09-08', dueDate: '2026-09-25T23:59:00', facultyName: 'Ms. Kavya', maxMarks: 20, attachment: { name: 'lab-case-study.pdf', type: 'pdf' }, allowLateSubmission: false, submission: { status: 'not_submitted', submittedAt: null, fileName: null, marks: null, feedback: null } },
    { id: 'assignment-007', subjectCode: 'CS501', subjectName: 'Data Structures', title: 'Graph Traversal Report', description: 'Document BFS and DFS traversal with complexity analysis.', assignedDate: '2026-08-18', dueDate: '2026-08-30T23:59:00', facultyName: 'Dr. Anil Kumar', maxMarks: 15, attachment: { name: 'graph-traversal.pdf', type: 'pdf' }, allowLateSubmission: false, submission: { status: 'submitted', submittedAt: '2026-08-29T18:00:00', fileName: 'graph-report.pdf', marks: 13, feedback: 'Clear explanation and examples.' } },
    { id: 'assignment-008', subjectCode: 'CS503', subjectName: 'Operating Systems', title: 'Memory Management Notes', description: 'Summarize paging, segmentation, and virtual memory concepts.', assignedDate: '2026-09-04', dueDate: '2026-09-14T23:59:00', facultyName: 'Dr. Ravi Kumar', maxMarks: 10, attachment: { name: 'memory-management.pdf', type: 'pdf' }, allowLateSubmission: false, submission: { status: 'not_submitted', submittedAt: null, fileName: null, marks: null, feedback: null } },
];

export const getAssignmentStatus = (assignment: Assignment, now = new Date()): AssignmentSubmissionStatus => {
    const { submission } = assignment;
    if (submission.marks !== null || submission.feedback !== null) return 'Evaluated';
    if (submission.status === 'submitted') return new Date(submission.submittedAt ?? 0) > new Date(assignment.dueDate) ? 'Late' : 'Submitted';
    return new Date(assignment.dueDate) < now ? 'Overdue' : 'Not Submitted';
};

export const getAssignmentDaysLabel = (assignment: Assignment, now = new Date()) => {
    const difference = new Date(assignment.dueDate).getTime() - now.getTime();
    const days = Math.ceil(Math.abs(difference) / (24 * 60 * 60 * 1000));

    if (difference < 0) return `${days} ${days === 1 ? 'day' : 'days'} overdue`;
    if (days === 0) return 'Due today';
    return `${days} ${days === 1 ? 'day' : 'days'} remaining`;
};

export const formatAssignmentDate = (date: string) => new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
export const formatSubmittedAt = (date: string) => new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' });