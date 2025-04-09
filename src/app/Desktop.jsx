


function Desktop(){
    return(
        <>
            <section id="mobile-menu" className="absolute top-0 pt-0 bg-slate-600 w-full text-5xl flex-col justify-center origin-top animate-open-menu hidden">
                <button className="text-8xl self-end">
                    &times;
                </button>
                <nav className="flex flex-col min-h-screen items-center py-2" aria-label="mobile">
                    <a href="#hero" className="w-full text-center hover:opacity-90 hover:text-shadow-2xs active:text-shadow-2xs active:text-sky-300 active:no-underline hover:text-sky-300 hover:no-underline py-4 text-xl font-medium text-white">Home</a>
                    <a href="#about" className="w-full text-center hover:opacity-90 hover:text-shadow-2xs active:text-shadow-2xs active:text-sky-300 active:no-underline hover:text-sky-300 hover:no-underline py-4 text-xl font-medium text-white">About myself</a>
                    <a href="#projects" className="w-full text-center hover:opacity-90 hover:text-shadow-2xs active:text-shadow-2xs active:text-sky-300 active:no-underline hover:text-sky-300 hover:no-underline py-4 text-xl font-medium text-white">Projects</a>
                    <a href="#contact" className="w-full text-center hover:opacity-90 hover:text-shadow-2xs active:text-shadow-2xs active:text-sky-300 active:no-underline hover:text-sky-300 hover:no-underline py-4 text-xl font-medium text-white">Contact me</a>
                </nav>
            </section>
        </>
    );
}

export default Desktop;