const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')

router.post('/create', TaskController.createTask)
router.post('/create-subtask/:id', TaskController.createSubTask)
router.get('/read-tasks', TaskController.readAllTasks)
router.get('/read/:id', TaskController.readTask)
router.put('/update/:id', TaskController.updateTask)
router.delete('/delete/:id', TaskController.deleteTask)
router.delete('/delete-subtask/:taskId/:subTaskId', TaskController.deleteSubTask)

module.exports = router