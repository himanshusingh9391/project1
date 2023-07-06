
import React from "react";

export default function Count({itemsCount}) {
    return(
        <div style={{marginBottom:"15px"}} className="padding">
            <h3>Pending items count - {itemsCount} </h3>
        </div>
    );

}