import React, { useState, useEffect, useCallback, useRef } from 'react';

function App() {
    const [count, setCount] = useState(0);
    const countRef = useRef(count);

    useEffect(() => {
        countRef.current = count;
    }, [count]);

    const increment = useCallback(() => {
        setCount(countRef.current + 1);
    }, []);

    return (
        <div>
            <h1>React Basics Task</h1>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default App;
