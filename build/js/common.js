head.ready(function(){

	// Clear placeholder
	$(function() {
		$('input,textarea').focus(function(){
				$(this).data('placeholder',$(this).attr('placeholder'))
				$(this).attr('placeholder','');
		});
		$('input,textarea').blur(function(){
			$(this).attr('placeholder',$(this).data('placeholder'));
		});
	});

    // tabsHead
    $('#tabsHead').tabs({
        event: 'mouseover'
    });

    // tabsMain
    $('#tabsMain').tabs();

	// Recaptcha
	var formRecaptcha;
    var formRecaptcha2;
    var CaptchaCallback = function() {
        formRecaptcha = grecaptcha.render('form-recaptcha', {
            'sitekey' : '6LdwcwcTAAAAAA28BmoI7qav3aBBLhQfFORENMJp',
            'theme' : 'light'
        });
        formRecaptcha2 = grecaptcha.render('form-recaptcha2', {
            'sitekey' : '6LdwcwcTAAAAAA28BmoI7qav3aBBLhQfFORENMJp',
            'theme' : 'light'
        });
    };
    $(function() {
        $('form.contact-form').submit(function() {
            $.ajax({
                data: $(this).serialize(),
                dataType: "json",
                url: window.location.protocol + "//dashboard.mgid.com/user/signup-landing/hash/24b26a95fb3331dd2905aec12a87c7ca",
                type: "POST",
                beforeSend: function() {
                    $('#contact').prepend(
                            '<div class="overlay">' +
                                '<img src="images/loader.gif" class="loader" />' +
                            '</div>'
                    );
                },
                success: function(response) {
                    $('.overlay').remove();
                    if (response.status == 'fail') {
            grecaptcha.reset(formRecaptcha);
                        $('#form-error').empty().append("<li>" + response.data + "</li>");
                    } else {
                        $('form.contact-form, #form-success-result').toggle();
            dataLayer.push({'event': 'GAevent', 'category': 'PA Landing Page', 'action': 'form submit','label': 'Form submit on PA Landing Page'});
                    }
                }
            });

            return false;
        });
    });
    $(function() {
        $('form.contact-form2').submit(function() {
            $.ajax({
                data: $(this).serialize(),
                dataType: "json",
                url: "https://dashboard.mgid.com/user/signup-landing/hash/24b26a95fb3331dd2905aec12a87c7ca",
                type: "POST",
                beforeSend: function() {
                    $('#contact2').prepend(
                            '<div class="overlay">' +
                                '<img src="images/loader.gif" class="loader" />' +
                            '</div>'
                    );
                },
                success: function(response) {
                    $('.overlay').remove();
                    if (response.status == 'fail') {
            grecaptcha.reset(formRecaptcha2);
                        $('#form-error2').empty().append("<li>" + response.data + "</li>");
                    } else {
                        $('form.contact-form2, #form-success-result2').toggle();
            dataLayer.push({'event': 'GAevent', 'category': 'PA Landing Page', 'action': 'form submit','label': 'Form submit on PA Landing Page'});
                    }
                }
            });

            return false;
        });
    });

	// new WOW().init();
	
});