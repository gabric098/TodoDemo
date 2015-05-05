'use strict';

var angular = require('angular');

module.exports = angular
    .module('APP.Todo.SiteFrame',[
        require('angular-ui-router'),

        require('../Todos').name,
        require('../Title').name,
        require('../Footer').name,
        require('../InfoBox').name
    ])
    .config(require('./states'));