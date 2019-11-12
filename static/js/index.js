$('.toggle').click( function() {
  var checkBoxes = $(this).closest('.container').find('input');
  checkBoxes.prop('checked', !checkBoxes.prop('checked'));
});

$('.pick').click( function() {
  var checkBoxes = $(this).closest('.container').find('input:checked');
  if (checkBoxes.length > 0) {
    var randNb = Math.floor((Math.random() * checkBoxes.length));
    var pick = checkBoxes[randNb].value;
    var img = $('#' + pick).attr('src');
      if ($('#eliminate').is(':checked'))
        $(checkBoxes[randNb]).attr('checked', false);
  } else {
    var img = 'static/img/random.png'
  }
  var result = $(this).closest('.container').find('.result');
  result.attr('src',img);
});

$('.single').click( function() {
  var checkBoxes = $(this).closest('.container').find('input');
  checkBoxes.each(function() {
    if (parseInt($(this).val()) <= 26) {
      $(this).prop('checked', true);
    } else {
      $(this).prop('checked', false);
    }
  });
});

$('.item').click( function() {
  var checkBoxes = $(this).closest('.container').find('input');
  checkBoxes.each(function() {
    if (parseInt($(this).val()) <= 20) {
      $(this).prop('checked', true);
    } else {
      $(this).prop('checked', false);
    }
  });
});

$('#toggleAll').click( function() {
  $('.toggle').click();
});

$('#pickAll').click( function() {
  $('.pick').click();
});
