document.addEventListener("DOMContentLoaded", function () {
    const notificationForm = document.getElementById("notification-form");
    const jsonList = document.getElementById("json-list"); // Изменен идентификатор для списка
    const clearButton = document.getElementById("clear-button");
    const userNameInput = document.getElementById("user-name");
    const notifications = [];

    // Загрузка данных из локального хранилища, если они есть
    if (localStorage.getItem("notifications")) {
        notifications.push(...JSON.parse(localStorage.getItem("notifications")));
        updateJsonData();
    }

    notificationForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const userName = userNameInput.value;
        const notificationText = document.getElementById("notification-text").value;
        
        if (userName && notificationText) {
            const notification = {
                userName: userName,
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
        // Очищаем список перед обновлением
        jsonList.innerHTML = "";

        // Добавляем уведомления в список
        notifications.forEach(function (notification) {
            const listItem = document.createElement("li");
            listItem.textContent = `${notification.userName}: ${notification.text}`;
            jsonList.appendChild(listItem);
        });
    }
});
