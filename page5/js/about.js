$(document).ready(function(){

	var thehours = new Date().getHours();
	
	if (thehours >= 0 && thehours < 11) {
	
    $("#timsec").addClass("morning");

	} else if (thehours >= 11 && thehours < 17) {
		
    $("#timsec").addClass("afternoon");

	} else if (thehours >= 17 && thehours < 24) {
		
    $("#timsec").addClass("evening");
	}

	
});


function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
