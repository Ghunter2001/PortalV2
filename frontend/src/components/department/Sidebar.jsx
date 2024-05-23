import React from 'react';

function Nav() {
    return (
        <nav className="flex items-center justify-between bg-transparent p-4">
            <i className="bi bi-justify-left text-2xl"></i>
            <button className="lg:hidden p-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                <i className="bi bi-list text-2xl"></i>
            </button>

            <div className="collapse navbar-collapse lg:flex lg:items-center" id="collapsibleNavId">
                <ul className="flex flex-col lg:flex-row lg:ml-auto mb-0 space-y-2 lg:space-y-0 lg:space-x-4">
                    <li className="relative group">
                        <a className="cursor-pointer text-lg" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            CVSUPortal
                        </a>
                        <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded">
                            <li><a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="/Main">Profile</a></li>
                            <li><a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="/Main">Setting</a></li>
                            <li><a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="/Main">Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
