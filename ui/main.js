console.log('Loaded!');


//change the text of the main-text div
var element = document.getElementById('main-text');

element.innerHTML = 'New Value';

//move the image
var img=document.getElementbyId("madi");
img.onclick = function() {
    img.style.marginLeft = "100px";
}