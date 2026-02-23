import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Header from "./components/Header";
import CourseList from "./components/CourseList";
import Sidebar from "./components/Sidebar";
import { useThemeStore } from "./store";

function App() {
  const theme = useThemeStore((state) => state.theme);
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useLayoutEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  // Handle system preference on initial load if no theme is persisted yet?
  // Zustand persist should handle hydration.
  // But for better UX let's stick to the store value.

  return (
    <div className="h-screen bg-background text-foreground font-sans flex flex-col">
      <Header ref={headerRef} />
      <main className="flex-1 flex flex-col md:flex-row gap-4 overflow-hidden">
        <Sidebar top={headerHeight} />
        <section className="flex-1 px-4 py-6 flex flex-col gap-6 overflow-y-auto custom-scrollbar">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold tracking-tight">
              Featured Courses
            </h2>
            <p className="text-muted-foreground">
              Expand your skills with our expert-led courses.
            </p>
          </div>
          <CourseList />
        </section>
      </main>
    </div>
  );
}

export default App;
