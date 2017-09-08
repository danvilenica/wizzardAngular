(function () {
    'use strict';

    angular
        .module('app')
        .controller('stepTwo', stepTwo);

    stepTwo.$inject = ['data'];

    function stepTwo(data) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'stepTwo';
        
        vm.item = data.getInternalData();
    }
})();
