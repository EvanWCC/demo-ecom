import React, {useContext} from 'react'
import { StateContext } from '../context/GlobalState'
import ProductCard from '../component/ProductCard'
const ComputerPage = () => {
    const { products } = useContext(StateContext)
    const computer = products.filter((product) => product.category === "computer" );
    
    return (
        <div className="computer__page">
            <div className="product__cards">
                    {
                        computer.map((product) => (
                            <ProductCard product={product} key={product.id} />
                        ))
                    }
            </div>
        </div>
    )
}

export default ComputerPage
