import { useState } from 'react'
import '../../App.css'
import Header from '../../components/department/Header'
import Sidebar from '../../components/department/Sidebar'
import { Outlet } from "react-router-dom";
import axios from "axios";


function App() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    axios.defaults.withCredentials = false

    return (
        <div className='grid-container'>
            <Header OpenSidebar={OpenSidebar} />
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
            <Outlet />
        </div>
    )
}

export default App
