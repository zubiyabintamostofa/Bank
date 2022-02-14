document.getElementById('login-submit').addEventListener('click',function(){
    //get user password
    const emailField=document.getElementById('user-email');
    const usermail=emailField.value;
    //get user password
    const passwordField=document.getElementById('user-password');
    const userPassword=passwordField.value;
    //check email and password
    if(usermail=='sontan@bap.com'&&userPassword=='secret'){
        window.location.href='banking.html'
    }
})