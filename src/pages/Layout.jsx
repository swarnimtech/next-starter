import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';

export default function Layout({ children }) {

    const [isNavOpen, setNavOpen] = useState(true);
    const router = useRouter();

    const toggleSideBar = () => {
        setNavOpen(!isNavOpen);
    }

    return (
        <div id="body-pd" className={`${isNavOpen ? 'body-pd' : ''}`}>
            <header id="header" className={`header ${isNavOpen ? 'body-pd' : ''}`}>
                <div className="header__toggle">
                    <i className={`bx bx-menu ${isNavOpen ? 'bx-x' : ''}`} id="header-toggle" onClick={toggleSideBar}></i>
                </div>

                <div className="header__img">
                    {/* <img src="assets/img/perfil.jpg" alt="" /> */}
                </div>
            </header>

            <div className={`l-navbar ${isNavOpen ? 'show' : ''}`} id="nav-bar">
                <nav className="nav">
                    <div>
                        <a href="#" className="nav__logo">
                            <i className='bx bx-layer nav__logo-icon'></i>
                            <span className="nav__logo-name">Bedimcode</span>
                        </a>

                        <div className="nav__list">
                            <Link href="/account" className={`nav__link ${router.pathname == "/account" ? "active" : ""}`} active>
                                <i className='bx bx-grid-alt nav__icon' ></i>
                                <span className="nav__name">Dashboard</span>
                            </Link>

                            <Link href="/account/users" className={`nav__link ${router.pathname == "/account/users" ? "active" : ""}`}>
                                <i className='bx bx-user nav__icon' ></i>
                                <span className="nav__name">Users</span>
                            </Link>

                            <Link href="/account/message" className={`nav__link ${router.pathname == "/account/message" ? "active" : ""}`}>
                                <i className='bx bx-message-square-detail nav__icon' ></i>
                                <span className="nav__name">Messages</span>
                            </Link>

                        </div>
                    </div>

                    <a href="#" className="nav__link">
                        <i className='bx bx-log-out nav__icon' ></i>
                        <span className="nav__name">Log Out</span>
                    </a>
                </nav>
            </div>
            <main>
                {children}
            </main>
        </div>
    )
}
