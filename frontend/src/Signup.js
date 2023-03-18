import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './SignupValidation'
import axios from 'axios'

export default function Signup() {
    const [values, setValues] = useState(
        {
            name: '',
            email: '',
            password: ''
        }
    );
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
   
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
      
        if (errors.name === "" && errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/signup', values)
                .then(navigate('/'))
                .catch(err => console.log(err));
        }
    }
    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sign Up</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder='Enter Name' onChange={handleInput} name='name' className='form-control rounded-0' />
                        {errors.name && <span className='text-danger'>{errors.name}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='Enter Email' onChange={handleInput} name='email' className='form-control rounded-0' />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder='Enter Password' onChange={handleInput} name='password' className='form-control rounded-0' />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100'><strong>Signup</strong></button>
                    <p>You agree to TnC</p>
                    <Link to="/" className='btn btn-default border w-100 bg-light'><strong>Login</strong></Link>
                </form>
            </div>
        </div>
    )
}
