import Product_list from "./Product_list";
import Filter_size from "./Filter_size";


export const Product_filter_size = (products, size) => ({
    type: Product_list.Filter_size,
    payload: {
        size: size,
        items: size === "" ? products : products.filter(product => product.size === size)
    }
});