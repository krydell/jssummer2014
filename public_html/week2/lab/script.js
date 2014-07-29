/*
 * Karley Vasile 7/29/2014
 * 
 * Make sure to validate that an email is 
 * entered into the input(just that it has a length.
 * 
 * Validate the comments field to make sure that is has
 * a length greater than 0 and less than 150.
 */
    
  function submitForm() {
    
    var fullname = document.getElementById("name");
    var fullnameErr = document.getElementById("err_name");
    
    var hasErrors = false;
    
    if ( fullname.value.length ) {
        fullname.classList.remove('bad');
        fullname.classList.add('good');        
        fullnameErr.innerHTML = '';
        
    } else {
        hasErrors = true;
        fullname.classList.remove('good');
        fullname.classList.add('bad');       
        fullnameErr.innerHTML = "<p>Full Name is not valid.</p>";       
    }
    if ( !email.value.length ) {
        hasErrors = true;
        err_email.innerHTML = '<p>Email is not valid.</p>';
        email.classList.add('bad');
        email.classList.remove('good');
            
    } else {
        err_email.innerHTML = '';
        email.classList.add('good');
        email.classList.remove('bad');
    }
    
      if ( comments.value.length<1 || comments.value.length>150 ) {
           hasErrors = true;
           err_comments.innerHTML = '<p>Comments must be between 1-150 chars.</p>';
           //https://developer.mozilla.org/en-US/docs/Web/API/Element.classList
           comments.classList.add('bad');
           comments.classList.remove('good');
            
        } else {
            err_comments.innerHTML = '';
            comments.classList.add('good');
            comments.classList.remove('bad');
        }
        
        
    
    
}