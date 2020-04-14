import React from 'react';
import { NavLink } from 'react-router-dom';
import AndLogo from '../../components/AndLogo';

class Header extends React.Component {

    state = {
        isActive: false,
    }

    toggleNav = () => {
        this.setState((prevState: { isActive: boolean }) => ({
            isActive: !prevState.isActive
        }))
    }

    render() {
        return (
            <nav className="navbar" aria-label="main navigation"
                style={{
                    borderBottom: 'solid 1px #dddddd',
                }}>
                <div className="navbar-brand">
                    <NavLink
                        className="navbar-item"
                        to="/"
                        activeClassName="is-active">
                        <AndLogo />
                        <span style={{ marginLeft: "10px" }}>Tech Blog</span>
                    </NavLink>
                    <button className="button navbar-burger" onClick={this.toggleNav}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <div className={this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
                    <div className="navbar-start">
                        <NavLink
                            className="navbar-item"
                            to="/blog"
                            activeClassName="is-active"
                        >
                            <span className="icon has-text-primary" style={{ marginRight: 5 }}>
                                <i className="fas fa-code"></i>
                            </span>
                            Code Blog
                        </NavLink>
                        <a className="navbar-item" href="/blog">
                            <span className="icon" style={{ marginRight: 5 }}>
                                <i className="fab fa-lg fa-medium"></i>
                            </span>
              Medium
                        </a>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link" href="/blog">
                                Projects
                            </a>
                            <div className="navbar-dropdown">
                                <a className="navbar-item" href="/blog">
                                    Overview
                                </a>
                                <hr className="navbar-divider" />
                                <a className="navbar-item" href="/blog">
                                    This Site
                                </a>
                                <a className="navbar-item" href="/blog">
                                    Angular The React Way
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <a className="navbar-item" href="https://github.com/and-digital">
                            <span className="icon">
                                <i className="fab fa-lg fa-github"></i>
                            </span>
                        </a>
                        <a className="navbar-item" href="https://twitter.com/AND_Digital">
                            <span className="icon" style={{ color: '#0084FF' }}>
                                <i className="fab fa-lg fa-twitter"></i>
                            </span>
                        </a>
                        <a className="navbar-item" href="https://www.instagram.com/and.digital">
                            <span className="icon" style={{ color: '#0077B5' }}>
                                <i className="fab fa-lg fa-instagram"></i>
                            </span>
                        </a>
                    </div>
                </div>
            </nav >
        )
    }
}

export default Header;