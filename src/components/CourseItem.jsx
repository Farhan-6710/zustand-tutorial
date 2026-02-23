import { useCourseStore } from "../store";

const CourseItem = ({ course }) => {
  const toggleCourseStatus = useCourseStore(
    (state) => state.toggleCourseStatus,
  );
  const removeCourse = useCourseStore((state) => state.removeCourse);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  return (
    <article className="border border-border rounded-lg overflow-hidden bg-card hover:shadow-lg focus-within:ring-2 focus-within:ring-primary h-full flex flex-col">
      <div className="relative aspect-video">
        <img
          src={course.imageUrl}
          alt={`Thumbnail for ${course.title}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-2 right-2">
          <span
            className={`px-2 py-1 text-xs font-semibold rounded-full ${
              course.completed
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            }`}
          >
            {course.completed ? "Completed" : "In Progress"}
          </span>
        </div>
      </div>
      <div className="p-4 flex flex-col grow">
        <div className="flex justify-between items-start mb-2">
          <h3
            className="text-lg font-bold text-foreground line-clamp-2"
            title={course.title}
          >
            {course.title}
          </h3>
          <span className="text-primary font-bold ml-2 shrink-0">
            {formatPrice(course.price)}
          </span>
        </div>
        <p className="text-muted-foreground text-sm line-clamp-3 mb-4 grow">
          {course.description}
        </p>

        <div className="flex gap-2 mt-auto">
          <button
            onClick={() => toggleCourseStatus(course.id)}
            className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
              course.completed
                ? "bg-muted text-muted-foreground hover:bg-muted/80"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            }`}
            aria-label={
              course.completed ? "Mark as Incomplete" : "Mark as Completed"
            }
          >
            {course.completed ? "Mark Uncomplete" : "Mark Complete"}
          </button>

          <button
            onClick={() => removeCourse(course.id)}
            className="p-2 rounded-md bg-muted text-muted-foreground hover:bg-red-500/10 hover:text-red-500 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 flex items-center justify-center shrink-0"
            aria-label={`Remove ${course.title} from list`}
            title="Remove course"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
};
export default CourseItem;
