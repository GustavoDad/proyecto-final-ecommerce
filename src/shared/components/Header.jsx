import { NavLink } from "react-router-dom"
import { FiShoppingCart } from "react-icons/fi"
import { Badge } from "react-bootstrap"
import Logo  from "./Logo"
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
export const Header = () => {
    const navigate = useNavigate();
    const {getTotalQuantity} = useContext(CartContext)
    const goToCart = () => {
        navigate('/cart');
    }
    return (
        <>
            <div className="d-flex justify-content-between align-items-center p-1 my-2 flex-md-row flex-column">
                <Logo/>
                <div className="navigator d-flex">
                    <div className="nav__pages ">
                        <div className="d-flex flex-md-row flex-column">
                            <NavLink to={'../home'} className={'mx-4 navlink__style'} aria-checked="true">Inicio</NavLink>
                            <NavLink to={'../about'} className={'mx-4 navlink__style'}>Nosotros</NavLink>
                            <NavLink to={'../products'} className={'mx-4 navlink__style'}>Productos</NavLink>
                            <NavLink to={'../contact'} className={'mx-4 navlink__style'}>Contacto</NavLink>
                        </div>
                        
                    </div>
                    <div className="nav__cart d-flex mx-4">
                        <button onClick={goToCart} className="btn">
                            <FiShoppingCart /> <Badge bg="dark">{getTotalQuantity()}</Badge>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
