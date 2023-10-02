document.addEventListener("DOMContentLoaded", function () {
    const notificationForm = document.getElementById("notification-form");
    const jsonData = document.getElementById("json-data");
    const notifications = [];

    // Загрузка данных из локального хранилища, если они есть
    if (localStorage.getItem("notifications")) {
        notifications.push(...JSON.parse(localStorage.getItem("notifications")));
        updateJsonData();
    }

    notificationForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const notificationText = document.getElementById("notification-text").value;
        
        if (notificationText) {
            notifications.push(notificationText);
            localStorage.setItem("notifications", JSON.stringify(notifications));
            updateJsonData();
            notificationForm.reset();
        }
    });

    function updateJsonData() {
        jsonData.textContent = JSON.stringify(notifications, null, 2);
    }
});