import axios from 'axios';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Productlist extends React.Component {
    state = {
        products: [],
        type: "All",
        filterText: ""
    }
    //UseState is a react hook that lets you set some state to react component.
    componentDidMount() {
        axios.get('/api/products').then(res => {
            console.log(res);
            this.setState({ products: res.data });
        });
    }
    myFilter (type){
        return () => {
            this.setState({type})
        }
    }
    onChange (e){
        this.setState({filterText: e.target.value})
        
    }
    // resetFilterText () {
    //     this.setState({filterText: ""})
    // }
    normalizeString(str) {
        return str.toLowerCase().replace(/\s/g, "")
    }
    render() {
        
        return (
            
            <div>
                <h6>Filter By Category: </h6>
                <div id="fButtons">
                    <button id="button" className="btn btn-light" onClick={this.myFilter("All")}>All</button>
                    <button id="button" className="btn btn-light" onClick={this.myFilter("Anime")}>Anime</button>
                    <button id="button" className="btn btn-light" onClick={this.myFilter("Synth")}>Synth</button>
                    <button id="button" className="btn btn-light" onClick={this.myFilter("Contrasted")}>Contrasted</button>
                </div>
                <div className="search-container">
                <h6>Search By Name:</h6>
                <div className="searchBar"id="fButtons">
                    <input className="searchBox" type="text" value={this.state.filterText} onChange={(e) => this.onChange(e)}></input>
                    {/* <button id="button" className="btn btn-light" onClick={() => this.resetFilterText()}>Reset</button> */}
                </div>
                </div>
                <div id="cardAlign" className="row">
                    {
                        this.state.products
                        .filter((record) => {
                            if (this.state.filterText === ""){
                                return true
                            } else{
                                return this.normalizeString(record.Title).includes(this.normalizeString(this.state.filterText))
                            }
                        })
                        .filter((record) => {
                            if (this.state.type === "All"){
                                return true 
                            } else {
                                return this.state.type === record.Category
                            }
                        }).map(record => (

                            <div id="cardflex" className="col-sm-6">
                                <div id="cardDetailing" className="card">
                                    <img id="card-image" className="card-img-top" src={record.Image} alt="Card image cap" />
                                    <div className="card-body">
                                        <h4 id="text-bolder" className="card-title"> {record.Title}</h4>
                                        <p className="card-text card-desc"> {record.ProductDesc}</p>
                                        <p className="card-text">${record.Price}</p>
                                        <div className="btn btn-primary">Add to cart</div>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
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