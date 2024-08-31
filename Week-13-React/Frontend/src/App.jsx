import axios from "axios";
import "./App.css";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [todoList, settodoList] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDestcription] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [id, setId] = useState();

  useEffect(() => {
    axios.get("http://localhost:8080/todos").then((res) => {
      settodoList(res.data);
    });
  }, [refresh]);

  function handleSave() {
    axios
      .post("http://localhost:8080/todos", {
        title: title,
        description: description,
      })
      .then((res) => {
        if (refresh) {
          setRefresh(false);
        } else {
          setRefresh(true);
        }
        console.log(res);
        setTitle("");
        setDestcription("");
      })
      .catch((e) => {
        alert("Error for save ToDo");
      });
  }

  function handleDelete(id) {
    axios.delete(`http://localhost:8080/todos/${id}`).then((res) => {
      if (refresh) {
        setRefresh(false);
      } else {
        setRefresh(true);
      }
      alert("Deleted");
    });
  }

  return (
    <>
      <div className="content">
        <div className="save">
          <div className="title">
            <input
              placeholder="Title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </div>
          <div className="area">
            <textarea
              placeholder="Description"
              required
              value={description}
              onChange={(e) => setDestcription(e.target.value)}
            ></textarea>
          </div>
          <button className="btn-save" onClick={handleSave}>
            Save
          </button>
        </div>
        <div className="get">
          {todoList.map((data) => {
            return (
              <>
                <div className="get-time">
                  <h2>{data.date}</h2>
                  <h2>{data.title}</h2>
                  <h2>{data.description}</h2>
                  <button
                    onClick={() => handleDelete(data.id)}
                    className="btn-delete"
                  >
                    Delete
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default App;
