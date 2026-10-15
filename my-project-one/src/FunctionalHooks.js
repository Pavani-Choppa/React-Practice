import './App.css';

import { useState } from 'react';
function FunctionalHooks() {
    // let count = 0;
    // // console.log(useState(0));
    // const [count, setCount] = useState(0);
    // const [name, setName] = useState("Pavani");
    const [state, setState] = useState({
        count: 0,
        isSubscribed: false,
    });
    const incrementCount = () => {
        // count = count + 1;
        setState(prevState => ({ ...prevState, count: prevState.count + 1 }));
    }

    const changeName = () => {
        setState(prevState => ({ ...prevState, name: "Pavi" }));
        console.log(state.name);
    }
    return (
        <div>
            <p>{state.count}</p>
            <p>{state.name}</p>

            <button onClick={incrementCount}>Increment</button>
            <button onClick={changeName}>Change Name</button>

        </div>
    );
}

export default FunctionalHooks;