import { transporter } from "../libs/mailer.js";

export async function sendemail(email, link){
    return await transporter.sendMail({
        from: '"Clear 👻" <clear@gmail.com>', 
        to: email, 
        subject: "¿Olvidaste tu contraseña?", 
        html: `<div>
        <p>Puedes restablecer tu contraseña con el siguiente link: </p>
        <a href="${link}">${link}</a> 
        <p> =D </p>
        </div>`, 
    });
}