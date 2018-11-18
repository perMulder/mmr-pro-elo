import React from 'react'

const Navbar = ({title}) =>
    <nav className="Navbar">

        <div className="Navbar__container">
            <a className="Navbar__brand" href='/'>
                <div className="Navbar__logo"></div>
                <h1 className="Navbar__title ">{title}</h1>
            </a>
            <div className="Navbar__item">Log in</div>
            <div className="Navbar__item">Log in</div>
            <div className="Navbar__item">Log in</div>
        </div>

        {/* <div className="Navbar__item">Log in</div> */}

        <button className="Navbar__burger">
            <div className="Navbar__burger__icon">
                <i className="material-icons">
                    menu
                </i>
            </div>
        </button>

    </nav>

export default Navbar