document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const registrationForm = document.getElementById("registration-form");
    const loginErrorMessage = document.getElementById("login-error-message");
    const registrationSuccessMessage = document.getElementById("registration-success-message");
    const registrationErrorMessage = document.getElementById("registration-error-message");

    // Попытка получить данные пользователя из локального хранилища
    const authenticated = localStorage.getItem("authenticated") === "true";
    const username = localStorage.getItem("username");

    if (authenticated && username) {
        // Если пользователь уже аутентифицирован, перенаправить на страницу после входа
        window.location.href = "dashboard.html";
    }

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const loginUsername = document.getElementById("login-username").value;
        const loginPassword = document.getElementById("login-password").value;

        // Пример проверки учетных данных (здесь можно использовать свою логику)
        if (username === loginUsername && password === loginPassword) {
            // Успешная аутентификация
            localStorage.setItem("authenticated", "true");
            window.location.href = "chat.html"; // Перенаправление на страницу после входа
        } else {
            // Неуспешная аутентификация
            loginErrorMessage.textContent = "Неправильное имя пользователя или пароль.";
        }
    });

    registrationForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const registrationUsername = document.getElementById("registration-username").value;
        const registrationPassword = document.getElementById("registration-password").value;

        // Пример регистрации пользователя (здесь можно использовать свою логику)
        // В данном примере мы просто сохраняем данные в локальное хранилище
        localStorage.setItem("username", registrationUsername);
        localStorage.setItem("password", registrationPassword);
        registrationSuccessMessage.textContent = "Регистрация успешна. Войдите в систему.";
    });
});
