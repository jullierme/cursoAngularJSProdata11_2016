(function () {
    'use strict';

    angular
        .module('pdApp')
        .directive('pdSuperCrud', pdSuperCrud);


    /* @ngInject */
    function pdSuperCrud() {
        return {
            restrict: 'E',
            templateUrl: 'arquitetura/directivas/pd-super-crud/pd-super-crud.html',
            transclude: true,
            scope: {
                titulo:'@',
                service:'='
            },
            link: link
        };

        function link(scope, element, attrs) {
            scope.formName = 'pdSuperCrudForm' + scope.$id;
        }
    }

})();

