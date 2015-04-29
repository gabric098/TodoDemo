'use strict';

var angular = require('angular');

module.exports = angular
    .module('APP.Todo.Todos',[
        require('angular-ui-router'),
        require('../TodoDB').name
    ])
    .directive('todoItem', require('./TodoItemDirective'))
    .controller('TodosController', require('./TodosController'))
    .config(require('./states'));