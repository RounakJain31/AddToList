import { useState } from "react";
import "./App.css";

export default function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  const [error, setError] = useState("");

  const handleAdd = () => {
    const trimmed = item.trim();

    if (trimmed === "") {
      setError("No items yet. Add your first one!");
      return;
    }

    setList([...list, trimmed]);
    setItem("");
    setError("");
  };

  const handleRemove = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>Add Items to List</h1>

      <input
        type="text"
        name="item"
        value={item}
        placeholder="Type something and press Enter"
        onChange={(e) => setItem(e.target.value)}
      />

      <button onClick={handleAdd}>Add</button>

      {/* Error message */}
      {error && <p className="error">{error}</p>}

      <ul>
        {list.map((value, index) => (
          <li key={index}>
            {value}
            <button
              style={{ marginLeft: "200px" ,background:'red'}}
              onClick={() => handleRemove(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
