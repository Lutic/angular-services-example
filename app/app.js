(function () {
    "use strict";

    angular.module("app", ["services"]);

    angular.element(document).ready( () => {
        angular.bootstrap(document, ["app"]);
    });

})();