import { transporter } from "../libs/mailer.js";

export async function sendemailReset(email, link){
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

export async function sendemailInvite(email){
    return await transporter.sendMail({
        from: '"Clear 👻" <clear@gmail.com>', 
        to: email, 
        subject: "Invitación a colaborar en Clear",
        html: `<div> Te han invitadp a colaborar e un proyecto, crea tu cuenta en clear y empieza tu proyecto </div>`,
    });
}