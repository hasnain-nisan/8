const Task = require('../models/Task')
const asyncWrapper = require('../middleware/asyncWrapper')
const {createCustomError} = require('../error/customError')

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({})
    res.status(201).json({tasks});
})

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json(task);
})

const getTask = asyncWrapper(async (req, res, next) => {
    const task = await Task.findOne({
        "_id": req.params.id
    })
    if(!task){
        return next(createCustomError('Not found', 404))
        // return res.status(404).json({ "error": `Task not found with id: ${req.params.id}` })
    }
    res.status(201).json({task});
})

const deleteTask = asyncWrapper(async (req, res) => {
    const task = await Task.findOneAndDelete({
        "_id": req.params.id
    })
    if(!task){
        return next(createCustomError('Not found', 404))
        // return res.status(404).json({ "error": `Task not found with id: ${req.params.id}` })
    }
    res.status(201).json({task});
})

const updateTask = asyncWrapper(async (req, res) => {
    const task = await Task.findOneAndUpdate({"_id": req.params.id,}, req.body, {
        new: true,
        runValidators: true
    })
    if(!task){
        return next(createCustomError('Not found', 404))
        // return res.status(404).json({ "error": `Task not found with id: ${req.params.id}` })
    }
    res.status(201).json({task});
})

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}