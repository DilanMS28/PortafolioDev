import Link from "next/link"

export default function navegacion(){
    return(
        <div className="navegacion d-flex bg-dark">

            <div className="perfil col-lg-2">
                <img src="https://images.vexels.com/content/204038/preview/web-developer-logo-design-29b5d4.png" alt="" />
            </div>

            <div className="nav col-lg-10">
                <nav>
                    <a href="">Inicio</a>
                    <a href="">Sobre Mi</a>
                    <a href="">Contacto</a>
                    <a href="">Proyectos</a>
                </nav>
            </div>

        </div>
    )
}