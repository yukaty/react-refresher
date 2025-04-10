export function CounterButton({ label, onClick, disabled }) {
    return <button onClick={onClick} disabled={disabled}>{label}</button>;
}