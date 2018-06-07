 $(document).ready(function() {
    $('select').material_select();
    var dis = $("#disabled").val();
    document.getElementById("disabled").value = $("#cog").val()+$("#int").val()+$("#ref").val()+$("#sav").val()+$("#som").val()+$("#wil").val();
    console.log("Ping");

 });

 /*$('#cog').on('update',function(event){
	event.preventDefault();
    document.getElementById("disabled").value = $("#cog").val()+$("#int").val()+$("#ref").val()+$("#sav").val()+$("#som").val()+$("#wil").val();

	
})*/
 $('#apt').on('update',function(event){
	event.preventDefault();
	var apt = $("#apt").val();
	if (apt==1) {
		document.getElementById("cog").value = 10;
	}
})