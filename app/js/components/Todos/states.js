'use strict';

module.exports = /* @ngInject */ function ( $stateProvider ) {
    $stateProvider
        .state( 'APP.Todo.Todos', {
            url: '/',
            views: {
                '': {
                    templateUrl: 'Todos/views/Todos.html',
                    controller: 'TodosController',
                    resolve:{
                        load:function(TodoDBFactory){
                            return TodoDBFactory.loadInitialTodos();
                        }
                    }
                }
            }
        } );
};
