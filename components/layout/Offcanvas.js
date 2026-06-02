'use client'
import Link from "next/link"
import MobileMenu from "./MobileMenu"

export default function Offcanvas({
    isOffCanvas,
    handleOffCanvas,
}) {
    return (
        <>
            <div className="fix-area">
                <div className={`offcanvas__info ${isOffCanvas ? "info-open" : ""}`}>
                    <div className="offcanvas__wrapper">
                        <div className="offcanvas__content">
                            <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                                <div className="offcanvas__logo">
                                    <Link href="/">
                                        <img src="/assets/img/logo/logo.webp" alt="logo-img" />
                                    </Link>
                                </div>
                                <div className="offcanvas__close" onClick={handleOffCanvas}>
                                    <button>
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                            </div>
                            {/* <p className="text d-none d-lg-block">
                                Nullam dignissim, ante scelerisque the  is euismod fermentum odio sem semper the is erat, a feugiat leo urna eget eros. Duis Aenean a imperdiet risus.
                            </p> */}
                            <div className="d-none d-md-block d-lg-none">
                                <MobileMenu />
                            </div>

                            <div className="offcanvas__contact">
                                <h4>Contact Info</h4>
                                <ul>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon">
                                            <i className="fal fa-map-marker-alt" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <Link target="_blank" href="#">Chennai, Tamil Nadu</Link>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="fal fa-envelope" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <Link href="/mailto:info@menisoft.in"><span className="mailto:info@menisoft.in">info@menisoft.in</span></Link>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="fal fa-clock" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <Link target="_blank" href="#">Monday - friday, 09am - 05pm</Link>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="far fa-phone" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <Link href="/tel:+9942222492">+91 994 222 2492</Link>
                                        </div>
                                    </li>
                                </ul>
                                <div className="header-button mt-4">
                                    <Link href="/contact" className="theme-btn text-center">
                                        <span>get A Quote<i className="fa-brands fa-whatsapp" /></span>
                                    </Link>
                                </div>
                                <div className="social-icon d-flex align-items-center">
                                    <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                    <Link href="#"><i className="fab fa-twitter" /></Link>
                                    <Link href="#"><i className="fab fa-youtube" /></Link>
                                    <Link href="#"><i className="fab fa-linkedin-in" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`offcanvas__overlay ${isOffCanvas ? "overlay-open" : ""}`} onClick={handleOffCanvas} />
        </>

    )
}
