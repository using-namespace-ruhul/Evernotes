import { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [render, setRender] = useState(0);
  const taskInput = useRef("");

  let data = [];
  let localFetch = JSON.parse(localStorage.getItem("menuBtns"));
  if (localFetch) data = localFetch;

  const handleSubmit = (e) => {
    e.preventDefault();
    data.push(taskInput.current.value);
    localStorage.setItem("menuBtns", JSON.stringify(data));
    render === 0 ? setRender(1) : setRender(0);
  };

  return (
    <div className="menu">
      <h2>Menu</h2>
      {data.length > 0 ? (
        <div className="btnContainer">
          {data.map((btnName, index) => {
            return (
              <div>
                <Link to={`/${btnName}`}>
                  <button key={index}>{btnName}</button>
                </Link>
                <button
                  onClick={() => {
                    data.splice(index, 1);
                    localStorage.setItem("menuBtns", JSON.stringify(data));
                    render === 0 ? setRender(1) : setRender(0);
                  }}
                >
                  Del
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <h3>Add Some!</h3>
      )}

      <div>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <input
              type="text"
              ref={taskInput}
              placeholder="Enter here..."
              required
            />
            <button className="submitBtn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Menu;
