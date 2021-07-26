$(function () {
  $(".alert").hide();
  $("#submitBtn").click(function () {
    if (!$("#textarea").val()) {
      $("#textareaSection .alert").show();
    } else {
      $("#textareaSection .alert").hide();
    }
    return false;
  });
});
