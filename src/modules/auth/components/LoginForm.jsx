import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
export const LoginForm = () => {
    const {login} = useContext(AuthContext);
    const [loginIsLoading, setLoginIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();


    const onFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // TODO: handle form submission
        console.log(formData);
        setLoginIsLoading(true);
        try {
             await  login({email:formData.email, password: formData.password});
             console.log('Login exitoso');
             navigate('/home');
             setLoginIsLoading(false);
        } catch(error) {
            console.log('Login fallido');
            alert('Login fallido');
            setLoginIsLoading(false);
        }
    };
    
    return (
        <form onSubmit={handleSubmit} className='d-flex flex-column mb-3 align-items-center'>
        {/* <label htmlFor="email">Email</label> */}
        <div className='w-25 d-flex justify-content-start'>
            <label htmlFor="email" className='m-1'>Correo:</label>
        </div>
        <input
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) => onFormChange(e)}
            placeholder='Escibe tu correo'
        />
        {/* <label htmlFor="password">Password</label> */}
        <div className='w-25 d-flex justify-content-start'>
            <label htmlFor="password" className='m-1'>Contraseña:</label>
        </div>
        <input
            name="password"
            type="password"
            value={formData.password}
            onChange={(e) => onFormChange(e)}
            placeholder='Escribe tu contraseña'
        />
        <br />
        {loginIsLoading ? <>...</>: <button className="btn bg-primary-light t-white" type="submit">Ingresar</button>}
        </form>
    );
    };
