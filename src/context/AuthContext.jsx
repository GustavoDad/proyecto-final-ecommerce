import { createContext } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import {Services} from '../services/Services.js'
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    
    const login = async ({
        email,
        password
    }) => {
            console.log("authProvider ",email, password);
            try {
                await Services.getInstance().login(email, password);
                setUser({email, password});
            } catch (error) {
                setUser(null);
                throw error;
            }
              
    }
    const register = (email, password, name) => {
         console.log("authProvider register", );
        return Services.getInstance().register(email, password, name);
    }
    return (
        <AuthContext.Provider value={{
            user,
            login,
            register,
            // logout
        }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;