import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Productlist from './components/getProducts'

function Product() {
    return(
        // CARD 1
        <div>
            <h6>Filter: </h6>
        <div id="fButtons">
            <button id="button" class="btn btn-light" onclick="filterProduct">Anime</button>
            <button id="button" class="btn btn-light" onclick="filterProduct">Synth</button>
            <button id="button" class="btn btn-light" onclick="filterProduct">Contrasted</button>
        </div>
        <div>
        <Productlist />
        </div>    
      </div>
    )}
export default Product