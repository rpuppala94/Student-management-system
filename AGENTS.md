# AGENTS.md

## Project Overview

This is a College Management System being developed from scratch for engineering colleges and degree colleges.

The application has three main roles:

- Student
- Faculty
- Admin

The system should be professional, responsive, maintainable, secure, and easy to extend.

Build the application incrementally. Do not try to implement the entire system at once.

## Academic Structure

The academic structure should support:

College
→ Department
→ Program
→ Batch
→ Year
→ Semester
→ Section
→ Subject
→ Student

Programs may include B.Tech, BCA, B.Sc, B.Com, B.A, MCA, and M.Tech. Do not hard-code programs into the database.

## Planned Modules

### Student

- Dashboard
- Attendance
- Subjects
- Timetable
- Exams
- Results
- Assignments
- Documents
- Fees
- Notices
- Notifications
- Profile

### Faculty

- Dashboard
- My Subjects
- My Classes/Sections
- Students
- Attendance
- Exams
- Marks/Results
- Assignments
- Documents
- Notices
- Profile

### Admin

- Dashboard
- Students
- Faculty
- Departments
- Programs
- Batches
- Semesters
- Sections
- Subjects
- Timetable
- Exams
- Results
- Attendance
- Assignments
- Documents
- Fees
- Notices
- Reports

---

# Technology Stack

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Apollo Client
- React Router
- lucide-react

## Backend

- Node.js
- NestJS
- TypeScript
- GraphQL
- Apollo
- Mongoose

## Database

- MongoDB
- MongoDB runs locally using Docker/Rancher Desktop during development.

## Authentication

Authentication will use JWT.

Roles:

- ADMIN
- FACULTY
- STUDENT

---

# Frontend Coding Standards

## File Naming

All frontend filenames and folders must be lowercase.

Use kebab-case for multiple words.

Examples:

Correct:

- `sidebar.tsx`
- `student-dashboard.tsx`
- `stat-card.tsx`
- `student-profile.tsx`
- `student-results.tsx`

Incorrect:

- `Sidebar.tsx`
- `StudentDashboard.tsx`
- `Student_Profile.tsx`

Do not introduce PascalCase filenames.

---

## React Components

Use named exports with arrow functions.

Correct:

```tsx
export const StudentDashboard = () => {
  return <div>Student Dashboard</div>;
};
