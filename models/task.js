const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE)

const TaskSchema = new mongoose.Schema({
    taskName: String,
}, {
    collection: "tasksToDo"//collection(table)
})

module.exports = mongoose.model('taskName', TaskSchema)
