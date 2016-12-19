
var $nav = document.getElementById('nav');
var $comp = document.getElementById('comp');
var $comp2 = document.getElementById('comp2');
var $ret3 = document.getElementById('retour3');
var $ret2 = document.getElementById('retour2');
var $ret1 = document.getElementById('retour1');
var $shunt = document.getElementById('shunt');

var $i;

function changement() {
    $nav.classList.add("nav");
}

function retour() {
    if ($nav.classList.contains("nav")) {
        $nav.classList.remove("nav");
    }
}

function slide() {
  if ($shunt.classList.contains("shunt")) {
    $shunt.classList.remove("shunt");
  }
  else {
    $shunt.classList.add("shunt");
  }
}
//change la classe de nav

$comp.onclick = changement;
$comp2.onclick = changement;
$ret3.onclick = retour;
$ret2.onclick = retour;
$ret1.onclick = retour;
$shunt.onclick= slide;
