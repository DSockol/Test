function Clock() {
    var months = ["января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"];

    var days = ["Воскресенье","Понеделник" , "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

    // формирует дату и время и выводит на экран
    this.tick = function () {
        var date = new Date();
        var month_num = date.getMonth();
        var day = date.getDate();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var day_num = date.getDay();

        if (day <= 9) day = "0" + day;
        if (hours <= 9) hours = "0" + hours;
        if (minutes <= 9) minutes = "0" + minutes;
        if (seconds <= 9) seconds = "0" + seconds;

        var date_time = "Сегодня - " + day + " " + months[month_num]+ " " + days[day_num]  + " " + date.getFullYear() + " г." +
            "  Текущее время - "+ hours + ":" + minutes + ":" + seconds;
        $('#doc_time').html(date_time);
    };
}