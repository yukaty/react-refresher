import { useState } from 'react';

export function ToggleMessage() {
    const [face, setFace] = useState('😀');
    const [message, setMessage] = useState('I am happy!');

    const handleClick = () => {
        setFace(face => face === '😀' ? '😢' : '😀');
        setMessage(message => message === 'I am happy!' ? 'I am sad!' : 'I am happy!');
    }

    return (
        <>
            <button onClick={handleClick}>
                How are you feeling?
            </button>
            <p>{message} {face}</p>
        </>
    );
}