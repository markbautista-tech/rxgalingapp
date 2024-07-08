import React from 'react';
import {useForm} from 'react-hook-form'; 
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import { Button } from '../../components/ui/button';

import './styles/login.css'
import { Input } from '../../components/ui/input';

// validation using zod
const formSchema = z.object({
    username: z.string().min(3, {message: 'Username must be at least 3 characters long'}),
    password: z.string()
})

const LoginForm = () => {
    // use form controller
    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm({
        resolver: zodResolver(formSchema)
    });
    // form submission handler
    const onSubmit = async (data) => {
        alert();
    };
    return(
        <> 
        <div className='form-container'>
            <h2 className='font-bold text-lg'>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='form-login'>
                <label htmlFor="username">Username</label>
                <Input type='text' {...register('username')} placeholder='Username'/>
                {errors.username && <p className='text-red-500'>{errors.username.message}</p>}
                <label htmlFor="password">Password</label>
                <Input type='password' {...register('password')} placeholder='Password'/>
                <Button className='bg-violet-400 w-fit self-center'>{isSubmitting ? 'Submitting...' : 'Login'}</Button>
            </form>
        </div>
        </>
    )
}

export default LoginForm