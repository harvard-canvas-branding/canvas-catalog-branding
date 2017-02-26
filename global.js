
function hu_toggle_fpl() {
    $('#login_forgot_password').click();    
}

$(document).ready(function(e) {
  var loginhelp = '<div class="alert alert-warning"><p>If you received an invitation to join a course and are accessing this system for the first time, <a href="#" onclick="hu_toggle_fpl()">click here to complete your account registration process</a> and create a password.</p></div><p> </p>';
  var harvardCopy = '<p>Copyright &copy; 2017 The President and Fellows of Harvard College</p>&nbsp;';
  harvardCopy += '<p><a href="https://wiki.harvard.edu/confluence/display/canvas/Harvard+Privacy+Policy+for+Canvas" id="privacy_policy_link">Privacy Policy</a> | <a href="https://wiki.harvard.edu/confluence/display/canvas/Harvard+Acceptable+Use+Policy+for+Canvas" id="acceptable_use_policy_link">Acceptable Use Policy</a></p>';
  $('footer').html(harvardCopy);

  $("div.ic-Login-header__links > a#register_link").remove();  
  $('form#login_form').prepend(loginhelp);
    
  $("#global_nav_dashboard_link").prop('href', '/');
  $(".ic-app-header__logomark").prop('href', '/');
  
});
