import React, {useState} from 'react'
import styled from 'styled-components'


// styling
const Form = styled.form`
    grid-column: 2/2 ;
    grid-row : 2/3;
`


export default function Location (props){
    

    // saving props to constant
    const fetchData = props.fetchData

    // set state
    const [input, setInput] = useState('')

    // controlling form
    function changeHandler(event){
        
        const key = event.target.name
        const value = event.target.value

        switch (key) {
            case 'zipcode':
                setInput(value)
                break;
            default:
                break;
        }
    }

    // fetch data and set state in App.js
    function submitHandler(event){
        event.preventDefault()
        const input = event.target[0].value
        
        // const errors = []
        // console.log(event.target[0].value.length)
        if( input.length === 5) return fetchData(input)
        
        // errors.push("Zip code must be 5 charecters long")
        // return errors
    }

    
    return(
        <Form onSubmit={submitHandler}>
            <input name = 'zipcode' type='text' onChange = {changeHandler} value ={input} />
        </Form>
    )
}
