
// Onload
$(function(){
  // Name Fade in
  document.getElementById("loadingWord").style.opacity = 1;
  document.getElementById("loadingWord").style.marginTop = "40vh";

  var img = new Image();
  img.src = './image/bgimage.jpg'; // find load longest Img
  img.onload = function() {

    setTimeout(function(){
      // Name Fade Out
     document.getElementById("loadingWord").style.opacity = 0;
     document.getElementById("loadingWord").style.marginTop = "39vh";


      // BGDiv
      document.getElementById("drawBgcolor").style.backgroundColor = 'rgba(0, 128, 0, 0)';
      $('.spinner-grow').hide();

      setTimeout(function(){
        $('#drawBgcolor').css('display','none');
        $('#loadingWord').hide();
      }, 600);

    }, 1000);

  }
})

// ------------------------------------------------------------------
// Nav Bar
/* Set the width of the side navigation to 250px */
var navOpen, navClose = false;


function openNav() {
  if(navClose == true){
    return;
  }
  navOpen = true;
  document.getElementById('mySidenav').style.width = '250px';
  setTimeout( function(){navOpen = false;}, 200);
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  if(navOpen == true){
    return;
  }
  navClose = true;
  document.getElementById('mySidenav').style.width = '0';
  setTimeout( function(){navClose = false;}, 200);
}

function getheight(height) {
  return height - $(window).height()/6
}

// Onclock Scroll
$('.sidenav a').on('click', function(){
  var $this = $(this).html();

  closeNav();

  if($this == 'AboutMe'){
    window.scrollTo({top: getheight($('#AboutMe').offset()['top']), behavior: 'smooth'});
  }
  if($this == 'Skills'){
    window.scrollTo({top: getheight($('#skillTitle').offset()['top']), behavior: 'smooth'});
  }
  if($this == 'Education'){
    window.scrollTo({top: getheight($('#Education').offset()['top']), behavior: 'smooth'});
  }
  if($this == 'Experience'){
    window.scrollTo({top: getheight($('#Experience').offset()['top']), behavior: 'smooth'});
  }
  if($this == 'Interest'){
    window.scrollTo({top: getheight($('#Interest').offset()['top']), behavior: 'smooth'});
  }
  if($this == 'Homework'){
    window.scrollTo({top: getheight($('#Homework').offset()['top']), behavior: 'smooth'});
  }
})

// Hover Open & Close
$('#navicon').hover(function(){
  setTimeout(function(){ openNav(); }, 150);
  $('#mySidenav').mouseleave(function(){ closeNav(); });
  $('.top').on( "mouseover", function(){ closeNav(); });
  $('.mid').on( "mouseover", function(){ closeNav(); });
  $('.bottom').on( "mouseover", function(){ closeNav(); });
});


// -------------------------------------------------------------------------
// For RWD change order of Carousel
$(document).ready(function(){
  if ($(window).width() < 835){
    $('#carousel2').insertAfter('#carousel1');
    $('#skillIntro2').insertAfter('#skillIntro1');
  }
})

$(window).resize(function(){
  if ($(window).width() < 835){
      $('#carousel2').insertAfter('#carousel1');
      $('#skillIntro2').insertAfter('#skillIntro1');
  }
  if ($(window).width() >= 835){
      $('#carousel2').insertAfter('#forInsertImg');
      $('#skillIntro2').insertAfter('#forInsertTxt');
  }
})
