// ------------------------------------------------------------------
// Nav Bar
/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function getheight(height) {
  return height - $(window).height()/6
}

// Onclock Scroll
$('.sidenav a').on('click', function(){
  var $this = $(this).html();

  closeNav();

  if($this == "AboutMe"){
    window.scrollTo({top: getheight($('#AboutMe').offset()['top']), behavior: "smooth"});
  }
  if($this == "Skills"){
    window.scrollTo({top: getheight($('#skillTitle').offset()['top']), behavior: "smooth"});
  }
  if($this == "Education"){
    window.scrollTo({top: getheight($('#Education').offset()['top']), behavior: "smooth"});
  }
  if($this == "Experience"){
    window.scrollTo({top: getheight($('#Experience').offset()['top']), behavior: "smooth"});
  }
  if($this == "Interest"){
    window.scrollTo({top: getheight($('#Interest').offset()['top']), behavior: "smooth"});
  }
  if($this == "Homework"){
    window.scrollTo({top: getheight($('#Homework').offset()['top']), behavior: "smooth"});
  }
})
// -------------------------------------------------------------------------
// For RWD change order of Carousel
$(document).ready(function(){
  if ($(window).width() < 835){
    $("#carousel2").insertAfter("#carousel1");
    $("#skillIntro2").insertAfter("#skillIntro1");
  }
})

$(window).resize(function(){
  if ($(window).width() < 835){
      $("#carousel2").insertAfter("#carousel1");
      $("#skillIntro2").insertAfter("#skillIntro1");
  }
  if ($(window).width() >= 835){
      $("#carousel2").insertAfter("#forInsertImg");
      $("#skillIntro2").insertAfter("#forInsertTxt");
  }
})
