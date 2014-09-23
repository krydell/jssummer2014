//Karley Vasile - Midterm / Final. 9/23/2014.

function emailValidate (str){
    var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;
    return emailRegex.test(str);
}
function SpaceAlphaValidate( str ) {
        var alphaRegex = /^[a-zA-Z ]+$/;
        return alphaRegex.test(str);			
}
function strip_HTML(str) {
        var findHtml = /<(.|\n)*?>/gi;
        return str.replace(findHtml,"");
}
function phoneValidate (str){
    var phoneRegex = /\d{3}-\d{3}-\d{4}$/;
    return phoneRegex.test(str);
}
function submitform() {
    var fullName = document.getElementById("fullname");
    var fullNameErr = document.getElementById("fullname_err");
    var email = document.getElementById("email");
    var emailErr = document.getElementById("email_err");
    var description = document.getElementById("description");
    var descriptionErr = document.getElementById("err_description");
    var phone = document.getElementById("phone");
    var phoneErr = document.getElementById("phone_err");
    var success = document.getElementById("success_report");
    var hasErrors = false;
    
    if ( !fullName.value.length ) {
        hasErrors = true;
        fullName.classList.remove('good');
        fullName.classList.add('bad');       
        fullNameErr.innerHTML = "<p>Full name is a required field.</p>";     
    } else if( SpaceAlphaValidate( fullName.value ) === false){
        hasErrors = true;
        fullName.classList.remove('good');
        fullName.classList.add('bad');       
        fullNameErr.innerHTML = "<p>Please enter full name in correct format.</p>";
    }else {
        fullName.classList.remove('bad');
        fullName.classList.add('good');        
        fullNameErr.innerHTML = '';      
    }
    
    if (!email.value.length){
        hasErrors = true;
        email.classList.remove('good');
        email.classList.add('bad');
        emailErr.innerHTML = "<p>Email is a required field.<p>";      
    } else if (emailValidate (email.value) === false){
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
    
    if (!phone.value.length){
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
    description.value = strip_HTML(description.value);
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
        
        success.innerHTML = "<p>Information submission was a success, thank you!<p>"
        
        var contentForm = document.getElementById('mainform');
        contentForm.style.display = 'none';
        
        var result = document.getElementById('result');
        var resultString = '<p> Full Name :' + fullName.value +'</p>' + '<p> Email : ' + email.value + '</p>' + '<p> Phone Number : '+ phone.value + '</p>' + '<p> Comments : ' + comments.value + '</p>';
        result.innerHTML = resultString;
    }
}