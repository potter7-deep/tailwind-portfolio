import Mobile from './Mobile';
import Desktop from './Desktop';


function Header(){
    return(
        <>
            <header className="sticky top-0 z-10" >
                <nav className="header sticky top-0 z-100 left-0 w-full p-6 flex justify-between items-center ">
        
                    <a href="#logo" className="logo text-4xl font-bold text-white cursor-default">Portfolio</a>
            
                    <Desktop/>
                    <Mobile/>
                </nav>
            </header>

            <h1 className='text-6xl '>hello world</h1>
        </>
    );
}

export default Header