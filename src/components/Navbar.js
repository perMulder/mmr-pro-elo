import React, { Component } from 'react'

class Navbar extends Component {

    state = {
        burger: {
            active: false,
        }
    }

    burgerOnClick = e => {
        this.setState({
            burger: {
                ...this.state.burger,
                active: !this.state.burger.active
            }
        })
        // console.log(this.state.burger)
    }

    render() {
        return (
            <nav className="Navbar">

                <div className="Navbar__logo"></div>
                    
                <div className="Navbar__burger">
                    <button onClick={this.burgerOnClick}>
                        <i className="material-icons">
                            menu
                        </i>
                    </button>
                </div>


                <div 
                    className={`Navbar__menu ${
                        this.state.burger.active?
                        'Navbar__menu-active' 
                        : null
                    }`}
                >
                    <a href="/">About</a>
                    <a href="/">Sign up</a>
                    <a href="/">Log in</a>
                </div>

            </nav>
        )
    }
}

export default Navbar