import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="wrapper">
      <div className="counter-card">
        <h2 className="title">Counter</h2>
        <h1 key={count} className="count animate">{count}</h1>
        <div className="btn-group">
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(count - 1)}>-</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
