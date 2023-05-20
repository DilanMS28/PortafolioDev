import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import Nav from "./components/nav"
import Presentation from "./presentation/page"
import About from "./about/page"
import Skills from "./components/skills"
import Call from "./components/call"
import Proyectos from "./components/proyectos"
import Projects from "./projects/page"
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS

export default function Home() {

  return (
    <div className= "bg-dark">
      <Presentation/>
      <About/>
      <Skills/>
      <Call/> 
      <Proyectos/> 
      {/* <Projects/> */}
    </div>
  )
}
