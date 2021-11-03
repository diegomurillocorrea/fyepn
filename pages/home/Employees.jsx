import EmployeeCard from "../../components/EmployeeCard";
import { employeeData } from "../../lib/employeeData";

const Employees = () => {
    return (
        <div className="bg-light-blue-100">
            <div className="py-10 px-5 xl:hidden">
                <div className="grid grid-cols-1 space-y-14 md:grid-cols-2 md:space-y-0 md:gap-5">
                    {employeeData.map(({ name, position, description, img }, key) => (
                        name !== "Mario Delgado" ?
                            (<EmployeeCard
                                name={name}
                                position={position}
                                description={description}
                                img={img}
                                key={key}
                                classes="md:w-full mx-auto"
                            />) : ""
                    ))}
                </div>
                <div className="pt-14 flex flex-col ">
                    {employeeData.map(({ name, position, description, img }, key) => (
                        name === "Mario Delgado" ?
                            (<EmployeeCard
                                name={name}
                                position={position}
                                description={description}
                                img={img}
                                key={key}
                                classes="md:w-7/12 mx-auto"
                            />) : ""
                    ))}
                </div>
            </div>
            <div className="hidden xl:grid xl:grid-cols-3 xl:gap-5 xl:px-10 xl:py-20 mx-auto max-w-screen-2xl">
                {employeeData.map(({ name, position, description, img }, key) => (
                    (<EmployeeCard
                        name={name}
                        position={position}
                        description={description}
                        img={img}
                        key={key}
                        classes="w-11/12 mx-auto"
                    />)
                ))}
            </div>
        </div>
    );
};

export default Employees;