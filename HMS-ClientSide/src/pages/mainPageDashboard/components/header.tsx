import React, {FC, ReactElement} from "react";
import "../style.sass";
import {useNavigate} from "react-router-dom";

export const DashboardHeader: FC = (): ReactElement =>{
    const navigate = useNavigate();

    const handleHeader = () => {
        navigate("/");
    };
    const showRooms = () => {
        navigate("/allrooms");
    };
    const handleLogin = () => {
        navigate("/signin");
    };
    return(
        <div>
            <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet"/>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet"/>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/assets/owl.carousel.min.css"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tempusdominus-bootstrap-4/5.1.2/css/tempusdominus-bootstrap-4.min.css"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.0/css/bootstrap.min.css"/>

                <div className="container-fluid  px-0">
                    <div className="row gx-0">
                        <div className="col-lg-3 d-none d-lg-block" style={{backgroundColor: "#eed6af"}}>
                            <a href="" onClick={() => handleHeader()}
                               className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                                <img style={{width: "200px"}} src={"https://logos-download.com/wp-content/uploads/2019/07/The_Met_Hotel_Logo.png"} />
                            </a>
                        </div>
                        <div className="col-lg-9">
                            <div className="row gx-0 bg-white d-none d-lg-flex">
                                <div className="col-lg-7 px-5 text-start">
                                    <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                                        <i className="fa fa-envelope text-primary me-2"></i>
                                        <p className="mb-0">info@example.com</p>
                                    </div>
                                    <div className="h-100 d-inline-flex align-items-center py-2">
                                        <i className="fa fa-phone-alt text-primary me-2"></i>
                                        <p className="mb-0">+355 694 256 24</p>
                                    </div>
                                </div>
                                <div className="col-lg-5 px-5 text-end">
                                    <div className="d-inline-flex align-items-center py-2">
                                        <a className="me-3" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="me-3" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="me-3" href=""><i className="fab fa-linkedin-in"></i></a>
                                        <a className="me-3" href=""><i className="fab fa-instagram"></i></a>
                                        <a className="" href=""><i className="fab fa-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                            <nav style={{backgroundColor: "#eed6af"}} className="navbar navbar-expand-lg  navbar-dark p-3 p-lg-0">
                                <a href="index.html" className="navbar-brand d-block d-lg-none">
                                    <h1 className="m-0 text-primary text-uppercase">Hotelier</h1>
                                </a>
                                <button type="button" className="navbar-toggler" data-bs-toggle="collapse"
                                        data-bs-target="#navbarCollapse">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                    <div className="navbar-nav text-black-50 mr-auto py-0">
                                        <a style={{color: "black"}} onClick={() => handleHeader()} className="nav-item nav-link">Home</a>
                                        <a style={{color: "black"}} onClick={() => handleHeader()} className="nav-item nav-link">About</a>
                                        <a style={{color: "black"}} onClick={() => handleHeader()} className="nav-item nav-link">Services</a>
                                        <a style={{color: "black"}} onClick={() => showRooms()} className="nav-item nav-link active">Rooms</a>
                                    </div>
                                    <a onClick={() => handleLogin()}
                                       className="btn btn-primary rounded-0 py-4 px-md-5 d-none d-lg-block">Staff Login<i className="fa fa-arrow-right ms-3"></i></a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

    )
}