import React from 'react';
import { connect } from 'react-redux';
import { Product_filter_size } from './actions/Product_filter_size';

const Filter_size = (props) => {
    return (
        <div>
            <div className="filter_size">
                <div>
                    <label>
                        FILTER BY SIZE
                        <select
                            value={props.size}
                            onChange={(e) => {
                                props.dispatch(Product_filter_size(props.products, e.target.value))
                            }}
                        >
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                        </select>
                    </label>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    products: state.products.items
})

export default connect(mapStateToProps)(Filter_size);