import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { StudentDashboard } from './pages/student/student-dashboard.page';
import { StudentAttendance } from './pages/student/student-attendance.page';
import { NotFoundPage } from './pages/not-found.page';
import { StudentLayout } from './layouts/student-layout';
import { StudentPlaceholder } from './pages/student/student-placeholder.page';
import { Subjects } from './pages/student/subjects.page';
import { SubjectDetails } from './pages/student/subject-details.page';
import { Timetable } from './pages/student/timetable.page';
import { Exams } from './pages/student/exams.page';
import { Results } from './pages/student/results.page';
import { Assignments } from './pages/student/assignments.page';
import { Documents } from './pages/student/documents.page';
import { Fees } from './pages/student/fees.page';
import { Profile } from './pages/student/profile.page';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<StudentLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="attendance" element={<StudentAttendance />} />
          <Route path="subjects" element={<Subjects />} />
          <Route path="subjects/:subjectCode" element={<SubjectDetails />} />
          <Route path="timetable" element={<Timetable />} />
          <Route path="exams" element={<Exams />} />
          <Route path="results" element={<Results />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="documents" element={<Documents />} />
          <Route path="fees" element={<Fees />} />
          <Route path="notices" element={<StudentPlaceholder title="Notices" />} />
          <Route path="notifications" element={<StudentPlaceholder title="Notifications" />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
