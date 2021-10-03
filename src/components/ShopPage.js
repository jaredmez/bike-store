import React, { useState } from 'react'
import ProductCard from './ProductCard'
import ProductPage from './ProductPage'
//import FilterBar from './FilterBar'
import '../styles/shopPage.css'
import data from "../data.js"
import {Switch, Route, Link, useRouteMatch} from "react-router-dom"




function ShopPage(props) {
    // const [showItem, setShowItem] = useState(false)
    // const [itemToShowId, setItemToShowId] = useState();
    let {path, url} = useRouteMatch();

    return (
        <div className="shop-page-ctn">
            <div className="shop-header">
                <h1>SHOPPING PAGE</h1>

            </div>

            <div className="shop-page-content">
                {/* <FilterBar /> */}
                <div className="product-card-ctn">
                
                <Switch>
                    <Route exact path={path}>
                        {data.map(item => 
                            <Link key={item.name} to={`${url}/${item.id}`} >
                                <ProductCard key={item.id} data={item} />
                            </Link> 
                        )}
                    </Route>
                    <Route path={`${path}/:itemId`}>
                        <ProductPage productData={data} addItem={props.addItem}/>
                    </Route>
                </Switch>

                </div>
            </div>            
        </div>
    )
}

export default ShopPage