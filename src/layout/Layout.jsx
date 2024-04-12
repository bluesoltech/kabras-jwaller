import React from 'react'
import Header from '../component/Header'
import Routers from '../routes/Routers'
import Footer from '../component/Footer'

const Layout = () => {
    return (
        <div>
            {/* <Header /> */}
            <main>
                <Routers />
            </main>
            {/* <Footer /> */}
        </div>
    )
}

export default Layout