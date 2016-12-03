(function () {
    angular.module('pdApp')
        .controller('IndexController', IndexController);

    function IndexController(PessoaService) {
        var vm = this;
        vm.listaDeDados = [];
        vm.carregarDados = carregarDados;

        vm.gridOptions = {
            data: 'vm.listaDeDados'
        };
        //não faça isso em produção
        //coloque a chamada http no service
        function carregarDados() {
            var promisse = PessoaService.pesquisarFotos();

            promisse.then(onPesquisarResult, onPesquisarFault);

        }
        function onPesquisarResult(lista) {
            vm.listaDeDados = lista;
        }
        function onPesquisarFault(rejection) {

        }
    }
})();
