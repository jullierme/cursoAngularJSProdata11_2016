(function () {
    'use strict';

    angular
        .module('pdApp')
        .service('ProdutoService', ProdutoService);

    ProdutoService.$inject = ['PdCrudService'];

    /* @ngInject */
    function ProdutoService(PdCrudService) {
        this.getPdCrudService = getPdCrudService;

        function getPdCrudService() {
            var cs = new PdCrudService('produtoController');
            cs.metodoSalvar = 'salvarProduto';//caso não seja o padrão salvar
            return cs;
        }
    }

})();

