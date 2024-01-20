import PropTypes from 'prop-types';

export const AuthLayout = ({ children }) => {
    return (
        <div>
            <div>
                <img src="" alt="slogan" />
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}

AuthLayout.propTypes = {
    children: PropTypes.node.isRequired,
}