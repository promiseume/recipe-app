import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import App from '../App';
import Recipe from './recipe';

export default function Router() {
    return (
        <BrowserRouter>
        <Routes>
        <Route exact path='/' element={<App/>}/>
        <Route path='/menu/:id' element={<Recipe />}/>
        </Routes>
        </BrowserRouter>
    )
}
