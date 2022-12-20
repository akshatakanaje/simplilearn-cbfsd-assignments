function validateName(){
    var name = document.getElementById('contact-name').value;

if(name.length == 0){
    document.getElementById('name-error').innerHTML = 'Name is required';
    return false;
}
if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    document.getElementById('name-error').innerHTML = 'Write full name';
    return false;
}
document.getElementById('name-error').innerHTML = 'valid';
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        document.getElementById('email-error').innerHTML = 'Email is required'
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-0-9]+[@][A-Za-z]+[\.][a-z]{2,4}$/)){
        document.getElementById('email-error').innerHTML = 'Email is required'
        return false;
    }
    document.getElementById('email-error').innerHTML = 'valid';
}