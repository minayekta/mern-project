import React , {useReducer} from 'react'
import './Input.css'
const inputReduser = (state ,  action) =>{
    switch(action.type){
        case "CHANGE" : 
        return{
            ...state,
            value: action.val,
            isValid: true 
        }
        default: 
            return state
    }
}

 const Input= (props)=> {
     const [inputState , dispatch] = useReducer(inputReduser, {
         value: '',
         isValid: false
     })
     const changeHandler = event =>{
        dispatch({
            type: "CHANGE",
            val: event.target.value
        })
     }
     const Element = 
        props.element === 'input' ? (
            <input
                id={props.id}
                type={props.type}
                placeholder={props.placeholder}
                onChange={changeHandler}
                value={inputState.value}
            />
        ) : (
            <textarea
                id={props.id}
                rows={props.rows || 3 }
                onChange={changeHandler}
                value={inputState.value}
            />
        )
    return (
        <div className={`form-control`}>
            {Element}
            {!inputState.isValid && <p> {props.errorText}</p>}
        </div>
    )
}
export default Input