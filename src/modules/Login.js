import { Link } from 'react-router-dom';
import Footer from "./Footer";
import { useForm } from '../hooks/useForm';

const initialForm = {
    email :"",
    password:""
}

const validationsForm = (form) => {
    let errors = {};
    let regexpemail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexpname = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexpassword = /^.{8,16}$/;
    if(!form.email.trim()){
        errors.email = "El campo correo es requerido";
    }else if(!regexpemail.test(form.email.trim())){
        errors.email = "Formato del email inválido";
    }else{
        if(!form.password.trim()){
            errors.password = "El campo contraseña es requerido";
        }else if(!regexpassword.test(form.password.trim())){
            errors.password = "El campo debe tener mínimo 8 carácteres"
        }
    }
    return errors;
};

export const Login = () => {
    const{
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit} = useForm(initialForm,validationsForm);
    
    return (
        <div>
            <div class="container-fluid position-relative p-4 text-center">
                <div class="col-md-4 px-2 p-lg-3 mx-auto my-5">
                <form class="shadow" onSubmit={handleSubmit}>
                    <label class="px-2 pt-3 pb-1 h5">Ingresar</label>
                    <div class= "p-4 row align-items-center">
                        <label class="col">Correo: </label>
                        <input      
                        type="text" 
                        name="email"
                        placeholder='alguien@example.com'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={form.email}
                        required
                        class="col"/>
                        {errors.email && <div class=" bg-danger mt-2 me-2 text-white shadow">{errors.email}</div>}
                    </div>
                    <div class= "pb-4 px-4 pt-2 row align-items-center">
                        <label class="col">Contraseña: </label>
                        <input 
                        type="password"
                        name="password"
                        placeholder='Contraseña'
                        onBlur={handleBlur} 
                        onChange={handleChange} 
                        value={form.password}
                        required 
                        class="col" />
                        {errors.password && <div class=" bg-danger mt-2 me-2 text-white shadow">{errors.password}</div>}
                    </div>
                    <div class="px-4 pb-4 pt-3 row align-items-center">
                        <div class="px-1  col">                        
                            <input class=" btn btn-dark btn-custom btn-xs " type="submit" value="Ingresar"/>
                        </div>
                        <Link class="col h5" to="/register">Registrate</Link>
                    </div>
                </form>
                </div>
            </div>
            <Footer/>    
        </div>
    );
};

export default Login;

