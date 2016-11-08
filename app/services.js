(function () {
    "use strict";

    angular.module("services", [])
        .constant("defaultGreeting", "Hi")
        .constant("officialGreeting", "morning")
        .factory("userService", userService)
        .provider("userGreetingService", userGreetingService)
        .service("personService", Person)
        .value("userName", "Vitaliy");

    function userService () {
        let currentUser;

        return {
            setCurrentUser,
            getCurrentUser
        };

        function setCurrentUser(user) {
            currentUser = user;
            return this; // this - service
        }
        function getCurrentUser() {
            return currentUser;
        }
    }

    function userGreetingService (defaultGreeting) {
        var greetingMsg = defaultGreeting;

        return { //provider-object
            $get,
            configGreeting
        }

        function $get () {
            return {  //service object
                greet
            }
        }

        function greet(user) {
            console.log(`${greetingMsg} ${user}`);
        }

        function configGreeting (greeting) {
            if (greeting) {
                greetingMsg = greeting;
                return this;
            } else {
                return greetingMsg;
            }
        }
    }

})();