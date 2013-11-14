$(document).ready(function () {

	$("#noString").hide();


	$("#add").click(function () {
		var userItem = $("#userInput").val();

		if (userItem === "") {
            $("#noString").show();

        } 
        else if (/\S/.test(userItem)) {
    // string is not empty and not just whitespace
        }
        else if (userItem = String){
                $('ul').append('<li>'+$('input').val()+'</li>');
            	$('input').val('');
            	$('<input>', {
            		type:"checkbox",
        		}).prependTo('li:last-child').addClass(".cb");
        			$("#noString").hide();
            }
		

	});
   //$('body').on('click', 'li', function(){
            //$(this).addClass("checked");
        //});


});
