import React from 'react';

function Footer() {
    return(
        <footer>
        <div id="row">
            <div>
                <h3>Thank you for choosing Day</h3>
                <p>&copy; 2021 Brian K, <i>All Rights Reserved</i></p>
            </div>
            <div id="footer-col-2">
                <h3>Follow Our Social Media</h3>
                <div id="socials">
                    <a href="https://www.twitter.com" aria-label="Twitter"><i className="fab fa-twitter"></i></a>&nbsp;|
                    <a href="https://www.instagram.com" aria-label="Instagram"><i className="fab fa-instagram"></i></a>&nbsp;|
                    <a href="https://www.youtube.com" aria-label="Youtube"><i className="fab fa-youtube"></i></a>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer