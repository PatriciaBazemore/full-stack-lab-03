var friends=["Katie", "Anna", "Margaret", "Anna", "Ryan"];

//console.log(friends)
//console.log(friends(0))




//for (var i = 0; i < friends.length; i++){
  //  console.log(friends[i].toUpperCase()+":");
    /*var friend="friend[i];"*/

    //for (var j = 99; j > 0 ; j--) {
      //  var x = j-1; 
        // or just use j-1 in the concatination*
           // to test- console.log(j);
      //if(j >2){
        //console.log(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, "+ x + " lines of code in the file")
      //} 
        //else if (j ===2){
        //console.log(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + "one more line of code in the file")

        //}  else {
          //  console.log(j + " line of code in the file, " + j + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file")
        //}


    //}
//}
//var btn = document.createElement("BUTTON");

var btn =document.getElementById("sing-button");
    btn.addEventListener('click', function() {
        sing();
    });

    //btn.addEventListner('click', sing)''



function sing() {
    for (var i = 0; i < friends.length; i++) {
        //            console.log(friends[i].toUpperCase()+":");
        var div = document.createElement("div");
        div.className = "friend";
        var h3 = document.createElement("h3");
        div.appendChild(h3);
        var friendList = friends[i];
        h3.innerText = friendList;



        for (var j = 99; j > 0; j--) {
            var x = j - 1;
            var p = document.createElement("p");

            if (j > 2) {
                p.innerText = (j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + x + " lines of code in the file");
            } else if (j === 2) {
                p.innerText = (j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + "one more line of code in the file");
            } else {
                p.innerText = (j + " line of code in the file, " + j + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file");
            }
            div.appendChild(p);
        }
        document.body.appendChild(div);
    }
}
   
 


//innerText=






  //h3 text inside friend div w/class friend
  //insert paragraphs in div w/class friend
  //insert in Body


