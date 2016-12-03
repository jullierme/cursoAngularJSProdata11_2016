(function () {
    'use strict';

    angular
        .module('pdApp')
        .controller('CadastroProdutoController', CadastroProdutoController);

    CadastroProdutoController.$inject = ['ProdutoService'];

    /* @ngInject */
    function CadastroProdutoController(ProdutoService) {
        var vm = this;
        vm.pdCrudService = ProdutoService.getPdCrudService();
        vm.pdCrudService.onSalvarResult = onSalvarResult;

        function onSalvarResult(response) {

        }

        function umMetodoQuaquer() {
            vm.pdCrudService.salvar().then(onSalvarResult);
        }
    }

})();

