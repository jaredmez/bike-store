import React, { useState } from 'react'
import ProductCard from './ProductCard'
import ProductPage from './ProductPage'
import FilterBar from './FilterBar'
import Header from './Header'
import '../styles/shopPage.css'
import data from "../data.js"



function ShopPage() {
    const [showItem, setShowItem] = useState(false)
    const [itemToShowId, setItemToShowId] = useState();

    const togglePage = (itemId) => {
        setShowItem(true);
        setItemToShowId(itemId);
        console.log(`need to toggle item# ${itemId}`)
    }

    if(showItem) {
        return (
            <ProductPage productData={data.find(item => item.id === itemToShowId)} />
        )
    }
    return (
        <div className="shop-page-ctn">
            <h1>SHOPPING PAGE</h1>
            <div className="shop-page-content">
                {/* <FilterBar /> */}
                <div className="product-card-ctn">
                    {data.map(item => 
                    
                        <ProductCard key={item.id} data={item} onClick={togglePage}/>
                    )}
                </div>
            </div>            
        </div>
    )
}

export default ShopPage