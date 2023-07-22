
import React from "react";

const Navbar = ({ setSearch }) => {

    const logOut = () => {
        localStorage.removeItem('token')
        window.open('/', '_self')
    }


    let isLogged = localStorage.getItem('token')

    const handleChange = event => {
        setSearch(event.target.value);
    };

    return (

        <nav className="fixed-top navbar navbar-expand-lg navbar-light border-bottom bg-white p-1">
            <div className="container d-flex flex-row justify-content-between align-items-center w-100 flex-nowrap">
                <div className="d-flex align-items-center w-50">
                    <button className="navbar-toggler border border-0" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="../">
                        <img src="src/assets/dev-badge.svg" alt="logo" width="40" height="40"
                            className="d-inline-block align-text-top" />
                    </a>
                    <div className="input-group  border rounded-2 align-items-center d-none d-lg-flex w-75">
                        <input id="search" type="search" onChange={handleChange} className="form-control border border-0" placeholder="Search..." />
                        <div className="input-group-append">
                            <button className="btn" type="button"><img src="src/assets/search-icon.svg" alt="" /></button>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="src/assets/search-icon.svg" alt="search" className="iconsearch d-lg-none d-inline" width="24"
                        height="24" />
                    {!isLogged &&
                        <div className="login-card d-inline">

                            <button type="button" className="btn btn-outline-secondary border-0 d-none d-lg-inline-block me-2" data-bs-toggle="modal" data-bs-target="#logIn">
                                Log In
                            </button>
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createAccount">
                                Create Account
                            </button>
                        </div>}
                    <div className="logout-card d-inline">


                        {isLogged && <span>

                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Create Post
                            </button>

                            <img src="src/assets/notification-icon.svg" alt="bell" className="iconbell mx-md-3" width="24"
                                height="24" />
                            <div className="dropdown-center d-inline-block">

                                <img src="src/assets/profile-avatar.webp" alt="profile avatar" width="40" height="40"
                                    className="rounded-circle dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" />
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><a className="dropdown-item btn btn-outline-primary border-0" type="button" href="./views/profile.html">Profile</a></li>
                                    <li><button className="dropdown-item" href="#" onClick={logOut} id="sign_out">Sing Out</button></li>
                                </ul>
                            </div>
                        </span>}

                    </div>
                </div>
            </div>
        </nav>




    )
}

export default Navbar