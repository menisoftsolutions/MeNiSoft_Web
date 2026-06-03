import Link from "next/link"
import Menu from "../Menu"
import OnePageNav from "../OnePageNav"

export default function Header3({
    scroll,
    handleOffCanvas,
    handleSearch,
    onePageNav
}) {
    return (
        <>

            <header>
                <div className="header-top-section top-style-3">
                    <div className="container">
                        <div className="header-top-wrapper">
                            <ul className="contact-list">
                                <li>
                                    <i className="far fa-envelope" />
                                    <a href="mailto:info@menisoft.com" className="link">info@menisoft.com</a>
                                </li>
                                <li>
                                    <i className="fa-solid fa-phone-volume" />
                                    <a href="tel:+919942222492">+91 994 222 2492</a>
                                </li>
                            </ul>
                            <div className="top-right">
                                <div className="social-icon d-flex align-items-center">
                                    <span>Follow Us:</span>
                                    <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                    <Link href="#"><i className="fab fa-whatsapp" /></Link>
                                    <Link href="#"><i className="fa-brands fa-linkedin-in" /></Link>
                                    <Link href="#"><i className="fa-brands fa-youtube" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="header-sticky" className={`header-3 ${scroll ? "sticky" : ""}`}>
                    <div className="plane-shape">
                        <img src="/assets/img/plane.png" alt="shape-img" />
                    </div>
                    <div className="container">
                        <div className="mega-menu-wrapper">
                            <div className="header-main">
                                <div className="header-left">
                                    <div className="logo">
                                        <Link href="/" className="header-logo">
                                            <img width={210} src="/assets/img/logo/logo_blk.webp" alt="logo-img" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="header-right d-flex justify-content-end align-items-center">
                                    <div className="mean__menu-wrapper">
                                        <div className="main-menu">
                                            <nav id="mobile-menu">
                                                <Menu />
                                            </nav>
                                        </div>
                                    </div>
                                    {/* <a onClick={handleSearch} className="search-trigger search-icon"><i className="fal fa-search" /></a> */}
                                    <div className="header-button">
                                        <Link href="" className="theme-btn bg-white">
                                            <span>
                                                What'sApp
                                                <i className="fab fa-whatsapp" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="header__hamburger d-lg-none my-auto">
                                        <div className="sidebar__toggle" onClick={handleOffCanvas}>
                                            <i className="fas fa-bars" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
