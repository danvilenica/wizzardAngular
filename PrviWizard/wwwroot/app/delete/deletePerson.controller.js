(function () {
    'use strict';

    angular
        .module('app')
        .controller('deletePerson', deletePerson);

    deletePerson.$inject = ['data', 'person', '$state'];

    function deletePerson(data, person, $state) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'delete';
        vm.deletePerson = deletePerson;
        vm.item = person;

        function deletePerson() {
            data.deletePerson(vm.item)
                .then(function () {
                    $state.go('^', undefined, { reload: true });
                });
        }
    }
})();
