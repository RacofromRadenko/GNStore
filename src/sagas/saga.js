import { put, call, takeEvery, all, takeLatest } from "redux-saga/effects";
import { PULL_G2A_PRODUCTS, ASYNC_UPDATE_COMPLETE, ASYNC_UPDATE_START, PLACE_ORDER, PULL_ORDER_STATUS, PAY_ORDER, GET_PRODUCT_KEY } from "../actions/constants";
import Axios from 'axios'

function* pullProductsFromApiGenerator(action) {
    yield put({
        type: ASYNC_UPDATE_START
    })
    const productList = yield call(getProductsFromG2AApi, action.payload);
    yield put({
        type: ASYNC_UPDATE_COMPLETE,
        payload: {
            productList: productList.docs,
            currentPage: productList.page,
            totalProductsCount: productList.total,
            priceRange: action.payload.priceRange
        }
    })
}

function* placeOrderApiGenerator(action) {
    yield put({
        type: ASYNC_UPDATE_START
    });
    const order = yield call(getPlaceOrderResponse, action.payload);
    console.log('ODJE POST RESPOSE', order)
    yield put({
        type: ASYNC_UPDATE_COMPLETE,
        payload: {
            activeProduct: order.data
        }
    })
}

function* pullOrderStatusApiGenerator(action) {
    yield put({
        type: ASYNC_UPDATE_START
    });
    const statusResponse = yield call(getPullOrderStatusResponse, action.payload);
    yield put({
        type: ASYNC_UPDATE_COMPLETE,
        payload: {
            activeProduct: Object.assign({}, action.activeProduct, {
                status: statusResponse.data.status
            })

        }
    })
}

function* payOrderApiGenerator(action) {
    yield put({
        type: ASYNC_UPDATE_START
    });
    const paymentResponse = yield call(getPayOrderStatusResponse, action.payload);
    yield put({
        type: ASYNC_UPDATE_COMPLETE,
        payload: {
            activeProduct: Object.assign({}, action.activeProduct, {
                status: paymentResponse.status,
                tnansactionId: paymentResponse.transaction_id
            })

        }
    })
}

function* getProductKeyApiGenerator(action) {
    yield put({
        type: ASYNC_UPDATE_START
    });
    const getCodeResponse = yield call(getProductKeyResponse, action.payload);
    console.log(getCodeResponse);
    yield put({
        type: ASYNC_UPDATE_COMPLETE,
        payload: {
            activeProduct: Object.assign({}, action.activeProduct, {
                productCode: getCodeResponse
            })

        }
    })
}

// APIs go here

const getProductKeyResponse = (actionPayload) => Axios({
    "async": true,
    "crossDomain": true,
    "url": `https://sandboxapi.g2a.com/v1/order/key/${actionPayload.activeProduct.order_id}`,
    "method": "GET",
    "headers": {
        "Authorization": "qdaiciDiyMaTjxMt, 74026b3dc2c6db6a30a73e71cdb138b1e1b5eb7a97ced46689e2d28db1050875",
        "cache-control": "no-cache",
        "Postman-Token": "c30b589c-0e9c-403b-8edc-fdd0e650712a"
    }
})
    .then((response) => {
        return response.data
    })
    .catch(err => {
        // throw err;
        console.log(err['response'].statusText);
    })

const getPayOrderStatusResponse = (actionPayload) => Axios({
    "async": true,
    "crossDomain": true,
    "url": `https://sandboxapi.g2a.com/v1/order/pay/${actionPayload.activeProduct.order_id}`,
    "method": "PUT",
    "headers": {
        "Authorization": "qdaiciDiyMaTjxMt, 74026b3dc2c6db6a30a73e71cdb138b1e1b5eb7a97ced46689e2d28db1050875",
        "cache-control": "no-cache",
        "Postman-Token": "22ce1078-f96c-4721-b736-d5cbac1fb9e5"
    }
}).then((response) => {
    return response.data
})
    .catch(err => {
        throw err;
    });

const getProductsFromG2AApi = (actionPayload) => Axios({
    "async": true,
    "crossDomain": true,
    "url": `https://sandboxapi.g2a.com/v1/products?minPriceFrom=${actionPayload.priceRange.minPrice}&minPriceTo=${actionPayload.priceRange.maxPrice}&page=${actionPayload.currentPage}`,
    "method": "GET",
    "headers": {
        "Authorization": "qdaiciDiyMaTjxMt, 74026b3dc2c6db6a30a73e71cdb138b1e1b5eb7a97ced46689e2d28db1050875",
        "cache-control": "no-cache",
        "Postman-Token": "4cf398e7-3a20-4853-bc04-437aaf5eadba"
    }
}).then((response) => {
    return response.data
})
    .catch(err => {
        throw err;
    });

const getPlaceOrderResponse = (actionPayload) => Axios({
    "async": true,
    "crossDomain": true,
    "url": "https://sandboxapi.g2a.com/v1/order",
    "method": "POST",
    "headers": {
        "Authorization": "qdaiciDiyMaTjxMt, 74026b3dc2c6db6a30a73e71cdb138b1e1b5eb7a97ced46689e2d28db1050875",
        "Content-Type": "application/json",
        "cache-control": "no-cache",
    },
    "processData": false,
    "data": {
        "product_id": actionPayload.productId,
        "currency": "USD"
    }
})
    .then((response) => {
        return response
    })
    .catch(err => {
        throw err
    });

const getPullOrderStatusResponse = (actionPayload) => Axios({
    "async": true,
    "crossDomain": true,
    "url": `https://sandboxapi.g2a.com/v1/order/details/${actionPayload.activeProduct.order_id}`,
    "method": "GET",
    "headers": {
        "Authorization": "qdaiciDiyMaTjxMt, 74026b3dc2c6db6a30a73e71cdb138b1e1b5eb7a97ced46689e2d28db1050875",
        "cache-control": "no-cache",
    }
}).then((response) => {
    return response
})
    .catch(err => {
        throw err
    })

//-----------------Export-------------------------//

export function* sagaWatchers() {
    yield all([
        takeLatest(PULL_G2A_PRODUCTS, pullProductsFromApiGenerator),
        takeEvery(PLACE_ORDER, placeOrderApiGenerator),
        takeEvery(PULL_ORDER_STATUS, pullOrderStatusApiGenerator),
        takeEvery(PAY_ORDER, payOrderApiGenerator),
        takeEvery(GET_PRODUCT_KEY, getProductKeyApiGenerator)

    ])
}




