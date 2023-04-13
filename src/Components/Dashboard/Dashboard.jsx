import {useState,useEffect} from 'react';
import { Link, Routes,Route } from 'react-router-dom';
import './dashboard-styles.css';
import ProductsDash from './ProductsDash/ProductsDash';
import ProductEditForm from './ProductsDash/ProductEditForm';
import ProductAddForm from './ProductsDash/ProductAddForm';
import CollectionsDash from './CollectionDash/CollectionsDash';
import CollectionAddForm from './CollectionDash/CollectionAddForm';
import CollectionEditForm from './CollectionDash/CollectionEditForm';
const Dashboard = () => {
    
    return (
        <div className="dashboard-layout">
            <div className="dashboard-menu">
                <div>
                    <strong>Dashboard Options</strong>
                </div>
                <hr/>
                <div className='dashboard-option'>
                    <Link to={'/dashboard/products'}>Products</Link>
                </div>
                <div className='dashboard-option'>
                    <Link to={'/dashboard/collections'}>Collections</Link>
                </div>
            </div>
            <div className="sub-layout">
                <h1>Administrator Dashboard</h1>
                <div className='main-content'>
                    <Routes>
                        <Route path="/products" exact element={<ProductsDash/>}/>
                        <Route path="/products/:id" exact element={<ProductEditForm/>}/>
                        <Route path="/add/product" exact element={<ProductAddForm/>}/>
                        <Route path="/collections" exact element={<CollectionsDash/>}/>
                        <Route path="/add/collection" exact element={<CollectionAddForm/>}/>
                        <Route path="/collections/:id" exact element={<CollectionEditForm/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;