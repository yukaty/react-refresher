import { useState } from 'react';
import { CounterDisplay } from './CounterDisplay';
import { CounterButton } from './CounterButton';

export function Counter() {
    // state to hold the count value
    const [count, setCount] = useState(0);

    // event handler to increment the count
    const increment = () => setCount(prevCount => prevCount + 1);

    // event handler to decrement the count
    const decrement = () => setCount(prevCount => prevCount - 1);

    return (
        <section>
            <h2>Counter</h2>
            <p>Click the buttons to increase or decrease the count.</p>
            <CounterDisplay count={count} />
            <CounterButton label="＋" onClick={increment} disabled={count >= 10} />
            <CounterButton label="－" onClick={decrement} disabled={count <= 0} />
        </section>
    );
};

