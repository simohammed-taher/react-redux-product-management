import React, { useState } from "react";

function NewProduct(props) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const dispatch = props.dispatch;
    const handleAddProduct = (event) => {
        let product = {
            id: Date.now(),
            name: name,
            price: parseFloat(price),
        };
        setName("");
        setPrice(0);
        dispatch({ type: "addProduct", payload: product });
    };
    return (
        <div className="m-2 p-2 border border-info">
            <input
                className="m-1"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            ></input>
            <input
                type="number"
                className="m-1"
                size={10}
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            ></input>
            <button onClick={handleAddProduct} className="btn btn-sm ms-2 btn-info">
                Add
            </button>
        </div>
    );
}

export default NewProduct;
