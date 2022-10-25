import React from "react";
import { Button } from "reactstrap";
import FooterComponent from "./FooterComp";
import HeaderComponent from "./HeaderComp";

function Offers() {
    
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
                    <FooterComponent />
                </div>
            </div>
            
        </React.Fragment>
    );
}

export default Offers;