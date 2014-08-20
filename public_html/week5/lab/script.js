
/*
 Let’s revisit form validation from week 2. 
  You will use your same form but create some new JavaScript. 
 
1. In your HTML make a fname and lname fields.
2. Using regular expression to validate your form.
    a. Full name must be a SpaceAlphaValidate, only characters and spaces allowed
    c. Email must start with characters, have a @ symbol, have another set 
       of characters have a period and end with 3 characters.
    d. Comments must not have any html.  Search for characters that have <> 
       wrapped around it.

3.  Once all the data is valid hide the form using [object].style.display='none'
    Display a div that will show the data entered.  You can add a div to the page
    and have it display:none to start.

 */


function SpaceAlphaValidate( str ) {
        var alphaRegex = /[a-zA-Z ]+/;
        return alphaRegex.test(str);			
}

function strip_HTML(str) {
        var findHtml = /<(.|\n)*?>/gi;
        return str.replace(findHtml,"");
}

function submitForm() {
	console.log("begin submitform");
        
        var error = false;
    
        var fname = document.getElementById('fname');
        var lname = document.getElementById('lname');
        var emailText = document.getElementById('email');
     
        var fnameErr = document.getElementById("err_fname");
        var lnameErr = document.getElementById("err_lname");
        
        if ( !fname.value.length ) {
                fnameErr.innerHTML = "<p>First name cannot be blank.</p>";
                fname.classList.remove('good');
                fname.classList.add('bad');   
        } else if ( SpaceAlphaValidate( fname.value ) === false ) {
                fnameErr.innerHTML = "<p>First name must be composed of letters and spaces only.</p>";
                fname.classList.remove('good');
                fname.classList.add('bad');   
        } else {
                 fnameErr.innerHTML = "";
                 fname.classList.remove('bad');
                 fname.classList.add('good');   
        }

        if ( !lname.value.length ) {
                lnameErr.innerHTML = "<p>Last name cannot be blank.</p>";
                lname.classList.remove('good');
                lname.classList.add('bad');   
        } else if ( SpaceAlphaValidate( lname.value ) === false ) {
                lnameErr.innerHTML = "<p>Last name must be composed of letters and spaces only.</p>";
                lname.classList.remove('good');
                lname.classList.add('bad');   
        } else {
                 lnameErr.innerHTML = "";
                 lname.classList.remove('bad');
                 lname.classList.add('good');   
        }
        
    
        var emailRegex = /^[a-zA-Z]+[@]{1}[a-zA-Z]+[\.]{1}[a-zA-Z]{2,3}$/;
        var emailErr = document.getElementById("err_email");
        if(emailText.value.match(emailRegex))
            {emailErr.innerHTML="";
            emailText.classList.remove('bad');
            emailText.classList.add('good');}
        else
         {emailErr.innerHTML = "<p>Email is invalid.</p>";
          emailText.classList.add('bad');
          emailText.classList.remove('good');
          error=true;}
        
        var commentsErr = document.getElementById("err_comments");
        var commentText = document.getElementById("comments");
        var re = "[<>]";
        
        if(commentText.value.match(re))
         {commentsErr.innerHTML = "<p>No HTML in comments.</p>";  
          commentText.classList.remove('good');
          commentText.classList.add('bad');   
          error=true;}
          else {
          commentsErr.innerHTML = "";
          commentText.classList.remove('bad');
          commentText.classList.add('good');   
          }
      
         if(!error)
         {
            //var contentWindow = document.getElementById("content");
            document.getElementById("content").style.display="none";

            var resultsWindow = document.getElementById("results");
            resultsWindow.innerHTML="These are your results:<br/>Full name: " + fname.value + " " +
            lname.value + "<br/>E-mail: " + emailText.value + "<br/>Comments: " + commentText.value;
        }
        
}