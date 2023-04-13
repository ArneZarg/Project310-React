import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './MenuBar.css';
import getCollections from './menu-calls';

function MenuBar(){
    const [collections,setCollections] = useState([]);
    const [links,setLinks] = useState([]);
    const [mobileMenuActive,setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!mobileMenuActive);
    }

    const initCollections = async () =>{
        const collectionData = await getCollections();
        setCollections(collectionData);
        let links = [];
        collectionData.map(c=>{
            links.push(
                <li key={c.id}>
                    <Link to={`/collections/${c.handle}`} onClick={() => {setMenuActive(false)}}>{c.title}</Link>
                </li>
            )
        });
        setLinks(links);
    }

    useEffect(()=>{
        initCollections();
    },[])

    return(
        <>
        <header className='site-nav'>
            <nav className='desktop-menu'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {links}
                    <li className='dashboard'>
                        <Link to="/dashboard" onClick={() => {setMenuActive(false)}}>Dashboard</Link>
                    </li>
                </ul>
            </nav>
            <div className='mobile-menu'>
                <div className='mobile-menu-btn-container'>
                    <button className='btn-menu' onClick={toggleMenu}>
                        <span className='one'></span>
                        <span className='two'></span>
                        <span className='three'></span>
                    </button>
                </div>
                <div className={mobileMenuActive ? "dropdown-mobile-menu active" : "dropdown-mobile-menu"}>
                    <nav className='dropdown-menu'>
                        <ul>
                            <li>
                                <Link to="/" onClick={() => {setMenuActive(false)}}>Home</Link>
                            </li>
                            {links}
                            <li className='dashboard'>
                                <Link to="/dashboard" onClick={() => {setMenuActive(false)}}>Dashboard</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        </>
    )
}

export default MenuBar;