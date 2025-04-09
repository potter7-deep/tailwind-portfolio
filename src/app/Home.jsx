import photo from './IMG/image.png'


function Home(){
    return(
        <>
            <div id="home">
                <section className="flex justify-center items-center h-full p-15 text-white gap-12.5 ">
                    <div className="w-90  ">
                        <h3 className="inline-block relative text-sky-300 text-4xl -mt-2.5 mb-5">Hello, It's me,</h3>
                        <h1 className="text-6xl font-bold mb-5 leading-[1.2]">Dan Maina.   </h1>
                        <h3 className="inline-block relative text-sky-300 text-4xl -mt-2.5 mb-5">I'm a 
                            <Change/>
                        </h3>
                        
                        <div className="flex items-center gap-5 mt-7.5">
                            <a href="#" className="btn inline-block pt-3 pb-3 pl-7.5 pr-7.5 font-medium text-slate-600 bg-cyan-300 border-none rounded-md cursor-pointer shadow-cyan-500/50 hover:bg-slate-600 hover:text-cyan-300 hover:shadow-cyan-500/50">Download CV</a>
                            <div className="sci">
                                <a className="btn text-inherit p-2 no-underline ml-2 mr-2 text-xl bg-cyan-300 shadow " href="#"><i className='bx bxl-github'></i></a>
                                <a href="#"><i className='bx bxl-instagram'></i></a>
                                <a href="#"><i className='bx bxl-linkedin'></i></a>
                                <a href="#"><i className='bx bx-x'></i></a>
                            </div>
                        </div>
                    </div>
            
                    <div className="home-img">
                        <div className="img-box">
                            <div className="img-item">
                                <img src={photo} alt="Dan Maina's Image" className="profile-img"/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Home;