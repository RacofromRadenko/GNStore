import { ASYNC_UPDATE_COMPLETE, ASYNC_UPDATE_START } from "../actions/constants";

const initialState = {
    priceRange    : {
        minPrice : 0,
        maxPrice : 1000
    },
    totalProductCount:0,
    products      : [],
    activeProduct : {
        currency      : '',
        order_id      : '',
        price         : 0.0,
        status        : '',
        productCode   : '',
        tnansactionId : ''
    },
    page          : 0
}

function index(state = initialState, action) {
    let newState = { ...state };

    switch(action.type) {

        case ASYNC_UPDATE_START:
            return state;
        case ASYNC_UPDATE_COMPLETE:
            return Object.assign({}, state, {
                products      : action.payload.productList || state.products,
                page          : action.payload.currentPage || state.page,
                totalProductCount:action.payload.totalProductsCount || state.totalProductCount,
                activeProduct : Object.assign({}, state.activeProduct, action.payload.activeProduct || state.activeProduct),
                priceRange:Object.assign({},state.priceRange,action.payload.priceRange||state.priceRange)
            });
        default:
            return state
    }

}

export default index
