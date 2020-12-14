import { useState, useEffect } from "react";
import FormTodo from "./components/FormTodo";
import TodoList from "./components/TodoList";
import axios from "axios";

const url = "http://localhost:5000/todos";

function App() {
  // useState để lưu state của một phần tử
  // const [state, setState] = useState(giá trị ban đầu của state
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // did mount
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    let res = await axios.get(url);
    setTodos(res.data);
  };

  const searchTodos = async (text) => {
    let res = await axios.get(url + `?q=${text}`);
    setTodos(res.data);
  };

  const handleAddTodo = async (name) => {
    let res = await axios.post(url, { name });
    setTodos([...todos, res.data]);
  };

  const deleteTodo = async (id) => {
    let res = await axios.delete(url, { id });
    setTodos([]);
  };

  return (
    <div>
      {/* Form Input */}
      <FormTodo onSearch={searchTodos} onAddTodo={handleAddTodo} />

      {/* Todolist */}
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
