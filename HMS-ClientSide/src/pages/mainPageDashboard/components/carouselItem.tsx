import React, {FC, ReactElement} from "react";
import {FormProps} from "../../../components/interfaces/FormProps";

interface Props {
    mainclassname: string;
    imagesrc: string;
    text1: string;
    text2:string;
    btn1:string;
    btn2:string;
}

export const CarouselItem:React.FC<Props> = ({mainclassname, imagesrc, text2, text1, btn2, btn1})  => {
    return(
        <div className={mainclassname}>
            <img className="w-100" src={imagesrc} alt="Image" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{maxWidth: "700px"}}>
                    <h6 style={{color: "black"}} className="section-title text-black text-uppercase mb-3 animated slideInDown">{text1}</h6>
                    <h1 style={{color: "black"}} className="display-3 text-black mb-4 animated slideInDown">{text2}</h1>
                    <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">{btn1}</a>
                    <a href="" className="btn btn-light py-md-3 px-md-5 animated slideInRight">{btn2}</a>
                </div>
            </div>
        </div>
    )
}