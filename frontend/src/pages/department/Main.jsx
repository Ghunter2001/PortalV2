import { useState } from 'react'
import '../../App.css'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import { Outlet } from "react-router-dom";

function App() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    return (
        <div className='grid-container'>
            <Header OpenSidebar={OpenSidebar} />
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
            <Outlet />
        </div>
    )
}

export default App
