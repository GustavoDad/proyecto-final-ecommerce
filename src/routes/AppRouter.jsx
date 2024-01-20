import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from '../modules/auth/pages/Login';
import RegisterPage from '../modules/auth/pages/Register';
import { HomePage } from '../modules/home/pages/Home';
import { NotFoundPage } from '../public/pages/NotFound';
import { AboutPage } from '../modules/products/pages/About';
import { ContactPage } from '../modules/contact/pages/Contact';
import ProductPage  from '../modules/products/pages/Products';
import Cart from '../modules/cart/pages/Cart';
import DefaultLayout from '../layout/defaultLayout';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
const useDefaultLayout = (page) => {
    return ( 
        <DefaultLayout>{page}</DefaultLayout>       
    );
}

const AppRouter = () => {
        const {user} = useContext(AuthContext);
        return (
            <Routes>
                {/* public pages*/}
                <Route path="login" element={<LoginPage/>} />
                <Route path="register" element={<RegisterPage/>} />
                <Route path="not-found" element={<NotFoundPage/>} />
                <Route path="cart" element={<Cart/>} />

                {/* using defaul layout */}
                <Route path="home" element={useDefaultLayout(<HomePage/>)} />
                <Route path="products" element={useDefaultLayout(<ProductPage/>)} />
                <Route path="about" element={useDefaultLayout(<AboutPage/>)} />
                <Route path="contact" element={useDefaultLayout(<ContactPage/>)} />
                
                {/* not found */}
                <Route path="/*" element={<Navigate to={'not-found'} />} />
                <Route path="/" element={user ? <Navigate to={'home'} /> : <Navigate to={'login'} />} />
            </Routes>
        )
}
export default AppRouter;