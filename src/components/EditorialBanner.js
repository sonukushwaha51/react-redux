import React from "react";
import { Button } from "reactstrap";

export function EditorialBanner() {
    return( 
        <React.Fragment>
            <div className = "editorial-banner-block">
                <div className = "editorial-banner-image-block">
                    <div className="banner-image">
                        <img className="banner-img" src = "https://www.arch2o.com/wp-content/uploads/2018/09/Arch2O-15-of-the-most-unbelievably-beautiful-bookstore-in-the-world-18.jpg" alt="Book Store Banner"></img>
                    </div>
                </div>
                <div className="editorial-banner-text-block p-3">
                    <div className="banner-text">
                        <p className="banner-text-heading block-margin-btm-2">
                            <span className = "pt-bold">SAVE 5% ON ALL BOOK PURCHASES</span></p>
                        <p className="banner-normal-text">Find all your books from different categories here and get it delivered quickly. To expore</p>
                        <Button color="primary">FIND OUT MORE</Button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}