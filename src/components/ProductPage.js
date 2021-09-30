import React from 'react'
import '../styles/productPage.css'

function ProductPage(props) {
    return (
        <div className="product-page">
            <div className="img-ctn">
                <img src={props.productData.picture} alt="product" />
            </div>
            <div>
                <h2>{props.productData.name}</h2>
                <div className="qty-selector-ctn">
                    <button>-</button>
                    <input type="number" min="1" max="4"/>
                    <button>+</button>
                </div>
                <div className="add-to-cart">Add to Cart</div>
            </div>
            
        </div>
    )
}

export default ProductPage