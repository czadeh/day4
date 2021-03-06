import './App.css';
import { useState } from 'react'

import Form from './components/Form'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([
    {
      title: 'make to do list',
      description: 'write the to do app for day 4 of Trace camp',
      id: 0,
      stillTodo: true
    },
    {
      title: 'be amazing',
      description: 'you got this one down free',
      id: 1,
      stillTodo: true
    }
  ])

  const [checked, setChecked] = useState(false);
  const [showDone, setshowDone] = useState(false);

  const handleAdd = (title, description) => {
    setTodos(todos.concat(
      {
        title: title,
        description: description,
        id: (todos.length > 0) ? todos[todos.length-1].id+1 : 0,
        stillTodo: true  
      }))
  }

  const todoDone = (id) => {
    const todo = todos.find((todo) => {
      return todo.id === id
    })
    todo.stillTodo = !todo.stillTodo /*switch stillTodo when checked*/
    setChecked(!checked) /*then the state changes*/
    setTodos(todos)
  }

  const todoDelete = (id) => {
    setTodos(
      todos.map(obj => {
        return((obj.id === id) ? null : obj)
      })
      .filter(obj => obj)
    )
  }

  const showCheck = () => {
    setshowDone(!showDone) /*Starts as false, switches on button click.*/
  }

  return (
    <div className="App">
      <Form handleSubmit={handleAdd} />
      <h1>Todo List</h1>
      {/*This is the switch controlled filter for finished items*/}
      <button onClick={() => showCheck()}>Show Finished Items</button>

      {/* This is the command that executes depending on the state for showing finished items
          If true then it shows all todos, if false it only shows stillTodo true todos*/}
      {showDone ? 
        todos.map(t =>
        <TodoItem{...t} handleCheck={todoDone} handleDelete={todoDelete}></TodoItem>)
           : 
          todos.filter((t) => t.stillTodo).map(t =>
            <TodoItem{...t} handleCheck={todoDone} handleDelete={todoDelete}></TodoItem>)
      }     
    </div>
  );
}

export default App;
