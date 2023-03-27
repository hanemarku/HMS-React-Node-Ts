import React, {FC, ReactElement, useEffect, useState} from "react";
import "./style.sass";
import {DashboardHeader} from "./components/header";
import {useParams} from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";
import {SubRoomDivContainer} from "./components/subRoomDivComp";
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
    }
    facilities: {
        name: string;
        icon: string;
        id: number;
    }[];
}




const initialBookingState= {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    check_in_date: "",
    check_out_date: "",
    roomId: "",
    specialRequest: ""
}


export const BookingPage: FC = (): ReactElement => {
    const [state, setState] = useState(initialBookingState);


    const { id } = useParams<{ id: string }>();
    const { startDate } = useParams<{ startDate: string }>();
    const { endDate } = useParams<{ endDate: string }>();


    const [room, setRoom] = useState<Entity>();
    // const [data, setData] = useState<Entity[]>([]);



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


    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value });
    };
    const addBooking = async (data: { firstname: string; check_out_date: string | undefined; phone: string; email: string; check_in_date: string | undefined; roomId: string | undefined; lastname: string; specialRequest: string }) => {
        console.log("booking 1: " +data.check_in_date);
        const response = await axios.post("http://localhost:3300/bookings/book", data);
        toast.success(response.data);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("booking 2: " +state
        );
        const data = {
            firstname: state.firstname,
            lastname: state.lastname,
            email: state.email,
            phone: state.phone,
            check_in_date: startDate,
            check_out_date: endDate,
            roomId: id,
            specialRequest: state.specialRequest
        };
        console.log(data);

        if(!state){
            alert("empty fields");
            toast.error("Do not leave blank fields");
        } else{
            addBooking(data);
            window.location.reload();
        }
    };

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
                        <div className="col-lg-6  mt-0">
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
                        <div className="col-lg-6">
                            <div className="wow fadeInUp" style={{animationDelay: "0.2s"}}>
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <InputField type={"name"} id={"name"} label={"Your Name"} placeholder={"Your Name"} onChange={handleChange} name={"firstname"} value={state.firstname} />
                                        <InputField type={"lastname"} id={"lastname"} label={"Your Lastname"} placeholder={"Your Lastname"} onChange={handleChange} name={"lastname"} value={state.lastname}/>
                                        <InputField type={"email"} id={"email"} label={"Your Email"} placeholder={"Your Email"} onChange={handleChange} name={"email"} value={state.email} />
                                        <InputField type={"text"} id={"phone"} label={"Your Phone"} placeholder={"Your Phone"} onChange={handleChange} name={"phone"} value={state.phone}/>

                                        <div className="col-md-6">
                                            <div className="form-floating date" id="date4" data-target-input="nearest">
                                                <input type="text" className="form-control datetimepicker-input" id="checkin" value={startDate} placeholder="Check Out" data-target="#date4" data-toggle="datetimepicker" readOnly={true}/>
                                                <label htmlFor="checkin">Check In</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating date" id="date4" data-target-input="nearest">
                                                <input type="text" className="form-control datetimepicker-input" id="checkout" onChange={handleChange} value={endDate} placeholder="Check Out" data-target="#date4" data-toggle="datetimepicker" readOnly={true}/>
                                                <label htmlFor="checkout">Check Out</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea name={"specialRequest"} className="form-control" placeholder="Special Request" id="message" style={{height: "100px"}} onChange={handleChange} value={state.specialRequest}></textarea>
                                                <label htmlFor="message">Special Request</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">Book Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};



