/* 
 * Karley Vasile 8/12/2014
 * 
 *We need to collect some data from the user. 
 *Please collect the following data. User input from email field 
 *and name field.  User Screen size, Browser information, page title. 
 * Collect the first 100 mouse coordinates the user makes on the page.
 * 
 * 
1.  Create a Json that will collect all this data. It’s as simple as a key:value pair.
2. Collect the user input value when they blur on the field
    a. Email
    b. User name
3. The user screen size, user agent and page title can be collected when 
the window loads.
    a. window.innerHeight
    b. window. innerWidth
    c. window. navigator. userAgent
    d. document.title
4. Collect the user mouse cords by putting them into an array when the 
user moves there mouse on the document. One for the mouseX, and one for 
the mouseY.  Once the Array has a length of 100 you can stop pushing the 
mouse cords into the array.
    a. e.clientX
    b. e.clientY
    c. jsonVariable.ArrayVariable.push(e.clientX) (Do not name your variables this sample)

 */


var userdata = {
"mouseX" : [],
"mouseY" : [],
"email" : '',
"fullname" : '',
"screenwidth" : [],
"screenheight" : [],
"useragent" : [],
"pagetitle" : []
};

function loadPageReport(e) {
    userdata.screenwidth.push(window.innerWidth);
    userdata.screenheight.push(window.innerHeight);
    userdata.useragent.push(window.navigator.userAgent);
    userdata.pagetitle.push(document.title);
}


window.onload=loadPageReport();

var email = document.getElementById('email');
    email.addEventListener('blur', saveEmailData);
    
var fname = document.getElementById('fullname');
    fname.addEventListener('blur', saveNameData);
    



function showResults() {
    console.clear();
    console.log(userdata);
}


function trackMouse(e) {
    userdata.mouseX.push(e.clientX);
    userdata.mouseY.push(e.clientY);
                
    if ( userdata.mouseX.length > 100 ) {
        document.removeEventListener('mousemove', trackMouse);
        }
    else if ( userdata.mouseY.length > 100 ) {
        document.removeEventListener('mousemove', trackMouse);
        }
            
    }


function saveEmailData() {
    userdata.email =  email.value;
};
function saveNameData(){
    userdata.fullname = fname.value;
};

document.addEventListener('mousemove', trackMouse);

var results = document.getElementById('showResults');

results.addEventListener("click", showResults);