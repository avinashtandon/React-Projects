import React from "react";

function ToDo() {
  return (
    <section>
      <header>
        <h1>TO-DO APP</h1>
      </header>
      <section className="Form">
        <form>
          <div>
            <input
              type="text"
              className="Todo-input"
              placeholder="Enter a new task"
              autoComplete="off"
            />
          </div>
          <div>
            <button className="add-btn" type="Submit">
              Add Task
            </button>
          </div>
        </form>
      </section>
    </section>
  );
}

export default ToDo;
