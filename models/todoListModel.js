'use strict';
var mongoose = require('mongoose');

var TaskSchema = mongoose.Schema({
    todo: {
        type: String,
        required: 'Veuillez renseigner une tâche'
    },
    creationDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: Boolean,
        default: false
    }
});

var Task = module.exports = mongoose.model('Tasks', TaskSchema);