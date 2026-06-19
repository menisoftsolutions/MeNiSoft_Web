import Link from "next/link"

export default function Menu() {

    return (
        <>

            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                 {/*<li className="has-dropdown active menu-thumb">
                    <Link href="#">
                        Products
                        <i className="fas fa-angle-down ps-1" />
                    </Link>
                    <ul className="submenu has-homemenu">
                        <li>
                            <div className="homemenu-items">
                                <div className="homemenu">
                                    <div className="homemenu-thumb">
                                        <img src="/assets/img/header/240_300.webp" alt="img" />
                                        <div className="demo-button">
                                            <Link href="" className="theme-btn">
                                                <span>Open Product</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="homemenu-content text-center">
                                        <h4 className="homemenu-title">
                                            Product 1
                                        </h4>
                                    </div>
                                </div>
                                <div className="homemenu">
                                    <div className="homemenu-thumb mb-15">
                                        <img src="/assets/img/header/240_300.webp" alt="img" />
                                        <div className="demo-button">
                                            <Link href="" className="theme-btn">
                                                <span>Open Product</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="homemenu-content text-center">
                                        <h4 className="homemenu-title">
                                            Product 1
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link href="#">
                        Services
                        <i className="fas fa-angle-down ps-1" />
                    </Link>
                    <ul className="submenu">
                        <li><Link href="#">Service 1</Link></li>
                        <li><Link href="#">Service 2</Link></li>
                        <li><Link href="#">Service 3</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li> */}
            </ul>
        </>
    )
}
