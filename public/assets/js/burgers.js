$(() => {
    $(".change-state").on("click", (event) => {
        var id = $(this).data("id");
        var nowDevour = $(this).data("nowDevour");

        var nowDevourState = {
            devoured = nowDevour
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: nowDevourState
        }).then(() => {
            console.log(nowDevour);
            console.log("This burger is now devoured.");
            location.reload();
        });
    });

    $(".prep-form").on("submit", (event) => {
        event.preventDefault();

        var newBurger = {
            name: $("#newFood").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type:"POST",
            data: newBurger
        }).then(() => {
            console.log("New burger is up.")
            location.reload();
        });
    });
});