/**
 * Created by abid on 31/07/2015.
 */

(function () {

  // Configuring Color Intentions
  // Palettes
  /*
   red
   pink
   purple
   deep-purple
   indigo
   blue
   light-blue
   cyan
   teal
   green
   light-green
   lime
   yellow
   amber
   orange
   deep-orange
   brown
   grey
   blue-grey
   */
  angular.module(G.app.name)
    .config(function ($mdThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('blue');
    });

  angular.module(G.app.name)
    .constant('config', {
      baseUrl: 'js/'
    });

  angular.module(G.app.name)
    .constant('apiRest', {
      baseUrl: '/',
      expense: {
        getExpenseNextId: {
          method: 'GET',
          url: 'http://dev-smartservices-it.intramundi.com/smsit/api/queries/exec/getExpenseNextId/?format=json&limit=1',
          header: {
            Authorization: 'Basic ' + window.btoa('abid:Adnen@1981')
          },
          data: null
        }
      }
    });

})();
