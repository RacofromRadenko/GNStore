import React from 'react';
import { connect } from 'react-redux';
import Product from "./Product";


const StoreFront = (props) => {
    return (
        <div className="page-container productList">
            {props.products.map((element, key) => {
                return (

                    <div className="gc-card" key={element.id} id={element.id}>
                        <Product productData={element} {...props} />

                    </div>

                )
            })}
            {/*<div className="gc-card"></div>*/}
            {/*<div className="gc-card"></div>*/}
            {/*<div className="gc-card"></div>*/}
            {/*<div className="gc-card"></div>*/}
        </div>

    );
};

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(StoreFront);