'use strict';
let Tasks = require('../models/todoListModel');

exports.list_tasks = function (req, res) {
    Tasks.find({}, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
}

exports.create_task = function (req, res) {
    var new_task = new Tasks(req.body);
    new_task.save(function (err, newTask) {
       if (err) {
           res.send(err);
        res.json(newTask)
       } 
    });
}

exports.update_task = function (req, res) {
    Tasks.findOneAndUpdate(
        {_id: req.params.taskId},
        req.body,
        function (err, updateTask) {
            if (err)
                res.send(err);
            res.json(updateTask);     
        }
    );
}

exports.read_task = function (req, res) {
    Tasks.findById(req.params.taskId, function (err, oneTask) {
        if (err)
            res.send(err);
        res.json(oneTask);   
    });
}

exports.delete_task = function (req, res) {
    Tasks.remove({_id: req.params.taskId}, function (err, task) {
        if (err) 
            res.send(err);
        res.json({ message: 'Tâche supprimée'});
    })
}