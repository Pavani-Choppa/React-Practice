import './App.css';
import { useState } from 'react';
function useStateHookEx() {
    // let count = 0;
    console.log(useState(0));
    const [count,setCount] = useState(0);
    const incrementCount = () => {

        setCount(count + 1);
        console.log(count);
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={incrementCount}>Increment</button>
        </div>
    );
}

export default useStateHookEx;