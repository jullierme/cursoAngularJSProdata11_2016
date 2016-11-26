(function () {
    angular.module('pdApp')
        .controller('CadastroCarroController', CadastroCarroController);

    CadastroCarroController.$inject = ['$scope', 'AlertService', '$filter'];

    function CadastroCarroController($scope, AlertService, $filter) {
        $scope.nome = 'Jullierme';
        $scope.entidade = {};
        $scope.listaCarros = [];

        $scope.salvar = salvar;
        $scope.limpar = limpar;
        $scope.excluir = excluir;

        $scope.gridOptions = {
            columnDefs: [
                {name:'Nome do carro', field:'nomeCarro', minWidth:230},
                {name:'Cor do carro', field:'cor', width: 130},
                {name:'Dt lançamento', field:'dataLancamento',
                    cellTemplate:'app/template/grid/cell-template-date.html'
                    , width: 150},
                {name:'', field:'excluir',
                    cellTemplate:'app/template/grid/cell-template-excluir.html'
                    , width: 40}
            ],
            data:'listaCarros',
            enableColumnMenus: false
        };

        function salvar() {
            if($scope.carroForm.$invalid){
                $scope.carroForm.nomeCarro.$setTouched();
                $scope.carroForm.cor.$setTouched();

                AlertService.error('Formulário inválido');
                return;
            }

            $scope.entidade.nomeCarro = $filter('maiusculo')($scope.entidade.nomeCarro);
            $scope.listaCarros.push($scope.entidade);
            AlertService.success('Registro salvo com sucesso!');
            limpar();
        }

        function limpar() {
            $scope.entidade = {};
            $scope.carroForm.$setUntouched();

            angular.element('#nomeCarro').focus();
        }

        function excluir(linha) {
            var index = $scope.listaCarros.indexOf(linha);

            $scope.listaCarros.splice(index, 1)
        }
    }
})();