import React from 'react'
import '../css/HomePage.css'
import Header from '../component/Header'
import Sidebar from '../component/Sidebar'
import HeaderCarousel from '../component/HeaderCarousel'
import AllCategories from '../component/AllCategories'
const HomePage = () => {
    return (
        <div className="home">
            <Header />
            <div className="home__main">
                <Sidebar />
                <div className="home__center">
                    <HeaderCarousel />
                    <AllCategories />
                </div>
            </div>
        </div>
    )
}

export default HomePage
