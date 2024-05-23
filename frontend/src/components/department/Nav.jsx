import React from 'react';

function Nav() {
    return (
        <nav className="flex items-center justify-between bg-transparent p-4">
            <i className="bi bi-justify-left text-2xl"></i>
            <button
                className="lg:hidden text-gray-700"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <i className="bi bi-list text-2xl"></i>
            </button>
            <div className="collapse navbar-collapse lg:flex lg:items-center lg:w-auto" id="collapsibleNavId">
                <ul className="flex flex-col lg:flex-row lg:ml-auto">
                    <li className="nav-item dropdown relative">
                        <a
                            className="nav-link cursor-pointer p-2 lg:px-4 block lg:inline-block text-gray-700"
                            id="dropdownId"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            CVSUPortal
                        </a>
                        <ul className="dropdown-menu absolute hidden text-gray-700 pt-1" aria-labelledby="dropdownId">
                            <li><a className="block px-4 py-2 bg-white hover:bg-gray-200" href="/Main">Profile</a></li>
                            <li><a className="block px-4 py-2 bg-white hover:bg-gray-200" href="/Main">Setting</a></li>
                            <li><a className="block px-4 py-2 bg-white hover:bg-gray-200" href="/Main">Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
