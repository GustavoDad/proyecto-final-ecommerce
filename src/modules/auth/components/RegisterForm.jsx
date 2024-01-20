import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { useNavigate } from 'react-router';
export const RegisterForm = () => {
    const {register} = useContext(AuthContext);
    const [registerIsLoading, setRegisterIsLoading] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
        repeatPassword: '',
    });

    const onFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async  (e) => {
        e.preventDefault();
        // TODO: handle form submission
        console.log(formData);
        setRegisterIsLoading(true);
        try {
            await register(formData.email, formData.password, formData.name);
            console.log('Registro exitoso');
            navigate('/home');
            setRegisterIsLoading(false);
        }catch(error) {
            console.log('Registro fallido');
            alert('Registro fallido');
            setRegisterIsLoading(false);
        }
    };
    
    return (
        <form onSubmit={handleSubmit} className='d-flex flex-column mb-3 align-items-center'>
            <div className='w-25 d-flex justify-content-start'>
                <label htmlFor="name" className='m-1'>Nombre:</label>
            </div>
            <input
                name="name"
                type="text"
                value={formData.name}
                onChange={(e) => onFormChange(e)}
                placeholder='Escribe tu nombre'
            />
                
            {/* <div className='w-25 d-flex justify-content-start'>
                <label htmlFor="lastName" className='m-1'>Apellido:</label>
            </div>
            <input
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={(e) => onFormChange(e)}
                placeholder='Escribe tu apellido'
            /> */}
            
            <div className='w-25 d-flex justify-content-start'>
                <label htmlFor="email" className='m-1'>Correo:</label>
            </div>

            <input
                name="email"
                type="email"
                value={formData.email}
                onChange={(e) => onFormChange(e)}
                placeholder='Escribe tu correo'
            />
            
            <div className='w-25 d-flex justify-content-start'>
                <label htmlFor="password" className='m-1'>Contraseña:</label>
            </div>

            <input
                name="password"
                type="password"
                value={formData.password}
                onChange={(e) => onFormChange(e)}
                placeholder= 'Escribe tu contraseña'
            />
            {/* <label htmlFor="repeatPassword">Repite Password:</label> */}
            <div className='w-25 d-flex justify-content-start'>
                <label htmlFor="repeatPassword" className='m-1'>Repite Contraseña:</label>
            </div>
            <input
                name="repeatPassword"
                type="password"
                value={formData.repeatPassword}
                onChange={(e) => onFormChange(e)}
                placeholder= 'Repite tu contraseña'
            />
            <br />
            {registerIsLoading ? <>...</>: <button className="btn bg-primary-light t-white" type="submit">Registrar</button> }
        </form>
    );
    };
