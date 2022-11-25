// poop up
$(document).ready(function(){
    $("h1").mouseenter(function(){
      alert("blue puppy tour");
    });
  });

// Hide effect
$(document).ready(function(){
    $("#hide").click(function(){
      $("p").hide();
    });
    $("#show").click(function(){
      $("p").show();
    });
  });

// toggle
  $(document).ready(function(){
    $(".btn1").click(function(){
      $("#img1").toggle();
      
    });
  });

//   slid
$(document).ready(function(){
    $("#flip").click(function(){
      $("#pnd").slideDown("slow");
    });
  });

//   animation
$(document).ready(function(){
    $("#ani").click(function(){
      $("#anim").animate({left: '250px'});
    });
  });

//   stop sliding
$(document).ready(function(){
    $("#slid").click(function(){
      $("#down").slideDown(5000);
    });
    $("#stop").click(function(){
      $("#down").stop();
    });
  });

//   callback
$(document).ready(function(){
    $("#hid").click(function(){
      $("p").hide("slow", function(){
        alert("your hidden now");
      });
    });
  });

//   jquery
$(document).ready(function(){
    $("#cha").click(function(){
      $("#p2").css("color", "purple")
        .slideUp(1500)
        .slideDown(1500);
    });
  });

//   get
$(document).ready(function(){
    $("#get1").click(function(){
      alert("Text: " + $("#A").text());
    });
    $("#get2").click(function(){
      alert("HTML: " + $("#A").html());
    });
  });

//   HTML
$(document).ready(function(){
    $("#htm").click(function(){
      alert("Value: " + $("#b").val());
    });
  });

//   value
$(document).ready(function(){
    $("#cc").click(function(){
      alert($("#C").attr("href"));
    });
  });

//   set
$(document).ready(function(){
    $("#set1").click(function(){
      $("#d1").text("Hello !");
    });
    $("#set2").click(function(){
      $("#d2").html("<b>greeting !</b>");
    });
    $("#set3").click(function(){
      $("#d3").val("world");
    });
  });

//   set html
$(document).ready(function(){
    $("#bt1").click(function(){
      $("#e1").text(function(i, origText){
        return "Old text: " + origText + " New text: Hello world! (index: " + i + ")"; 
      });
    });
  
    $("#bt2").click(function(){
      $("#e2").html(function(i, origText){
        return "Old html: " + origText + " New html: Hello <b>world!</b> (index: " + i + ")"; 
      });
    });
  });

//   set val
$(document).ready(function(){
    $("val").click(function(){
      $("#bv").attr("href", "https://bluepoppybhutan.com/en/about-us/");
    });
  });

//   add append
$(document).ready(function(){
    $("#app1").click(function(){
      $("p").append(" <b>Appended text</b>.");
    });
  
    $("#app2").click(function(){
      $("ol").append("<li>Appended item</li>");
    });
  });

//   add prepand
$(document).ready(function(){
    $("#pre1").click(function(){
      $("p").prepend("<b>Prepended text</b>. ");
    });
    $("#pre2").click(function(){
      $("ol").prepend("<li>Prepended item</li>");
    });
  });

//   add before n after
$(document).ready(function(){
    $("#aft").click(function(){
      $("img").before("<b>Before</b>");
    });
  
    $("#bfo").click(function(){
      $("img").after("<i>After</i>");
    });
  });

  //   remove
$(document).ready(function(){
    $("#move").click(function(){
      $("#rem").remove();
    });
  });

//   empty
$(document).ready(function(){
    $("#empt").click(function(){
      $("#emp").empty();
    });
  });

//   add class
$(document).ready(function(){
    $("#cla").click(function(){
      $("h2, h3, p").addClass("green");
      $(".clas").addClass("important");
    });
  });

//   remove
$(document).ready(function(){
    $(".remo").click(function(){
      $("h4, h5, p").removeClass("red");
    });
  });

//   toggle
$(document).ready(function(){
    $("button").click(function(){
      $("#xx, #yy, #zz").toggleClass("blue");
    });
  });

//   css
$(document).ready(function(){
    $("#cs").click(function(){
      alert("Background color = " + $("p").css("background-color"));
    });
  });

//   dimension
$(document).ready(function(){
    $("button").click(function(){
      var txt = "";
      txt += "Width of div: " + $("#div1").width() + "</br>";
      txt += "Height of div: " + $("#div1").height();
      $("#div1").html(txt);
    });
  });
