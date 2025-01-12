import React , {useRef} from 'react'
import "./login.css" ;
import {Link} from "react-router-dom"
import { useDispatch } from 'react-redux';

function Login() {

    const dispatch = useDispatch() ;


    const input1 = useRef() ;
    const input2 = useRef() ;

  return (
    <div className="body">
        <div className="box">
        <div className="form">
            <h2>Sign In</h2>
            <div className="inputBox">
                <input ref={input1} type="text" required="required" />
                <span>Username</span>
                <i></i>
            </div>
            <div className="inputBox">
                <input ref={input2} type="email" required="required" />
                <span>Email</span>
                <i></i>
            </div>
            <Link onClick={() => dispatch({type:"login",payload:{email:input2.current.value,name:input1.current.value}})} className='submit' to="/Language"> Login </Link>
        </div>
    </div>
    </div>
  )
}

export default Login