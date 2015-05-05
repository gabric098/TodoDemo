'use strict';

module.exports  = /*@ngInject*/function ($scope, TodoDBFactory, PubSubFactory) {

    $scope.todos = TodoDBFactory.getTodos();

    /**
     * Add new item to the TODO list
     * @param newTodo
     */
    $scope.addTodo = function(newTodo) {
        TodoDBFactory.addTodo(newTodo);

        // reset the input form
        $scope.newTodo = '';

        // broadcast the todoItemStateChange event
        PubSubFactory.todoItemCreated();
    };

    /**
     * remove a todo item from the list
     * based on the given primary key
     * @param todoPk
     */
    $scope.removeTodo = function(todoPk) {
        TodoDBFactory.removeTodo(todoPk);

        // broadcast the todoItemStateChange event
        PubSubFactory.todoItemDeleted();
    };
};