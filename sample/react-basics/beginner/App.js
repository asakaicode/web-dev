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
            <h1>React 基本課題</h1>
            <p>カウント: {count}</p>
            <button onClick={increment}>インクリメント</button>
        </div>
    );
}

export default App;
