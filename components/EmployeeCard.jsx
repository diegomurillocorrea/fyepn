const EmployeeCard = ({ name, position, description, img, classes }) => {
    return (
        <div>
            <div className={`${classes} flex flex-col items-center justify-center space-y-3 font-righteous`}>
                <div className="p-3 bg-yellow rounded-2xl shadow-2xl">
                    <img className="rounded-xl object-cover h-80 w-72" src={img} alt={`Employee Card ${name} image`} />
                </div>
                <div className="text-center space-y-3 bg-black rounded-2xl p-5 text-white">
                    <div>
                        <p className="text-3xl text-light-blue">
                            {name}
                        </p>
                    </div>
                    <div>
                        <p className="text-xl text text-yellow">
                            {position}
                        </p>
                    </div>
                    <div>
                        <p className="text-justify">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeCard;