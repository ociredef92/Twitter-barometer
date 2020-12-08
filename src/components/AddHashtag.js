import React from 'react';

function AddHashtag(props) {
    const [inputValue, setInputValue] = React.useState('');
    const handleChange = (event) => setInputValue(event.target.value) // set value of the input to the key that was press
    const handleAddToDo = () => {
        props.addHashtag(inputValue) // the function that we call in app js. Like a tunnel between scopes
        setInputValue('')
    }

    return (
        <>
            <input type="text" value={inputValue} onChange={handleChange}></input>
            <button onClick={handleAddToDo}>Add your ashtags</button>
        </>
    )
}
// value is a variable -> related to the concept of state
// React.useState is a react hook. It takes an initial value when the coponent renders
// it also returns a function to change it, the setInputValue

export default AddHashtag;