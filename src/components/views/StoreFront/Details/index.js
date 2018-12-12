import React from 'react';
import { connect } from 'react-redux'

const Details = (props) => {
    console.log('active products', props.activeProduct)
    const imagePath = props.location.state.productData.smallImage;
    const productName = props.location.state.productData.name;
    const videoPathURL = props.location.state.productData.videos[0].url;
    const price = props.activeProduct.price;
    console.log('Video path details', videoPathURL)
    console.log('Price', price)

    return (
        <div className="details-container">
            {videoPathURL !== undefined ? (
                <iframe width="960" height="315"
                    title={props.location.state.productData.name}
                    src={videoPathURL.replace('watch', 'embed')}
                />
            ) : null}
            <div className="data-content">
                <div className="image-wrapper">
                    <img src={imagePath} alt={productName} />
                </div>
                <div className="product-info">
                    <h2>{productName}</h2>
                    <div className="price-container">From
                <div className="price">{price * 1000}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};
const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, null)(Details);
