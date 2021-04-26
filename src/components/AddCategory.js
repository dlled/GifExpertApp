import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategory}) => {

    const [inputValue, setInputValue] = useState('...');

    const handleInputChange = (e) => {
        // console.log(e.target.value)
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 0){
            setCategory(cats => [ inputValue, ...cats])
            setInputValue('');
            console.log(e);
        }

    }

    return (
        <>
            <form 
                onSubmit = {handleSubmit}
            >
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                ></input>
            </form>

        </>
    )
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}
