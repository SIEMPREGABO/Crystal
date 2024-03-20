import moment from 'moment-timezone';
import { generarEntregas, generarIteraciones } from '../libs/makerProject.js';
import { zonaHoraria } from '../config.js';


export const createProject = async (req, res) => {
    const FECHA_ACTUAL = moment().tz(zonaHoraria);
    const { NOMBRE_PROYECTO, OBJETIVO, DESCRIPCION, FECHA_INICIO, FECHA_TERMINO, ENTREGAS, ITERACIONES } = req.body;
    //La constitucion son los dias que tienen antes de comenzar el proyecto #Quitar
    try {
        const FECHA_INICIAL = moment(FECHA_INICIO).tz(zonaHoraria);const FECHA_FINAL = moment(FECHA_TERMINO).tz(zonaHoraria);
        if (FECHA_INICIAL.isBefore(FECHA_ACTUAL)) return res.status(400).json({ message: ["Fecha inicial incorrecta"] });
        if (FECHA_FINAL.isBefore(FECHA_INICIAL)) return res.status(400).json({ message: ["Fecha final incorrecta"] });
        const DIAS_PROYECTO = Math.floor((FECHA_FINAL - FECHA_INICIAL) / (1000 * 60 * 60 * 24));
        
        if(DIAS_PROYECTO < 90) return res.status(400).json({message: ["El proyecto debe durar minimo 3 meses"]});
        if(DIAS_PROYECTO > 365) return res.status(400).json({message: ["El proyecto debe durar maximo 1 año"]});
        
        const DIAS_ENTREGA = Math.floor(DIAS_PROYECTO/ENTREGAS); const DIAS_RESTANTES = DIAS_PROYECTO%ENTREGAS;
        const arregloEntrega = generarEntregas(ENTREGAS,DIAS_ENTREGA,DIAS_RESTANTES,FECHA_INICIAL);
        console.log(arregloEntrega);
        for(let i=0; i<arregloEntrega.length-1;i++){
            const FECHA_INICIAL_ITERACION= moment(arregloEntrega[i]);
            const FECHA_FINAL_ITERACION = moment(arregloEntrega[i+1]);
            const DIAS_ENTREGA= Math.floor((FECHA_FINAL_ITERACION - FECHA_INICIAL_ITERACION) / (1000 * 60 * 60 * 24));
            const NUM_ITERACION = Math.floor(DIAS_ENTREGA/7); const DIAS_RESTANTES_ITERACION = DIAS_ENTREGA%7;
            const arrayIteracion = generarIteraciones(NUM_ITERACION,7,DIAS_RESTANTES_ITERACION,FECHA_INICIAL_ITERACION);
            console.log(arrayIteracion);
        }
        //const arregloIteraciones = generarIteraciones(arregloEntrega);

    } catch (error) {
        res.status(500).json({ message: [error.message] })
    }
}

export const getProjects = async (res, req) => {
    try {
        const {token} = req.cookies;
        //if(!token) return res.status(401).json({message: ["No autorizado"]});
        jwt.verify(token, SECRET_TOKEN, async (error, user) => {
            if (error) return res.status(401).json({ message: ["No autorizado"] });
            const proyectos = await projectsUsuario(user.id);
            if (!proyectos.success) return res.status(401).json({ message: ["No autorizado"] });
            return res.json({
                PROYECTOS: proyectos.projects 
            })
        })
    } catch (error) {
        res.status(500).json({message: [error.message]})
    }
}

export const getTasks = async (req, res) => {
    try {
        const tasks = await getTasks();
        if (!tasks.success) res.status(500).json({ mensaje: ["Error en la base de datos"] });
        if (tasks.vacio) res.status(200).json({ mensaje: ["No hay mensajes por mostrar"] });
        res.status(200).json({
            tasks: tasks.results
        });
    } catch (error) {
        res.status(500).json({ mensaje: ["Error inesperado, intentalo nuevamente"] });
    }
}

export const createTask = async (req, res) => {
    const { titulo, descripcion, fecha } = req.body

    const newTask = new Task({
        titulo,
        descripcion,
        fecha
    })

    const saveTask = await newTask.save();
    res.json(saveTask);
}

export const getTask = async (req, res) => {
    const taskFound = await Task.findById(req.params.id)

    if (!taskFound) return res.status(404).json({ message: "Tarea no encontrada" })

    res.json(taskFound)
}

export const updateTask = async (req, res) => {
    const taskFound = await Task.updateOne(req.params.id, req.body, { new: true })

    if (!taskFound) return res.status(404).json({ message: "Tarea no encontrada" })

    res.json(taskFound)



}

export const deleteTask = async (req, res) => {
    const taskFound = await Task.findByIdAndDelete(req.params.id)
    if (!taskFound) return res.status(404).json({ message: "Tarea no encontrada" })
    res.json({ message: "tarea eliminada" })
    //res.json(taskFound)
}

export const obtenerMensajes = async (req, res) => {
    try {
        const mensajes = await getMensajes();
        if (!mensajes.success) res.status(500).json({ mensaje: ["Error en la base de datos"] });
        if (mensajes.vacio) res.status(200).json({ mensaje: ["No hay mensajes por mostrar"] });
        res.status(200).json({
            mensajes: mensajes.results
        });
    } catch (error) {
        res.status(500).json({ mensaje: ["Error inesperado, intentalo nuevamente"] });
    }
}

