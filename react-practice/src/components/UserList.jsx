import { useState, useEffect } from 'react';

export function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => { // Check if the response is ok
                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }
                return response.json();
            })
            .then(data => setUsers(Array.isArray(data) ? data : [])) // Ensure data is an array
            .catch(error => {
                console.error("Error fetching users:", error);
                setUsers([]);
            });
    }, []);

    return (
        <>
            <h2>User List</h2>
            {users.length === 0 ?
                (
                    <p>No users found.</p>
                ) : (
                    <ul>
                        {users.map(user => (
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
                )
            }
        </>
    );
}

