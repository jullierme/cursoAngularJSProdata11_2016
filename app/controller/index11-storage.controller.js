(function () {
    angular.module('pdApp')
        .controller('IndexController', IndexController);
    //module: LocalStorageModule
    function IndexController(localStorageService) {
        var vm = this;
        vm.lista = [
            {nome:'Jullierme', sexo: 'M'}
        ];
        vm.listaAux = [];

        vm.setarInformacoesNoStorage = setarInformacoesNoStorage;

        iniciar();

        function iniciar(){
            verificarSuporteAoStorage();
            vm.listaAux = localStorageService.get('listaTeste');
        }
        function verificarSuporteAoStorage() {
            if(!localStorageService.isSupported) {
                alert('Desculpe, mas seu navegador não suporta nossa aplicação');
            }
        }
        function setarInformacoesNoStorage() {
            localStorageService.set('listaTeste', vm.lista);
        }
    }
})();
