import { Routes, Route, Navigate } from 'react-router-dom';

import Navbars from './components/Navbars';
import ArticleList from './components/ArticleList';
import Article from './components/Article';

import 'bootstrap/dist/css/bootstrap.min.css';
import ArticleCreate from './components/ArticleCreate';

function App() {

    return (
        <>
            <Navbars />

            <Routes>
                <Route path='/' element={<Navigate to='/articles' />} />
                <Route path='/articles' element={<ArticleList />} />
                <Route path='/articles/:articleId/details' element={<Article />} />
                <Route path='/articles/create' element={<ArticleCreate />} />
            </Routes>
        </>
    )
}

export default App