let keepFading = (start, prevWidth) => {
    let currentWidth = $( window ).width();
    let interval = currentWidth > 820 ? 5 : 2;
    prevWidth !== currentWidth ? start = 0 : '';
    
    let elements = $('.our-clients img').slice(start, start + interval);
    elements.fadeIn(1500);
    elements.fadeOut(1500).promise()
    .then(() => { keepFading((start + interval) % 10, currentWidth);
    });
  }

  keepFading(0, $( window ).width());

$( window ).scroll(() => {
  $(".hideme").each( function(){
            
    let bottom_of_object = $(this).position().top + $(this).outerHeight();
    let bottom_of_window = $(window).scrollTop() + $(window).height();
    
    if( bottom_of_window > bottom_of_object ){
        $(this).animate({'opacity':'1'}, 1500);
    }

  }); 
})

