import { useState } from "react";

const Todo = () => {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");
  const addTask = () => {
    setTaskList((prev) => [
      ...prev,
      {
        id: taskList.length,
        title: task,
      },
    ]);
    setTask("");
  };
  const deleteTask =(deleteId)=>{
    
    const filteredArray = taskList.filter(task=>task.id!==deleteId)
    setTaskList([...filteredArray])
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your task"
        value={task}
        onChange={(event) => {
          setTask(event.target.value);
        }}
      />
      <p>{task}</p>
      <button onClick={addTask}>Add</button>
      {taskList.map(({ title,id }, index) => {
        return (
          <div key={index}>
            <p>{title}</p> <button onClick={()=>deleteTask(id)}>Delete</button>{" "}
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
