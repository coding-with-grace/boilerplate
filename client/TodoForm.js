import React from 'react'

const TodoForm = props => {
    const {handleSubmit, handleChange, taskName, assignee} = props
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="taskName">Task Name:</label>
      {/* don't have to do this.state.taskName because of object destructuring above */}
      <input
        onChange={handleChange}
        name="taskName"
        type="text"
        value={taskName}
      />

      <label htmlFor="assignee">Assign To:</label>
      <input
        onChange={handleChange}
        name="assignee"
        type="text"
        value={assignee}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default TodoForm;
