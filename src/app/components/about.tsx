import ImgAbout from "../img/programacion.png"

export default function about(){
    return(
        <div className="about container">
            <main className="about d-flex">
                <div className="foto fotoAbout col-lg-5">
                    <img src="https://www.wearemarketing.com/media/cache/dynamic/rc/RzS9Lesh//uploads/media/default/0001/21/1778829c66b7800a38a5c6ec92827c482fc056cb.jpeg" alt=""/>
                </div>
                <div className="saludo saludoAbout col-lg-7">
                    <h1>About <span>Me</span></h1>
                    
                    <p>
                    Front-End Developer, I create web pages with UI/UX user interfaces. I have experience 
                    in the use of multiple technologies and many happy clients with the projects 
                    </p>

                    <a className="btnp btn-about" href="#">Contact Me</a>

                </div>
            </main>
        </div>
    )
}