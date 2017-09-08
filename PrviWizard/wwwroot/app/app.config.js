(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'main',
                controllerAs: 'vm',
                resolve: {
                    people: function (data) {
                        return data.getData();
                    }
                }
            })
            .state('main.baseAdd', {
                url: 'add',
                templateUrl: 'app/baseStep/base.html',
                controller: 'baseStep',
                controllerAs: 'vm',
                data: {
                    isEdit: false
                },
                resolve: {
                    person: function () {
                        return {};
                    }
                }
            })      
            .state('main.baseEdit', {
                url: 'edit/:id',
                templateUrl: 'app/baseStep/base.html',
                controller: 'baseStep',
                controllerAs: 'vm',
                data: {
                    isEdit: false
                },
                resolve: {
                    person: function (data, $stateParams) {
                        return data.getpersonById($stateParams.id)
                    }
                }
            }) 
            .state('main.deletePerson', {
                url: 'delete/:id',
                templateUrl: 'app/delete/deletePerson.html',
                controller: 'deletePerson',
                controllerAs: 'vm',
                resolve: {
                    person: function (data, $stateParams) {
                        return data.getpersonById($stateParams.id);
                    }
                }
            })
            .state('main.baseAdd.stepOne', {
                url: '/stepOne',
                templateUrl: 'app/stepOne/stepOne.html',
                controller: 'stepOne',
                controllerAs: 'vm',
                data: {
                    isEdit: false
                }
            })
            .state('main.baseAdd.stepTwo', {
                url: '/stepTwo',
                templateUrl: 'app/stepTwo/stepTwo.html',
                controller: 'stepTwo',
                controllerAs: 'vm',
                data: {
                    isEdit: false
                }
            })
            .state('main.baseAdd.stepThree', {
                url: '/stepThree',
                templateUrl: 'app/stepThree/stepThree.html',
                controller: 'stepThree',
                controllerAs: 'vm',
                data: {
                    isEdit: false
                }
            })
            .state('main.baseEdit.stepOne', {
                url: '/stepOne',
                templateUrl: 'app/stepOne/stepOne.html',
                controller: 'stepOne',
                controllerAs: 'vm',
                data: {
                    isEdit: true
                }
            })
            .state('main.baseEdit.stepTwo', {
                url: '/stepTwo',
                templateUrl: 'app/stepTwo/stepTwo.html',
                controller: 'stepTwo',
                controllerAs: 'vm',
                data: {
                    isEdit: true
                }
            })
            .state('main.baseEdit.stepThree', {
                url: '/stepThree',
                templateUrl: 'app/stepThree/stepThree.html',
                controller: 'stepThree',
                controllerAs: 'vm',
                data: {
                    isEdit: true
                }
            });
    }
})();