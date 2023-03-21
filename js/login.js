document.getElementById('submit-buttton').addEventListener('click',function(){

    //user email:
    const userEmailField =document.getElementById('user-email');
    const userEmail = userEmailField.value;
    
    // user password:
    const userPasswordField =document.getElementById('user-password');
    const userPassword =userPasswordField.value;

    //validation:
    if(userEmail== 'samiul@gmail.com' && userPassword== 12345 ){
        window.location.href="banking.html"

    }else{
        alert('email/ password invalid')
    }
 
})
