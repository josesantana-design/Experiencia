var from_$input = $('#input_from').pickadate(),
    from_picker = from_$input.pickadate('picker')

var to_$input = $('#input_to').pickadate(),
    to_picker = to_$input.pickadate('picker')


// Check if there’s a “from” or “to” date to start with.
if ( from_picker.get('value') ) {
  to_picker.set('min', from_picker.get('select'))
}
if ( to_picker.get('value') ) {
  from_picker.set('max', to_picker.get('select'))
}

// When something is selected, update the “from” and “to” limits.
from_picker.on('set', function(event) {
  if ( event.select ) {
    to_picker.set('min', from_picker.get('select'))
  }
  else if ( 'clear' in event ) {
    to_picker.set('min', false)
  }
})
to_picker.on('set', function(event) {
  if ( event.select ) {
    from_picker.set('max', to_picker.get('select'))
  }
  else if ( 'clear' in event ) {
    from_picker.set('max', false)
  }
})

// Paises
$('.pais').click(function(){
  $('.items').toggleClass('open');
})

// AOS
AOS.init();

// Scroll Top
$('.scrolltop').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
});

$('.owl-carousel').owlCarousel({
    items:4,
    loop:true,
    nav: true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
})

var linksParent = $('.tabs');
var links = linksParent.find('a');
var items = $('.form');

items.eq(0).addClass('active');

linksParent.on('click', 'a', function(){
  var t = $(this);
  var i = t.index();
  t.addClass('active').siblings().removeClass('active');
  items.eq(i).addClass('active').siblings().removeClass('active');
})