import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now
    }
},{
    timestamps: true
});

// agregar un usuario a la tarea
// ,user: {type: mongoose.Schema.Types.ObjectId,ref: 'User',required: true}

export default mongoose.model("Task",taskSchema);