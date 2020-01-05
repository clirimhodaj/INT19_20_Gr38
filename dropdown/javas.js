function changeimg(){
document.getElementById('tv').src="tv1.jpg";
}

function backToNormal(){
  document.getElementById('tv').src="tv.jpg";
}

function ndryshotel(){
  document.getElementById('tel').src="samsung.jpg";
}
function rikthe(){
  document.getElementById('tel').src="pexels-photo-270686.jpeg";
}
function ndryshopc() {
  document.getElementById('pc').src="66701442_1209588519165529_2707558812306374656_n.jpg";
}
function back() {
  document.getElementById('pc').src="pexels-photo.jpg";
}

function ndryshohome(){
document.getElementById('s1').innerHTML="Servisimi";
}


function pop() {
    window.alert("Te dhenat jane proceduar");
}


$(".fa-facebook-f").mouseenter(function(){
  var divi=$(".fa-facebook-f");
  divi.animate({opacity:'0.4'},"fast");
});
$(".fa-facebook-f").mouseout(function(){
  var divi=$(".fa-facebook-f");
  divi.animate({opacity:'1'},"fast");
});
$(".fa-twitter").mouseenter(function(){
  var divi=$(".fa-twitter");
  divi.animate({opacity:'0.4'},"fast");
});
$(".fa-twitter").mouseout(function(){
  var divi=$(".fa-twitter");
  divi.animate({opacity:'1'},"fast");
});
$(".fa-instagram").mouseenter(function(){
  var divi=$(".fa-instagram");
  divi.animate({opacity:'0.4'},"fast");
});
$(".fa-instagram").mouseout(function(){
  var divi=$(".fa-instagram");
  divi.animate({opacity:'1'},"fast");
});


function validateForm() {
  var x = document.forms["formaIme"]["name"].value;
  if (x == "") {
    alert("Emri nuk duhet te jete i zbrazet");

  }else if(c==0){
    document.getElementById("warning").style.display="block";
    c=1;
  }
  else {
    document.getElementById("warning").style.display="none";
    c=0;
  }
}
