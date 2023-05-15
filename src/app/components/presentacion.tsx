export default function presentacion() {
    return (
        <div className="presentacion container">
            <main className="main d-flex">

                <div className="saludo col-lg-6">
                    <div className="contenedorSaludo">
                        <h1>Hey I'm Dilan</h1>
                        <p>
                        A web designer and developer from Costa Rica. I create bespoke websites to help people go further online 
                        </p>
                    </div>
                </div>

                <div className="foto col-lg-6">
                    <img src="https://wexpertos.com/media/images/trabajo-desarrollador-web.jpg" alt=""/>
                </div>
            </main>

            <a className="btn btn-info" href="#">Let's work together!</a>

        </div>
    )
}