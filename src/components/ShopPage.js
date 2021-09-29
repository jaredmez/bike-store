import React from 'react'
import ProductCard from './ProductCard'
import FilterBar from './FilterBar'
import Header from './Header'
import '../styles/shopPage.css'
import data from "../data.js"


function ShopPage() {
    console.log(data);
    return (
        <div className="shop-page-ctn">
            <h1>SHOPPING PAGE</h1>
            <div className="shop-page-content">
                {/* <FilterBar /> */}
                <div className="product-card-ctn">
                    {data.map(item => 
                    
                        <ProductCard key={item.id} data={item}/>
                    )}
                </div>
            </div>            
        </div>
    )
}

export default ShopPage