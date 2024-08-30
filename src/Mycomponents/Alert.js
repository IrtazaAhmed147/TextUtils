import React from 'react'

const Alert = (props) => {
   
    const capatalize = (word) => {
        let lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
    return (

        props.alert && <div style={{position: "absolute", width: "100%"}} className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" >
            <strong>{capatalize(props.alert.type)}: {props.alert.msg}</strong>
        </div>

    )
}

export default Alert
