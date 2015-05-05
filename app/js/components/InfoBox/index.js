'use strict';
var angular = require( 'angular' );

module.exports = angular
    .module( 'APP.Todo.InfoBox', [
        require('../PubSub').name
    ] )
    .controller( 'InfoBoxController', require( './InfoBoxController' ) );