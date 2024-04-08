var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}





var slIndex = 1;
shDivs(slIndex);

function plDivs(n) {
  shDivs(slIndex += n);
}

function shDivs(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  if (n > x.length) {slIndex = 1}
  if (n < 1) {slIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slIndex-1].style.display = "block";
}


var sIndex = 1;
sDivs(sIndex);

function divPlus(n) {
  sDivs(sIndex += n);
}

function sDivs(n) {
  var i;
  var x = document.getElementsByClassName("slid");
  if (n > x.length) {sIndex = 1}
  if (n < 1) {sIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[sIndex-1].style.display = "block";
}