'use strict';

module.exports = /*@ngInject*/ function ($q, $http, PubSubFactory) {

    var todoList = [];
    var lastUsedPK = 0;

    var addTodo = function(todoMsg) {
        lastUsedPK++;
        var newTodoObj = {id: lastUsedPK, msg: todoMsg};
        todoList.push(newTodoObj);

        // broadcast the todoItemStateChange event
        PubSubFactory.todoItemCreated(newTodoObj);
    };

    var removeTodo = function(todoId) {
        for (var i = todoList.length - 1; i > -1; i--) {
            if (todoList[i].id === todoId) {
                var removed = todoList.splice(i, 1);
                // broadcast the todoItemStateChange event
                PubSubFactory.todoItemDeleted(removed[0]);
                return;
            }
        }
    };

    var loadInitialTodos = function() {
        var defer = $q.defer();
        $http.get('api/todos.json').success(function (data) {
            todoList = data;
            lastUsedPK = data.length;
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