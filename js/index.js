$( document ).ready(function() {
  setTimeout(loadDatSkweenie, 2000);
});

function loadDatSkweenie() {
  var banner = ["&nbsp", "K" ,"a", "r", "m", "a", "&nbsp", "L", "i", "f", "e", "&nbsp", "R", "o", "l", "e", "P", "l", "a", "y", "&nbsp"]
  var rules = ["Do not spam chat.", 
               "Respect Staff and other players.", 
               "Do not kill players for no reason (Deathmatch).", 
               "Do not abuse your work.", 
               "Do not spawnkill !",
               "Do not troll.",
               "F5 is your main play menu.",
               "F3 is your job menu.",
			   "B is to put on your seat belt.",
              ]
  var fadeTime = 500
  var fadeTime2 = 500
  $(".infohold").fadeIn(900)
  $(".steamid").show(900)
  $(banner).each(function( i ) {
    var tCount = Number(i)
    fadeTime = fadeTime + 200
    $(".banner p:nth-child("+tCount+")").hide()
    $( ".banner" ).append( "<p>"+banner[tCount]+"</p>" );
    $(".banner p:nth-child("+tCount+")").fadeIn(fadeTime)
  })
  $(rules).each(function( i ) {
    var rCount = Number(i) 
    fadeTime2 = fadeTime2 + 300
    $(".block .text:nth-child("+rCount+")").hide()
    $( ".block:nth-child(1)" ).append( "<p class='text'>"+rules[rCount]+"</p>" )
    $(".block .text:nth-child("+rCount+")").show(fadeTime2)
  })
}