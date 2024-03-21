import Product_list from './Product_list';
import { Product_filter_size } from './Filter_product_size';

const Initial_state= {
    items: Product_list,
    filteredItems: []
}

const product_Reducer = (state = Initial_state, action) => {
    switch (action.type) {

        case Product_list.Product_filter_size:
            return {
                ...state,
                filteredItems: action.payload.items
            }

        default:
            return state;

    }
}
export default product_Reducer;