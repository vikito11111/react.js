import Pagination from "../pagination/Pagination";
import Search from "../search/Search";
import UserAdd from "./user-add/UserAdd";
import UserDelete from "./user-delete/UserDelete";
import UserDetails from "./user-details/UserDetails";
import UserList from "./user-list/UserList";

import { useEffect, useState } from "react";

const baseURL = 'http://localhost:3030/jsonstore';

export default function UserSection() {
    const [userData, setUserData] = useState([]);
    const [showAddUser, setShowAddUser] = useState(false);
    const [showUserDetailsById, setShowUserDetailsById] = useState(null);
    const [showUserDeleteById, setShowUserDeleteById] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async function getUsers() {
            try {
                const response = await fetch(`${baseURL}/users`);
                const result = await response.json();
                const userData = Object.values(result);
    
                setUserData(userData);
            } catch (error) {
                alert(error.message);
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);

    function addUserClickHandler() {
        setShowAddUser(true);
    }

    function addUserCloseHandler() {
        setShowAddUser(false);
    }

    async function addUserSaveHandler(e) {
        // 1. Prevent refresh
        e.preventDefault();

        // 1.2. Start spinner
        setIsLoading(true);

        // 2. Get user data
        const formData = new FormData(e.currentTarget);

        const userData = {
            ...Object.fromEntries(formData),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        }
        console.log(userData);

        // 3. Make post request
        const response = await fetch(`${baseURL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        const createdUser = await response.json();
        
        console.log(createdUser);

        // 4. Update local state
        setUserData(oldUsers => [createdUser, ...oldUsers]);

        // 5. Close modal
        setShowAddUser(false);
    }

    function userDetailsClickHandler(userId) {
        setShowUserDetailsById(userId);
    }

    function userDeleteClickHandler(userId) {
        setShowUserDeleteById(userId);
    }

    async function userDeleteHandler(userId) {
        // 1. Delete request to server
        await fetch(`${baseURL}/users/${userId}`, {
            method: 'DELETE',
        });

        // 2. Delete from local state
        setUserData(oldUsers => oldUsers.filter(user => user._id !== userId));

        // 3. Close modal
        setShowUserDeleteById(null);
    }

    //function searchHandler(email) {}

    return (
        <section className="card users-container">
            <Search />

            <UserList 
                users={userData}
                isLoading={isLoading}
                onUserDetailsClick={userDetailsClickHandler}
                onUserDeleteClick={userDeleteClickHandler}
            />

            {showAddUser && (
                <UserAdd 
                    onClose={addUserCloseHandler} 
                    onSave={addUserSaveHandler} 
                />
            )}

            {showUserDetailsById && (
                <UserDetails 
                    user={userData.find(user => user._id === showUserDetailsById)}
                    onClose={() => setShowUserDetailsById(null)}
                />
            )}

            {showUserDeleteById && (
                <UserDelete 
                    onClose={() => setShowUserDeleteById(null)}
                    onUserDelete={() => userDeleteHandler(showUserDeleteById)}
                />
            )}

            <button className="btn-add btn" onClick={addUserClickHandler}>Add new user</button>

            <Pagination />
        </section >
    );
}