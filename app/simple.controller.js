(function () {
    "use strict";

    angular.module("app")
        .controller("Simple", Simple)
        .config(appConfig)
        .decorator("userService", userServiceLog);

    function appConfig(userGreetingServiceProvider, officialGreeting) {
        // console.log(userGreetingServiceProvider);
        // userGreetingServiceProvider.configGreeting(officialGreeting);
    }

    function Simple (userService, personService, userGreetingService, userName) {
        console.log(userService);
        userService.setCurrentUser(userName);
        console.log(userService.getCurrentUser());

        console.log(personService);
        console.log(userGreetingService);
        userGreetingService.greet(userName);
        userService.additionalMethod();
    }

})();