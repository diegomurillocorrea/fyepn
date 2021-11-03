import CourseCard from "../../components/CourseCard";
import { coursesData } from "../../lib/coursesData";

const Courses = () => {
    return (
        <div className="bg-light-blue">
            <div className="py-10 px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 md:gap-5 xl:grid-cols-3 xl:gap-8 xl:px-10 mx-auto max-w-screen-2xl">
                {coursesData.map(({ nameCourse, description, img }, key) => (
                    <CourseCard
                        nameCourse={nameCourse}
                        description={description}
                        img={img}
                        key={`course-card-image-${key}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Courses;