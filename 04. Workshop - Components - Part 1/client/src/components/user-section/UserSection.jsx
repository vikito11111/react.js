import Pagination from "../pagination/Pagination";
import Search from "../search/Search";
import UserList from "./user-list/UserList";

import { useEffect, useState } from "react";

const baseURL = 'http://localhost:3030/jsonstore';

export default function UserSection() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        (async function getUsers() {
            try {
                const response = await fetch(`${baseURL}/users`);
                const result = await response.json();
                const userData = Object.values(result);
    
                setUserData(userData);
            } catch (error) {
                alert(error.message);
            }
        })();
    }, []);

    return (
        <section className="card users-container">
            <Search />

            <UserList users={userData} />

            <button className="btn-add btn">Add new user</button>

            <Pagination />
        </section >
    );
}