import React,{useEffect,useState} from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import MenuBar from '../MenuBar/MenuBar';
import Collection from '../Collection/Collection';
import Product from '../Product/Product';
import Home from '../Home/Home';
import Dashboard from '../Dashboard/Dashboard';

const Layout = () => {
    return(
        <Router>
            <MenuBar/>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="/collections/:handle" exact element={<Collection/>}/>
                    <Route path='/products/:handle' exact element={<Product/>}/>
                    <Route path='/dashboard/*' exact element={<Dashboard/>}/>
                </Routes>
        </Router>
    )
}
export default Layout;