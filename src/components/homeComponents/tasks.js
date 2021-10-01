import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Tasks = () => {
  const [render, setRender] = useState(0);
  const taskInput = useRef("");

  let data = [];
  let localFetch = JSON.parse(localStorage.getItem("tasks"));
  if (localFetch) data = localFetch;

  const handleSubmit = (e) => {
    e.preventDefault();
    data.push([0, taskInput.current.value]);
    localStorage.setItem("tasks", JSON.stringify(data));
    render === 0 ? setRender(1) : setRender(0);
  };

  return (
    <div className="tasksContainer">
      <h2>Tasks</h2>
      <div className="taskForm">
        <form onSubmit={handleSubmit}>
          <div className="input">
            <input
              type="text"
              ref={taskInput}
              placeholder="Enter here..."
              required
            />
            <button className="submitBtn" type="submit">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </form>
      </div>
      {data.length > 0 ? (
        <div className="todos">
          {data.map((todo, index) => {
            return (
              <div
                className={"todo " + (todo[0] === 1 ? "markDone" : "")}
                key={index}
              >
                <button
                  className={"doneBtn"}
                  onClick={() => {
                    if (data[index][0] === 1) data[index][0] = 0;
                    else data[index][0] = 1;
                    localStorage.setItem("tasks", JSON.stringify(data));
                    render === 0 ? setRender(1) : setRender(0);
                  }}
                ></button>
                <p>{todo[1]}</p>
                <button
                  className="delBtn"
                  onClick={() => {
                    data.splice(index, 1);
                    localStorage.setItem("tasks", JSON.stringify(data));
                    render === 0 ? setRender(1) : setRender(0);
                  }}
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <h3>Congrats! No task left!</h3>
      )}
    </div>
  );
};

export default Tasks;
