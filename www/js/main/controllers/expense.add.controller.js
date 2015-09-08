'use strict';

(function () {

  angular.module(G.app.name)
    .controller('ExpenseAddController', ['$scope', '$timeout', '$filter', 'FixerProvider', 'ExpenseNextId', 'CryptoProvider',
      function ($scope, $timeout, $filter, FixerProvider, ExpenseNextId, CryptoProvider) {

        $scope.expense = {
          obj: {
            expenseBeginDate: new Date(),
            expenseEndDate: new Date(),
            expenseAmountConverted: 0,
            expenseReason: 1,
            constantExpenseType: $scope.main.constantExpenseReasonInIleDeFrance,
            expenseId: ExpenseNextId.expenseId,
            expenseBillPictureBase64: '',
            expenseBillPictureBaseHex: ''
          },

          getConstantExpenseReason: function () {
            return $scope.expense.obj.constantExpenseType = $scope.expense.obj.expenseReason ? $scope.main.constantExpenseReasonInIleDeFrance : $scope.main.constantExpenseReasonOutIleDeFrance;
          },
          getRatesBase: function () {
            if ($scope.expense.obj.expenseCurrency) {
              FixerProvider.getRatesBase($scope.expense.obj.expenseCurrency).then(function (data) {
                FixerProvider.setFixer(data);
                $scope.expense.obj.expenseChangeRate = FixerProvider.getEuroRates();
                $scope.expense.obj.expenseAmountConverted = FixerProvider.getAmountConverted($scope.expense.obj.expenseAmount);
              });
            }
          },
          getImage: function (e) {
            console.log(e);
          }


        };

        $scope.uploadImage = function() {
          alert("select file");
        }

        $scope.getImage = function (e) {
          console.log(e);
        }


      }]);

})();