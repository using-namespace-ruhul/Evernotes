import { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [render, setRender] = useState(0);
  const [addBtn, setAddBtn] = useState(0);
  const [delBtn, setDelBtn] = useState(0);

  const taskInput = useRef("");

  let data = [];
  let localFetch = JSON.parse(localStorage.getItem("menuBtns"));
  if (localFetch) data = localFetch;

  const handleSubmit = (e) => {
    e.preventDefault();
    data.push(taskInput.current.value);
    localStorage.setItem("menuBtns", JSON.stringify(data));
    setAddBtn(0);
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
                {delBtn === 1 ? (
                  <button
                    onClick={() => {
                      data.splice(index, 1);
                      localStorage.setItem("menuBtns", JSON.stringify(data));
                      render === 0 ? setRender(1) : setRender(0);
                    }}
                  >
                    Del
                  </button>
                ) : null}
              </div>
            );
          })}
        </div>
      ) : (
        <h3>Add Some!</h3>
      )}

      {addBtn === 1 ? (
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
      ) : null}

      <button
        onClick={() => {
          if (addBtn === 0) setAddBtn(1);
          else setAddBtn(0);
        }}
      >
        {addBtn === 0 ? "Add" : "Cancel"}
      </button>
      <button
        onClick={() => {
          if (delBtn === 0) setDelBtn(1);
          else setDelBtn(0);
        }}
      >
        {delBtn === 0 ? "Delete" : "Done"}
      </button>
    </div>
  );
};

export default Menu;
