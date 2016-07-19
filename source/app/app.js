(function() {
    'use strict';

    angular
        .module('colorApp', [])
        .service('colorsService', ['$http', colorsService])
        .directive('amBackgroundColor', [amBackgroundColor])
        .controller('appController', ['$scope', 'colorsService', appController]);

    function colorsService($http) {
        this.getColors = function() {
            return $http.get('colors.json');
        };
    }

    function amBackgroundColor() {
        return {
            restrict: 'A',

            link: function(scope, element, attrs) {
                attrs.$observe('amBackgroundColor', function(value) {
                    element.css({background: value})
                });
            }
        };
    }

    function appController($scope, colorsService) {
        $scope.colors = [];

        colorsService.getColors().then(function(response) {
            $scope.colors = response.data['colorsArray'];
        });
    }
})();