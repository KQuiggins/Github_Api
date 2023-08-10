import { useState, useEffect } from 'react';

const UserResults = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const response = await fetch(`${import.meta.env.VITE_GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${import.meta.env.VITE_GITHUB_API_TOKEN_FINE_GRAINED}`,
            }
        });

        const data = await response.json();

        setUsers(data);
        setLoading(false);


    }


  return (
    <div>UserResults</div>
  )
}

export default UserResults