$(document).ready(function() {
  $('#btn').click(function(event) {
    $('#window').popups();
  });
  $('.close').click(function(event) {
    $('#window').popups('closePopups');
  });
  $('#btn2').click(function(event) {
    $('#window').popups('closePopups');
  });
});
