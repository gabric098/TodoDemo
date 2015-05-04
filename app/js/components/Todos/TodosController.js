'use strict';

module.exports  = /*@ngInject*/function ($scope, TodoDBFactory) {

    $scope.todos = TodoDBFactory.getTodos();

    /**
     * Add new item to the TODO list
     * @param newTodo
     */
    $scope.addTodo = function(newTodo) {
        TodoDBFactory.addTodo(newTodo);

        // reset the input form
        $scope.newTodo = '';
    };

    $scope.removeTodo = function(todo) {
        TodoDBFactory.removeTodo(todo);
    };
};