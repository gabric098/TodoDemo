'use strict';

module.exports = /*@ngInject*/ function ($rootScope) {

    var onTodoItemStateChange = function($scope, handler) {
        $scope.$on('todoItemStateChange', function(event, message) {
            handler(message);
        });
    };

    var todoItemCreated = function(todoItem) {
        console.log("Broadcasting created!");
        $rootScope.$broadcast('todoItemStateChange', {status: 'created'});
    };

    var todoItemDeleted = function(todoItem) {
        console.log("Broadcasting deleted!");
        $rootScope.$broadcast('todoItemStateChange', {status: 'deleted'});
    };

    return {
        todoItemDeleted: todoItemDeleted,
        todoItemCreated: todoItemCreated,
        onTodoItemStateChange: onTodoItemStateChange
    };
};