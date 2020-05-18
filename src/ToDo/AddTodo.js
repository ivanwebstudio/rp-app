import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddTodo({ onCreate }) {
    const [value, setValue] = useState('');

    function sumbitHandler(event) {
        event.preventDefault()

        if (value.trim()) {
            onCreate(value)
            setValue(' ')
        }
    }

    return (
        <form className="form-add-todo" onSubmit={sumbitHandler}>
            <input placeholder="Add Item" value={value} onChange={event => setValue(event.target.value)} />
            <button type="submit" className="add-todo"></button>
        </form>
    );

}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo