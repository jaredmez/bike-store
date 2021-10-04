import React, {useState} from 'react'
import '../styles/productPage.css'
import {useParams} from 'react-router-dom'

function ProductPage(props) {
    const {itemId} = useParams();
    const itemData = props.productData.find(prod => prod.id === Number(itemId));
    const [orderQty, setOrderQty] = useState(1);

    const qtySelect = (e) => {
        if(e.target.id === 'add-selector' && orderQty < 10) {
            setOrderQty(orderQty + 1);
        } else if (e.target.id === 'sub-selector' && orderQty >1){
            setOrderQty(orderQty - 1);
        }
    }

    return (
        <div className="product-page">
            <div className="img-ctn">
                <img src={itemData.picture} alt="product" />
            </div>
            <div>
                <h2>{itemData.name}</h2>
                <h4>{`$ ${itemData.price}`}</h4>
                <div className="qty-selector-ctn">
                    <button id="sub-selector" onClick={qtySelect}>-</button>
                    <span>{orderQty}</span>
                    <button id="add-selector" onClick={qtySelect}>+</button>
                </div>
                <div className="add-to-cart" onClick={()=>props.addItem(itemData, orderQty)}>Add to Cart</div>
            </div>
            
        </div>
    )
}

export default ProductPage