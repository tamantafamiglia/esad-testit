function openpage(x) {
  document.getElementById("content").innerHTML =
    '<iframe src="page' + x + '.html"></iframe>';
}
function openNav() {
  document.getElementById("menu").style.width = "50vw";
  // document.getElementById("menu").style.minWidth = "30vw";
  document.getElementById("menu").style.height = "100vh";
  document.getElementById("menuliste").style.animation = "menuliste 2s 1";
}

function closeNav() {
  document.getElementById("menu").style.width = "0";
  document.getElementById("menu").style.minWidth = "0";
  document.getElementById("menu").style.height = "100vh";
 
}
