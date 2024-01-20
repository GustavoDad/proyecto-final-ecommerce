import { NavLink } from "react-router-dom";
import { RegisterForm } from "../components/RegisterForm";
import { useEffect, useState } from "react";
import Logo from "../../../shared/components/Logo";
const RegisterPage = () => {
    const [banner, setBanner] = useState("login__banner");
    useEffect(() => {
        let interval = setInterval(() => {
            if (banner === "login__banner") {
                setBanner("login__banner-1");
            } else if (banner === "login__banner-1") {
                setBanner("login__banner-2");
            } else {
                setBanner("login__banner");
            }

        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, [banner]);
    return (
        <div className={banner}>
            <div className="card login__card">
                <div className="text-center col">
                    <div className="d-flex justify-content-center align-items-center m-2">
                            <Logo />    
                        </div>
                    <div className="row">
                        <h3>Register</h3>
                    </div>
                    <div className="row">
                        <RegisterForm />
                    </div>
                    <div className="row">
                        <p> ya tienes cuenta? <NavLink to={'../login'}>Inicia sesión</NavLink></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default RegisterPage;