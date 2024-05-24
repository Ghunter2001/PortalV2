import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import {
    BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
    BsListCheck, BsMenuButtonWideFill, BsFillGearFill
} from 'react-icons/bs'
import axios from "axios";

function Sidebar({ openSidebarToggle, OpenSidebar }) {

    const anvigate = useNavigate()
    axios.defaults.withCredentials = true
    const handleLogout = () => {
        axios.get('http://localhost:3000/auth/logout')
            .then(result => {
                if (result.data.Status) {
                    localStorage.removeItem("valid")
                    anvigate('/')
                }
            })
    }



    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <BsCart3 className='icon_header' /> SHOP
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <Link to='/department'>
                        <BsGrid1X2Fill className='icon' /> Dashboard
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to='/department/deptIT'>
                        <BsFillArchiveFill className='icon' /> Dept IT
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillGrid3X3GapFill className='icon' /> Categories
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsPeopleFill className='icon' /> Customers
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsListCheck className='icon' /> Inventory
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsMenuButtonWideFill className='icon' /> Reports
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillGearFill className='icon' /> Setting
                    </a>
                </li>

                <li className="w-100" onClick={handleLogout}>
                    <Link className="nav-link px-0 align-middle text-white">
                        <i className="fs-4 bi-power ms-2"></i>
                        <span className="ms-2 d-none d-sm-inline">Logout</span>
                    </Link>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar