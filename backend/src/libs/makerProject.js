import moment from "moment";


export function generarEntregasQuery(ENTREGAS, FECHA_INICIAL, FECHA_FINAL){
        const DIAS_PROYECTO = FECHA_FINAL.diff(FECHA_INICIAL, 'days') + 1;
        const NUMEROENTREGAS = parseInt(ENTREGAS, 10);
        const PARTES = Math.floor(DIAS_PROYECTO / NUMEROENTREGAS);
        const DIAS_RESTANTES = DIAS_PROYECTO % NUMEROENTREGAS;
        const ARRAYPARTES = Array(NUMEROENTREGAS).fill(PARTES);

        for (let i = 0; i < DIAS_RESTANTES; i++) {
            ARRAYPARTES[i]++;
        }

        let INICIOPARTE = FECHA_INICIAL.clone();
        const FECHAS = [];

        for(let i = 0; i < NUMEROENTREGAS; i++){
            let FINPARTE = INICIOPARTE.clone().add(PARTES - 1, 'days'); 
            if (i < DIAS_RESTANTES){
                FINPARTE.add(1, 'day'); 
            }
            FECHAS.push({ INICIO: INICIOPARTE.format('YYYY-MM-DD'), FIN: FINPARTE.format('YYYY-MM-DD') });
            INICIOPARTE = FINPARTE.clone().add(1, 'day');  
        }
        return FECHAS;
}

export function generarIteracionesQuery(FECHA_INICIAL, FECHA_FINAL) {
    const DIAS_PROYECTO = FECHA_FINAL.diff(FECHA_INICIAL, 'days') + 1;
    const PARTES = Math.floor(DIAS_PROYECTO / 7);
    const DIAS_RESTANTES = DIAS_PROYECTO % 7;
    const ARRAYPARTES = Array(PARTES).fill(7);

    for (let i = 0; i < DIAS_RESTANTES; i++) {
        ARRAYPARTES[i]++;
    }
    
    let INICIOPARTE = FECHA_INICIAL.clone();
    const FECHAS = [];

    for(let i = 0; i < PARTES; i++){
        let FINPARTE = INICIOPARTE.clone().add(ARRAYPARTES[i] - 1, 'days'); 
        //if (i < DIAS_RESTANTES){
        //    FINPARTE.add(1, 'day'); 
        //}
        FECHAS.push({ 
            INICIO: INICIOPARTE.format('YYYY-MM-DD'), 
            FIN: FINPARTE.format('YYYY-MM-DD') 
        });
        INICIOPARTE = FINPARTE.clone().add(1, 'day');  
    }
    return FECHAS;
}
