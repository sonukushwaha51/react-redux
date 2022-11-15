import React, { useState } from "react";
import { Button } from "reactstrap";
import FooterComponent from "./FooterComp";
import HeaderComponent from "./HeaderComp";
import {useDispatch, useSelector} from "react-redux";
import { addAction, divAction, modAction, mulAction, subAction } from "../redux/actions/createActions";

function Offers() {
    const [numbers,setNumbers] = useState({
        number1: 0,
        number2: 0
    })
    
    const output = useSelector(state => state.arithMetic.value)
    const dispatch  = useDispatch();
    const add = () => dispatch(addAction(numbers.number1,numbers.number2))
    const sub = () => dispatch(subAction(numbers.number1,numbers.number2))
    const mul = () => dispatch(mulAction(numbers.number1,numbers.number2))
    const div = () => dispatch(divAction(numbers.number1,numbers.number2))
    const mod = () => dispatch(modAction(numbers.number1,numbers.number2))
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <HeaderComponent />
                    <div className="container">
                        <div className="row>">
                            <div className="offers-block">
                                <h1>This is offers page.</h1>
                                <Button color="primary">Check Offers</Button>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row>">
                            <table className="calculator">
                                <tbody>
                                <tr>
                                    <td><label>Enter first number:</label></td>
                                    <td><label><input type="number" value={numbers.number1} onChange = {e => setNumbers({number1: e.target.value,number2 : numbers.number2})}></input></label></td>
                                </tr>
                                <tr>
                                    <td><label>Enter second number:</label></td>
                                    <td><label><input type="number" value={numbers.number2} onChange = {e => setNumbers({number1: numbers.number1, number2 : e.target.value})}></input></label></td>
                                </tr>
                                <tr>
                                    <td><button onClick={add}>ADD</button></td>
                                    <td><button onClick={sub}>SUB</button></td>
                                    <td><button onClick={mul}>MUL</button></td>
                                    <td><button onClick={div}>DIV</button></td>
                                    <td><button onClick={mod}>MOD</button></td>
                                </tr>
                                <tr><td>Result of selected operation for {numbers.number1} and {numbers.number2} is: {output}</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <FooterComponent />
                </div>
            </div>
            
        </React.Fragment>
    );
}

export default Offers;