import React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem';

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
    }
}

function ToDoList(props) {
    return (
        <ul className='list-wrapper' style={styles.ul}>
            {props.todos.reverse().map((todo, index) => {
                return <ToDoItem todo={todo} index={index} key={todo.id} onChangeId={props.onToggle} />
            })}
        </ul>
    )
}

ToDoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}
export default ToDoList