//function makeMadLib() {
   // var x = document.getElementById("noun").value;
    //var y = document.getElementById("adjective").value;
 //   var z = document.getElementById("name").value;
   // return + z + "was a" + y + " person. " + z + " always loved " + x + ".";
//1`}

let button = document.getElementById('lib-button');
let output = document.getElementById('story')
function makeMadLib(){
    var x = document.getElementById("noun").value;
    var y = document.getElementById("adjective").value;
    var z = document.getElementById("name").value;
    return + z + "was a" + y + " person. " + z + " always loved " + x + ".";
}

button.addEventListener('click', makeMadLib);



//button.addEventListener('click', makeMadLib()){
//    var x = document.getElementById("noun").value;
//    var y = document.getElementById("adjective").value;
//    var z = document.getElementById("name").value;
//    return + z + "was a" + y + " person. " + z + " always loved " + x + ".";
//}

//let output = document.getElementById('story');

//output.onlick = makeMadLib;




