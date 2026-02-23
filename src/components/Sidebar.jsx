import { useCourseStore } from "../store";

const Sidebar = ({ top }) => {
  const courses = useCourseStore((state) => state.courses);
  const totalCourses = courses.length;
  const completedCourses = courses.filter((c) => c.completed).length;

  const navLinks = [
    {
      name: "Dashboard",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    {
      name: "Courses",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    },
    {
      name: "Progress",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    },
    {
      name: "Settings",
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    },
  ];

  return (
    <aside
      className="flex w-full md:w-64 shrink-0 space-y-6"
      aria-label="Sidebar navigation"
    >
      <div
        className="p-4 border-r border-border w-full flex-1"
        style={{ top: `${top}px` }}
      >
        <div className="space-y-6">
          <nav className="space-y-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <button
                key={link.name}
                className="w-full text-left px-3 py-2 rounded-md text-sm flex items-center gap-3 text-foreground hover:bg-muted transition-colors"
                aria-label={`Navigate to ${link.name}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={link.icon}
                  />
                </svg>
                <span>{link.name}</span>
              </button>
            ))}
          </nav>

          <div
            className="pt-4 border-t border-border"
            role="region"
            aria-labelledby="overview-heading"
          >
            <h4
              id="overview-heading"
              className="text-sm font-medium mb-3 text-muted-foreground"
            >
              Overview
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-foreground">Total</span>
                <span
                  className="font-semibold"
                  aria-label={`Total courses: ${totalCourses}`}
                >
                  {totalCourses}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-foreground">Completed</span>
                <span
                  className="font-semibold text-primary"
                  aria-label={`Completed courses: ${completedCourses}`}
                >
                  {completedCourses}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
