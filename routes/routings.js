let mongoose = require('mongoose');
let TodoTask = require('../models/TodoTask');

function getToDo(req, res) {
    TodoTask.find({}, (err, tasks) => {
        res.render("todo.ejs", { todoTasks: tasks });

    });
}

function postToDo(req, res) {
    const todoTask = new TodoTask({
        content: req.body.content,
        check: true
    });
    try {
        todoTask.save();
        res.redirect("/");
    } catch (err) {
        res.redirect("/");
    }

}

function deleteToDo(req, res) {
    const id = req.params.id;
    TodoTask.findByIdAndRemove(id, err => {
        if (err) return res.send(500, err);
        res.redirect("/");
    });
}

module.exports = { getToDo, postToDo, deleteToDo };