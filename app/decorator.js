function userServiceLog($delegate, $log) {

    let getCurrentUser = $delegate.getCurrentUser;

    $delegate.getCurrentUser = function () {
        $log.info(`Call method getCurrentUser ${new Date()}`);
        return getCurrentUser();
    };

    let setCurrentUser = $delegate.setCurrentUser;

    $delegate.setCurrentUser = function (user) {
        $log.info(`Call method getCurrentUser ${new Date()}`);
        setCurrentUser(user);
        return this;
    };

    $delegate.additionalMethod = function () {
        console.log("additional");
    }

    return $delegate;
}