# AGENTS.md

## Project Overview

This is a School Management System being developed from scratch.

The application has three main roles:

- Student
- Teacher
- Admin

The system should be professional, responsive, maintainable, secure, and easy to extend.

Build the application incrementally. Do not try to implement the entire system at once.

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
- TEACHER
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