'use strict';

module.exports = /*@ngInject*/ function ($q, $http) {

    var todoList = [];
    var lastUsedPK = 0;

    var addTodo = function(todoMsg) {
        lastUsedPK++;
        todoList.push({id: lastUsedPK, msg: todoMsg});
    };

    var removeTodo = function(todoId) {
        for (var i = todoList.length - 1; i > -1; i--) {
            if (todoList[i].id === todoId)
                return todoList.splice(i, 1);
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