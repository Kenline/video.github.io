/*var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

function multiply(a,b) {
    let result = a * b;
    alert(result);
}*/

/*var iceCream = 'chocolate';
if (iceCream !== 'chocolate') {
    myHeading.innerHTML = 'yes';
} else {
    myHeading.textContent = 'no';
    alert("hello");
    multiply(1 , 2);
}*/
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() 
{
    let myName = prompt('Please enter your name.');
    if(myName === null || !myName)
    {
        setUserName();
    }
    else
    {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'my #### is cool, ' + myName;
    }
}

if(!localStorage.getItem('what')) 
{
    setUserName();
} 
else 
{
    let storedName = localStorage.getItem('what');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function()
{
    setUserName();
}

var myImage = document.querySelector('img');

myImage.onclick = function() 
{
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'image/ken1.jpg') {
      myImage.setAttribute ('src','image/ken2.jpg');
    } else {
      myImage.setAttribute ('src','image/ken1.jpg');
    }
}
