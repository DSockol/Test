$(document).ready(function() {

    $('#password').on('keypress',function () {

        var pass = $('#password').val();
        var err_msg = '';
        console.log(pass);
        if ( pass.length < 6 ) {
            err_msg += '<br/>Пароль должен быть не короче 6 символов';
            $("input[name='password']").focus();
        }

        if ( pass.replace(/[A-Za-z]/) ) {
            err_msg +=' <br/>Пароль должен содержать символы верхних и нижних регистров';
            $("input[name='password']").focus();
        }

        if (pass.replace(/[^A-Za-z0-9_]/g)) {
            err_msg += '<br/>Пароль должен содержать специальные символы';
        }
        if ( pass.replace(/[0-9]/g) ) {
            err_msg +=' <br/>Пароль должен содержать цифры';
            $("input[name='password']").focus();
        }

        if( err_msg ){
            $('.reg_pass_err').html(err_msg);
        }

    });

});

