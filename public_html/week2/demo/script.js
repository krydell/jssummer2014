
    var email = document.getElementById('email');
    var err_email = document.getElementById('err_email');
    var hasErrors = false;
    
    function submit() {
        
        if ( !email.value.length ) {
           hasErrors = true;
           err_email.innerHTML = '<p>Email is not valid.</p>';
           //https://developer.mozilla.org/en-US/docs/Web/API/Element.classList
           email.classList.add('bad');
           email.classList.remove('good');
            
        } else {
            err_email.innerHTML = '';
            email.classList.add('good');
            email.classList.remove('bad');
        }
        
        
    }
    
    
    
    // method
    function testing( str ){
        console.log(str);
   }

//testing('helloooooooooooo');