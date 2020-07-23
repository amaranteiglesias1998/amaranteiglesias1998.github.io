$(function () {
  $('#submit_form').on('click', function (event) {
    event.preventDefault();

    var email =  $('input[name="mail_form"]').val();
    var subject = $('input[name="subject_form"]').val();
    var emailBody = $('textarea[name="message_form"]').val();
	
	
    window.location = 'mailto:amarantegijon@gmail.com' + '?from=' + email + '&subject=' + subject + '&body=' +   emailBody;
  });
});