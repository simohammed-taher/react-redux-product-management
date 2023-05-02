import React from 'react';
import { useDispatch } from 'react-redux';
import { checkProduct, deleteProduct } from '../redux/redux';

function ProductItem(props) {
    let product = props.product;
    const dispatch = useDispatch();

    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
                <button
                    onClick={() => {
                        dispatch(checkProduct(product));
                    }}
                    className='btn btn-outline-success'
                >
                    <i
                        className={
                            product.checked ? 'bi bi-check2-circle' : 'bi bi-app'
                        }
                    ></i>
                </button>
            </td>
            <td>
                <button
                    onClick={() => {
                        dispatch(deleteProduct(product));
                    }}
                    className='btn btn-danger'
                >
                    <i className='bi bi-trash'></i>
                </button>
            </td>
        </tr>
    );
}

export default ProductItem;
