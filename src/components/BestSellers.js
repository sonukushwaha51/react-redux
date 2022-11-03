import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { incrementTimerAction, decrementTimerAction} from "../redux/actions/createActions";

function BestSellers() {
    const displayTimer = useSelector((state) => state.timer)
    const dispatch = useDispatch();
    const incrementTimer = () => {
        dispatch({ type: incrementTimerAction.type })
    }
    const decrementTimer = () => {dispatch({ type: decrementTimerAction.type })}

    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="bestsellers-main-block">
                        <div className="bestsellers-main-heading mt-4">
                            <h1 className="bestsellers-heading">BEST SELLERS</h1>
                        </div>
                        <div className="bestsellers-main-content-block mt-3">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 col-sm-9 col-md-12">
                                        <div className="product-lists">
                                            <div className="product">
                                            </div>
                                            <div className="timer-redux-demo">
                                                <h1 className="timer-redux">We are displaying Redux timer state</h1>
                                                <h2 className="timer-value">Timer Value: {displayTimer}</h2>
                                                <Button color="success" onClick={incrementTimer}>Click here to Increment timer</Button>
                                                <Button color="danger" onClick={decrementTimer}>Click here to decrement</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default BestSellers;