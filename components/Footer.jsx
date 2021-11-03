const Footer = () => {
    return (
        <div>
            <div className="bg-black text-center py-5 md:py-10 flex flex-col md:flex-row-reverse md:space-y-0 md: justify-center items-center lg:justify-between font-righteous space-y-5 lg:px-20">
                <div className="md:pl-10 lg:pl-0">
                    <p className="text-white text-xs md:text-base lg:text-lg">
                        Copyright &copy; {new Date().getFullYear()}. DevBook &reg; Todos los derechos reservados.
                    </p>
                </div>
                <div>
                    <p className="text-3xl md:text-5xl lg:text-6xl font-righteous">
                        <span className="text-light-blue">{`<`}</span><span className="text-white">Dev</span><span className="text-light-blue">Book </span><span className="text-white">{`/>`}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;