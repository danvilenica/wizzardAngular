(function () {
    'use strict';

    angular
        .module('app')
        .controller('stepThree', stepThree);

    stepThree.$inject = ['data','$state'];

    function stepThree(data, $state) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'stepThree';
        vm.isEdit = $state.current.data.isEdit;
        vm.finish = finish;
        vm.item = data.getInternalData();

        function finish() {
            data.done(vm.isEdit).
                then(function () {
                    $state.go('main', undefined, {reload:true});
                });
        }
    }
})();
