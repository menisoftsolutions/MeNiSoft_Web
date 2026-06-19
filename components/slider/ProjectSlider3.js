
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: false,
    breakpoints: {
        1199: {
            slidesPerView: 4,
        },
        991: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 2,
        },
        650: {
            slidesPerView: 2,
        },

        575: {
            slidesPerView: 1,
        },

        0: {
            slidesPerView: 1,
        },
    },
}
export default function ProjectSlider3() {
    return (
        <>

            <div className="swiper project-slider-3">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                    <SwiperSlide>
                        <div className="project-items style-2">
                            <div className="project-image">
                                <img src="/assets/img/project/08.jpg" alt="project-img" />
                                <div className="project-content">
                                    <p>Technology</p>
                                    <h4>
                                        <Link href="/project-details">Menigallery (Complete Studio app)</Link>
                                    </h4>
                                    <Link href="/project-details" className="arrow-icon-2">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-items style-2">
                            <div className="project-image">
                                <img src="/assets/img/project/08.jpg" alt="project-img" />
                                <div className="project-content">
                                    <p>Coming Soon</p>
                                    <h4>
                                        <Link href="/project-details">School Bus Tracking</Link>
                                    </h4>
                                    <Link href="/project-details" className="arrow-icon-2">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}
