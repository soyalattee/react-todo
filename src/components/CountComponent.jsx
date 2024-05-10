import React, { useCallback, useEffect, useState } from "react";
function CountComponent() {
  const [count, setCount] = useState(0);
  const [value1, setValue1] = useState(true);

  const addCount = () => {
    setCount(count + 1);
  };
  let i = 0;
  const addI = () => {
    i += 1;
    console.log("add I! ", i);
  };
  console.log("아이에용", i);
  const ItIsCallBack = useCallback(() => {
    console.log("암 콜백");
    return setCount(count + 1);
  }, [count]);
  useEffect(() => {
    console.log("데이터받을게. 한번실행");
    const intervalId = setInterval(() => {
      // console.log("인터벌 호출");
    }, 1000);
    console.log("intervalId : ", intervalId);
    return () => {
      console.log("리소스 해제할게.");
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    return () => {
      console.log("카운트 리소스 해제할게.");
    };
  }, [count]);
  return (
    <div>
      <p>{count}</p>
      <button onClick={ItIsCallBack}></button>
      <button onClick={ItIsCallBack}>+1</button>
      <p>{i}</p>
      <button onClick={addI}>i+1</button>
    </div>
  );
}

export default CountComponent;
