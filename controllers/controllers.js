const Tasks = require('../models/task')

exports.defaultFun = (req, res) => {
    res.send("YPIEE!!!.... Backend Started")
}

exports.getTasks = (req, res) => {
    Tasks.find({})
        .then((taskData) => {
            console.log(taskData);
            res.send(taskData)
        }).catch(e => console.log(e));
}

exports.addTask = (req, res) => {
    let taskName = req.body.taskName;
    const task = new Tasks();
    task.taskName = taskName
    task.save()
        .then((msg) => { res.send(`message: created ${task.taskName}`) })
        .catch((err) => { })
}

exports.deleteTask = async (req, res) => {
    const { id } = req.params;
    console.log("delete:" + id);
    await Tasks.findByIdAndDelete(id)
        .then(() => res.send(` deleted`))
        .catch(err => res.status(400).json('Error: ' + err));
}

exports.updateTask = async (req, res) => {
    const { id } = req.params;
    const taskName = req.body.taskName
    console.log(id, taskName)
    await Tasks.findOneAndReplace({ _id: id }, req.body, { new: true })
        .then(() => res.send(` updated`))
        .catch(err => res.status(400).json('Error: ' + err));
}