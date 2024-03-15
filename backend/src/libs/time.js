
import moment from'moment-timezone';

export function getTime (){
    const fechaActual = moment();
    const timeZone = 'America/Mexico_City';  
    const formatoFecha = 'YYYY-MM-DD HH:mm:ss';
    const fechaConHusoHorario = fechaActual.tz(timeZone);
    const FECHA_ACTUAL = fechaConHusoHorario.format(formatoFecha);
    return FECHA_ACTUAL;
}
