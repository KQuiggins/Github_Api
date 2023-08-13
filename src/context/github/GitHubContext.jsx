import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const GithubContext = createContext();

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_API_TOKEN_FINE_GRAINED;

export const GithubProvider = ({ children }) => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);


    const fetchUsers = async () => {
        const response = await fetch(`${GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            }
        });

        const data = await response.json();

        setUsers(data);
        setLoading(false);
    }
    return (
        <GithubContext.Provider value={{
            users,
            loading,
            fetchUsers,
         }}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext;

GithubProvider.propTypes = {
    children: PropTypes.node,
}