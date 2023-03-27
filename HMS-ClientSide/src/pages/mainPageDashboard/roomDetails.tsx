import React, {FC, ReactElement, useEffect, useState} from "react";
import "./style.sass";
import {DashboardHeader} from "./components/header";
import {useParams} from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";
import {InputField} from "./components/InputField";

interface Entity {
    id: string;
    number: string;
    price: number;
    size: number;
    // main_image: string;
    main_image?: string;
    type: {
        roleId: string;
        name: string;
        description: string;
    }
    facilities: {
        name: string;
        icon: string;
        id: number;
    }[];
}



export const RoomDetails: FC = (): ReactElement => {
    const { id } = useParams<{ id: string }>();
    const [room, setRoom] = useState<Entity>();


    useEffect(() => {

        const getRoom = async () => {
            const response = await axios.get(`http://localhost:3300/rooms/${id}`);
            if(response.status === 200){
                console.log(response.data);
                setRoom(response.data);
                // setData(response.data);
            }
        }

        if (id !== null) {
            getRoom();
        }
    }, [id]);



    return (
        <div className="container-xxl p-0">
            <DashboardHeader/>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" style={{animationDelay: "0.1s"}}>
                        <h6 className="section-title text-center text-primary text-uppercase">Room Booking</h6>
                        <h1 className="mb-5">Book A <span className="text-primary text-uppercase">Luxury Room</span></h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-12  mt-0">
                            <div className="container">
                                <div key={room?.id} className="col" data-wow-delay="0.1s">
                                    <div style={{backgroundColor: "white"}} className="room-item rounded overflow-hidden">
                                        <div className="position-relative">
                                            <img className="img-fluid" src={room?.main_image} alt=""/>
                                            <small
                                                className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">${room?.price}/Night</small>
                                        </div>
                                        <div className="p-4 mt-2">
                                            <div className="d-flex justify-content-between mb-3">
                                                Type: <h5 className="mb-0">{room?.type.name}</h5>
                                                <p>{room?.type.description}</p>
                                                <div className="ps-2">
                                                    <small className="fa fa-star text-primary"></small>
                                                    <small className="fa fa-star text-primary"></small>
                                                    <small className="fa fa-star text-primary"></small>
                                                    <small className="fa fa-star text-primary"></small>
                                                    <small className="fa fa-star text-primary"></small>
                                                </div>
                                            </div>
                                            <div className="d-flex mb-3">
                                                {room?.facilities.map((facility) => (
                                                    <small key={facility?.id} className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2"></i>{facility?.name}</small>
                                                ))}

                                            </div>
                                            <p className="text-body mb-3">Size {room?.size}  m<sup>2</sup></p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};



