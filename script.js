var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
}

var prevScrollpos1 = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos1 = window.pageYOffset;
  if (prevScrollpos1 > currentScrollPos1) {
    document.getElementById("navbar2").style.top = "0";
  } else {
    document.getElementById("navbar2").style.top = "-240px";
  }
  prevScrollpos1 = currentScrollPos1;
}


let yearlyA = document.getElementById("alAño");
let monthlyA= document.getElementById("alMes");

let yearlyPlan = document.getElementById("yearly");
let monthlyPlan = document.getElementById("monthly");

monthlyPlan.style.display="none";
yearlyA.style.color="var(--primary-color)"

monthlyA.addEventListener("click", monthly);
yearlyA.addEventListener("click", yearly);

function monthly(){
  monthlyPlan.style.display="flex";
  yearlyPlan.style.display="none";

  yearlyA.style.color="var(--secondary-color)"
  monthlyA.style.color="var(--primary-color)"
}

function yearly(){
  monthlyPlan.style.display="none";
  yearlyPlan.style.display="flex";

  monthlyA.style.color="var(--secondary-color)"
  yearlyA.style.color="var(--primary-color)"
}

