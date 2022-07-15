let GetValue =()=>{
    let emailField=document.querySelector("#emailAddress").value;
    let phoneNumber =document.querySelector('#phoneNumber').value;
    let Gender = document.querySelector('#Gender').value
    let showmessage=document.querySelector('.whereIwantmymessage');
    console.log(Gender);
    if(emailField=== "" || phoneNumber=== null){
        // alert('login Successful')
        showmessage.innerHTML='<style>h1{color:red;}</style>    <h1>Rejected</h1>'
    
    }
    

else{
    true;
}
}