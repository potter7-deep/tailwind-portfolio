import Image from "next/image";
import Header from "./Header";
import Home from "./Home";

export default function Home() {
  return (
    <>
      <Header/>
      <Home/>
    <h1 className="text-7xl bg-slate-500">
      Hello world
    </h1>
    </>
    
  );
}
