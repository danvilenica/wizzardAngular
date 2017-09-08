(function () {
    'use strict';

    angular
        .module('app')
        .controller('baseStep', baseStep);

    baseStep.$inject = ['data', 'person'];

    function baseStep(data, person) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'baseStep';

        data.clearInternalData();
        data.setInternalData(person);
    }
})();
