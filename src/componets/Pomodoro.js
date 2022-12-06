import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { getPadTimer } from "./helpers.js/getPadTimer";
import icons from "./asets/icons8-fast-forward-80.png";
import { Link } from "react-router-dom";

function Pomodoro(props) {
  const [timer, setTimer] = useState(1500);
  const [isCounting, setIsCounting] = useState(false);
  const [show, setShow] = useState(false);

  const minutes = getPadTimer(Math.floor(timer / 60));
  const seconds = getPadTimer(timer - minutes * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      isCounting && setTimer((timer) => (timer >= 1 ? timer - 1 : 0));
    }, 1000);
    if (timer === 0) setIsCounting(false);
    return () => {
      clearInterval(interval);
    };
  }, [timer, isCounting]);

  const handleStart = () => {
    if (timer === 0) setTimer(1500);
    setIsCounting(true);
    setShow(true);
  };

  const handleStop = () => {
    setIsCounting(false);
    setShow(false);
  };
  return (
    <Block>
      <Time dark={props.dark}>
        <h1>{minutes}</h1>
        <h1>:</h1>
        <h1>{seconds}</h1>
      </Time>
      {!show ? (
        <Button dark={props.dark} onClick={handleStart}>START</Button>
      ) : (
        <>
          <Button dark={props.dark} onClick={handleStop} className="stop">
            STOP
          </Button>
          <Link to="/ShortBreak">
            <Position>
              <img src={icons} alt="next" />
            </Position>
          </Link>
        </>
      )}
    </Block>
  );
}

export default Pomodoro;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 20px;
  align-items: center;
  & .stop {
    box-shadow: none;
  }
`;
const Button = styled.div`
  width: 160px;
  box-shadow: ${(props) =>
    props.dark ? "#00FF00 0px 6px 0px" : "rgb(235 235 235) 0px 6px 0px"};
  font-size: 27px;
  color: ${(props) => (props.dark === true ? "#00FF00" : "rgb(217, 85, 80)")};
  padding: 10px;
  border-radius: 5px;
  transition: 0.9s;
  position: relative;
  bottom: 50px;
  background-color: ${(props) => props.dark === true ? 'grey': '#fff5ee'};
  :active {
    border-bottom: none;
  }
  & .stop {
    border-bottom: none;
  }
`;
const Time = styled.div`
  display: flex;
  & h1 {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 110px;
    color: ${(props) => (props.dark === true ? "#00FF00" : "white")};
    transition: 0.9s;
  }
`;
const Position = styled.div`
  position: relative;
  bottom: 105px;
  left: 150px;
  & img {
    width: 50px;
  }
`;
