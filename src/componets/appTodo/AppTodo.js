import { useState } from "react";
import styled from "styled-components";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

function AppTodo() {
  const [show, setShow] = useState(true);
  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        complete: false,
      };
      setTodos([...todos, newItem]);
    }
  };

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complate: !todo.complate } : { ...todo }
      ),
    ]);
  };

  return (
    <Container>
      <p>Time to focus!</p>
      <h3>Tasks: {todos.length}</h3>
      <hr />
      {show ? (
        <BlockList onClick={() => setShow(false)}>+ Add Task</BlockList>
      ) : (
        <>
          <ToDoForm addTask={addTask} />
          {todos.map((todo) => {
            return (
              <ToDo
                todo={todo}
                key={todo.id}
                toggleTask={handleToggle}
                removeTask={removeTask}
              />
            );
          })}
        </>
      )}
    </Container>
  );
}

export default AppTodo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & h1,
  h3 {
    color: white;
  }
  & hr {
    width: 480px;
    border: none;
    border-top: 1px solid white;
  }
  & p {
    margin-left: 200px;
    font-size: 20px;
    font-weight: 100;
    color: white;
    overflow-wrap: break-word;
  }
`;
const BlockList = styled.div`
  width: 480px;
  height: 60px;
  border: 2px dashed rgba(255, 255, 255, 0.4);
  background-color: rgba(0, 0, 0, 0.1);
  opacity: 0.8;
  border-radius: 8px;
  font-weight: bold;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    opacity: 1;
  }
`;
