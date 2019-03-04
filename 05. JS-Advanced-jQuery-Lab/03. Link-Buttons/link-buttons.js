function attachEvents() {
    $('.button').click(btnClick);
  function btnClick() {
      $('.selected').removeClass('selected');
      $(this).addClass('selected');
  }
}