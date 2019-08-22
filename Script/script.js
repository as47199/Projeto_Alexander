 	
	/* Código para uso do JQuery */
 	$(document).ready(function(){
		$("#flip").click(function(){
		    //$("#panel").slideDown("slow");
		    //$("#panel").slideDown();
		    //$("#panel").slideDown(5000);
		    $("#panel").slideDown("fast");
	  });
		$("#flip2").click(function(){
			$("#panel").slideUp("fast");
			});
	
/* Animação que faz a mesma coisa dos outros dois anteriores. */
$("#flip3").click(function(){
	$("#panel").slideToggle("fast");
	});


// FadeOut 
 	
	
	  $("#b1").click(function(){
	    $("#div1").fadeOut();
	    $("#div2").fadeOut("slow");
	    $("#div3").fadeOut(3000);
	  });

	  $("#b2").click(function(){
	    $("#div1").fadeIn();
	    $("#div2").fadeIn("slow");
	    $("#div3").fadeIn(3000);
	  });




  $("#btn1").click(function(){
    $("p").append("<b>Appended text</b>.");
  });

  $("#btn2").click(function(){
    $("ol").append("<li>Appended item</li>");
  });

  $("btn3").click(function(){
    $("p").remove("<b>removeed text</b>.");
  });

   $("btn4").click(function(){
    $("ol").remove("<li>removeed item</li>");
  });



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

});