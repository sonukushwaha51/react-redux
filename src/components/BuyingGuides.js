import React from "react";
import FooterComponent from "./FooterComp";
import HeaderComponent from "./HeaderComp";

function BuyingGuides() {
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                <HeaderComponent />
                    <div className="container">
                        <div className="row>">
                            <div className="buying-guides-block">
                                <h1>This is Buying Guides page.</h1>
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