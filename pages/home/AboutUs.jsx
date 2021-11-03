const AboutUs = () => {
    return (
        <div className="bg-light-blue-100">
            <div className="font-righteous py-10 px-5 md:px-8 xl:flex">
                <div className="flex flex-col items-center justify-center space-y-10 xl:w-1/2 xl:space-y-16">
                    <div>
                        <p className="text-3xl md:text-4xl xl:text-5xl">
                            ¿Quiénes somos?
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-10 md:flex-row md:space-y-0 md:space-x-20">
                        <div>
                            <img className="" src="../../img/pet-devbook.png" alt="Robot DevBook image" />
                        </div>
                        <div>
                            <img src="../../img/logo-devbook.png" alt="Logo DevBook image" />
                        </div>
                    </div>
                </div>
                <div className="py-10 xl:w-1/2">
                    <p className="text-justify flex flex-col space-y-10 md:space-y-0 md:gap-10 md:grid md:grid-cols-3 xl:flex xl:text-xl">
                        <span>
                            Somos una plataforma educativa Salvadoreña formada por estudiantes de la Escuela Especializada en Ingeniería ITCA FEPADE, con solidos y amplios conocimientos en diseño, programación y soporte tecnico.
                        </span>
                        <span>
                            DevBook, fundada en el año 2021, como una librería y plataforma educativa para desarrolladores. En nuestra plataforma encontraras todo lo que necesitas aprender sobre desarrollo web, lenguajes de programación, estructuras de datos, algoritmos, bases de datos y librerías de desarrollo.
                        </span>
                        <span>
                            DevBook está orientado a los jóvenes salvadoreños que deseen emprender en plataformas de Freelance como desarrolladores independientes.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;