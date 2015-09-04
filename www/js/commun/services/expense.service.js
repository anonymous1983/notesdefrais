/**
 * Created by abid on 31/08/2015.
 */

(function () {

  angular.module(G.app.name)
    .service('ExpenseProvider', ['$http', '$q', 'apiRest', function ($http, $q, apiRest) {

      var ef = {

        getExpenseNextId: function(){
          var defer = $q.defer();
          var parms = {
            method: apiRest.expense.getExpenseNextId.method,
            url: apiRest.expense.getExpenseNextId.url,
            headers: apiRest.expense.getExpenseNextId.header,
            data: apiRest.expense.getExpenseNextId.data
          };
          $http(parms)
            .success(function (data) {
              // this callback will be called asynchronously
              // when the response is available

              return defer.resolve(data[0]);
            });

          return defer.promise;
        },

        addExpense: function () {

          var defer = $q.defer();
          var parms = {
            method: "GET",
            url: 'http://dev-smartservices-it.intramundi.com/smsit/api/queries/exec/ADDEXPENSE/?format=json&userlogin=abid&invoiceAmount=1500&Currency=EUR',
            headers: {
              'Authorization': 'Basic ' + window.btoa('abid:Adnen@1981')
            }
          };
          $http(parms)
            .success(function (data) {
              // this callback will be called asynchronously
              // when the response is available

              return defer.resolve(data[0]);
            });

          return defer.promise;

        },
        getExpenseList: function () {

          var defer = $q.defer();
          var parms = {
            method: "GET",
            url: 'http://dev-smartservices-it.intramundi.com/smsit/api/queries/exec/GetExpenseList/?format=json&limit=10&userLogin=abid',
            headers: {
              'Authorization': 'Basic ' + window.btoa('abid:Adnen@1981')
            }
          };
          $http(parms)
            .success(function (data) {
              // this callback will be called asynchronously
              // when the response is available

              return defer.resolve(data);
            });

          return defer.promise;

        }

      }

      return {
        getExpenseNextId: ef.getExpenseNextId,
        addExpense: ef.addExpense,
        getExpenseList : ef.getExpenseList
      }

    }])

})();
