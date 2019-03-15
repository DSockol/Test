$(document).ready(function () {

    new Validation(); //конструктор валидации формы
    var clock = new Clock(); //конструктор даты и время

    clock.tick();
    setInterval(clock.tick, 1000);

});