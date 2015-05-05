'use strict';

var angular = require('angular');

module.exports = angular
    .module('APP.Todo.PubSub', [])
    .factory( 'PubSubFactory', require( './PubSubFactory' ) )
;
