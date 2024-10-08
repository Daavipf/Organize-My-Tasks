const Task = require('../models/Task')
const hasEmptyFields = require('../helpers/hasEmptyFields')

module.exports = class TaskController {
    static async createTask(req, res){
        const entries = {
            title: req.body.title,
            description: req.body.description,
            priority: req.body.priority,
            category: req.body.category,
            status: req.body.status,
            dueDate: req.body.dueDate
        }

        if(hasEmptyFields(entries)){
            return res.status(422).json({message:"Preencha todos os campos"})
        }

        try {
            const task = new Task(entries)
            await task.save()
            return res.status(201).json({message:"Tarefa salva"})
        } catch (error) {
            return res.status(500).json({message:"Houve um erro ao salvar a tarefa"})
        }   
    }

    static async createSubTask(req, res){
        const entries = {
            title: req.body.title,
            status: req.body.status,
        }
        if(hasEmptyFields(entries)){
            return res.status(422).json({message:"Preencha todos os campos"})
        }

        try {
            const taskId = req.params.id
            const task = await Task.findById(taskId)
            if(!task){
                return res.status(404).json({message:"Tarefa não encontrada"})
            }
            //const subTask = new SubTask(entries)
            task.subTasks.push(entries)
            await task.save()
            return res.status(201).json({message:`Sub-Tarefa adicionada a ${task.title}`})
        } catch (error) {
            return res.status(500).json({message:"Houve um erro ao salvar a sub-tarefa"})
        }   
    }

    static async readAllTasks(req, res){
        try {
            const tasks = await Task.find()
            return res.status(200).json(tasks)
        } catch (error) {
            return res.status(500).json({message:"Houve um erro ao buscar todas as tarefas"})
        }
    }

    static async readTask(req, res){
        const taskId = req.params.id
        try {
            const task = await Task.findById(taskId)
            if(!task){
                return res.status(404).json({message:"Tarefa não encontrada"})
            }
            return res.status(200).json(task)
        } catch (error) {
            return res.status(500).json({message:"Houve um erro ao buscar todas as tarefas"})
        }
    }

    static async updateTask(req, res){
        const entries = {
            title: req.body.title,
            description: req.body.description,
            priority: req.body.priority,
            category: req.body.category,
            status: req.body.status,
            dueDate: req.body.dueDate
        }
        /*
        if(hasEmptyFields(entries)){
            return res.status(422).json({message:"Preencha todos os campos"})
        }
        */

        try {
            const taskId = req.params.id
            await Task.findByIdAndUpdate(taskId, entries)
            return res.status(201).json({message:"Tarefa Atualizada"})
        } catch (error) {
            return res.status(500).json({message:"Houve um erro ao atualizar as tarefas"})
        }
    }

    static async deleteTask(req, res){
        const taskId = req.params.id
        try {
            const task = await Task.findById(taskId)
            if(!task){
                return res.status(404).json({message:"A tarefa não existe"})
            }
            await Task.findByIdAndDelete(taskId)
            return res.status(201).json({message:"Tarefa apagada"})
        } catch (error) {
            return res.status(500).json({message:"Houve um erro ao deletar uma tarefa"})
        }
    }

    static async deleteSubTask(req, res){
        const taskId = req.params.taskId
        const subTaskId = req.params.subTaskId
        try {
            const task = await Task.findById(taskId)
            await task.subTasks.id(subTaskId).deleteOne()
            await task.save()
            return res.status(200).json({message:"Sub-tarefa apagada"})
        } catch (error) {
            return res.status(500).json({message:"Houve um erro ao deletar uma subtarefa"})
        }
    }
}