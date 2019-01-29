$(function(){

    $(".devour").on("click", function(event) {
        var id = $(this).data("id");
        $.ajax("/api/burgers/" + id, {type: "PUT"})
        .then( function() {
            console.log("And off you go to burger heaven");
            // Reload to update list
            location.reload();
        });
    });

    $(".post-burger").on("submit", function(event) {
        event.preventDefault();
        var userInput = { burgerName: $("#burgerName").val().trim() }
        console.log(userInput);

        $.ajax("/api/burgers", {
            type: "POST",
            data: userInput
        }).then(
            function() {
                console.log("A new burger approaches");
                location.reload();
            }
        );
    });

});