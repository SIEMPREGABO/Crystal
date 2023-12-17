import { transporter } from "../libs/mailer.js";

export async function sendemail(email, link){
    //const info = 
    return await transporter.sendMail({
        from: '"Clear 👻" <clear@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "¿Olvidaste tu contraseña?", // Subject line
        html: `<div>
        <p>Puedes restablecer tu contraseña con el siguiente link: </p>
        <a href="${link}">${link}</a> 
        <p> =D </p>
        </div>`, // html body
    });
}