import './TodoItem.css';

const TodoItem = ({ title, description, id, stillTodo, handleCheck, handleDelete }) => {
  return (
    <>
      {
      <div className='TodoList'>
        title: {title},
        description: {description},
        id: {id},
        stillTodo: {stillTodo ? 'true' : 'false'}
      </div>
      }
      {
      <div>
      <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
      }
      {
      <div>
        <button onClick={() => handleCheck(id)}>Toggle Finished</button>
      </div>
      }
    </>
  )
}

export default TodoItem