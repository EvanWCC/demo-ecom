import React, {useContext} from 'react'
import { StateContext } from '../context/GlobalState'
import ProductCard from '../component/ProductCard'
const ElectronicsPage = () => {
    const { products } = useContext(StateContext)
    const electronics = products.filter((product) => product.category === "electronics" );
    
    return (
        <div className="electronics">
            <div className="product__cards">
                    {
                        electronics.map((product) => (
                            <ProductCard product={product} key={product.id} />
                        ))
                    }
            </div>
        </div>
    )
}

export default ElectronicsPage
