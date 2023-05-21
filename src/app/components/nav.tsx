import Link from "next/link"
import Image from 'next/image';

export default function navegacion(){
    return(
        <div className="navegacion d-flex bg-dark">

            <div className="perfil col-lg-2">
                <Image src="/img/nav.png" width={200} height={100} alt="Logo marca personal" />
                {/* <img src="https://images.vexels.com/content/204038/preview/web-developer-logo-design-29b5d4.png" alt="" /> */}
            </div>

            <div className="nav col-lg-10">
                <nav>
                    <a href="#presentacion">Home</a>
                    <a href="#about">About Me</a>
                    <a href="#callaction">Contact</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                </nav>
            </div>

        </div>
    )
}