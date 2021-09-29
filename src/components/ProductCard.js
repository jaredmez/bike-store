import React from "react";

function ProductCard(props) {
    console.log(props)
    const {name, price, picture} = props.data;
    return (
        <div className="product-card">
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>{`$ ${price}`}</p>
        </div>
    )
}

export default ProductCard