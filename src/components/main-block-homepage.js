import React from 'react';
import { EditorialBanner } from './EditorialBanner';

function MainBlock() {
    return ( 
        <div className = "homepage-mainblock">
            <div className = "container">
                <div className = "row">
                    <EditorialBanner />
                </div>
            </div>
            
        </div>
    );    
}
       

export default MainBlock;