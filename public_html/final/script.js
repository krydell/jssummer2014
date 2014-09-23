//Karley Vasile - Midterm / Final. 9/23/2014.

function emailValidate (str){ // email validation regex
    var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;
    return emailRegex.test(str);
}
function SpaceAlphaValidate( str ) { // space alpha validation, regex
        var alphaRegex = /^[a-zA-Z ]+$/;
        return alphaRegex.test(str);			
}
function strip_HTML(str) { // removes all HTML characters from the description
        var findHtml = /<(.|\n)*?>/gi;
        return str.replace(findHtml,"");
}
function phoneValidate (str){ // validating the phone number string, regex
    var phoneRegex = /\d{3}-\d{3}-\d{4}$/;
    return phoneRegex.test(str);
}

function deleteLastRow()
{
   if(localStorage.length) // if localstorage has a length
   {
       var lastID = parseInt(localStorage.getItem("records")); // find the last record
       
       localStorage.removeItem("nameR"+lastID);
       localStorage.removeItem("emailR"+lastID);
       localStorage.removeItem("phoneR"+lastID);
       localStorage.removeItem("descriptionR"+lastID);
        // remove most recent records
        
       var deleteResult = document.getElementById("deleteResult");
       deleteResult.innerHTML = "<p>Record ID#" + lastID + " has been deleted. To see these changes in the table, refresh the page.</p>";        
        // show output success
       lastID --;
       
       localStorage.setItem("records",lastID);
       // update records to be one less
 
       
   }
}

function updateData() // update the table
{

        if(localStorage.length) //if you have anything in localstorage
        {
            var amtOfRecords = localStorage.getItem("records"); // how many records?
            
            //console.log(amtOfRecords);
            
            for(i = 1; i <= amtOfRecords; i++) // keep adding until you get all the records
            {
                var table = document.getElementById("maintable");
                //var rows = 1;       
                var row = table.insertRow(i); // add a row

                var cell0 = row.insertCell(0); // add cells
                var cell1 = row.insertCell(1);
                var cell2 = row.insertCell(2);
                var cell3 = row.insertCell(3);
                var cell4 = row.insertCell(4);

                cell1.innerHTML = JSON.parse(localStorage.getItem("nameR"+i)); // update the cell's HTML to show these records
                cell2.innerHTML = JSON.parse(localStorage.getItem("emailR"+i));
                cell3.innerHTML = JSON.parse(localStorage.getItem("phoneR"+i));
                cell4.innerHTML = JSON.parse(localStorage.getItem("descriptionR"+i));

            }
        }
 }

function submitform() { // submission of initial form
    var fullName = document.getElementById("fullname");
    var fullNameErr = document.getElementById("fullname_err");
    var email = document.getElementById("email");
    var emailErr = document.getElementById("email_err");
    var description = document.getElementById("description");
    var descriptionErr = document.getElementById("err_description");
    var phone = document.getElementById("phone");
    var phoneErr = document.getElementById("phone_err");
    var success = document.getElementById("success_report");
    var hasErrors = false; // get all of the elements & put them into vars
    
    if ( !fullName.value.length ) { // check to make sure field is filled in.. this repeats many times below
        hasErrors = true;
        fullName.classList.remove('good');
        fullName.classList.add('bad');       
        fullNameErr.innerHTML = "<p>Full name is a required field.</p>";     
    } else if( SpaceAlphaValidate( fullName.value ) === false){ //format check
        hasErrors = true;
        fullName.classList.remove('good');
        fullName.classList.add('bad');       
        fullNameErr.innerHTML = "<p>Please enter full name in correct format.</p>";
    }else { // if no issues, you're good to go.
        fullName.classList.remove('bad');
        fullName.classList.add('good');        
        fullNameErr.innerHTML = '';      
    }
    
    if (!email.value.length){ //same as above... check for length
        hasErrors = true;
        email.classList.remove('good');
        email.classList.add('bad');
        emailErr.innerHTML = "<p>Email is a required field.<p>";      
    } else if (emailValidate (email.value) === false){ // check for format according to regex, etc
        hasErrors = true;
        email.classList.remove('good');
        email.classList.add('bad');
        emailErr.innerHTML = "<p>Please enter e-mail in correct format.<p>"; 
    }
    else {
        email.classList.remove('bad');
        email.classList.add('good');
        emailErr.innerHTML = '';
    }
    
    if (!phone.value.length){ // same as above...
        hasErrors = true;
        phone.classList.remove('good');
        phone.classList.add('bad');
        phoneErr.innerHTML = "<p>Phone number is a required field.<p>";      
    } else if (phoneValidate (phone.value) === false){
        hasErrors = true;
        phone.classList.remove('good');
        phone.classList.add('bad');
        phoneErr.innerHTML = "<p>Please enter phone number in correct format.<p>"; 
    }
    else { 
        phone.classList.remove('bad');
        phone.classList.add('good');
        phoneErr.innerHTML = '';
    }
    description.value = strip_HTML(description.value); // remove HTML from desc.
    if (description.value.length > 0 && description.value.length < 150) {
        description.classList.remove('bad');
        description.classList.add('good');
        descriptionErr.innerHTML = '';
    }
    else {
        hasErrors = true;
        description.classList.remove('good');
        description.classList.add('bad');
        descriptionErr.innerHTML = "<p>Description is a required field.<p>";
    }			
    if (hasErrors === false){
        
        success.innerHTML = "<p>Information submission was a success, thank you! Refresh the page to show updated records.<p>"; // show inline approved msg
        
        var idNum = 0; // record ID number
        
        if(localStorage.getItem("records")) // if there is already a record..
        {idNum = parseInt(localStorage.getItem("records")) + 1;} // make it the next one
        else
        {idNum = 1;} // otherwise this is the first
        

        
        var contentForm = document.getElementById("mainform");

        localStorage.setItem("nameR"+idNum, JSON.stringify(fullName.value)); // store these in their own values
        localStorage.setItem("emailR"+idNum, JSON.stringify(email.value));
        localStorage.setItem("phoneR"+idNum,  JSON.stringify(phone.value));
        localStorage.setItem("descriptionR"+idNum,  JSON.stringify(description.value));
        
        localStorage.setItem("records", idNum);
        
        contentForm.reset(); // clear form
        
    }
}