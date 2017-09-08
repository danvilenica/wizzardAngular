(function () {
    'use strict';

    angular
        .module('app')
        .controller('main', main);

    main.$inject = ['people', '$state', '$scope'];

    function main(people, $state, $scope) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'main';   
        vm.people = people;
        
    }
})();
