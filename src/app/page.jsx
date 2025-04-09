
import Header from "./Header";
import About  from './About';
import Services from "./Services";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Ending from "./End";

export default function Home() {
  return (
    <>
    <main class="max-w-4xl mx-auto">
      <Header/>
      <About/>
        <hr className="mx-auto bg-black dark:bg-white w-1/2"></hr>
      <Services/>
        <hr className="mx-auto bg-black dark:bg-white w-1/2"></hr>
      <Testimonials/>
        <hr className="mx-auto bg-black dark:bg-white w-1/2"></hr>
      <Contact/>
        <hr className="mx-auto bg-black dark:bg-white w-1/2"></hr>
      <Ending/>
    </main>
      
    </>
    
  );
}
