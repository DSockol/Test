$(document).ready(function() {

    $('#password').on('keypress',function () {
        var pass = $('#password').val();
        console.log(pass);
        var letters = /([A-Z])/g;
        var characters = /[^A-Za-z0-9_]/g;
        var numbers = /[0-9]/g;
        var err_msg = '';

        if ( pass.length < 6 ) {
            err_msg += '<br/>Пароль должен быть не короче 6 символов';
            $("input[name='password']").focus();
        }

        if (letters.test(pass) === false) {
            err_msg +=' <br/>Пароль должен содержать символы верхних и нижних регистров';
            $("input[name='password']").focus();
            console.log(letters.test(pass));
        }

        if (characters.test(pass) === false) {
            err_msg += '<br/>Пароль должен содержать специальные символы';
            $("input[name='password']").focus();
            console.log(characters.test(pass));
        }


        if (numbers.test(pass) === false ) {
            err_msg += ' <br/>Пароль должен содержать цифры';
            $("input[name='password']").focus();
            console.log(numbers.test(pass));
        }
        if( err_msg ){
            $('.reg_pass_err').html(err_msg);
        }

    });

});

