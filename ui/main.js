//counter code

var button=document.getElementById("counter");

/*
var element = document.getElementById('main-text');
element.innerHTML = 'New Value';
//Move the image
var img = document.getElementById('madi');
function.moveRight() {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function() {
    var interval = setInterval(moveRight, 100);
}
*/

button.onclick = function() {
    //Create a request object
    var request =  new XMLHttpRequest();
    //Capture the response and store it in a variable
    
    
    request.onreadystatechange = function() {
        if(request.readyState == XMLHttpRequest.DONE)
        {
            //Take some action
            if(request.status==200)
            {
                var counter=request.responseText; 
                var span=document.getElementById("count");
                 span.innerHTML = counter.toString();
            }
        }
        //Not done yet
    };
    //Make the request
        request.open('GET','http://shivamxav.imad.hasura-app.io/counter',true);
        request.send(null);
};