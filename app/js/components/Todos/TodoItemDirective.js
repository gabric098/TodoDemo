'use strict';

module.exports = /*@ngInject*/ function () {
    return {
        scope: {
            todoItem: "=",
            removeTodoFunction: "&"
        },
        restrict: 'E',
        templateUrl: 'Todos/views/TodoItem.html',
        replace: true
    };

};