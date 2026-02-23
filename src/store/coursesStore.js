import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import DUMMY_COURSES from "../constants/courses";

const courseStore = (set) => ({
  courses: DUMMY_COURSES,
  addCourse: (course) => {
    set((state) => ({
      courses: [course, ...state.courses],
    }));
  },

  removeCourse: (courseId) => {
    set((state) => ({
      courses: state.courses.filter((course) => course.id !== courseId),
    }));
  },

  toggleCourseStatus: (courseId) => {
    set((state) => ({
      courses: state.courses.map((course) =>
        course.id === courseId
          ? { ...course, completed: !course.completed }
          : course,
      ),
    }));
  },
});

export const useCourseStore = create(
  devtools(
    persist(courseStore, {
      name: "courses",
    }),
  ),
);
