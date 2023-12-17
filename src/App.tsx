import { useState } from "react";
import "./App.css";
import InputFeild from "./components/InputFeild";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string | number>("");
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputFeild todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
