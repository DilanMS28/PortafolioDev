import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import Nav from "./components/nav"
import Presentacion from "./components/presentacion"
import About from "./components/about"
import Skills from "./components/skills"
import Call from "./components/call"
import Proyectos from "./components/proyectos"
import Projects from "./components/Projects"
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS

export default function Home() {

  return (
    <div className= "bg-dark">
      <Nav/>
      <Presentacion/>
      <About/>
      <Skills/>
      <Call/> 
      <Proyectos/> 
      {/* <Projects/> */}
    </div>
  )
}
