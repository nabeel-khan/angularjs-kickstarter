angular.module('app', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('app').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'app/home/home.html'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

});

angular.module('app').config(['$httpProvider','appConfig', function($httpProvider,appConfig) {
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
    
    // Enable below to send cookies with every http request.
    //$httpProvider.defaults.withCredentials = true;

    console.log("Application Version "+appConfig.ver+" Running");

    $httpProvider.interceptors.push(['$rootScope', '$q', function($rootScope, $q) {
        return {
            request: function(config) {
                config.headers.Authorization = "SET_YOUR_ACCESS_TOKEN_HERE";
                return config;
            },
            responseError: function(rejection) {
              if (!rejection.config.ignoreAuthModule) {
                switch (rejection.status) {
                  case 401:
                    //$rootScope.$broadcast('event:auth:loginFailed', rejection);
                    break;
                  case 403:
                    //$rootScope.$broadcast('event:auth:forbidden', rejection);
                    break;
                  case 500:
                    //$rootScope.$broadcast('event:auth:serverCrash', rejection);
                    break;
                }
              }
              // otherwise, default behaviour
              return $q.reject(rejection);
            }
        };
    }]);

}]);

angular.module('app').run(function ($modal,$rootScope,$injector,$state) {

    // State change interceptor
    $rootScope.$on('$stateChangeStart', function (event, next) {

        // If its a public page then let them through
        if(typeof(next.isPublic)!=='undefined' && next.isPublic===true){
            return;
        }

        //
        // Todo: Add code below for checking if user is authenticated to view this certain page.
        //

    });

});

angular.module('app').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
