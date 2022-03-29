const getAllTasks = (req, res) => {
    res.send('All ITEMS');
}

const createTask = (req, res) => {
    res.json(req.body);
}

const getTask = (req, res) => {
    res.json({
        "id": req.params.id
    });
}

const updateTask = (req, res) => {
    res.send('Task updated');
}

const deleteTask = (req, res) => {
    res.send('Task deleted');
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}