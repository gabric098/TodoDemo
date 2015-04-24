'use strict';

var angular = require( 'angular' );

module.exports = /*@ngInject*/ function ($q, $http) {

    var todoList = [];

    var addTodo = function(todo) {
        todoList.push(todo);
    };

    var removeTodo = function(todo) {
        var index = todoList.indexOf(todo);
        if (index > -1) {
            todoList.splice(index, 1);
        }
    };

    var loadInitialTodos = function() {
        var defer = $q.defer();
        $http.get('api/todos.json').success(function (data) {
            todoList = data;
            defer.resolve();
        });
        return defer.promise;
    };

    return {
        getTodos: function () { return todoList; },
        addTodo: addTodo,
        removeTodo: removeTodo,
        loadInitialTodos: loadInitialTodos
    };
};