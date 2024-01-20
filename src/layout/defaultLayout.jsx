import Footer from '../components/footer';
// import CartProvider from '../context/CartProvider';
import { Header } from '../shared/components/Header';
import PropTypes from 'prop-types';

const DefaultLayout = ({ children }) => {
    return ( 
        <>
            <Header />
                    {children}
            <Footer />
        </>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired
};

export default DefaultLayout;