(function () {
    'use strict';

    angular.module('pdApp')
        .controller('CadastroCarroController', CadastroCarroController);

    function CadastroCarroController($stateParams) {
        var vm = this;

        vm.texto = 'Cadastro de carro. Parâmetro: ' + $stateParams.id;

        iniciar();

        function iniciar() {
            adiciarEsutasX();
            configurarMenu();
            carregarAlgumaCoisa();
        }
    }
})();