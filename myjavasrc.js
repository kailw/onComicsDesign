
window.onload = function() {
    var contenedor = document.getElementById("contenedor_carga");    
    contenedor.style.visibility = "hidden";
    contenedor.style.opacity ="0";
}


$(function () {
    var availableTags = [
        "Batman",
        "Superman",
        "Flash",
        "Dc",
        "Marvel",
        "Spiderman",
        "Hulk",
        "IronMan",
        "Aquaman",
        "Wonder Woman",
        "Thor"
    ];
    $("#tags").autocomplete({
        source: availableTags
    });

    $("#accordion").accordion({
        // 'active': 1
    });

    // $('.gallery').flickity({
    //     arrowShape: 'M 0,50 L 60,00 L 50,30 L 80,30 L 80,70 L 50,70 L 60,100 Z'
    // });



    $(".precio1").html("3,40€");
    $("div[class*=\"precio\"").css({ "text-align": "center", "font-size": "1.5em" });

    $(".titulo1").html("The increible Hulk and Wolverine");
    $("div[class*=\"titulo\"").css({ "text-align": "center", "font-size": "1em" });

    $(".cesta1").html("AÑADIR A LA CESTA");
    $("div[class*=\"cesta\"]").css({ "background": "red", "text-align": "center", "color": "white", "padding": "4px 0", "cursor": "pointer", "transform": "skew(-6deg)" });

    $(".cesta1").on("mouseenter", function () {
        $(".cesta1").css({ "background": "blue", "transition": "background 0.2s linear" });
    });
    $(".cesta1").on("mouseleave", function () {
        $(".cesta1").css({ "background": "red" });
    });



    // $(".portada1").append("<div class=\"vistaRapidaCuadrado\" style=\"background-color: lightgreen; margin-top: 50px; margin-left: 38px; padding: 10px; color:black; display: none\">VISTA RÁPIDA</div>");

    // $(".portada1").on("mouseenter", function () {        
    //   $(".vistaRapidaCuadrado").css({"display":"inline-block", "background":"red","transition" : "all 1s linear", "cursor" : "pointer"});
    // });

    // $(".portada1").on("mouseleave", function () {        
    //     $(".vistaRapidaCuadrado").css({"display":"none" });
    //   });
    $(".vistaCuadrado1").on("click", function () {
        redireccionar();
    });
    $(".vistaCuadrado2").on("click", function () {
        redireccionar();
    });



    $(".precio1N").html("5,45 €");
    $(".precio1N").css({ "text-decoration": "line-through", "font-size": "1em" });

    $(".precio2").html("3,20 €");
    $(".titulo2").html("Dared Evil");

    $(".cesta2").html("AÑADIR A LA CESTA");
    $(".cesta2").on("mouseenter", function () {
        $(".cesta2").css({ "background": "blue", "transition": "background 0.2s linear" });
    });
    $(".cesta2").on("mouseleave", function () {
        $(".cesta2").css({ "background": "red" });
    });

    function redireccionar() {
        window.location = "file:///C:/Users/kevin/Desktop/Kevin/GS/Segundo%20a%C3%B1o/Dise%C3%B1o/comicProyect/vistaRapida.html";
    }

    $("div[class*=\"cesta\"").on("click", function () {
    });

    $("div[class*=\"cesta\"").addClass("opener");
    $(".cestV").addClass("opener");    

    $("#dialog").dialog({
        autoOpen: false,
        modal: true,
        show: {
            effect: "puff",
            duration: 500
        },
        hide: {
            effect: "scale",
            duration: 800
        },
        draggable: false,
        resizable: false

    });

    $( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );


    $(".opener").on("click", function () {
        $("#dialog").dialog("open");
    });



    $(".precio3").html("5,45 €");
    $(".titulo3").html("Teen Titans #1");

    $(".cesta3").html("AÑADIR A LA CESTA");
    $(".cesta3").on("mouseenter", function () {
        $(".cesta3").css({ "background": "blue" });
        $(".cesta3").css({ "background": "blue", "transition": "background 0.2s linear" });
    });
    $(".cesta3").on("mouseleave", function () {
        $(".cesta3").css({ "background": "red" });
    });



    $(".precio4").html("3,20 €");
    $(".titulo4").html("The Flash #5");

    $(".cesta4").html("AÑADIR A LA CESTA");
    $(".cesta4").on("mouseenter", function () {
        $(".cesta4").css({ "background": "blue" });
        $(".cesta4").css({ "background": "blue", "transition": "background 0.2s linear" });
    });
    $(".cesta4").on("mouseleave", function () {
        $(".cesta4").css({ "background": "red" });
    });









    $(".precio5").html("5,45 €");
    $(".titulo5").html("Iron Man: The Birth of the Power #1");

    $(".cesta5").html("AÑADIR A LA CESTA");
    $(".cesta5").on("mouseenter", function () {
        $(".cesta5").css({ "background": "blue" });
        $(".cesta5").css({ "background": "blue", "transition": "background 0.2s linear" });
    });
    $(".cesta5").on("mouseleave", function () {
        $(".cesta5").css({ "background": "red" });
    });



    $(".precio6").html("3,20 €");
    $(".titulo6").html("The increible Hulk #8");

    $(".cesta6").html("AÑADIR A LA CESTA");
    $(".cesta6").on("mouseenter", function () {
        $(".cesta6").css({ "background": "blue" });
        $(".cesta6").css({ "background": "blue", "transition": "background 0.2s linear" });
    });
    $(".cesta6").on("mouseleave", function () {
        $(".cesta6").css({ "background": "red" });
    });






    $(".precio7").html("5,45 €");
    $(".titulo7").html("Superman #2");

    $(".cesta7").html("AÑADIR A LA CESTA");
    $(".cesta7").on("mouseenter", function () {
        $(".cesta7").css({ "background": "blue" });
        $(".cesta7").css({ "background": "blue", "transition": "background 0.2s linear" });
    });
    $(".cesta7").on("mouseleave", function () {
        $(".cesta7").css({ "background": "red" });
    });




    $(".precio8").html("3,20 €");
    $(".titulo8").html("Green Arrow #10");

    $(".cesta8").html("AÑADIR A LA CESTA");
    $(".cesta8").on("mouseenter", function () {
        $(".cesta8").css({ "background": "blue" });
        $(".cesta8").css({ "background": "blue", "transition": "background 0.2s linear" });
    });
    $(".cesta8").on("mouseleave", function () {
        $(".cesta8").css({ "background": "red" });
    });

    $(".tituloV1").html("Captian America #5");
    $(".tituloV2").html("La boda Batman");
    $(".tituloV3").html("La última cacería de kraven");
    $(".tituloV4").html("Superman");
    $(".tituloV5").html("Batman el puto amo");

});




