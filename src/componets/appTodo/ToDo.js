import styled from "styled-components";

function ToDo({ todo, toggleTask, removeTask }) {
  return (
    <Block>
      <div onClick={() => toggleTask(todo.id)}>{todo.task}</div>
      <span onClick={() => removeTask(todo.id)}>Clear</span>
    </Block>
  );
}

export default ToDo;

const Block = styled.div`
  width: 460px;
  height: 20px;
  background-color: white;
  border: none;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  & span {
    color: rgb(136, 136, 136);
    font-size: 16px;
    padding-right: 18px;
    min-width: 70px;
    background-color: none;
    border: none;
  }
  & div{
    padding-left: 10px;
  }
`;
