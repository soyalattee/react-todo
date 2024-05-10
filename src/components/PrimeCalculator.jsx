import React, { useRef, useState, useMemo } from "react";

export default function PrimeCalculator(props) {
  const [limit, setLimit] = useState(10);
  const [count, setCount] = useState(0);
  // const primes = calculatePrimes(limit);

  const primes = useMemo(() => {
    console.log("메모");
    return calculatePrimes(limit);
  }, [limit]);

  const addCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      {count}
      <button onClick={addCount}>카운트 증가</button>
      <input
        type="number"
        value={limit}
        onChange={(e) => setLimit(Number(e.target.value))}
      />
      <p> : {primes.join(", ")}</p>
    </div>
  );
}

function calculatePrimes(limit) {
  console.log(`limit: ${limit} `);
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
  }
  console.log("게산완료");
  return primes;
}
