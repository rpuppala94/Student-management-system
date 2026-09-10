import { useState } from "react";
import { CalendarCheck, CircleDollarSign, ClipboardCheck, FileText, School, Sparkles } from "lucide-react";
import { Header, Sidebar, StatCard } from "../../components/student";


export const StudentDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="min-h-screen min-w-0 md:ml-64">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />

        <main className="mx-auto max-w-[1500px] p-4 sm:p-6 lg:p-8">
          <div className="mb-6 rounded-2xl border border-indigo-100 bg-gradient-to-r from-indigo-50 via-white to-blue-50 px-5 py-5 sm:flex sm:items-end sm:justify-between sm:px-6">
            <div>
              <p className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-indigo-600"><Sparkles className="h-3.5 w-3.5" /> Overview</p>
              <h1 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                Good morning, Rahul 👋
              </h1>

              <p className="mt-2 text-sm text-slate-500">
                Here's what's happening with your academics.
              </p>
            </div>
            <div className="mt-4 hidden rounded-xl border border-indigo-100 bg-white/75 px-3 py-2 text-right shadow-sm sm:block">
              <p className="text-[10px] font-bold uppercase tracking-wider text-indigo-400">Academic year</p>
              <p className="text-sm font-bold text-indigo-700">2026 - 27</p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              title="Attendance"
              value="92%"
              description="110 present · 10 absent"
              icon={CalendarCheck}
              accent="blue"
            />

            <StatCard
              title="Latest Result"
              value="84.2%"
              description="Quarterly Examination"
              icon={ClipboardCheck}
              accent="emerald"
            />

            <StatCard
              title="Class"
              value="8-A"
              description="Roll Number: 24"
              icon={School}
              accent="amber"
            />

            <StatCard
              title="Fees Pending"
              value="₹5,000"
              description="Academic Year 2026-27"
              icon={CircleDollarSign}
              accent="rose"
            />
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-indigo-50 p-2 text-indigo-600"><CalendarCheck className="h-5 w-5" /></div>
                <h2 className="text-lg font-bold text-slate-900">Upcoming Exams</h2>
              </div>

              <div className="mt-5 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <p className="font-medium text-slate-900">Mathematics</p>
                    <p className="text-sm text-slate-500">
                      Quarterly Examination
                    </p>
                  </div>

                  <span className="rounded-lg bg-indigo-50 px-2.5 py-1 text-sm font-bold text-indigo-600">
                    15 Sep
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-slate-900">Science</p>
                    <p className="text-sm text-slate-500">
                      Quarterly Examination
                    </p>
                  </div>

                  <span className="rounded-lg bg-indigo-50 px-2.5 py-1 text-sm font-bold text-indigo-600">
                    17 Sep
                  </span>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-sky-50 p-2 text-sky-600"><FileText className="h-5 w-5" /></div>
                <h2 className="text-lg font-bold text-slate-900">Recent Documents</h2>
              </div>

              <div className="mt-5 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <p className="font-medium text-slate-900">
                      Mathematics - Unit Test
                    </p>
                    <p className="text-sm text-slate-500">PDF · 2.4 MB</p>
                  </div>

                  <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
                    View
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-slate-900">
                      Science - Quarterly
                    </p>
                    <p className="text-sm text-slate-500">PDF · 3.1 MB</p>
                  </div>

                  <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
                    View
                  </button>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
