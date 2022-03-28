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
                    <a href="https://www.twitter.com" aria-label="Twitter"><i class="fab fa-twitter"></i></a>&nbsp;|
                    <a href="https://www.instagram.com" aria-label="Instagram"><i class="fab fa-instagram"></i></a>&nbsp;|
                    <a href="https://www.youtube.com" aria-label="Youtube"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer