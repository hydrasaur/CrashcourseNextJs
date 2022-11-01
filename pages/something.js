import react, { useState } from "react";
import ReactDOM from "react-dom/client";
function Something() {
  const [count, setCount] = useState(0);
  if (count > 20) {
    console.log(" doing great, keep going!");
  }
  return (
    <div style={{ color: "pink" }}>
      <p>you clicked {count} times</p>
      <button style={{ color: "yellow" }} onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <MyForm />
    </div>
  );
}

function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  );
}

export default Something;
