import React,{useState} from 'react'
import { Link, useNavigate }  from 'react-router-dom'
import Validation from './LoginValidation'
import axios from 'axios'

function Login() {
    const [values, setValues] = useState(
       {email:'',
       password:''} 
    );
    const [errors,setErrors]=useState({})
    const handleInput=(event)=>{
        setValues(prev=>({...prev,[event.target.name]:[event.target.value]}))
 
    }
    const navigate = useNavigate();
    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(Validation(values));
        if (errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/login', values)
                .then(res=>{
                    if(res.data==="Success"){
                        console.log('hello');
                        navigate('/home');
                    }
                    else{
                        alert("No record exist");
                    }
                })
                .catch(err => console.log(err));
        }
    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
        <h2>Sign In</h2>
        <form action="" onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Enter Email' name='email' onChange={handleInput} className='form-control rounded-0'/>
                {errors.email && <span className='text-danger'>{errors.email}</span>}
            </div>
            <div className='mb-3'>
                <label htmlFor="password" >Password</label>
                <input type="password" name='password' placeholder='Enter Password' onChange={handleInput} className='form-control rounded-0'/>
                {errors.password && <span className='text-danger'>{errors.password}</span>}
            </div>
            <button type='submit' className='btn btn-success w-100'><strong>Log In</strong></button>
            <p>You agree to TnC</p>
            <Link to="/signup" className='btn btn-default border w-100 bg-light'><strong>Create Account</strong></Link>
        </form>
        </div>
    </div>
  )
}

export default Login