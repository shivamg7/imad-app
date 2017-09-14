var name_list = document.getElementById("namelist");
var list = [];

    //Create a request object
    var request =  new XMLHttpRequest();
    //Capture the response and store it in a variable
    //Make the request

    request.onreadystatechange = function() {
        if(request.readyState == XMLHttpRequest.DONE)
        {
            //Take some action
            if(request.status==200)
            {
                var counter1=request.responseText;
                list=list+"Praveen Leades with  : ";
                
                list=list+counter1;
                list=list+" Votes.";
               // var span=document.getElementById("count4");
                name_list.innerHTML = list;
            }
        }
        //Not done yet
    };

    request.open('GET','http://localhost:8080/counterv1',true);
    request.send(null);



