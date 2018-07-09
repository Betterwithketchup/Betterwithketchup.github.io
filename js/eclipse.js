 $(document).ready(function() {
    $('select').material_select();
    var dis = $("#disabled").val();
    //document.getElementById("disabled").value = $("#cog").val()+$("#int").val()+$("#ref").val()+$("#sav").val()+$("#som").val()+$("#wil").val();
    console.log("Ping");
    $( "#skills" ).draggable({axis:"y"});
    $('.scrollspy').scrollSpy();
    for (var i = $(".SOM").length - 1; i >= 0; i--) {
    	$(".SOM").get(i).innerHTML+=10
    }
 });

 /*$('#cog').on('update',function(event){
	event.preventDefault();
    document.getElementById("disabled").value = $("#cog").val()+$("#int").val()+$("#ref").val()+$("#sav").val()+$("#som").val()+$("#wil").val();

	
})*/
//element.addEventListener("click", myFunction);
 $('#apt').on('change',function(event){
 	console.log("pong")
	//event.preventDefault();
	var apt = $("#apt").val();
	if (apt==1) {
		document.getElementById("cog").value = 10;
		document.getElementById("int").value = 15;
		document.getElementById("ref").value = 20;
		document.getElementById("sav").value = 10;
		document.getElementById("som").value = 20;
		document.getElementById("wil").value = 15;
	}
	if (apt==2) {
		document.getElementById("cog").value = 10;
		document.getElementById("int").value = 20;
		document.getElementById("ref").value = 15;
		document.getElementById("sav").value = 20;
		document.getElementById("som").value = 15;
		document.getElementById("wil").value = 10;
	}
	if (apt==3) {
		document.getElementById("cog").value = 15;
		document.getElementById("int").value = 15;
		document.getElementById("ref").value = 10;
		document.getElementById("sav").value = 20;
		document.getElementById("som").value = 10;
		document.getElementById("wil").value = 20;
	}
	if (apt==4) {
		document.getElementById("cog").value = 15;
		document.getElementById("int").value = 15;
		document.getElementById("ref").value = 15;
		document.getElementById("sav").value = 15;
		document.getElementById("som").value = 15;
		document.getElementById("wil").value = 15;
	}
	if (apt==5) {
		document.getElementById("cog").value = 20;
		document.getElementById("int").value = 20;
		document.getElementById("ref").value = 10;
		document.getElementById("sav").value = 15;
		document.getElementById("som").value = 10;
		document.getElementById("wil").value = 15;
	}
	if (apt==6) {
		document.getElementById("cog").value = 15;
		document.getElementById("int").value = 10;
		document.getElementById("ref").value = 15;
		document.getElementById("sav").value = 10;
		document.getElementById("som").value = 20;
		document.getElementById("wil").value = 20;
	}
	if (apt==7) {
		document.getElementById("cog").value = 20;
		document.getElementById("int").value = 10;
		document.getElementById("ref").value = 20;
		document.getElementById("sav").value = 15;
		document.getElementById("som").value = 15;
		document.getElementById("wil").value = 10;
	}
});