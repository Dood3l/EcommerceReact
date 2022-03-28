
import axios from 'axios';
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Productlist extends React.Component {
    state = {
        products: [],
        type: "All"
    }


    componentDidMount() {
        axios.get('http://localhost:4000/api/products' || process.env.JAWSDB_URL).then(res => {
            console.log(res);
            this.setState({ products: res.data });
        });
    }
    filter (type){
        return () => {
            this.setState({type})
        }
    }
    render() {
        
        return (
            
            <div>
                <h6>Filter By Category: </h6>
                <div id="fButtons">
                    <button id="button" class="btn btn-light" onClick={this.filter("All")}>All</button>
                    <button id="button" class="btn btn-light" onClick={this.filter("Anime")}>Anime</button>
                    <button id="button" class="btn btn-light" onClick={this.filter("Synth")}>Synth</button>
                    <button id="button" class="btn btn-light" onClick={this.filter("Contrasted")}>Contrasted</button>
                </div>
                <h6>Filter By Price: </h6>
                <div id="fButtons">
                    <button id="button" class="btn btn-light" onClick={this.filter("Anime")}>$0-5</button>
                    <button id="button" class="btn btn-light" onClick={this.filter("Synth")}>$6-9</button>
                    <button id="button" class="btn btn-light" onClick={this.filter("Contrasted")}>$10-30</button>
                    <button id="button" class="btn btn-light" onClick={this.filter("All")}>Reset</button>
                </div>
                <div id="cardAlign" class="row">
                    {
                        this.state.products.filter((record) => {
                            if (this.state.type === "All"){
                                return true 
                            } else {
                                return this.state.type === record.Category
                            }
                        }).map(record => (

                            <div id="cardflex" class="col-sm-6">
                                <div id="cardDetailing" class="card">
                                    <img id="card-image" class="card-img-top" src={record.Image} alt="Card image cap" />
                                    <div class="card-body">
                                        <h4 id="text-bolder" class="card-title"> {record.Title}</h4>
                                        <p class="card-text card-desc"> {record.ProductDesc}</p>
                                        <p class="card-text">${record.Price}</p>
                                        <div class="btn btn-primary">Add to cart</div>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}