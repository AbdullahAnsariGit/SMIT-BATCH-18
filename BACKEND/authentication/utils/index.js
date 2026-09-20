export function validateSignup({ email, username, password, confirmPassword }) {
    const errors = [];

    // Regex patterns
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!email || !emailRegex.test(email)) {
        errors.push("Invalid email.");
    }

    if (!username || !usernameRegex.test(username)) {
        errors.push(
            "Username must be 3-20 characters and contain only letters, numbers, or _."
        );
    }

    if (!password || !passwordRegex.test(password)) {
        errors.push(
            "Password must be at least 8 characters and contain letters and numbers."
        );
    }

    if (password !== confirmPassword) {
        errors.push("Passwords do not match.");
    }

    return errors;
}
