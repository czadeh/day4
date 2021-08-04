const TodoItem = ({ title, description, id, stillTodo, handleCheck, handleDelete }) => {
  return (
    <>
      {
      <h2>
        title: {title},
        description: {description},
        id: {id}
      </h2>
      }
      {
      <div>
      <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
      }
      {
      <div>
        <label>
        <input type="checkbox" onChange={() => handleCheck(id)}></input>
        Done
        </label>
      </div>
      }
    </>
  )
}

export default TodoItem