'use strict';

var angular = require('angular');

module.exports = angular
    .module('APP.Todo.TodoDB', [])
    .factory( 'TodoDBFactory', require( './TodoDBFactory' ) )
;
