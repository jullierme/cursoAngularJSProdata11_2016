(function () {
    'use strict';

    angular
        .module('pdApp')
        .service('PessoaService', PessoaService);

    PessoaService.$inject = ['$q', '$http'];

    /* @ngInject */
    function PessoaService($q, $http) {
        this.pesquisarFotos = pesquisarFotos;

        function pesquisarFotos() {
            var listaDeFotos1, listaDeFotos2;
            var deferred = $q.defer();

            $http.get('https://jsonplaceholder.typicode.com/photos')
                .then(onPesquisar1Result, onPesquisarFault);
            $http.get('https://jsonplaceholder.typicode.com/photos')
                .then(onPesquisar2Result, onPesquisarFault);

            return deferred.promise;

            function onPesquisar1Result(response) {
                listaDeFotos1 = response.data;
                resolverPromisse();
            }

            function onPesquisar2Result(response) {
                listaDeFotos2 = response.data;
                resolverPromisse();
            }

            function onPesquisarFault(rejection) {
                deferred.reject(rejection);
            }

            function resolverPromisse() {
                if(listaDeFotos1 && listaDeFotos2){
                    var lista = listaDeFotos1.concat(listaDeFotos2);
                    deferred.resolve(lista);
                }
            }
        }
    }

})();

