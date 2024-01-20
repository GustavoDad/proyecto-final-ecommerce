import PropTypes from 'prop-types';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartProvider';
import { FaHeart } from "react-icons/fa";
const Product = ({ product }) => {
    const {addItem} = useContext(CartContext)
    const handleClick = () => {
        addItem(product, 1)
    };
    return (
        <div className='d-flex flex-column align-items-center justify-content-center p-4 m-2 w-100 border-0 '>
            <div className='size-img-product'>
                <img src={product.image} alt={product.name} className='w-100 h-100'/>
            </div>
            <br />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={handleClick} className='btn-primary text-white btn'> <FaHeart className='text-danger'/> Agregar</button>
        </div>
    );
}

Product.propTypes = {
    product: PropTypes.object.isRequired,
};

export default Product;