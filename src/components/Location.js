import React, {useState} from 'react'
import styled, {keyframes} from 'styled-components'


// styling
const Form = styled.form`
    /* grid-column: 2/2 ;
    grid-row : 2/2; */
    /* justify-self: center;
    align-self: center; */
`

const breatheAnimation = keyframes`
    0% { box-shadow: 
            5px 5px 5px .5px #D3D3D3, 
            -5px -5px 5px .5px #D3D3D3, 
            5px -5px 5px .5px #D3D3D3,
            -5px 5px 5px .5px #D3D3D3; opacity: 0.3;
    }
    20% { box-shadow: 
            5px 5px 5px .5px #D3D3D3, 
            -5px -5px 5px .5px #D3D3D3, 
            5px -5px 5px .5px #D3D3D3,
            -5px 5px 5px .5px #D3D3D3; opacity: 0.5;
    }
    40% { box-shadow: 
            5px 5px 5px .5px #D3D3D3, 
            -5px -5px 5px .5px #D3D3D3, 
            5px -5px 5px .5px #D3D3D3,
            -5px 5px 5px .5px #D3D3D3; opacity: 0.7;
    }
    50% { box-shadow: 
            5px 5px 5px .5px #D3D3D3, 
            -5px -5px 5px .5px #D3D3D3, 
            5px -5px 5px .5px #D3D3D3,
            -5px 5px 5px .5px #D3D3D3; opacity: 1;
    }
    60% { box-shadow: 
            5px 5px 5px .5px #D3D3D3, 
            -5px -5px 5px .5px #D3D3D3, 
            5px -5px 5px .5px #D3D3D3,
            -5px 5px 5px .5px #D3D3D3; opacity: 0.7;
    }
    80% { box-shadow: 
            5px 5px 5px .5px #D3D3D3, 
            -5px -5px 5px .5px #D3D3D3, 
            5px -5px 5px .5px #D3D3D3,
            -5px 5px 5px .5px #D3D3D3; opacity: 0.5;
    }
    100% { box-shadow: 
        5px 5px 5px .5px #D3D3D3, 
            -5px -5px 5px .5px #D3D3D3, 
            5px -5px 5px .5px #D3D3D3,
            -5px 5px 5px .5px #D3D3D3; opacity: 0.3;
    }
 `

const Input  = styled.input`
    width: 3em;
    font-size: 3rem;
    padding:1rem;
    border: solid black;
    box-shadow: 
            5px 5px 5px .5px #D3D3D3, 
            -5px -5px 5px .5px #D3D3D3, 
            5px -5px 5px .5px #D3D3D3,
            -5px 5px 5px .5px #D3D3D3; opacity: 1;
    &:focus {
            animation-name: ${breatheAnimation};
            animation-duration: 3s;
            animation-iteration-count: infinite;
    }
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
                <Input 
                    name = 'zipcode' 
                    type = 'text' 
                    onChange = {changeHandler} 
                    value = {input} 
                    placeholder="#####"
                    maxLength = '5' 
                />
            </Form>
    )
}
