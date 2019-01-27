
document.getElementById('join').addEventListener('click', function(e){
const email= document.getElementById('email');
const danger=document.getElementById('danger');
const success=document.getElementById('success');
    if(email.value==0){
        danger.className = 'd-block alert alert-danger';
    }else{
        success.className = 'd-block alert alert-success';
    } 
    setTimeout(clearError, 3000);
}) 
  
function clearError(){
    // document.querySelector('.alert').remove();
   location.reload();
  }



