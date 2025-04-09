import Mobile from './Mobile';
import Desktop from './Desktop';


function Header(){
    return(
        <>
            <header class="backdrop-blur-md text-white sticky top-0 z-10 max-w-full">
                <section class="max-w-full mx-auto p-4 flex justify-between items-center">
                    <h1 class="text-4xl font-bold cursor-pointer">
                        <a href="#hero">D A N .</a>
                    </h1>
                    <Desktop/>
                </section>
                <Mobile/>
            </header>
        </>
    );
}

export default Header