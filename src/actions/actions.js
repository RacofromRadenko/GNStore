

import { PULL_G2A_PRODUCTS, PLACE_ORDER, PULL_ORDER_STATUS, PAY_ORDER, GET_PRODUCT_KEY } from "./constants";

export function pullG2AProducts(minPrice, maxPrice, currentPage) {
    return {
        type    : PULL_G2A_PRODUCTS,
        payload : {
            priceRange : {
                minPrice,
                maxPrice
            },
            currentPage
        }
    }
}

export function placeOrder(productId) {
    return {
        type    : PLACE_ORDER,
        payload : {
            productId
        }
    }
}

export function pullOrderStatus(activeProduct) {
    return {
        type    : PULL_ORDER_STATUS,
        payload : {

            activeProduct
        }
    }
}

export function payForOrder(activeProduct) {
    return {
        type    : PAY_ORDER,
        payload : {

            activeProduct
        }
    }
}

export function takeProductCode(activeProduct) {
    return {
        type    : GET_PRODUCT_KEY,
        payload : {

            activeProduct
        }
    }
}
