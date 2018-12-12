import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { placeOrder } from '../../../../actions/actions';
import Details from '../Details';

const Product = props => {
    const detailsPath = `/details/${props.productData.id}`;
    const imagePath = props.productData.smallImage;
    const productName = props.productData.name;
    const imageCategory = props.productData.type;
    const imageStyle = `"background-image:url('${imagePath}')"`;
    const orderID = props.productData.id;
    console.log('history', props);

    const redirect = (event) => {
        event.preventDefault();
        return props.history.push({
            pathname: '/details',
            state: {
                productData: props.productData,
            }
        });
    }
    return (

        <React.Fragment>
            {/* <NavLink to={detailsPath}> */}
            <div onClick={(e) => { props.placeOrderHandler(orderID); redirect(e) }}>

                <div className="image-wrapper">
                    <div className="image-content" style={{ backgroundImage: `url(${imagePath})` }}></div>
                </div>
                <div className="product-data">
                    <div className="category-container">{imageCategory}</div>
                    <h2>{productName}</h2>
                    <div className="category-container">From</div>
                    <div className="price">{props.productData.minPrice * 1000}</div>
                </div>
                <div className="product-call-to-action">
                    <div className="call-to-action">Buy</div>
                </div>
                {/* </NavLink> */}
            </div>
        </React.Fragment>


    );

};


const mapDispatchToProps = (dispatch) => {
    return {
        placeOrderHandler: (orderId) => dispatch(placeOrder(orderId))
    }
}

export default connect(null, mapDispatchToProps)(Product);
