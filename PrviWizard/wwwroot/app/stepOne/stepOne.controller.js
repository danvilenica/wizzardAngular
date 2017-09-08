(function () {
    'use strict';

    angular
        .module('app')
        .controller('stepOne', stepOne);

    stepOne.$inject = ['$state','data', 'person'];

    function stepOne($state, data, person) {
        /* jshint validthis:true */
        var vm = this;
        vm.isEdit = $state.current.data.isEdit;
        vm.title = 'stepOne';
                
        vm.item = data.getInternalData();
    }
})();
