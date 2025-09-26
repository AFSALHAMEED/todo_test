import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      task: "test",
      isCompleted: false,
    },
  ]);

  return (
    <div className="">
      <div className="input-group mb-5 w-25">
        <span className="input-group-text" id="basic-addon1">
          Add Task
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Task"
          aria-label="Task"
          aria-describedby="basic-addon1"
        />
        <button type="button" className="btn btn-primary">
          Add
        </button>
      </div>
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Task</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.task}</td>
              <td>{item.isCompleted ? "Completed" : "Pending"}</td>
              <td>
                <button type="button" className="btn btn-info">
                  Edit
                </button>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
