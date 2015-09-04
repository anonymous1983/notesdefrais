/**
 * Created by abid on 31/08/2015.
 */

(function () {

  angular.module(G.app.name)
    .service('FixerProvider', ['$http', '$q', 'constantGlobal',
      function ($http, $q, constantGlobal) {

        var fixer = {};

        var ff = {
          getRatesBase: function (base) {

            var defer = $q.defer();
            var parms = {
              method: "GET",
              url: 'http://api.fixer.io/latest?base=' + base
            };
            $http(parms)
              .success(function (data) {
                // this callback will be called asynchronously
                // when the response is available
                ff.setFixer(data);
                return defer.resolve(data);
              });

            return defer.promise;

          },
          getFixer: function () {
            return this.fixer;
          },
          setFixer: function(fixer){
            this.fixer = fixer;
          },
          getEruoRates: function () {
            console.log(this.fixer);
            return this.fixer.rates.EUR;
          },
          getAmountConverted: function (amount) {
            return amount * ff.getEruoRates();
          }


        }

        return {
          getRatesBase: ff.getRatesBase,
          getFixer: ff.getFixer,
          setFixer: ff.setFixer,
          getEruoRates: ff.getEruoRates,
          getAmountConverted: ff.getAmountConverted,



        }

      }])

})();
