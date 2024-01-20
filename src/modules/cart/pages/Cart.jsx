import Logo from "../../../shared/components/Logo";
import ProductCart from "../components/ProductCart";
import { MdCleaningServices } from "react-icons/md";
import { FaCcAmazonPay } from "react-icons/fa6";
import { IoReturnDownBackSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartProvider";
import PropTypes from 'prop-types';

const CartPage = () => {
    const [modal, setModal] = useState(false);
    const {cartItems, clear, getTotalPrice, getTotalQuantity} = useContext(CartContext)
    const showModal = (content) => {
        return (
            <ModalDeCompraParaActivar status={modal} setModal={setModal} content={content} clear={clear}/>
        )
    }
        
    return (
        <div className="cart">
            { getTotalQuantity() !== 0 ? 
            showModal("Compra realizada con exito!"): 
            showModal("No hay productos seleccionados pero puedes seguir comprando!")
            }
            
            <div className="mx-5 h-100">
                <div className="row h-100">
                    <div className="col-3 p-5">
                        <div className="h-50 d-flex justify-content-center align-content-center">
                            {/* <div className=""> */}
                                <Logo />
                            {/* </div> */}
                        </div>
                        <div className="t-white p-1 text-center border-0 rounded d-flex flex-column">
                                <button className="btn text-white">
                                    <IoReturnDownBackSharp /><strong> <NavLink to={'../products'} className={"text-white"}>Seguir Comprando</NavLink></strong>
                                </button>
                                <button className="btn text-white">
                                    <FaHome/> <strong><NavLink to={'../home'} className={"text-white"}>Home</NavLink></strong>
                                </button>
                        </div>
                    </div>
                    <div className="col-9 p-5">
                        <div className="cart__content bg-gray card p-5 t-primary">
                            <div className="px-5 py-2">
                                <h3> <strong>Mi Carrito</strong></h3>
                            </div>
                            <div className="w-100 px-5 ">
                                <div className="overflow-container">
                                    {   cartItems.length === 0 ? <NoProducts/> : 
                                        cartItems.map((product) => (
                                        <div key={product.id} className="w-100 my-2">
                                            <ProductCart  product={product}/>
                                        </div>))
                                    }
                                </div>
                                <div className="d-flex justify-content-between my-4">
                                    <div>
                                        <button className="btn" onClick={()=>{clear()}}><MdCleaningServices title="vaciar carrito" /> Limpiar todo</button>
                                    </div>
                                    <div className="d-flex">
                                        <div className="mx-5">Total: {getTotalPrice()}</div>
                                        <div>
                                            <button className="btn" onClick={()=>{
                                                setModal(true)
                                            }}><FaCcAmazonPay/> Comprar ahora</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    };

const NoProducts = () => {
    return (
        <div className="d-flex justify-content-center align-items-center t-secondary">
            <p>No hay productos seleccionados</p>
        </div>
    )
}



const ModalDeCompraParaActivar = ({status, setModal, clear, content}) => {

    const handleClick = () => {
        setModal(false)
        clear();
    }
    if (!status) return null;
    return (
        <div className="modal-a" onClick={handleClick}>
            <div className="modal-a__content d-flex justify-content-center align-items-center p-5 rounded-5">
                <div>
                    <h1 className="text-center">{content}</h1>
                </div>
            </div>
        </div>
    )
}

ModalDeCompraParaActivar.propTypes = {
    status: PropTypes.bool.isRequired,
    setModal: PropTypes.func.isRequired,
    content: PropTypes.string.isRequired,
    clear: PropTypes.func.isRequired,
};
export default CartPage;