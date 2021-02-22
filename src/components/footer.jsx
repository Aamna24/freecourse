import React from 'react';

import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="footer" style={{ "backgroundColor": "#1f6f8b" ,"marginTop":"20px"}}>
            <div class="row">
                <div class="text-left p-3 text-white col-md-6 copyright" >
                    &copy; {new Date().getFullYear()} All rights reserved by: Site
                </div>

                <div class="col-md-6 p-3 footer-text " >
                    <NavLink to="/privacy"> Privacy Policy</NavLink>
                    <NavLink to="/terms-conditions">Terms & Conditions</NavLink>
                </div>


            </div>





        </footer>

    );



}

export default Footer;

