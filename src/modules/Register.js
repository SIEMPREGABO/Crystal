import Footer from "./Footer";
import { useForm } from "../hooks/useForm";

const initialForm = {
    name:"",
    paternlastname:"",
    maternlastname:"",
    number:"",
    email :"",
    repeatemail:"",
    password:"",
    repeatpassword:""
}

const validationsForm = (form) => {
    let errors = {};
    let regexpemail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexpname = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexpassword = /^.{8,16}$/;
    let regexpnumber = /^(\d{2})[-](\d{4})[-](\d{4})$/;
    
    if(!form.name.trim()){
        errors.name = "El campo nombre es requerido";
    }else if(!regexpname.test(form.name.trim())){
        errors.name = "Formato del nombre inválido";
    }else{
        if(!form.paternlastname.trim()){
            errors.paternlastname = "El campo apellido paterno es requerido";
        }else if(!regexpname.test(form.paternlastname.trim())){
            errors.paternlastname = "Formato del apellido paterno inválido";
        }else{
            if(!form.maternlastname.trim()){
                errors.maternlastname = "El campo apellido patertno es requerido";
            }else if(!regexpname.test(form.maternlastname.trim())){
                errors.maternlastname = "Formato del apellido materno inválido";
            }else{
                if(!form.number.trim()){
                    errors.number = "El campo número celular es requerido";
                }else if(!regexpnumber.test(form.number.trim())){
                    errors.number = "Formato del número celular es inválido, ej: xx-xxxx-xxxx";
                }else{
                    if(!form.email.trim()){
                        errors.email = "El campo correo es requerido";
                    }else if(!regexpemail.test(form.email.trim())){
                        errors.email = "Formato del email inválido";
                    }else{
                        if(!form.repeatemail.trim()){
                            errors.repeatemail = "El campo confirmar correo es requerido";
                        }else if(!regexpemail.test(form.email.trim())){
                            errors.repeatemail = "Formato del email inválido";
                        }else if(form.repeatemail !== form.email){
                            errors.repeatemail = "Los emails no coiciden";
                        }else{
                            if(!form.password.trim()){
                                errors.password = "El campo contraseña es requerido";
                            }else if(!regexpassword.test(form.password.trim())){
                                errors.password = "El campo debe tener mínimo 8 carácteres"
                            }else{
                                if(!form.repeatpassword.trim()){
                                    errors.repeatpassword = "El campo confirmar contraseña es requerido";
                                }else if(!regexpassword.test(form.repeatpassword.trim())){
                                    errors.repeatpassword = "El campo debe tener mínimo 8 carácteres";
                                }else if(form.repeatpassword !== form.password){
                                    errors.repeatpassword = "Las contraseñas no coinciden";
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    
    return errors;
};

export const Register = () => {
    const{
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit,} = useForm(initialForm,validationsForm);
    return (
        <div>
            <div class="container-fluid position-relative p-4 text-center">
                <div class="col-md-6 px-2 mx-auto mt-5">
                <form class="shadow" onSubmit={handleSubmit}>
                    <label class="px-2 pt-3 pb-1 h4">Registro</label>
                    <div class= "pt-3 px-5 row align-items-center text-start">
                        <label class="col">Nombre (s) </label>
                        <label class="col ps-5">Apellido Paterno </label>
                    </div>
                    
                    <div class= "pt-1 pb-2 px-3 row justify-content-evenly">
                        
                        <input 
                        class="col-5"
                        type="text"
                        name="name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={form.name}
                        required 
                        placeholder='Nombre'/>
                        
                        
                        <input 
                        class="col-5" 
                        type="text" 
                        name="paternlastname"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={form.paternlastname}
                        required
                        placeholder='Apellido Paterno'/>
                    </div>

                    {errors.name && 
                    <div class="pt-1 pb-2 px-3 row justify-content-evenly">
                        <div class="col-7">
                            <div class=" bg-danger mt-2 me-2 text-white shadow">{errors.name}</div>
                        </div>
                    </div>}
                    
                    {errors.paternlastname && 
                    <div class="pt-1 pb-2 px-3 row justify-content-evenly">
                        <div class="col-7">
                            <div class=" bg-danger mt-2 me-2 text-white shadow">{errors.paternlastname}</div>
                        </div>
                    </div>}

                    <div class= "pt-2 px-5 row align-items-center text-start">
                        <label class="col">Apellido Materno </label>
                        <label class="col ps-5">Número Celular </label>
                    </div>
                    <div class= "pt-1 pb-2 px-3 row justify-content-evenly">
                        <input 
                        class="col-5" 
                        type="text" 
                        placeholder='Apellido Materno'
                        name="maternlastname"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={form.maternlastname}
                        required/>
                        <input 
                        class="col-5" 
                        name="number"
                        type="text" 
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={form.number}
                        required
                        placeholder='xx-xxxx-xxxx'/>
                    </div>
                    
                    {errors.maternlastname && 
                    <div class="pt-1 pb-2 px-3 row justify-content-evenly">
                        <div class="col-7">
                            <div class=" bg-danger mt-2 me-2 text-white shadow">{errors.maternlastname}</div>
                        </div>
                    </div>}

                    {errors.number && 
                    <div class="pt-1 pb-2 px-3 row justify-content-evenly">
                        <div class="px-5">
                            <div class=" bg-danger mt-2 me-2 text-white shadow">{errors.number}</div>
                        </div>
                    </div>}
                    
                    <div class= "pt-2 px-5 row align-items-center text-start">
                        <label class="col">Correo </label>
                        <label class="col ps-5">Confirmar correo </label>
                    </div>
                    <div class= "pt-1 pb-2 px-3 row justify-content-evenly">
                        <input 
                        class="col-5" 
                        type="email"
                        name="email"
                        placeholder='alguien@example.com'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={form.email}
                        required/>

                        <input 
                        class="col-5" 
                        type="email"
                        name="repeatemail"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={form.repeatemail}
                        required
                        placeholder='alguien@example.com'/>
                    </div>

                    {errors.email && 
                    <div class="pt-1 pb-2 px-3 row justify-content-evenly">
                        <div class="col-7">
                            <div class=" bg-danger mt-2 me-2 text-white shadow">{errors.email}</div>
                        </div>
                    </div>}

                    {errors.repeatemail && 
                    <div class="pt-1 pb-2 px-3 row justify-content-evenly">
                        <div class="col-7">
                            <div class=" bg-danger mt-2 me-2 text-white shadow">{errors.repeatemail}</div>
                        </div>
                    </div>}
                

                    <div class= "pt-2 px-5 row align-items-center text-start">
                        <label class="col">Contraseña </label>
                        <label class="col ps-5">Confirmar contraseña </label>
                    </div>
                    <div class= "pt-1 pb-3 px-3 row justify-content-evenly">
                        <input 
                        class="col-5" 
                        type="password" 
                        placeholder='Contraseña'
                        name="password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={form.password}
                        required/>
                        <input 
                        class="col-5" 
                        type="password" 
                        name="repeatpassword"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={form.repeatpassword}
                        required
                        placeholder='Contraseña'/>
                    </div>

                    {errors.password && 
                    <div class="pb-2 px-3 row justify-content-evenly">
                        <div class="col-7">
                            <div class=" bg-danger mt-2 me-2 text-white shadow">{errors.password}</div>
                        </div>
                    </div>}

                    {errors.repeatpassword && 
                    <div class="pb-2 px-3 row justify-content-evenly">
                        <div class="col-7">
                            <div class=" bg-danger mt-2 me-2 text-white shadow">{errors.repeatpassword}</div>
                        </div>
                    </div>}

                    <div class="px-4 pb-4 pt-3 row align-items-center">
                        <div class="px-1  col">                        
                        <input class=" btn btn-dark btn-custom btn-xs " type="submit" value="Registrarse"/>
                        </div>
                    </div>
                </form>
                </div>
            </div>
            <Footer/>    
        </div>
    )
}

export default Register;