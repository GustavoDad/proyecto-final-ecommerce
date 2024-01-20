import PropTypes from 'prop-types';
import { FaTrash } from "react-icons/fa";
import { useContext } from 'react';
import { CartContext } from '../../../context/CartProvider';
const ProductCart = ({ product }) => {
    const {removeItem} = useContext(CartContext)
    const { name, price, quantity,  image } = product;
    const onRemoveItem = (id) => {
        console.log(id)
        removeItem(id)
    }
    return (
        <div className="d-flex justify-content-between bg-gray-contrast border rounded-3 ">
            <div className='d-flex justify-content-center align-items-center p-3'>
                <img src={image} alt={name} className='cart_img'/>
            </div>
            <div className='d-flex flex-column justify-content-center align-content-center'>
                <div >
                    <p>Producto:</p>
                    <h5>{name}</h5>
                </div>
            </div>
            <div className='d-flex flex-column justify-content-center align-content-center'>
                <div >
                    <p>Cantidad:</p>
                    <p>{quantity}</p>
                </div>
            </div>
            <div className='d-flex flex-column justify-content-center align-content-center'>
                <div>
                    <p>Precio:</p>
                    <p>{price}</p>
                </div>
            </div>
            
            <div className='p-5'>
                <button className="btn" onClick={() => onRemoveItem(product.id)}><FaTrash /></button>
            </div>
        </div>
    );
};

ProductCart.propTypes = {
    product: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired,
};

export default ProductCart;