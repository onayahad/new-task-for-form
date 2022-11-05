const registrationForm = document.getElementById('reg-form');
const errorMessage = document.getElementById('error');

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function isPhone(phone)
{
    return /^[+88]([0-9\$]{13})$/.test(phone);
}

function isPassword(pass)
{
    return /^[A-Z]([a-zA-Z0-9_\.\#\?\$]{5,})$/.test(pass);
}
 registrationForm.addEventListener('submit', function(e){
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const password2Value = document.getElementById('password2').value;
    const emailValue = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    

    let messages = []
   
    if(name ===''  || name === null )
    {
        messages.push('Name is required')
    }
    

   if(emailValue === '') 
   {
      messages.push('Email is needed');
   } 
   else if (!isEmail(emailValue))
   {
     messages.push('Email not valid');
   } 

   if (phone === '')
   {
    messages.push('Phone Number is needed');
   }
   else if (!isPhone(phone))
   {
    messages.push('Phone Number not valid');
   }
     
   if(password ===''  || password === null )
   {
       messages.push('Password is required')
   }
  else if(!isPassword(password))
   {
       messages.push('Password must start with uppercase and contain atleast 6 characters')
   }
 
   if(password2Value === '') 
   {
    messages.push('Confirm password is required');
   } 
   else if(password !== password2Value) 
   {
    messages.push('Passwords does not match');
   } 

    if(messages.length>0)
    {
        e.preventDefault()
        errorMessage.innerText = messages.join(', ')

    }
  
 });     