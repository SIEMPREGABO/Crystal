import Task from '../models/task.model.js';

//get tasks solo poe id
//const tasks = await Task.find({user: req.user.id}).populate('user');

export const getTasks = async (req,res) =>{
    const tasks = await Task.find();
    res.json(tasks);
}

export const createTask = async (req,res) => {
    const {titulo,descripcion,fecha} = req.body

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
    
    if (!taskFound) return res.status(404).json({message:"Tarea no encontrada"})
    
    res.json(taskFound)
}

export const updateTask = async (req,res) => {
    const taskFound = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true})
    
    if (!taskFound) return res.status(404).json({message:"Tarea no encontrada"})

    res.json(taskFound)



}

export const deleteTask = async (req, res) => {
    const taskFound = await Task.findByIdAndDelete(req.params.id)
    if (!taskFound) return res.status(404).json({message:"Tarea no encontrada"})
    res.json({message: "tarea eliminada"})
    //res.json(taskFound)
}