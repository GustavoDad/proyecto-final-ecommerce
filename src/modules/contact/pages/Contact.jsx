

export const ContactPage = () => {

    //submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('enviado');
    }
    return (
        <>
        
        <div className="container">
            <div>
                <h1>FORMULARIO DE CONSULTA</h1>
                <p>le ofrecemos la maxima calidad en nuestros productos, con supervicion de calidad y garantia de 1 año</p>
            </div>
            <div className="d-flex flex-column ">
                <form className="mx-5" onSubmit={handleSubmit}>
                    <div className="d-flex justify-content-around my-2">
                        <div className="w-100 mx-2">
                            <label htmlFor="">Nombre</label>
                            <input  className="w-100" type="text" placeholder="Escriba su nombre"/>
                        </div>
                        <div className="w-100 mx-2">
                            <label htmlFor="">Correo</label>
                            <input  className="w-100" type="text" placeholder="Escribe su correo"/>
                        </div>
                    </div>
                    <div className="d-flex justify-content-around my-2">
                        <div className="w-100 mx-2">
                            <label htmlFor="">Asunto</label>
                            <input  className="w-100" type="text" placeholder="Escribe su asunto"/>
                        </div>
                        <div className="w-100 mx-2">
                            <label htmlFor="">Telefono</label>
                            <input className="w-100" type="text" placeholder="Escribe su telefono"/>
                        </div>
                        
                    </div>
                    <div className="d-flex justify-content-center w-100">
                        <textarea className="w-100 mx-2" name="" id="" cols="30" rows="10" placeholder="Escribe su mensaje"></textarea>
                    </div>
                    <div className="d-flex justify-content-center m-5">
                        <input className="btn bg-primary-light t-white" type="submit" value="Enviar consulta"/>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}