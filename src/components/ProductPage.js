import React from 'react'
import '../styles/productPage.css'
import {useParams} from 'react-router-dom'

function ProductPage(props) {
    const {itemId} = useParams();
    const itemData = props.productData.find(prod => prod.id === Number(itemId));

    return (
        <div className="product-page">
            <div className="img-ctn">
                <img src={itemData.picture} alt="product" />
            </div>
            <div>
                <h2>{itemData.name}</h2>
                <h4>{`$ ${itemData.price}`}</h4>
                <div className="qty-selector-ctn">
                    <button>-</button>
                    <input type="number" min="1" max="4"/>
                    <button>+</button>
                </div>
                <div className="add-to-cart" onClick={()=>props.addItem(itemData)}>Add to Cart</div>
            </div>
            
        </div>
    )
}

export default ProductPage