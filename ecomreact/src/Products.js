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
        <br />        
        <div>
        <div id="cardAlign" class="row">
            <div class="col-sm-6">
        <div id="hide" class="card">
        {
                Records.map(record => {
                    if(record.id === 1){
                        return <img class="card-img-top" src={ record.image } alt="Card image cap"/>
                    }
                })
        }
          
          <div class="card-body">
        {
                Records.map(record => {
                    if(record.id === 1){
                        return <h4 id="text-bolder"class="card-title"> {record.title}</h4>
                    }
                })
        }
        {
                Records.map(record => {
                    if(record.id === 1){
                        return <p class="card-text"> {record.description}</p>
                    }
                })
        }
        {
                Records.map(record => {
                    if(record.id === 1){
                        return <p class="card-text"> {record.price}</p>
                    }
                })
        }
            <div class="btn btn-primary">Add to cart</div>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
        </div>
        </div>
        {/* CARD 2*/}
        <div class="col-sm-6">
        <div id="hide" class="card">
        {
                Records.map(record => {
                    if(record.id === 2){
                        return <img class="card-img-top" src={ record.image } alt="Card image cap"/>
                    }
                })
        }
          <div class="card-body">
          {
                Records.map(record => {
                    if(record.id === 2){
                        return <h4 id="text-bolder"class="card-title"> {record.title}</h4>
                    }
                })
        }
        {
                Records.map(record => {
                    if(record.id === 2){
                        return <p class="card-text"> {record.description}</p>
                    }
                })
        }
        {
                Records.map(record => {
                    if(record.id === 1){
                        return <p class="card-text"> {record.price}</p>
                    }
                })
        }
            <div class="btn btn-primary">Add to cart</div>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        </div>
        {/* CARD 3*/}
        <div class="col-sm-6">
        <div id="hide" class="card">
        {
                Records.map(record => {
                    if(record.id === 3){
                        return <img class="card-img-top" src={ record.image } alt="Card image cap"/>
                    }
                })
        }
          <div class="card-body">
          {
                Records.map(record => {
                    if(record.id === 3){
                        return <h4 id="text-bolder"class="card-title"> {record.title}</h4>
                    }
                })
        }
        {
                Records.map(record => {
                    if(record.id === 3){
                        return <p class="card-text"> {record.description}</p>
                    }
                })
        }
        {
                Records.map(record => {
                    if(record.id === 1){
                        return <p class="card-text"> {record.price}</p>
                    }
                })
        }
            <div class="btn btn-primary">Add to cart</div>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        </div>
        {/* CARD 4*/}
        <div class="col-sm-6">
        <div id="hide" class="card">
        {
                Records.map(record => {
                    if(record.id === 4){
                        return <img class="card-img-top" src={ record.image } alt="Card image cap"/>
                    }
                })
        }
          <div class="card-body">
          {
                Records.map(record => {
                    if(record.id === 4){
                        return <h4 id="text-bolder"class="card-title"> {record.title}</h4>
                    }
                })
        }
        {
                Records.map(record => {
                    if(record.id === 4){
                        return <p class="card-text"> {record.description}</p>
                    }
                })
        }
        {
                Records.map(record => {
                    if(record.id === 1){
                        return <p class="card-text"> {record.price}</p>
                    }
                })
        }
            <div class="btn btn-primary">Add to cart</div>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        </div>
        {/* CARD 5*/}
        <div class="col-sm-6">
        <div id="hide" class="card">
        {
                Records.map(record => {
                    if(record.id === 5){
                        return <img class="card-img-top" src={ record.image } alt="Card image cap"/>
                    }
                })
        }
          <div class="card-body">
          {
                Records.map(record => {
                    if(record.id === 5){
                        return <h4 id="text-bolder"class="card-title"> {record.title}</h4>
                    }
                })
        }
        {
                Records.map(record => {
                    if(record.id === 5){
                        return <p class="card-text"> {record.description}</p>
                    }
                })
        }
        {
                Records.map(record => {
                    if(record.id === 1){
                        return <p class="card-text"> {record.price}</p>
                    }
                })
        }
            <div class="btn btn-primary">Add to cart</div>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        </div>
        {/* CARD 6*/}
        <div class="col-sm-6">
        <div id="hide" class="card">
        {
                Records.map(record => {
                    if(record.id === 6){
                        return <img class="card-img-top" src={ record.image } alt="Card image cap"/>
                    }
                })
        }
          <div class="card-body">
          {
                Records.map(record => {
                    if(record.id === 6){
                        return <h4 id="text-bolder"class="card-title"> {record.title}</h4>
                    }
                })
        }
        {
                Records.map(record => {
                    if(record.id === 6){
                        return <p class="card-text"> {record.description}</p>
                    }
                })
        }
        {
                Records.map(record => {
                    if(record.id === 1){
                        return <p class="card-text"> {record.price}</p>
                    }
                })
        }
            <div class="btn btn-primary">Add to cart</div>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
            </div>
        </div>
        {/* CARD 7*/}
        <div class="col-sm-6">
        <div id="hide" class="card">
        {
                Records.map(record => {
                    if(record.id === 7){
                        return <img class="card-img-top" src={ record.image } alt="Card image cap"/>
                    }
                })
        }
          <div class="card-body">
          {
                Records.map(record => {
                    if(record.id === 7){
                        return <h4 id="text-bolder"class="card-title"> {record.title}</h4>
                    }
                })
        }
        {
                Records.map(record => {
                    if(record.id === 7){
                        return <p class="card-text"> {record.description}</p>
                    }
                })
        }
        {
                Records.map(record => {
                    if(record.id === 1){
                        return <p class="card-text"> {record.price}</p>
                    }
                })
        }
            <div class="btn btn-primary">Add to cart</div>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        </div>
        {/* CARD 8*/}
        <div class="col-sm-6">
        <div id="hide" class="card">
        {
                Records.map(record => {
                    if(record.id === 8){
                        return <img class="card-img-top" src={ record.image } alt="Card image cap"/>
                    }
                })
        }
          <div class="card-body">
          {
                Records.map(record => {
                    if(record.id === 8){
                        return <h4 id="text-bolder"class="card-title"> {record.title}</h4>
                    }
                })
        }
        {
                Records.map(record => {
                    if(record.id === 8){
                        return <p class="card-text"> {record.description}</p>
                    }
                })
        }
        {
                Records.map(record => {
                    if(record.id === 1){
                        return <p class="card-text"> {record.price}</p>
                    }
                })
        }
            <div class="btn btn-primary">Add to cart</div>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        </div>
        {/* CARD 9*/}
        <div class="col-sm-6">
        <div id="hide" class="card">
        {
                Records.map(record => {
                    if(record.id === 9){
                        return <img class="card-img-top" src={ record.image } alt="Card image cap"/>
                    }
                })
        }
          <div class="card-body">
          {
                Records.map(record => {
                    if(record.id === 9){
                        return <h4 id="text-bolder"class="card-title"> {record.title}</h4>
                    }
                })
        }
        {
                Records.map(record => {
                    if(record.id === 9){
                        return <p class="card-text"> {record.description}</p>
                    }
                })
        }
        {
                Records.map(record => {
                    if(record.id === 1){
                        return <p class="card-text"> {record.price}</p>
                    }
                })
        }
            <div class="btn btn-primary">Add to cart</div>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        </div>
        {/* CARD 10*/}
        <div class="col-sm-6">
        <div id="hide" class="card">
        {
                Records.map(record => {
                    if(record.id === 10){
                        return <img class="card-img-top" src={ record.image } alt="Card image cap"/>
                    }
                })
        }
          <div class="card-body">
          {
                Records.map(record => {
                    if(record.id === 10){
                        return <h4 id="text-bolder"class="card-title"> {record.title}</h4>
                    }
                })
        }
        {
                Records.map(record => {
                    if(record.id === 10){
                        return <p class="card-text"> {record.description}</p>
                    }
                })
        }
        {
                Records.map(record => {
                    if(record.id === 1){
                        return <p class="card-text"> {record.price}</p>
                    }
                })
        }
            <div class="btn btn-primary">Add to cart</div>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        </div>
        {/* CARD 11*/}
        <div class="col-sm-6">
        <div id="hide" class="card">
        {
                Records.map(record => {
                    if(record.id === 11){
                        return <img class="card-img-top" src={ record.image } alt="Card image cap"/>
                    }
                })
        }
          <div class="card-body">
          {
                Records.map(record => {
                    if(record.id === 11){
                        return <h4 id="text-bolder"class="card-title"> {record.title}</h4>
                    }
                })
        }
        {
                Records.map(record => {
                    if(record.id === 11){
                        return <p class="card-text"> {record.description}</p>
                    }
                })
        }
        {
                Records.map(record => {
                    if(record.id === 1){
                        return <p class="card-text"> {record.price}</p>
                    }
                })
        }
            <div class="btn btn-primary">Add to cart</div>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        </div>
        {/* CARD 12*/}
        <div class="col-sm-6">
        <div id="hide" class="card">
        {
                Records.map(record => {
                    if(record.id === 12){
                        return <img class="card-img-top" src={ record.image } alt="Card image cap"/>
                    }
                })
        }
          <div class="card-body">
          {
                Records.map(record => {
                    if(record.id === 12){
                        return <h4 id="text-bolder"class="card-title"> {record.title}</h4>
                    }
                })
        }
        {
                Records.map(record => {
                    if(record.id === 12){
                        return <p class="card-text"> {record.description}</p>
                    }
                })
        }
        {
                Records.map(record => {
                    if(record.id === 1){
                        return <p class="card-text"> {record.price}</p>
                    }
                })
        }
            <div class="btn btn-primary">Add to cart</div>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        </div>
      </div>
      </div>
      </div>
    )}
export default Product