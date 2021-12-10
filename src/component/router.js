import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import App from '../App';
import Recipe from './recipe';
import Recipepage from "./recipepage";

export default function Router() {
    return (
        <BrowserRouter>
        <Routes>
        <Route exact path='/' element={<App/>}/>
        <Route exact path='/recipes' element={<Recipepage/>}/>
        <Route path='/menu/:id' element={<Recipe />}/>
        </Routes>
        </BrowserRouter>
    )
}
