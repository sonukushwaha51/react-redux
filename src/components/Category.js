import React, { useState, useCallback} from "react";
import BestSellers from "./BestSellers";
import { EditorialBanner } from "./EditorialBanner";
import FooterComponent from "./FooterComp";
import HeaderComponent from "./HeaderComp";

function Category(props) {
    const [names, setNames] = useState({name : "Sonu Kushwaha", st : true});
    
 
    const myCallback = useCallback(() => function handlelcick()  {
        if(names.st === true) { setNames({name : "Sonu Kushwha",st : !names.st}) } else { setNames({name: "Props removed", st : !names.st}) }
        console.log(names)
        
    },[names])
    
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                <HeaderComponent></HeaderComponent>
                    <EditorialBanner></EditorialBanner>
                    <BestSellers names = {names} myCallback = {myCallback} />
                    <FooterComponent></FooterComponent>   
                </div>
            </div>
            
        </React.Fragment>
    );
}

export default  Category;