import { NavLink } from "react-router-dom";

export const NotFoundPage = () => (
    <div className="container">
        <h1>404</h1>
        <h2>Pagina no encontrada</h2>
        <p>La pagina que buscas no existe o fue removida</p>
        <NavLink to={'../home'}/>
    </div>
);

