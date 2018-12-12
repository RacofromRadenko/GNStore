import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from "react-router-dom";

const Product = props => {
    const detailsPath = `/details/${props.productData.id}`;
    const imagePath = props.productData.smallImage;
    const productName = props.productData.name;
    const imageCategory = props.productData.type;
    const imageStyle = `"background-image:url('${imagePath}')"`;
    return (


            <React.Fragment>
                <Link to={detailsPath}>

                    <div className="image-wrapper">
                        <div className="image-content" style={{ backgroundImage : `url(${imagePath})` }}></div>
                    </div>
                    <div className="product-data">
                        <div className="category-container">{imageCategory}</div>
                        <h2>{productName}</h2>
                        <div className="category-container">From</div>
                        <div className="price">{props.productData.minPrice*1000}</div>
                    </div>
                    <div className="product-call-to-action">
                        <div className="call-to-action">Buy</div>
                    </div>
                </Link>
            </React.Fragment>


    );
};

export default Product;
