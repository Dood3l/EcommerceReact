import React from 'react'
import Records from './productData.json';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <div id="cardAlign" class="row">
            {
                Records.map(record => (

                    <div class="col-sm-6">
                        <div id="hide" class="card">
                            <img class="card-img-top" src={ record.image } alt="Card image cap"/>
                            <div class="card-body">
                                <h4 id="text-bolder"class="card-title"> {record.title}</h4>
                                <p class="card-text"> {record.description}</p>
                                <p class="card-text"> {record.price}</p>
                                <div class="btn btn-primary">Add to cart</div>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>

                ))
            }
        </div>
        </div>    
      </div>
    )}
export default Product