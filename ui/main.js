//counter code

var button=document.getElementById("counter");

/*
var element = document.getElementById('main-text');
element.innerHTML = 'New Value';
//Move the image
var img = document.getElementById('madi');
function moveRight() {
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

//submit name

var submit = document.getElementById("submit_btn");
submit.onclick = function() {
    //Make a request to the server and send the name
     var request =  new XMLHttpRequest();
    //Capture the response and store it in a variable
    
    
    request.onreadystatechange = function() {
        if(request.readyState == XMLHttpRequest.DONE)
        {
            //Take some action
            if(request.status==200)
            {
                    var names = request.responseText;
                    names=JSON.parse(names);
                    var list = '';
                    for(var i=0 ; i < names.length; i++)
                    {
                        
                        list += '<li>' + names[i] + '</li>';
                    } 
                    var ul=document.getElementById('namelist');
                    ul.innerHTML = list ;
            }
        }
        //Not done yet
    };
    //Make the request
    var nameInput=document.getElementById("name");
var name = nameInput.value;
        request.open('GET','http://shivamxav.imad.hasura-app.io/submit-name?name='+name,true);
        request.send(null);
    //Capture a list of names and render it as a list
   
    
    
}
