import React, { useState } from 'react'

function Problem4() {
  const [isName , isNameValidate] = useState(false); 
  const [isEmail , isEmailValidate] = useState(false); 
  const [isPassword , isPasswordValidate] = useState(false); 

  const nameValidate = (name) => {
    isNameValidate(name.trim().length > 0)
  }
  const emailValidate = (email) => {
    isEmailValidate(email.includes('@'));
  }
  const passwordValidate = (password) => {
    isPasswordValidate(password.length >= 8);
  }
  return (
    <>
    {/*5. Form with Validation
Problem:
Create a form with fields for name, email, and password.
Validate that:
The name is not empty.
The email contains an "@" symbol.
The password is at least 8 characters long.
Display error messages if the validation fails.*/}
<form>
    <input style={{backgroundColor : isName ? 'green' : 'red'}} type="text" placeholder='Name' onChange={(e) => {
        nameValidate(e.target.value);
    }}/><br /><br />
    <input style={{backgroundColor : isEmail ? 'green' : 'red'}} type="email" placeholder='Email' onChange={(e) => {
        emailValidate(e.target.value)
    }}/><br /><br />
    <input style={{backgroundColor : isPassword ? 'green' : 'red'}} type="password" placeholder='Password' onChange={(e) => {
        passwordValidate(e.target.value)
    }}/>
</form>
    </>
  )
}

export default Problem4