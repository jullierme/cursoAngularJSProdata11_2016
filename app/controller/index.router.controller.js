
angular.module('pdApp')
    .controller('IndexRouterController', IndexRouterController);

function IndexRouterController($state) {
    var vm = this;

    vm.abrirPagina = abrirPagina;

    function abrirPagina(nomeState) {
        $state.go(nomeState, {id: 10});
    }
}