import React from 'react'


function Contact() {
    return(
        <main className="contact-container">
        <form className="content-box">
            <div className="left"></div>
            <div className="right">
                <h2>Contact Us</h2>
                <input type="text" className="field" placeholder="Full Name" required/>
                <input type="email" className="field" placeholder="Email" required/>
                <input type="text" className="field" placeholder="Phone" required/>
                <textarea className="field" placeholder="Have any comments?"></textarea>
                <button className="contact-btn">Send</button>
            </div>
        </form>
    </main>
    )
}

export default Contact