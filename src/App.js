import './App.css';
import { useState } from 'react'

import Form from './components/Form'
import TodoItem from './components/TodoItem'

function App() {
  const [todo, setTodo] = useState([
    {
      title: 'make to do list',
      description: 'write the to do app for day 4 of Trace camp',
      id: 1,
      stillTodo: true
    },
    {
      title: 'be amazing',
      description: 'you got this one down free',
      id: 2,
      stillTodo: false
    }
  ])

  const handleAdd = (title, description) => {
    /* add code for adding an item to the list with the input title and description */
  }

  return (
    <div className="App">
      {/* add a switch to toggle visibility on finished items */}
      {/* add dynamic array transformations to components */}
      <Form handleSubmit={handleAdd} />
    </div>
  );
}

export default App;
