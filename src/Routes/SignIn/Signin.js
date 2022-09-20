import React from 'react';
import { signInWithGooglePopUp } from '../../utils/firebase.utils';

const SignIn =()=>{

async function signIn(){
  let response = await signInWithGooglePopUp();
  console.log(response)
}

signIn()

  return (
 <div className="google-popup-signin">
   <button onClick={()=>{signIn()}}>
    Sign In With Google Login
   </button>
 </div>  

    )
}

export default SignIn