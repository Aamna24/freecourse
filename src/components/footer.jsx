import React from 'react';

import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="footer" style={{ "background-color": "#161d6f" }}>
            <div class="row">
                <div class="text-left p-3 text-white col-md-8 copyright" >
                    &copy; {new Date().getFullYear()} All rights reserved by: Site
                </div>

                <div class="col-md-4 p-3 footer-text text-right" >
                    <NavLink to="/privacy"> Privacy Policy</NavLink>
                    <NavLink to="/terms-conditions">Terms & Conditions</NavLink>
                </div>


            </div>





        </footer>

    );



}

export default Footer;

