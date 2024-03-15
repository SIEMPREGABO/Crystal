import moment from "moment";


export function generarEntregas(ENTREGAS, DIAS_ENTREGA, DIAS_RESTANTES,FECHA_INICIAL) {
    const numEntregas = parseInt(ENTREGAS, 10);
    const array = new Array(numEntregas+1);
    array[0] = moment(FECHA_INICIAL).format('YYYY-MM-DD');
    for (let i = 1; i < numEntregas+1; i++){
        let FECHA;
        if (DIAS_RESTANTES>0){
            FECHA = moment(FECHA_INICIAL).add(DIAS_ENTREGA + 1, 'days');
            DIAS_RESTANTES = DIAS_RESTANTES - 1;
        }else{
            FECHA = moment(FECHA_INICIAL).add(DIAS_ENTREGA, 'days');
        }
        array[i] = FECHA.format('YYYY-MM-DD');
        FECHA_INICIAL = FECHA;
    }
    return array;
}

export function generarIteraciones(NUM_ITERACION,DIAS_ITERACION,DIAS_RESTANTES_ITERACION,FECHA_INICIAL_ITERACION){
    const numIteraciones = parseInt(NUM_ITERACION,10);
    const array = new Array(numIteraciones);
    for(let i=0;i<numIteraciones;i++){
        array[i] = 7;
    }
    for(let i=0;i<numIteraciones;i++){
        if(DIAS_RESTANTES_ITERACION>0){
            if(i == (numIteraciones-1)){
                array[i] = array[i] +1;
                DIAS_RESTANTES_ITERACION = DIAS_RESTANTES_ITERACION - 1;
                i=-1;
            }else{
                array[i] = array[i] +1;
                DIAS_RESTANTES_ITERACION = DIAS_RESTANTES_ITERACION - 1;
            }   
        }

    }
    const arrayIteracion = new Array(numIteraciones+1);
    arrayIteracion[0] = moment(FECHA_INICIAL_ITERACION).add(1, 'days').format('YYYY-MM-DD');
    for(let i = 1; i < numIteraciones+1;i++){
        let FECHA;
        FECHA =  moment(FECHA_INICIAL_ITERACION).add(array[i-1], 'days');
        arrayIteracion[i] = FECHA.format('YYYY-MM-DD');
        FECHA_INICIAL_ITERACION = FECHA;
    }
    return(arrayIteracion);
}