(function () {
    angular.module('pdApp')
        .controller('IndexController', IndexController);

    function IndexController($scope) {
        $scope.nome = 'Jullierme';

        $scope.ola = ola;

        function ola() {
            alert('Olá');
        }

        $scope.$on('testeEnvioEvento', onTesteEnvioEvento);

        function onTesteEnvioEvento(event, data) {
            var teste = data;

            console.log('Nome: ', event.currentScope.nome)
        }
    }
})();