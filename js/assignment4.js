var goodBye = "Good Bye";
    function speakGoodBye(name) 
    {
        console.log(goodBye + " " + name);
        document.write(goodBye + " " + name);
    }

var hello = "Hello";
function speakHello(name)
    {
        console.log(hello + " " + name);
        document.write(hello + " " + name+"\n");
    }


function greeting() {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0);
        if (firstLetter === 'J') 
        {
            speakGoodBye(names[i]);
        }
        else
        {
         speakHello(names[i]);
        }
    }
}
greeting();
