'use strict';

module.exports = /*@ngInject*/ function () {
    return {
        scope: {
            todoItem: "=",
            deleteItem: "&"
        },
        restrict: 'E',
        templateUrl: 'Todos/views/TodoItem.html',
        replace: true
    };

};