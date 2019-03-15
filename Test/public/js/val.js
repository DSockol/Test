function Validation() {
    var err_msg = '';
    var err_msg_email = '';

    //берет значение поля email и проверяет на регулярное выражение
    $('#email').on('keyup', function() {
        err_msg_email = '';
        var email = $('#email').val();
        console.log(email);

        var regular = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (regular.test(email) === false){
            err_msg_email += 'Не правильный email';
            $("input[name=email]").focus();
            $('.reg_email_err').html(err_msg_email);
            console.log(regular.test(email));
            return;
        }

        $('.reg_email_err').empty();

    });

    //берет значение поля password и проверяет на регулярные выражения
    $('#password').on('keyup',function () {
        err_msg = '';
        var pass = $('#password').val();
        console.log(pass);
        var letters = /([A-Z])/g; //регулярное выражение на проверку верхних регистров
        var characters = /[^A-Za-z0-9_]/g; //регулярное выражение на проверку специальных символов
        var numbers = /[0-9]/g;//регулярное выражение на проверку цифр

        if ( pass.length < 6 ) {
            err_msg += 'Пароль должен быть не короче 6 символов';
            $("input[name='password']").focus();
            $('.reg_pass_err').html(err_msg);
            return;

        }
        if (letters.test(pass) === false) {
            err_msg +='Пароль должен содержать символы верхних и нижних регистров';
            $("input[name='password']").focus();
            console.log(letters.test(pass));
            $('.reg_pass_err').html(err_msg);
            return;

        }
        if (characters.test(pass) === false) {
            err_msg += 'Пароль должен содержать специальные символы';
            $("input[name='password']").focus();
            console.log(characters.test(pass));
            $('.reg_pass_err').html(err_msg);
            return;


        }
        if (numbers.test(pass) === false ) {
            err_msg += '    Пароль должен содержать цифры';
            $("input[name='password']").focus();
            console.log(numbers.test(pass));
            $('.reg_pass_err').html(err_msg);
            return;

        }
        $('.reg_pass_err').empty();
    });

    $('#submit').on('click', function (e) {
        e.preventDefault();
        var email = $('#email').val();
        var pass = $('#password').val();
        var msg_val = '';
        if (err_msg_email === '' && err_msg === '' && email !== '' && pass !== '' ) {
            msg_val += 'Валидация прошла успешно';
        }
        else {
            msg_val += 'Неверный логин или пароль';
        }
        $('.val_msg').html(msg_val);
    });


}


