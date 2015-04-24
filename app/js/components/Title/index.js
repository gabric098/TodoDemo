'use strict';

var angular = require('angular');

module.exports = angular
    .module('APP.Todo.Title', [])
    .controller('TitleController', require( './TitleController' ))
    .constant('TITLE', 'TODOs');