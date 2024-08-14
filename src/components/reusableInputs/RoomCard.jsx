import React from 'react';
import MainButton from "./MainButton";

function RoomCard({
                      title,
                      city,
                      subTitle,
                      description,
                      bathrooms,
                      size,
                      price,
                      breakfastIncluded,
                      image,
                      ...props
                  }) {
    return (
        <div className="container bg-light mb-3" {...props}>
            <div className="row p-4">
                <div className="col-5">
                    <img src={image} alt={title} className="img-fluid"/>
                </div>
                <div className="col">
                    <h4 className="text-primary">{title}</h4>
                    <p><strong>{city}</strong></p>
                    <h5>{subTitle}</h5>
                    <p>{description}</p>
                    <p>{bathrooms} bathrooms • {size}m²</p>
                    <p><span>Price: USD {price}</span></p>
                    {breakfastIncluded && <p><strong>Breakfast included</strong></p>}
                    <MainButton
                    title={'Book Now'}
                    type={'submit'}
                    text={'#fff'}
                    bgColor={'#fcffff'}
                    />
                </div>
            </div>
        </div>
    );
}

export default RoomCard;
