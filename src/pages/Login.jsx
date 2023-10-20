import React, {useState} from 'react'
import { useNavigate ,Link} from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
export const Login = () => {

  const[err,setError]=useState(false);
  const navigate=useNavigate();
  const handleSubmit=async(e)=>{
      e.preventDefault()
      const email=e.target[0].value;
      const password=e.target[1].value;

     
      try {
        await signInWithEmailAndPassword(auth,email,password);
        navigate('/')
      } catch (err) {
        setError(true);
        //setLoading(false);
      }
    };

  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Chat</span>
            <span className='title'>Login</span>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='email'></input> 
                <input type="password" placeholder='password'></input>
                
                <button>Sign-in</button>
                {err && <span>Something was wrong</span>}
            </form>
            <p> you don't have an account? <Link to ='/register'>Register</Link></p>
        </div>
    </div>
    
  )
}
export default Login
