import React from "react";

function ProductCard(props) {
    const {name, price, picture, id} = props.data;
    return (
        <div className="product-card" onClick={() => props.onClick(id)}>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>{`$ ${price}`}</p>
        </div>
    )
}

export default ProductCard