'use strict';
var angular = require( 'angular' );

module.exports = angular
    .module( 'APP.Todo.Footer', [] )
    .controller( 'FooterController', require( './FooterController' ) );