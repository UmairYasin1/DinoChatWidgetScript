

// var link = "https://dinochat.glitch.me/visitor/visitorsignup";
// var wHTML = "";
//     wHTML += ('<iframe width="400" height="440" style="background: transparent;border: none;"'); 
//     wHTML += ('src="'+ link +'"'); 
//     wHTML += ('></iframe>'); 
//     document.getElementById('ChatWidget').innerHTML = wHTML;


var link = "https://dinochat.glitch.me/visitor/visitorsignup";
var wHTML = "";
    //wHTML += ('<div width="400" height="440" type="text/html" style="background: transparent;border: none;">'); 
    wHTML += ('<embed width="400" height="440" href="'+ link +'">'); 
    //wHTML += ('</div>'); 
    document.getElementById('ChatWidget').innerHTML = wHTML;

