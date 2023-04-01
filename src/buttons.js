function myFunction(){
    alert("Yep, it worked");
    }


var clickMe = document.getElementById("clickMe"); //Keeping it unobstrusive
var elem = document.getElementById("MovingText");

function myMove() {
    var pos = 0;
    var id = setInterval(frame)
    function frame() {
      if (pos == 500) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.left = -500 + pos + 'px'; 
      }
    }
  }

  clickMe.onclick = myMove; //Onclick call. Pass no arguments.​​​​​


function Car() {
    this.noOfDoors = 5,
    this.automatic = true,
    this.engine = "petrol"
};


function myOpenWin(){
window.location.assign("/clock");
}


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function start(){
    var text = "Done!";
    document.getElementById("Lala").innerHTML = "Chhhhchange";
    var a = new Date();
    var c = a.toLocaleTimeString()
    alert(c);
    return text;
}



/* Mimic a server response since innerHTML won't run scripts.
   * code from https://stackoverflow.com/a/20584396 

  function nodeScriptReplace(node) {
    if ( nodeScriptIs(node) === true ) {
      node.parentNode.replaceChild( nodeScriptClone(node) , node );
    }
    else {
      var i = 0;
      var children = node.childNodes;
      while ( i < children.length ) {
        nodeScriptReplace( children[i++] );
      }
    }

    return node;
  }
  function nodeScriptIs(node) {
    return node.tagName === "SCRIPT";
  }
  function nodeScriptClone(node){
    var script  = document.createElement("script");
    script.text = node.innerHTML;
    for( var i = node.attributes.length-1; i >= 0; i-- ) {
      script.setAttribute( node.attributes[i].name, node.attributes[i].value );
    }
    return script;
  }

  
  function inject() {
    let value = document.getElementById("value")

    value.innerHTML = document.getElementById("textarea").value
    nodeScriptReplace(value)
  }

function inputHandler(e) {
    if (e.key !== "Tab") return

    // replace tab with two spaces
    e.preventDefault();
    var s = this.selectionStart;
    this.value = this.value.substring(0, s) +
      "  " +
      this.value.substring(this.selectionEnd);
    this.selectionEnd = s + 2;
  }

  function showInput() {
    document.getElementById("input").classList.remove('hidden')
  }


  document.getElementById("update").addEventListener("click", inject)
document.getElementById("textarea").addEventListener("keydown", inputHandler)
document.getElementById("keyboard").addEventListener("click", showInput)
*/




