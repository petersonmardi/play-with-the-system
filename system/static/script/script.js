/* Device OS */
$('.display-name').hide();

$('.btn-1').on('click',
  function() {
    $('.display-name').show().fadeIn(3000);
  }
);

$('.btn-1').on('dblclick',
  function() {
    $('.display-name').hide().fadeOut(3000);
  }
);

/* Ip address */
$('.display-ip').hide();

$('.btn-2').on('click',
  function() {
    $('.display-ip').show().slideDown('slow');
  }
);

$('.btn-2').on('dblclick',
  function() {
    $('.display-ip').hide().fadeOut(3000);
  }
);

/* Device Name */
$('.display-device').hide();

$('.btn-3').on('click',
  function() {
    $('.display-device').show().fadeIn(3000);
  }
);

$('.btn-3').on('dblclick',
  function() {
    $('.display-device').hide().fadeOut(3000);
  }
);