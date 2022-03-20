import React from 'react'

function Home() {
    return(
        <main>
        <div id="row">

            <div id="col">
                <h1><b>Quality never goes out of style</b></h1>
                <p>Here at Day, we strive to provide users with Hi-Quality digital art at an affordable price point.
                    Sound too good to be true? Click the Explore button and see for yourself!</p>
                <a href="/products" id="btn">Explore</a>
            </div>

            <section id="slide-container">
                <span id="slider-image-1"></span>
                <span id="slider-image-2"></span>
                <span id="slider-image-3"></span>
                <div id="image-container">
                    <img src="assets/images/1.jpg" id="slider-image" alt="slideImg1"/>
                    <img src="assets/images/3.jpeg" id="slider-image" alt="slideImg2"/>
                    <img src="assets/images/4.jpg" id="slider-image" alt="slideImg3"/>
                </div>
                <div id="button-container">
                    <a href="#slider-image-1" id="slider-button" aria-label="btn1"></a>
                    <a href="#slider-image-2" id="slider-button" aria-label="btn2"></a>
                    <a href="#slider-image-3" id="slider-button" aria-label="btn3"></a>
                </div>
            </section>

        </div>
    </main>
    )
}

export default Home