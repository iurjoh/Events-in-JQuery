$(document).ready(function() {
    //$("p").click(function(){ When I click on <p> run this code });
    
    $("#stream1_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
   });
   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });
}); 

// Events In JQuery - Challenge 1

// Steps
// Inside index.js do the following

// Create a click event handler (not a: on("click" ... ) that is triggered when <p> elements are clicked.
// Within this event handler target <p> elements and using the JQuery css method set the elements color value to red for all <p> elements
// Create a hover event handler that is triggered when <h2> elements are hovered.
// Within this event handler target <h2> elements and using the JQuery css method set the elements background value to lightblue for all <h2> elements
// Create a mouseenter event handler that is triggered by moving over elements with the class card-panel.
// Within this event handler target the <body> element and using the JQuery css method set the elements background-color value to black for the <body> element.
// Create a mouseleave event handler that is triggered by moving off of elements with the class card-panel.
// Within this event handler target the <body> element and using the jquery css method set the elements background-color value to #e1e2e2 for the <body> element.

// solution
// $("p").click(function() {
//     $("p").css("color", "red");
// });    
// $("h2").hover(function() {
//     $("h2").css ("background", "lightblue");
// });    
// $('.card-panel').mouseenter(function() {
//     $('body').css('background-color', 'black');
// });   
// $(".card-panel").mouseleave(function() {
//     $("body").css ("background-color", "#e1e2e2");
// });        
// $("body").css ("background-color", "black");
