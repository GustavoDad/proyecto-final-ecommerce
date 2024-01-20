import { LoginForm } from "../components/LoginForm";
import { NavLink } from "react-router-dom";
import {  useEffect, useState } from "react";
import Logo from "../../../shared/components/Logo";
const LoginPage = () => {
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

        }, 3000);
        return () => {
            clearInterval(interval);
        }
    }, [banner]);
    return (
        <div className={banner}>
            <div className="card login__card">
                <div className="text-center col">
                    <div>
                        <div className="d-flex justify-content-center align-items-center m-2">
                            <Logo />    
                        </div>
                        <h3>Login</h3>
                        <LoginForm />
                        <p> No tienes cuenta? <NavLink to={'../register'}>Registrate</NavLink></p>
                    </div>
                </div>
             </div>
        </div>
    );
}
export default LoginPage;