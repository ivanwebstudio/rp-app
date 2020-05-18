import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context';

const styles = {
    span: {
        transition: '.4s ease',
        pointerEvents: 'none',
        position:'relative',
        left: '50px'
    },
    li: {
        display: 'flex',
        alignItems: 'center',
        padding: '1.7rem .8rem',
        background: '#f9f9f9',
        borderRadius: '30px',
        marginBottom: '1rem',
        position: 'relative',
        height: '40px',
        overflow: 'hidden'
    },
    input: {
        marginRight: '1rem'
    }
}

function ToDoItem({ todo, index, onChangeId }) {
    // console.log('todo', todo)

    const { removeTodo } = useContext(Context)

    const classes = [];
    const btnDone = [];

    if (todo.complected) {
        classes.push('done');
        btnDone.push('not-active')
    }

    return (
        <li style={styles.li}>
            <label className="container">
                <input className="check" type="checkbox" style={styles.input} checked={todo.complected} onChange={() => onChangeId(todo.id)} />
                <span className="checkmark">{index + 1}</span>
            </label>
            <span style={styles.span} className={classes.join(' ')}>
                {todo.title}
            </span>
            <button id="rm" className={btnDone.join('rm')} onClick={() => removeTodo(todo.id)}>&times;</button>
        </li>
    )
}

ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChangeId: PropTypes.func.isRequired
}

export default ToDoItem