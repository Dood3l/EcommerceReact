import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Productlist extends React.Component {
    state = {
        products: [],
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/products').then(res => {
            console.log(res);
            this.setState({ products: res.data});
        });
    }

    render() {
        return (
            <div id="cardAlign" class="row">
            {
                this.state.products.map(record => (

                    <div id="cardflex" class="col-sm-6">
                        <div id="cardDetailing" class="card">
                            <img id="card-image" class="card-img-top" src={ record.Image } alt="Card image cap"/>
                            <div class="card-body">
                                <h4 id="text-bolder"class="card-title"> {record.Title}</h4>
                                <p class="card-text"> {record.ProductDesc}</p>
                                <p class="card-text"> {record.Price}</p>
                                <div class="btn btn-primary">Add to cart</div>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>

                ))
            }
        </div>
        )
    }
}