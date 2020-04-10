import React from 'react'
import  { Link } from 'react-router-dom'
import './Button.css'

 const Button =(props)=> {
    if(props.href){
    return (
        <a
            href={props.href}
            className={`button`}   
        >
            {props.children}
        </a>
    )
}

    if(props.to){
        return(
            <Link
                to={props.to}
                exact={props.exact}
                className={`button`}
            >
            {props.children}
            </Link>
        )
    }
    return(
        <button
            type={props.type}
            onClick={props.onClick}
            className={`button`}
        >
            {props.children}
        </button>
    )
}
export default Button