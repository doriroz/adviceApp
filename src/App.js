import { useEffect, useState } from "react";

export const App = () => {
  const [advice, setAdvice] = useState("");
  const [counter, setCounter] = useState(0);

  const adviceHandler = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    console.log(data.slip.advice);
    setAdvice(data.slip.advice);

    //counter is the parameter who change
    //function (c)=>c+1 is kind of listhener that add 1
    //every change of state
    setCounter((c) => c + 1);
  };

  useEffect(() => {
    adviceHandler();
  }, []);
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={adviceHandler}>Get Advice</button>
      <Message counter={counter} />
    </div>
  );
};

const Message = (props) => {
  return (
    <p>
      <strong>You read {props.counter} advice</strong>
    </p>
  );
};
