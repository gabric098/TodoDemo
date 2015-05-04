'use strict';

module.exports = /* @ngInject */ function States( $stateProvider, $urlRouterProvider, $locationProvider ) {

    $locationProvider
        .html5Mode(true);


    $stateProvider
        .state( 'APP', {
            templateUrl: 'Siteframe/views/Siteframe.html',
            abstract: true
        } )
        .state( 'APP.Todo', {
            views: {
                'appTitle': {
                    templateUrl: 'Title/views/Title.html',
                    controller: 'TitleController'
                },
                'app': {
                    template: '<div id="content-container" ui-view=""></div>'
                },
                'footer': {
                    templateUrl: 'Footer/views/Footer.html',
                    controller: 'FooterController'
                }
            },
            abstract: true
        } );

    $urlRouterProvider.otherwise( '/' );

};
