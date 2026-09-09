import { Header, Sidebar, StatCard } from "../../components/student";


export const StudentDashboard = () => {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <Header />

        <main className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-slate-900">
              Good morning, Rahul 👋
            </h1>

            <p className="mt-1 text-slate-500">
              Here's what's happening with your academics.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              title="Attendance"
              value="92%"
              description="110 present · 10 absent"
            />

            <StatCard
              title="Latest Result"
              value="84.2%"
              description="Quarterly Examination"
            />

            <StatCard
              title="Class"
              value="8-A"
              description="Roll Number: 24"
            />

            <StatCard
              title="Fees Pending"
              value="₹5,000"
              description="Academic Year 2026-27"
            />
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">
                Upcoming Exams
              </h2>

              <div className="mt-5 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <p className="font-medium text-slate-900">Mathematics</p>
                    <p className="text-sm text-slate-500">
                      Quarterly Examination
                    </p>
                  </div>

                  <span className="text-sm font-medium text-indigo-600">
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

                  <span className="text-sm font-medium text-indigo-600">
                    17 Sep
                  </span>
                </div>
              </div>
            </section>

            <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">
                Recent Documents
              </h2>

              <div className="mt-5 space-y-4">
                <div className="flex items-center justify-between">
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