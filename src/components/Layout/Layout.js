import React from 'react';
import Home from '../../pages/Home/Home';
import { GoSidebarExpand } from "react-icons/go";
import { GoSidebarCollapse } from "react-icons/go";
import { useState } from 'react';
import "./layout.css"
import Menus from '../Menus/Menus';
const Layout = () => {
    const [toggle, setToggle] = useState(true);

    //change toggle
    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <>
            <div className='sidebar-section'>
                <div className={toggle ? 'sidebar-toggle sidebar' : 'sidebar'}>
                    <div className='sidebar-toggle-icons'>
                        <p onClick={handleToggle}>
                            {
                                toggle ? (<GoSidebarExpand size={30} />) : (<GoSidebarCollapse size={30} />)
                            }

                        </p>
                    </div>
                    <Menus toggle={toggle} />
                </div>
                <div className='container'>
                    <Home />
                </div>
            </div >
        </>
    )
};

export default Layout;
