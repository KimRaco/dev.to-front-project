import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <footer>
            <div className="container-fluid">
                <div className="d-flex justify-content-center">
                    <p className="text-center"><a href="#">DEV Community 👩‍💻👨‍💻</a>
                        — A constructive and inclusive social network for software developers. With you every step of your
                        journey.</p>
                </div>
                <div className="d-flex justify-content-center text-center flex-wrap">
                    <ul className="d-flex text-decoration-none ">
                        <li><a href="#" >Home</a></li>
                        <li><a href="#" >Listings</a></li>
                        <li><a href="#" >Podcasts</a></li>
                        <li><a href="#" >Videos</a></li>
                        <li><a href="#" >Tags</a></li>
                        <li><a href="#" >FAQ</a></li>
                        <li><a href="#" >Forem Shop</a></li>
                        <li><a href="#" >Sponsors</a></li>
                        <li><a href="#" >About</a></li>
                        <li><a href="#" >Contact</a></li>
                        <li><a href="#" >Guides</a></li>
                        <li><a href="#" >Software</a></li>
                    </ul>
                </div>


                <ul className="d-flex justify-content-center text-center text-decoration-none">
                    <li><a href="#" >Code of Conduct</a></li>
                    <li><a href="#" >Privacy Policy</a></li>
                    <li><a href="#" >Terms of use</a></li>
                </ul>
                <div className="flex-column align-items-center">
                    <p className="text-center">Built on <a href="#">Forem</a> — the <a href="#">open source</a> software that
                        powers <a href="#">DEV</a> and other inclusive communities.</p>
                    <p className="text-center">Made with love and <a href="#">Ruby on Rails</a>. DEV Community 👩‍💻👨‍💻 © 2016
                        - 2023.</p>
                </div>
            </div>

        </footer>
    )
}

export default Footer