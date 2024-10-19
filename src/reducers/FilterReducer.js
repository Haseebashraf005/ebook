export const filterReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {


        case "PRODUCT_LIST":
            return { productList: payload.products }

        case "SORT_BY":
            return null

        case "RATINGS":
            return null

        case "BEST_SELLER_ONLY":
            return null

        case "ONLY_IN_STOCK":
            return null

        case "CLEAR-FILTER":
            return null

        default:
            throw new Error("NO CASE FOUND")


    }

}  