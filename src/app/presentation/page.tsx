export default function presentacion() {
    return (
        <div className="presentacion container">
            <main className="main d-flex">

                <div className="saludo col-lg-6">
                    <div className="contenedorSaludo mx-auto">
                        <h1>Hello <span> I'm Dilan </span></h1>
                        <p>
                        A Web Designer and Front-End Software Developer from Costa Rica. I create bespoke websites to help people go further online 
                        </p>

                        <a className="btnp" href="https://www.linkedin.com/in/dmsportafolio/">Let's work together!</a>

                        <div className="iconos">
                            <a href=""></a>
                        </div>


                    </div>
                </div>

                <div className="foto col-lg-6">
                    <img src="https://wexpertos.com/media/images/trabajo-desarrollador-web.jpg" alt=""/>
                </div>
            </main>

        </div>
    )
}