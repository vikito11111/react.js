import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';

import UserContext from './contexts/UserContext';

import Navbars from './components/Navbars';
import ArticleList from './components/ArticleList';
import Article from './components/Article';
import FakeLogin from './components/FakeLogin';

import 'bootstrap/dist/css/bootstrap.min.css';
import ArticleCreate from './components/ArticleCreate';

function App() {
    const [currentUser, setCurrentUser] = useState({});
    
    function login(username, password) {
        // TODO: Validate password

        setCurrentUser(username);
    }

    return (
        <UserContext.Provider value={{ user: currentUser, login }}>
            <Navbars />

            <Routes>
                <Route path='/' element={<Navigate to='/articles' />} />
                <Route path='/articles' element={<ArticleList />} />
                <Route path='/articles/:articleId/details' element={<Article />} />
                <Route path='/articles/create' element={<ArticleCreate />} />
                <Route path='/fake-login' element={<FakeLogin />} />
            </Routes>
        </UserContext.Provider>
    )
}

export default App