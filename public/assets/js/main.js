$(function(){
    $(".devour").on("click", function(event) {
        var id = $(this).data("id");
        
        $.ajax("/api/burgers/" + id, {type: "PUT"})
        .then( function() {
            console.log("And off you go to burger heaven");
            location.reload();
        })
    })
})