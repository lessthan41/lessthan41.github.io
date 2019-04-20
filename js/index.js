/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


// Onclock Scroll
$('.sidenav a').on('click', function(){
  var $this = $(this).html();

  if($this == "AboutMe"){
    window.scrollTo({top: 350, behavior: "smooth"});
  }
  if($this == "Skills"){
    window.scrollTo({top: 850, behavior: "smooth"});
  }
  if($this == "Education"){
    window.scrollTo({top: 2420, behavior: "smooth"});
  }
  if($this == "Experience"){
    window.scrollTo({top: 3300, behavior: "smooth"});
  }
  if($this == "Interest"){
    window.scrollTo({top: 3875, behavior: "smooth"});
  }
  if($this == "Homework"){
    window.scrollTo({top: 4500, behavior: "smooth"});
  }
})
