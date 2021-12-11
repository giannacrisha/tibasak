let loaderDIV = document.querySelector(".loaderDIV");
window.addEventListener('load', function(){
	loaderDIV.style.display = 'none';
});

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

