'use strict';

(function () {

  angular.module(G.app.name)
    .controller('MainController', ['$scope', '$state', 'constantGlobal', 'constantBill', 'constantExpense',
      function ($scope, $state, constantGlobal, constantBill, constantExpense) {

        $scope.main = {

          constantGlobalCurrency: constantGlobal.global.currency,

          constantBillMotif: constantBill.motif,

          constantExpenseType: constantExpense.type,

          uiSerf: function (state) {
            $state.go(state, {}, {reload: true});
            return true;
          }

        };


      }]);

})();