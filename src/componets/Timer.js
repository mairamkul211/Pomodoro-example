// import { Route, Routes, Outlet, NavLink, Navigate } from "react-router-dom";
import { useState } from "react";
import { Route, Routes, Outlet, NavLink, Navigate } from "react-router-dom";
import styled from "styled-components";
import LongBreak from "./LongBreak";
import Pomodoro from "./Pomodoro";
import ShortBreak from "./ShortBreak";
import AppTodo from "./appTodo/AppTodo";

function Timer() {
  const [color, setColor] = useState("");
  const [dark, setDark] = useState(false);
  const stylednav = {
    width: "160px",
    height: "19px",
    color: "white",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "19px",
    lineHeight: "12px",
    textDecoration: "none",
    marginLeft: "5px",
    paddingTop: "10px",
    cursor: "pointer",
  };
  return (
    <Wraper color={color} dark={dark}>
      <DarkMode>
        <p>Dark Mode when running</p>
        <input
          onChange={() => {
            setDark(!dark);
            setColor(() => (dark === true ? "rgb(217, 85, 80)" : "black"));
          }}
          type="checkbox"
        />
      </DarkMode>
      <Container>
        <BackgroundFon />
        <Block>
          <NavLink
            onClick={() => {
              setColor("rgb(217, 85, 80)");
              setDark(false);
            }}
            className={({ isActive }) => (isActive ? "active" : "")}
            style={stylednav}
            to="Pomodoro"
          >
            Pomodoro
          </NavLink>
          <NavLink
            style={stylednav}
            to="ShortBreak"
            onClick={() => {
              setColor("rgb(76, 145, 149)");
              setDark(false);
            }}
          >
            Short Break
          </NavLink>
          <NavLink
            style={stylednav}
            to="LongBreak"
            onClick={() => {
              setColor("rgb(69, 124, 163)");
              setDark(false);
            }}
          >
            Long Break
          </NavLink>
          <Outlet />
        </Block>
        <Routes>
          <Route path="" element={<Navigate to="/Pomodoro" replace />} />
          <Route path="/Pomodoro" element={<Pomodoro dark={dark} />} />
          <Route path="/ShortBreak" element={<ShortBreak dark={dark} />} />
          <Route path="/LongBreak" element={<LongBreak dark={dark} />} />
        </Routes>
        <AppTodo />
      </Container>
    </Wraper>
  );
}

export default Timer;

const DarkMode = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & p {
    color: white;
    font-size: 20px;
  }
  & input[type="checkbox"] {
    position: relative;
    /* left: 1380px; */
    width: 35px;
    height: 15px;
    -webkit-appearance: none;
    outline: none;
    background: #c6c6c6;
    border-radius: 20px;
    transition: 0.5s;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  }
  & input:checked[type="checkbox"] {
    background: #40e551;
  }
  & input[type="checkbox"]::before {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 20px;
    top: 0;
    left: 0;
    background: #fff;
    transition: 0.5s;
    transform: scale(1.1);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
  & input:checked[type="checkbox"]:before {
    left: 20px;
  }
`;
const BackgroundFon = styled.div`
  width: 480px;
  height: 300px;
  padding: 10px;
  border-radius: 7px;
  opacity: 0.1;
  background-color: wheat;
  position: absolute;
  bottom: 1px;
`;
const Wraper = styled.div`
  width: 100%;
  height: 1000px;
  background-color: ${(props) => props.color || "rgb(217, 85, 80)"};
  /* background-color: ${(props) =>
    (props.dark === true && props.color) || "rgb(217, 85, 80)"}; */
  transition: 0.9s;
`;
const Container = styled.div`
  position: relative;
  width: 480px;
  padding: 10px;
  height: 300px;
  top: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  border-radius: 7px;
  margin: 0 auto;
  box-shadow: 1.5px 2px 3px 0.9px black;
`;
const Block = styled.div`
  position: relative;
  width: 400px;
  display: flex;
  justify-content: center;
  top: 20px;
  z-index: 1;
  color: white;
  /* color: green; */
  .active {
    transition: 0.5s;
    background-color: rgba(0, 0, 0, 0.15);
    border-radius: 4px;
  }
`;
