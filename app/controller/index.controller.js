
angular.module('pdApp')
    .controller('IndexController', IndexController);

function IndexController($scope) {
    $scope.nome = 'Jullierme';

    $scope.ola = ola;

    function ola() {
        alert('Olá');
    }
}