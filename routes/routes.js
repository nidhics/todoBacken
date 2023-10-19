const controllers = require("../controllers/controllers")
module.exports = (router) => {
    router.get("/", controllers.defaultFun)
    router.get('/tasksToDo', controllers.getTasks)
    router.post('/tasksToDo', controllers.addTask)
    router.delete('/tasksToDo/:id', controllers.deleteTask)
    router.put('/tasksToDo/:id', controllers.updateTask)
}