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


    $('body').on('click', 'input:checkbox', function () {
        $(this).parent("li").addClass("bonus");
        $(this).remove();
    });

    //if ($(".cb").is(":checked")) {
       // $('body').on('click', 'input:checkbox', function () {
           // $(this).parent("li").removeClass("bonus");
        //});

});


    



