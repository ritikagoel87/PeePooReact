import React from "react";
const Gallery = (props) => {
    return (
        <div className="d-flex flex-wrap justify-content-around">
            {
                props.amenities.map((f) => {
                    return (
                        <div className="d-flex">
                            <div>
                                <div className="d-flex flex-column">
                                    <label>Location: <a href={"#/search/" + f.location_id}>Details</a></label>
                                    <label>Price: {f.price}</label>
                                    <label>Rating: {f.rating}</label>
                                    <label>Toilet: {f.toilet}</label>
                                    <label>Bath: {f.bath}</label>
                                    <label>Shower: {f.shower}</label>
                                    <label>Baby: {f.baby}</label>
                                </div>
                            </div>
                            <picture>
                                <a target="_blank" rel="noopener noreferrer"><img className="img-fluid img-thumbnail img-rounded" src={f.image} alt=""/></a>
                            </picture>
                        </div>
                    )
                }

                )
            }
        </div>
    );
}

export default Gallery;
