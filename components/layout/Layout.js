
'use client'
import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import Breadcrumb from './Breadcrumb'
// import MouseCursor from "./MouseCursor"
import Offcanvas from "./Offcanvas"
// import Search from "./Search"
// import Footer1 from './footer/Footer1'
import Footer2 from './footer/Footer2'
// import Footer3 from "./footer/Footer3"
// import Footer4 from "./footer/Footer4"
// import Header1 from "./header/Header1"
// import Header2 from './header/Header2'
import Header3 from "./header/Header3"
// import Header4 from "./header/Header4"

export default function Layout({ onePageNav, breadcrumbTitle, children }) {
    const [scroll, setScroll] = useState(0)

    const [isOffCanvas, setOffCanvas] = useState(false)
    const handleOffCanvas = () => setOffCanvas(!isOffCanvas)

    // const [isSearch, setSearch] = useState(false)
    // const handleSearch = () => setSearch(!isSearch)

    useEffect(() => {
        const WOW = require('wowjs')
        window.wow = new WOW.WOW({
            live: false
        })
        window.wow.init()

        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    }, [])
    return (
        <>
            {/* <MouseCursor /> */}
            <Offcanvas isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} />

            <Header3 scroll={scroll} onePageNav={onePageNav} isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} />
            {/* <Search isSearch={isSearch} handleSearch={handleSearch} /> */}


            {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

            {/* {children} */}

            < Footer2 />

            <BackToTop />
        </>
    )
}
