'use strict';

module.exports = /*@ngInject*/ function ($rootScope) {

    var onTodoItemStateChange = function($scope, handler) {
        $scope.$on('todoItemStateChange', function(event, message) {
            handler(message);
        });
    };

    var todoItemCreated = function(todoItem) {
        $rootScope.$broadcast('todoItemStateChange', {status: 'created', todoObj: todoItem});
    };

    var todoItemDeleted = function(todoItem) {
        $rootScope.$broadcast('todoItemStateChange', {status: 'deleted', todoObj: todoItem});
    };

    return {
        todoItemDeleted: todoItemDeleted,
        todoItemCreated: todoItemCreated,
        onTodoItemStateChange: onTodoItemStateChange
    };
};