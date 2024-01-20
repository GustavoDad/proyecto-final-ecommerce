import Logo from "../shared/components/Logo";
import { LiaMedalSolid } from "react-icons/lia";
// import { PiPhoneDisconnectThin } from "react-icons/pi";
const Footer = () => {
    return (
        <>
        <div className="p-1 bg-primary"></div>
        <div className="bg-footer t-white w-100">
            <div className="footer-content d-flex justify-content-between mx-5 pt-4 flex-md-row flex-column">
                <div className="info d-flex flex-column justify-content-between">
                    <Logo />
                    <div>
                    <LiaMedalSolid /><span> Lideres en tecnología</span>
                    </div>
                    <div>
                    <span> +51 996-328-913</span>
                    </div>
                </div>
                <div className="principal">
                <div className="text-center t-secondary">
                        <h3>Principal</h3>
                    </div>
                    <ul>
                        <p>Inicio</p>
                        <p>Nosotros</p>
                        <p>Producto</p>
                        <p>Contacto</p>
                    </ul>
                </div>
                <div className="social">
                <div className="text-center t-secondary">
                        <h3>Social</h3>
                    </div>
                    <ul>
                        <p>Facebook</p>
                        <p>Twitter</p>
                        <p>Instagram</p>
                        <p>Tiktok</p>
                    </ul>
                </div>
                <div className="otros-servicios">
                    <div className="text-center t-secondary">
                        <h3>Otros servicios</h3>
                    </div>
                    <ul>
                        <p>Soporte</p>
                        <p>Garantia</p>
                        <p>Reclamos</p>
                        <p>Politicas de privacidad</p>
                    </ul>
                </div>
            </div>
            <hr className="m-4" />
            <div className="foot d-flex justify-content-between container flex-md-row flex-column">
                <div>
                    <p>
                        <span className="t-secondary">&copy;2023</span> <span>Powered by GUSTAVO, ALL RIGHTS RESERVED</span>
                    </p>
                </div>
                <div>
                    <p className="correo">
                        <span className="t-secondary"> inf@gusinfotech.pe</span>
                    </p>
                </div>
                {/* <div>
                    <div>
                        <img alt="card1" />
                        <img alt="card2" />
                        <img alt="card3" />
                        <img alt="card4" />
                    </div>
                </div> */}

            </div>

        </div></>
    );
    }
export default Footer;