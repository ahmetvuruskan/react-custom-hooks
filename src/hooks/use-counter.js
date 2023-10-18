import { useState, useEffect } from 'react';

const useCounter = (initialValue = 0,step=1) => {
    const [counter, setCounter] = useState(initialValue);
    const [stepValue, setStepValue] = useState(step);
    useEffect(() => {
        const interval = setInterval(() => {
        setCounter(prevCounter => prevCounter + stepValue);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return counter;
}
export default useCounter;