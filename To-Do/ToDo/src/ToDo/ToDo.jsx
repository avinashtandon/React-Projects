import React from "react";

function ToDo() {
  const [task, setTask] = React.useState("");
  const [data, setData] = React.useState([]);
  const handelInputChange = (value) => {
    setTask(value);
  };
  const handelFormSubmit = (event) => {
    event.preventDefault();
    if (!task) return;
    if (data.includes(task)) {
      setTask("");
      return;
    }
    setData((prevData) => [...prevData, task]);
    setTask("");
  };
  return (
    <section>
      <header>
        <h1>TO-DO APP</h1>
      </header>
      <section className="Form">
        <form onSubmit={handelFormSubmit}>
          <div>
            <input
              type="text"
              className="Todo-input"
              placeholder="Enter a new task"
              autoComplete="off"
              value={task}
              onChange={(e) => handelInputChange(e.target.value)}
            />
          </div>
          <div>
            <button className="add-btn" type="Submit">
              Add Task
            </button>
          </div>
        </form>
      </section>
      <section className="tasks">
        <ul>
          {data.map((currData, index) => {
            return (
              <li key={index}>
                <span>{currData}</span>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
}

export default ToDo;
