import React from 'react';
import Home from '../../pages/Home/Home';
import { GoSidebarExpand } from "react-icons/go";
import { GoSidebarCollapse } from "react-icons/go";
import { useState } from 'react';
import "./layout.css"
import Menus from '../Menus/Menus';
import ParticlesBackground from '../tsparticles/ParticlesBackground';
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import MobileNav from '../MobileNav/MobileNav';
const Layout = () => {
    const [activeNavbar, setActiveNavbar] = useState(true);

    //change toggle
    const handleToggle = () => {
        setActiveNavbar(!activeNavbar);
    }
    return (
        <>
            <MobileNav />
            <div className='sidebar-section'>
                <div className={activeNavbar ? 'active-sidebar' : 'non-active-sidebar'}>
                    <div className='sidebar-toggle-icons'>
                        <p onClick={handleToggle}>
                            {
                                activeNavbar ? (<IoMdClose size={30} />) : (<CiMenuBurger size={30} />)
                            }

                        </p>
                    </div>
                    {/* <ParticlesBackground /> */}
                    <Menus activeNavbar={activeNavbar} />
                </div>
                <div className='container'>
                    <Home />
                </div>
            </div >
        </>
    )
};

export default Layout;
// return (
//     <>
//         <div className='sidebar-section'>
//             <div className={toggle ? 'sidebar-toggle sidebar' : 'sidebar'}>
//                 <div className='sidebar-toggle-icons'>
//                     <p onClick={handleToggle}>
//                         {
//                             toggle ? (<GoSidebarExpand size={30} />) : (<GoSidebarCollapse size={30} />)
//                         }

//                     </p>
//                 </div>
//                 {/* <ParticlesBackground /> */}
//                 <Menus toggle={toggle} />
//             </div>
//             <div className='container'>
//                 <Home />
//             </div>
//         </div >
//     </>
// )
// };