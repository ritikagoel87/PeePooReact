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
                                    <label>Price: {f.amenity.price}</label>
                                    <label>Rating: {f.amenity.rating}</label>
                                    <label>Toilet: {f.amenity.toilet}</label>
                                    <label>Bath: {f.amenity.bath}</label>
                                    <label>Shower: {f.amenity.shower}</label>
                                    <label>Baby: {f.amenity.baby}</label>
                                    <label><a href={"#/search/" + f.amenity.id}>Details >>></a></label>
                                </div>
                            </div>
                            <picture>
                                <a target="_blank" rel="noopener noreferrer"><img className="img-fluid img-thumbnail img-rounded" src={f.amenity.image} alt=""/></a>
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
