export function MessageDisplay({ date, time }) {

    // Message display component
    let message = ''
    const hour = new Date().getHours()
    if (hour < 12) {
        message = 'Good morning. Have a great day!'
    } else if (hour < 18) {
        message = 'Good afternoon. Hope you are doing well!'
    } else {
        message = 'Good evening. Relax and unwind!'
    }

    return (
        <>
            <h2>{date} {time}</h2>
            <p>{message}</p>
        </>
    )
}