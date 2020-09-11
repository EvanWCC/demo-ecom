import React from 'react'
import '../css/EachCategory.css'
import ProductCard from './ProductCard'
import { Paper } from '@material-ui/core'
const EachCategory = ({categoryTitle}) => {
    
    return (
        <Paper>
            <div className="eachCategory">
                <h2>{categoryTitle}</h2>
                <div className="product__cards">
                    <ProductCard picture="https://ae01.alicdn.com/kf/H7b6e9c20917844abaf686a1923f2d8f9W.png" price="US $7.5" />
                    <ProductCard picture="https://ae01.alicdn.com/kf/H77608c3a1218418282b603f3d523721ea.png" price="US $8" />
                    <ProductCard picture="https://ae01.alicdn.com/kf/HTB1_hmeIAyWBuNjy0Fpq6yssXXaL.jpg_350x350.jpg" price="US $8" />
                    <ProductCard picture="https://ae01.alicdn.com/kf/H933c7fc1450646168abc41ec2d76ae30J.jpg_350x350.jpg" price="US $8" />
                    <ProductCard picture="https://ae01.alicdn.com/kf/HTB1RE0VNkvoK1RjSZFDq6xY3pXak.jpg_350x350.jpg" price="US $8" />
                    <ProductCard picture="https://ae01.alicdn.com/kf/H6afde3981de24bd98e0aae8d6bd99fe9x.jpg_350x350.jpg" price="US $8" />
                </div>
            </div>
        </Paper>
    )
}

export default EachCategory
