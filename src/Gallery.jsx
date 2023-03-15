import React from "react";
import './App.css'
let Gallery = ({data}) =>{
    return(
        <div className="card">
            {
                data.map(image=>(
                    <div key={image.id}>
                        <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} alt={image.title} height="200" width='250'/>

                    </div>
                ))
            }

        </div>
    )
}
export default Gallery