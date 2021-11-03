const CourseCard = ({ nameCourse, description, img }) => {
    return (
        <div>
            <div className="font-righteous flex flex-col items-center justify-center px-1 space-y-3 py-5 md:space-y-5 xl:space-y-8">
                <div>
                    <p className="text-3xl">
                        {nameCourse}
                    </p>
                </div>
                <div>
                    <p className="text-justify">
                        {description}
                    </p>
                </div>
                <div className="bg-white rounded-xl shadow-xl p-2">
                    <img className="rounded-lg md:object-cover md:h-64" src={img} alt={`Course Card ${nameCourse} image`} />
                </div>
            </div>
        </div>
    );
};

export default CourseCard;