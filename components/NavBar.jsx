const NavBar = () => {
    return (
        <div>
            <div className="bg-black text-center py-5 md:py-10">
                <p className="text-3xl md:text-5xl lg:text-6xl font-righteous">
                    <span className="text-light-blue">{`<`}</span><span className="text-white">Dev</span><span className="text-light-blue">Book </span><span className="text-white">{`/>`}</span>
                </p>
            </div>
        </div>
    );
};

export default NavBar;