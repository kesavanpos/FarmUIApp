import React from 'react';
import {Button} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const Login = () =>{
    let navigate = useNavigate();
    const onSubmit = () =>{
        navigate("/register");
    }

    return(        
        <div>
            Login
            <Button title='Submit' onClick={onSubmit}>Submit</Button>
        </div>
    )
}

export default Login;