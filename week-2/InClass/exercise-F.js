function usernameValidator(username, userType) {
    if (userType === "admin" || userType === "manager") {
        return "Username valid"
    } else {
        if (username[0] === username[0].toUpperCase() && length(username) > 5 && length(username) < 10) {
            return "Username valid"
        } else {
            return "Username invalid"
        }
    }
}