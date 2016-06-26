jQuery(document).ready(function ($) {


    $(window).stellar();

    var links = $('.navigation').find('li'),
        slide = $('.slide'),
        button = $('.button'),
        mywindow = $(window),
        htmlbody = $('html,body'),
        winHeight = mywindow.height(),
        menuHeight = $('.menu').height();


    slide.waypoint(function (event, direction) {

        dataslide = $(this).attr('data-slide');

        if (direction === 'down') {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
        else {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }

    });
 
//scroll

$(document).ready(function() {
  function filterPath(string) {
  return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
  }
  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');
 
  $('a[href*=#]').each(function() {
    var thisPath = filterPath(this.pathname) || locationPath;
    if (  locationPath == thisPath
    && (location.hostname == this.hostname || !this.hostname)
    && this.hash.replace(/#/,'') ) {
      var $target = $(this.hash), target = this.hash;
      if (target) {
        var targetOffset = $target.offset().top;
        $(this).click(function(event) {
          event.preventDefault();
          $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
            location.hash = target;
          });
        });
      }
    }
  });
 
  // use the first element that is "scrollable"
  function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
      var el = arguments[i],
          $scrollElement = $(el);
      if ($scrollElement.scrollTop()> 0) {
        return el;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop()> 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return el;
        }
      }
    }
    return [];
  }
 
});    
    
    // parallaxe marconi
    $('[data-type="background"]').each(function () {
        var $bgobj = $(this);

        mywindow.scroll(function () {
            var yPos = - (mywindow.scrollTop() / $bgobj.data('speed')),
                coords = '50% '+ yPos + 'px';

            $bgobj.css({ backgroundPosition: coords });
        });
    });
    
    $('#slide1, #slide1b').height(winHeight - menuHeight);
    
    $('#slide2').css({ paddingBottom: menuHeight + 30 });
    
    mywindow.resize(function () {
        winHeight = mywindow.height();
        menuHeight = $('.menu').height();
        
        $('#slide1, #slide1b').height(winHeight - menuHeight);
        
        $('#slide2').css({ paddingBottom: menuHeight + 30 });
    });


});