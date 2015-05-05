'use strict';

module.exports  = /*@ngInject*/function ($scope, $timeout, PubSubFactory) {
    $scope.message = '';

    PubSubFactory.onTodoItemStateChange($scope, publishMessage);

    function publishMessage(messageObj) {
        var outputMsg = '';

        switch (messageObj.status) {
            case 'created':
                outputMsg = "Now todo created.";
                break;
            case 'deleted':
                outputMsg = "Todo deleted.";
                break;
            default:
                outputMsg = "Something just happened.";
                break;
        }
        $scope.message = outputMsg;

        $timeout(function() {
            $scope.message = '';
        }, 1000);

    }
};
