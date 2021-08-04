import './TodoItem.css';

const TodoItem = ({ title, description, id, stillTodo, handleCheck, handleDelete }) => {
  return (
    <>
      {<div className='TodoList'>
        Title: {title}<br></br>
        Description: {description}<br></br>
        id: {id}, 
        stillTodo: {stillTodo ? 'true' : 'false'}
        <button onClick={() => handleDelete(id)} className='DeleteButton'>Delete</button>
        <button onClick={() => handleCheck(id)} className='ToggleButton'>Toggle Finished</button>
      </div>}
    </>
  )
}

export default TodoItem