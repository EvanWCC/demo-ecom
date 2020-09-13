import React, {useContext} from 'react'
import { StateContext } from '../context/GlobalState'
import ProductCard from '../component/ProductCard'
const PhonePage = () => {
    const { products } = useContext(StateContext)
    const phone = products.filter((product) => product.category === "phone" );
    
    return (
        <div className="phonePage">
            <div className="product__cards">
                    {
                        phone.map((product) => (
                            <ProductCard product={product} key={product.id} />
                        ))
                    }
            </div>
        </div>
    )
}

export default PhonePage
