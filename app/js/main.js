'use strict';

// Global Requires
var angular     = require('angular');

var siteFrame   = require('./components/Siteframe');
var templates   = require('./templates');

require( 'angular-bootstrap-npm' );

angular.module('TodoApp', [
        siteFrame.name,
        templates.name
    ]);