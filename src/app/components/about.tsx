export default function about(){
    return(
        <div className="about container">
            <main className="about d-flex">
                <div className="foto fotoAbout col-lg-5">
                    <img src="https://wexpertos.com/media/images/trabajo-desarrollador-web.jpg" alt=""/>
                </div>
                <div className="saludo saludoAbout col-lg-7">
                    <h1>About <span>Me</span></h1>
                    
                    <p>
                    Front-End Developer, I create web pages with UI/UX user interfaces. I have experience 
                    in the use of multiple technologies and many happy clients with the projects 
                    </p>

                    <a className="btnp" href="#">Contact Me</a>

                </div>
            </main>
        </div>
    )
}