import React from 'react'
import { Fragment } from 'react/cjs/react.production.min';

const Navbar = () => {
    return <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top nav-container">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar w/ text</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 myNav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Projects</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacts</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    </Fragment>

}


export default Navbar;