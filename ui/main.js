var button1 = document.getElementById("counter1");

button1.onclick = function() {
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
                var span=document.getElementById("count1");
                span.innerHTML = counter.toString();
            }
        }
        //Not done yet
    };
    //Make the request
    request.open('GET','http://localhost:8080/counter1',true);
    request.send(null);
};


var button2 = document.getElementById("counter2");

button2.onclick = function() {
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
                var span=document.getElementById("count2");
                span.innerHTML = counter.toString();
            }
        }
        //Not done yet
    };
    //Make the request
    request.open('GET','http://localhost:8080/counter2',true);
    request.send(null);
};


var button3 = document.getElementById("counter3");

button3.onclick = function() {
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
                var span=document.getElementById("count3");
                span.innerHTML = counter.toString();
            }
        }
        //Not done yet
    };
    //Make the request
    request.open('GET','http://localhost:8080/counter3',true);
    request.send(null);
};


var button4 = document.getElementById("counter4");

button4.onclick = function() {
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
                var span=document.getElementById("count4");
                span.innerHTML = counter.toString();
            }
        }
        //Not done yet
    };
    //Make the request
    request.open('GET','http://localhost:8080/counter4',true);
    request.send(null);
};


