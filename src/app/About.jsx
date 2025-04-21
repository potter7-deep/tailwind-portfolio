import myImage from './IMG/image.png'
import Change from './Change.jsx'
import Buttons from './Buttons';


function About(){
    return(
        <section id="about" class="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height">
            <article class="sm:w-1/2">
                <h2 class="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">
                    Hello, It's me, <span class="text-sky-300">Dan Maina.</span> 
                    </h2>
                <h2 class="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">
                    I am a <span class="text-sky-300">Fullstack Developer</span>.
                </h2>
                
                <p class="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
                    I am a fullstack developer with a 
                    passion for creating dynamic and 
                    responsive web applications. I have 
                    experience in both front-end and 
                    back-end development, and I am 
                    always eager to learn new 
                    technologies and improve my skills.
                </p>
                <p class="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
                </p>
            </article>
            <div class="home-img">
                <div class="relative flex justify-center items-center overflow-hidden w-[35vw] h-[35vw] bg-black rounded-2xl p-[7px] mix-blend-lighten">
                    <div class="img-item relative flex justify-center overflow-hidden w-full h-full bg-black bg-cover z-1">
                        <img src={myImage} alt="Dan Maina's Image" class="profile-img"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;