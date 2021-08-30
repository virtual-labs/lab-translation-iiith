
    //-- the function calls for hiding the ionization svg  -->
    $(document).ready(function () {
        $(function () {
            $("#ionization").hide();
        });
    }); 

//-- the function calls for hiding the sample drop for ionization svg  -->
    $(document).ready(function () {
        $(function () {
            $("#samdrop").hide();
        });
    }); 

//-- the function calls for hiding the acceleration svg  -->
    $(document).ready(function () {
        $(function () {
            $("#accelaration").hide();
        });
    }); 

//-- the function calls for hiding the deflection svg  -->
    $(document).ready(function () {
        $(function () {
            $("#deflection").hide();
        });
    }); 

//-- the function calls for hiding the sample evaporation for  ionization svg  -->
    $(document).ready(function () {
        $(function () {
            $("#bubbles").hide();
        });
    }); 

//-- the function calls for hiding the text svg  -->
    $(document).ready(function () {
        $(function () {
            $("#acceler").hide();
        });
    }); 

//-- the function calls for hiding the text svg  -->
    $(document).ready(function () {
        $(function () {
            $("#magnet").hide();
        });
    }); 

//-- the function calls for hiding the text svg  -->
    $(document).ready(function () {
        $(function () {
            $("#sample").hide();
        });
    }); 

//-- the function calls for hiding the text svg  -->
    $(document).ready(function () {
        $(function () {
            $("#positively").hide();
        });
    }); 

//-- the function calls for animation executed with button " inject sample" and showing svg images with animations-->
$('#btn1').click(function(){
    var divv = $(samdrop);
    var div = $(svg_25);
    $('#inj').animate(
        {'foo':230},
        {
            step: function(foo){
                 $(this).attr('x', foo);
            },
            duration: 500
        }
    );

    setTimeout(function() {
        $("#samdrop").show();
    }, 600);

    div.delay("slow").css("fill", "red");
                div.css("stroke", "red");
    $('#samdrop').animate(
        {'foo':50},
        {
            step: function(foo){
                 $(this).attr('y', foo);
            },
            duration: 2000
        }
);
    div.queue(function () {
                $("#bubbles").delay("slow").delay("slow").delay("slow").delay("slow").fadeIn(); //show();
                $("#sample").show();
                setTimeout(function() {
                    divv.css("opacity", "0").delay("slow").delay("slow");
    }, 2000);
                
                
                div.dequeue();
            });
});
    

    //-- the function calls for animation executed with button " ionization " and showing svg images -->
    $(document).ready(function () {
        var div = $(inj);
        $("#btn2").click(function () {
            $("#small_tube").hide(); //delay("slow").delay("slow").fadeIn();//show();
            div.hide();
            $("#ionization").show();
            $("#sample").hide();
            div.queue(function () {
                $("#positively").show();
                $("#inj").hide();
                div.dequeue();
            });
        });
    });

    //-- the function calls for animation executed with button " acceleration" and showing svg images -->
    $(document).ready(function () {
        $("#btn3").click(function () {
            $("#ionization").hide();
            $("#accelaration").show();
            $("#acceler").show();
            $("#positively").hide();
            div.queue(function () {
                $("#accelaration").fadeIn();
                $("#accelaration").show(); //delay("slow").fadeIn();
                $("#positively").hide();
                div.dequeue();
            });
        });
    });


    //-- the function calls for animation executed with button " deflection" and showing svg images -->
    $(document).ready(function () {
        $("#btn4").click(function () {
            $("#accelaration").hide();
            $("#deflection").show();
            $("#magnet").show();
            $("#acceler").hide();

            div.queue(function () {
                $("#deflection").fadeIn();
                $("#magnet").show();
                $("#deflection").show(); //delay("slow").fadeIn();
                $("#acceler").hide();
                div.dequeue();
            });
        });
    });

    //-- the function calls for animation executed with button " evaluation" and showing next page with graph, form for input and calculator -->
    $(document).ready(function () {
        $("#btn5").click(function () {
            $("#tube").hide();
            $("#deflection").hide();
            $("#magnet").hide();
            window.location.href = 'Plot-htm-wo-sq.html';
            div.queue(function () {
                $("#deflecion").fadeOut();
                $("#defletion").show(); //delay("slow").fadeIn();
                $("#magnet").hide();
                div.dequeue();
            });
        });
    });