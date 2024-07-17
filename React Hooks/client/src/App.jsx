import { useState, useEffect } from "react";

import { Header } from "./components/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import CardContainer from "./components/cardcontainer/CardContainer";
import { ToDoContext } from "./context/ToDoContext";

const baseURL = "http://localhost:3030/jsonstore/todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(baseURL)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setTodos(Object.values(result));
      });
  }, []);

  const onSubmitHandler = async (value) => {
    const response = await fetch(baseURL, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ ...value, isCompleted: "False" }),
    });
    const data = await response.json();
    setTodos((state) => [...state, data]);
  };

  const context = {
    onSubmitHandler
  }

  return (
    <>
      <ToDoContext.Provider value={context}>
        <Header />
        <CardContainer todos={todos} />
      </ToDoContext.Provider>
    </>
  );
}

export default App;
