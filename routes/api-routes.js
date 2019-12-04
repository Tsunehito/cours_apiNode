'use strict';
let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 'Api working',
        message: 'Wesh ma couille'
    })
});

var todoList = require('../controllers/todoListController')

// Todolist Routes
router.route('/tasks')
    .get(todoList.list_tasks)
    .post(todoList.create_task);

router.route('/task/taskId')
    .get(todoList.read_task)
    .put(todoList.update_task)
    .delete(todoList.delete_task);

module.exports = router;