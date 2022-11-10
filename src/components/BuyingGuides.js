import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { addInStock, removeFromStock } from "../redux/actions/createActions";
import Comments from "./Comments";
import FooterComponent from "./FooterComp";
import HeaderComponent from "./HeaderComp";

function BuyingGuides() {
    const bookinStock = useSelector(state => state.bookReducer.value)
    const [number,setNumber] = useState(1);
    const dispatch = useDispatch();
    const addStock = () => {
        dispatch(addInStock(number))
    }
    const removeStock = () => {
        dispatch(removeFromStock(number))
    }
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                <HeaderComponent />
                    <div className="container">
                        <div className="row>">
                            <div className="buying-guides-block">
                                <h1>This is Buying Guides page.</h1>
                                <h2 className="book-stock mt-5">Add or remove stocks of books.</h2>
                                <h2>Current stock: {bookinStock} </h2>
                                <label className="font-weight-bold" style={{fontWeight: 700}}>Enter the stock: </label>
                                <label><input type="number" placeholder="Enter stock to add or remove" value={number} onChange={e => setNumber(e.target.value)}></input></label>
                                <div className="action-buttons">
                                    <Button color="success" onClick={addStock}>Add in stock</Button>
                                    <Button color="danger m-5" onClick={removeStock}>Remove from stock</Button>
                                </div>
                                <div className="comments">
                                    <Comments />
                                </div>
                            </div>
                        </div>
                    </div>
                    <FooterComponent />
                </div>
            </div>
            
        </React.Fragment>
    );
}

export default BuyingGuides;