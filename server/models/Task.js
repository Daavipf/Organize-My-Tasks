const mongoose = require('../db/dbConnect')

const subTaskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    status: {type: String, default: "Pendente"}
}, {timestamps: true})

const taskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    category: {type: String, required: true},
    dueDate: {type: Date, required: true},
    status: {type: String, default: "Pendente"},
    priority: {type: String, default: "Baixa"},
    subTasks: [subTaskSchema]
}, {timestamps: true})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task