import { useEffect, useState} from 'react';
export const HomePage = () => {
    const [banner, setBanner] = useState("home__banner");
    useEffect(() => {
        let interval = setInterval(() => {
            if (banner === "home__banner") {
                setBanner("home__banner-1");
            } else if (banner === "home__banner-1") {
                setBanner("home__banner-2");
            } else {
                setBanner("home__banner");
            }

        }, 3000);
        return () => {
            clearInterval(interval);
        }
    }, [banner]);

    return (
        <>
        {/* <Header /> */}
            <div className={banner}>
                <div className="home__banner__content px-5">
                    <h6 className="t-secondary">EDITE Y RENDERIZE</h6>
                    <span className="bg-primary t-white px-2 py-1">NIVEL TOTALMENTE NUEVO</span>    
                    <h1 className="t-white">Hágalo con<br/>rapidez</h1>
                    <strong className="t-white">Procesador</strong> <span className="t-secondary"> <strong>CORE I7</strong></span>
                </div>
            </div>
        {/* <Footer /> */}
        </>
    )
}