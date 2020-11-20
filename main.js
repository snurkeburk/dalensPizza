function myFunction() {
    var copyText = document.getElementById("nummer");
  
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*Mobil*/
  
    document.execCommand("copy");
  
    alert("Kopierat!");
  } 

var d = new Date();
var n = d.getDay();
var deadline = new Date("Jan 5, 2222 21:00:00").getTime();
var x = setInterval(function() { 
    var now = new Date().getTime(); 
    var t = deadline - now; 
    var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
    var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
    var seconds = Math.floor((t % (1000 * 60)) / 1000); 
    document.getElementById("timer").innerHTML = 
     hours + "h " + minutes + "m " + seconds + "s "; 
        if (hours <= 1 && minutes < 1 && seconds < 3) { 
            clearInterval(x); 
            document.getElementById("timer").innerHTML = "STÄNGT!"; 
        } 
    }, 1000); 
