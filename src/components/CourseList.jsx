import { useCourseStore } from "../store";
import CourseItem from "./CourseItem";

const CourseList = () => {
  const courses = useCourseStore((state) => state.courses);

  if (courses.length === 0) {
    return (
      <div className="text-center py-20 border border-dashed border-border rounded-lg bg-card/50">
        <h2 className="text-xl font-bold mb-2">No courses found</h2>
        <p className="text-muted-foreground">
          Try adjusting your filters or search query.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
      {courses.map((course) => (
        <CourseItem key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseList;
