


function Mobile(){
    return(
        <div>
            <button id="mobile-button" className="text-3xl md:hidden cursor-pointer">
                &#9776;
            </button>
            <nav className="hidden md:block space-x-8 text-xl" arial-label="main">
                <a href="#about" className="hover:opacity-90">About myself.</a>
                <a href="#projects" className="hover:opacity-90">Projects</a>
                <a href="#contact" className="hover:opacity-90">Contact me</a>
            </nav>
        </div>
    );
}

export default Mobile