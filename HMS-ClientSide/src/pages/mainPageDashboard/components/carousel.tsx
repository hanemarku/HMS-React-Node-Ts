import React, {FC, ReactElement, useEffect, useState} from "react";

import {Carousel} from "bootstrap";

import c1 from '../img/c-1.jpg';
import c2 from '../img/c-2.jpg';
import c3 from '../img/c-3.jpeg';
import {CarouselItem} from "./carouselItem";

export const CarouselComp:React.FC = ()  => {
    const [activeSlide, setActiveSlide] = useState(0);
    useEffect(() => {
        const headerCarousel = document.getElementById('header-carousel');
        if(headerCarousel !== null){
            const carousel = new Carousel(headerCarousel, {
                interval: 3000,
                wrap: true,
                touch: true,
                keyboard: true,
            });
        }
    }, []);
    return(
        <div className="container-fluid p-0 mb-5">
            <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <CarouselItem btn1={"Our Rooms"} btn2={"Book A Room"} imagesrc={c1} mainclassname={"carousel-item active"} text1={"Luxury Living"} text2={"Discover A Brand THE MET HOTEL"}/>
                    <CarouselItem btn1={"Our Rooms"} btn2={"Book A Room"} imagesrc={c2} mainclassname={"carousel-item"} text1={"Luxury Living"} text2={"Discover A Brand THE MET HOTEL"}/>
                    <CarouselItem btn1={"Our Rooms"} btn2={"Book A Room"} imagesrc={c3} mainclassname={"carousel-item"} text1={"Luxury Living"} text2={"Discover A Brand THE MET HOTEL"}/>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="prev" onClick={() => setActiveSlide(activeSlide === 0 ? 1 : 0)}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="next" onClick={() => setActiveSlide(activeSlide === 0 ? 1 : 0)}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}