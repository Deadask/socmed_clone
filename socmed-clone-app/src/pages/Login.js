import React from 'react'
import { Form,Button, FormControl, FormGroup } from 'react-bootstrap'

function Login() {

    const handleSubmit = (e) => {
        
        e.preventDefault();
        console.log('login!');
    }

    return (
        <div className='login-container'>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Form.Label>Email</Form.Label>
                    <FormControl />
                </FormGroup>
                <FormGroup>
                    <Form.Label>Password</Form.Label>
                    <FormControl/>
                </FormGroup>
                <div className='login-submit'>
                    <Button className='button-submit' type='submit'>Login</Button>
                </div>
                <h6>Don't have an Account? <a href='/register'>Register</a></h6>
            </Form>      
        </div>
    )
}

export default Login
