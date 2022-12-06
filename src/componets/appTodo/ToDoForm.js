import { useState } from "react";
import styled from "styled-components";

function ToDoForm({ addTask }) {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };
  return (
    <AddList onSubmit={handleSubmit}>
      <input
        value={userInput}
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="What are you working on?"
      />
      <div>
        <Cancel>Cancel</Cancel>
        <Save>Save</Save>
      </div>
    </AddList>
  );
}

export default ToDoForm;

const AddList = styled.form`
  width: 480px;
  height: 150px;
  background-color: white;
  margin: 0 auto;
  border: none;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  & input {
    width: 450px;
    height: 50px;
    font-size: 22px;
    margin-top: 10px;
    border: none;
    margin: 15px;
    :active{
      border: none;
    }
  }
  & div {
    height: 55px;
    background: rgb(239, 239, 239);
    display: flex;
    justify-content: end;
    align-items: center;
  }
`;
const Save = styled.button`
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 2px;
  color: white;
  opacity: 0.9;
  font-size: 14px;
  padding: 8px 12px;
  min-width: 70px;
  background-color: rgb(34, 34, 34);
  border: 2px solid rgb(34, 34, 34);
  border-radius: 4px;
  margin-right: 20px;
  :hover {
    background: black;
  }
`;
const Cancel = styled.button`
  color: rgb(136, 136, 136);
  font-size: 16px;
  padding: 8px 12px;
  min-width: 70px;
  background-color: none;
  border: none;
  margin-right: 20px;
  :hover {
    color: grey;
  }
`;
