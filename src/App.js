import React from 'react';
import ToDoList from './ToDo/ToDoLIst';
import Context from './context';
import AddTodo from './ToDo/AddTodo';

function App() {

  const styles = {
    p: { 
      textAlign: 'center',
      fontSize: '1.5rem'
    }
  }

  const [todos, setTodos] = React.useState([
    { id: 1, complected: false, title: 'buy the bread' },
    { id: 2, complected: false, title: 'buy the butter' },
    { id: 3, complected: false, title: 'buy the milk' }
  ])

  function toggleTodo(id) {
    // console.log('todo id', id)
    setTodos(
      todos.reverse().map(todo => {
        if (todo.id === id) {
          todo.complected = !todo.complected
        }
        return todo
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.reverse().filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todos.reverse().concat([{
      title,
      id: Date.now(),
      complected: false
    }]))
  }

  return (
    <Context.Provider value={{ removeTodo: removeTodo }}>
      <div className="wrapper">
        <div className="logo"></div>
        <AddTodo onCreate={addTodo} />
        {todos.length ? <ToDoList todos={todos} onToggle={toggleTodo} /> : <p style={styles.p}>No items!</p>}
      </div>
      <div className="cprght">2020 © Ivanwebstudio </div>
    </Context.Provider>
  );
}

export default App;
