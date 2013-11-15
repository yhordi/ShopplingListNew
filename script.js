$(document).ready(function () {

    $("#noString").hide();


    $("#add").click(function () {
        var userItem = $("#userInput").val();
        if ($.trim(userItem) !== '') {
            $('ul').append('<li>' + " " + userItem + '</li>');
            $('input').val('');
            $('<input>', {
                type: "checkbox",
            }).prependTo('li:last-child').addClass(".cb");
            $("#noString").hide();
        } else $("#noString").show();
    });

    $("#userInput").keydown(function(e){
        if(e.which == 13) {
        var userItem = $("#userInput").val();
        if ($.trim(userItem) !== '') {
            $('ul').append('<li>' + " " + userItem + '</li>');
            $('input').val('');
            $('<input>', {
                type: "checkbox",
            }).prependTo('li:last-child').addClass(".cb");
            $("#noString").hide();
        } else $("#noString").show();
    }
    });


    $("#clearChecked").click(function () {
        $("li.bonus").remove();
    });
    
    $("#clearAll").click(function () {
        $("li").remove();
    });

        $('body').on('click', 'input:checkbox', function () {
            $(this).parent("li").toggleClass("bonus");

    });

        if ($('checkbox:checked').is('checked')) {
            $('body').on('click', 'input:checkbox', function(){
            $(this).parent("li").removeClass("bonus");
            });
        }

});


    



