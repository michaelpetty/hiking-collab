$(document).ready(function(){
  console.log('document is ready');

  $('#newsletterSub').on('submit', e => {
    e.preventDefault();
    e.stopPropagation();
    const nameRE = new RegExp('^\\w{2,}$');
    const emailRE = new RegExp('^[\\w\\.!+-]+@[\\w-]+\\.[\\w-]+(?:\\.[\\w-]+)*$');
    let noErrors = true;

    checkValidity($('#firstName'), nameRE);
    checkValidity($('#lastName'), nameRE);
    checkValidity($('#emailInput'), emailRE);

    console.log(`checkbox: ${$('#news1').val()}`);

    if (noErrors) {
      $.ajax({
        method: 'POST',
        url: '/api/subscribers',
        data: JSON.stringify({
          firstName: $('#firstName').val(),
          lastName: $('#lastName').val(),
          email: $('#emailInput').val()
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: handlePostSuccess,
        error: handlePostError
      })

      $('#newsletterSub').addClass('hide');
      $('#subscribeSuccess').removeClass('hide');

    }

    function checkValidity(ele, re) {
      if (!re.test(ele.val())) {
        ele.removeClass('is-valid').addClass('is-invalid');
        ele.next('p').removeClass('hide');
        noErrors = false;
      } else {
        ele.addClass('is-valid').removeClass('is-invalid');
        ele.next('p').addClass('hide');

      }
    }
    function handlePostSuccess(res) {}
    function handlePostError(err) {
      console.log(`Error: ${err}`);
    }
  })

})
