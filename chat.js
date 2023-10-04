document.addEventListener("DOMContentLoaded", function () {
    const notificationForm = document.getElementById("notification-form");
    const jsonData = document.getElementById("json-data");
    const clearButton = document.getElementById("clear-button");
    const userNameInput = document.getElementById("user-name"); // Добавим поле для имени пользователя
    const notifications = [];

    // Загрузка данных из локального хранилища, если они есть
    if (localStorage.getItem("notifications")) {
        notifications.push(...JSON.parse(localStorage.getItem("notifications")));
        updateJsonData();
    }

    notificationForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const userName = userNameInput.value; // Получаем имя пользователя
        const notificationText = document.getElementById("notification-text").value;
        
        if (userName && notificationText) {
            const notification = {
                userName: userName, // Добавляем имя пользователя
                text: notificationText
            };
            notifications.push(notification);
            localStorage.setItem("notifications", JSON.stringify(notifications));
            updateJsonData();
            notificationForm.reset();
        }
    });

    clearButton.addEventListener("click", function (e) {
        e.preventDefault();
        notifications.length = 0;
        localStorage.removeItem("notifications");
        updateJsonData();
    });

    function updateJsonData() {
        jsonData.textContent = JSON.stringify(notifications, null, 2);
    }
});
