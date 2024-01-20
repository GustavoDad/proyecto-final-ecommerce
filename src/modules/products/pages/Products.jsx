
import Product from "../components/Product";
import { useEffect, useState } from "react";
import {Services} from '../../../services/Services.js';
import { Form } from "react-bootstrap";
const ProductPage = () => {
    const [products, setProducts] = useState([]); // [
    const [allProducts, setAllProducts]  = useState([]);
    const searchProduct = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        const productsFiltered = allProducts.filter((product) => product.name.toLowerCase().includes(e.target.value.toLowerCase()));
        setProducts(productsFiltered);
    }

    useEffect(() => {
        console.log("Products Page Mounted");
        Services.getInstance().getLocalProducts().then((products) => {
            setProducts(products);
            setAllProducts(products);
        });
    }
    , []);

    return (
        <>
        {/* <Header /> */}
        <div className="container">
            {/* <h1 className="text-center"> Nuestros Productos</h1> */}
            <div className="searcher container">
                
                    {/* <InputGroup.Text id="basic-addon1"><FaSearch /></InputGroup.Text> */}
                        <Form.Text className="text-center">
                            Busca tu producto
                        </Form.Text>
                        <Form.Control
                        placeholder="Busca algo"
                        aria-label="Buscar"
                        aria-describedby="basic-addon1"
                        // className="mx-2"
                        onChange={searchProduct}
                        />
                
                {/* <input type="text" placeholder="Buscar" className="mx-2"/>
                <button className="btn bg-primary-light t-white"><FaSearch /></button> */}
            </div>
            <div className="row">
                {products.length === 0 ? <NoProducts /> :
                products.map((product) => {
                    return (
                        <div className="col-12 col-sm-6 col-md-3 " key={product.id}>
                            <Product product={product} />
                        </div>
                    );
                })
                }
            </div>
        </div>
        <br />
        {/* <Footer /> */}
        </>
    )
}

const NoProducts = () => {
    return (
        <div className="d-flex justify-content-center align-items-center t-secondary products__no__products__size">
            <p>No hay productos</p>
        </div>
    )
}
export default ProductPage;