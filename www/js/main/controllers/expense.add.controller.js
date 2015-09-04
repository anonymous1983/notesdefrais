'use strict';

(function () {

  angular.module(G.app.name)
    .controller('ExpenseAddController', ['$scope', '$timeout', '$filter', 'FixerProvider', 'ExpenseNextId',
      function ($scope, $timeout, $filter, FixerProvider, ExpenseNextId) {

        $scope.expense = {
          obj: {
            expenseBeginDate: new Date(),
            expenseEndDate: new Date(),
            expenseAmountConverted: 0,
            expenseId: ExpenseNextId.expenseId
          },
          getRatesBase: function () {
            FixerProvider.getRatesBase($scope.expense.obj.expenseCurrency).then(function(data){
              FixerProvider.setFixer(data);
              $scope.expense.obj.expenseChangeRate = FixerProvider.getEruoRates();
              $scope.expense.obj.expenseAmountConverted = FixerProvider.getAmountConverted($scope.expense.obj.expenseAmount);
            });

          }
        };


      }]);

})();