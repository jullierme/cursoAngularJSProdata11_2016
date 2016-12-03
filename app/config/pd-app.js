(function () {

    angular.module('pdAppArquitetura',[]);

    angular.module('pdApp',
        [
            'ngMessages',
            'ngAnimate',
            'toastr',
            'ui.grid',
            'ngMaterial',
            'ui.router',
            'oc.lazyLoad',
            'pdAppArquitetura',
            'LocalStorageModule',
            'angular-loading-bar'
        ]
    ).config(config)
    ;

    config.$inject = ['cfpLoadingBarProvider'];

    function config(cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
    }
})();