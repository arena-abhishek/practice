$(document).ready(function () {
  $("p").click(function () {
    // $(this).hide();
  });
  $("p").dblclick(function () {
    // $(this).hide();
  });
  $("#text").mouseenter(function () {
    // alert("you enter the para");
  });
  $(".text").mouseleave(function () {
    // alert("you enter in p2")
  });
  $(".text").mousedown(function () {
    // console.log("mouse down");
  });
  $(".text").mouseup(function () {
    // console.log("mouse up");
  });
  $("#text").hover(
    function () {
      // alert("you entered p1!");
    },
    function () {
      // alert("Bye! You now leave p1");
    });
    $("input").focus(function(){
      $(this).css("background-color", "yellow")
    })
    $("input").blur(function(){
      $(this).css("background-color", "green");
    });
    $("p").on("click", function(){
      // $(this).hide();
    });
    $("p").on({
      mouseenter: function(){
        $(this).css("background-color", "lightgray");
      },
      mouseleave: function(){
        $(this).css("background-color", "lightblue");
      },
      click: function(){
        $(this).css("background-color", "yellow")
      }
    });
});
