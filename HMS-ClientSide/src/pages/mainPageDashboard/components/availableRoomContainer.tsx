import React from 'react';
import { useNavigate } from 'react-router-dom';
interface Entity {
    id: string;
    number: string;
    price: number;
    size: number;
    availability: boolean;
    reserved:Date;
    main_image: string;
    type: {
        roleId: string;
        name: string;
    }
    facilities: Facility[];
}

interface Facility {
    id: string;
    name: string;
}
type RoomListProps = {
    title: string;
    h1:string;
    span:string;
    data: Entity[];

};


export const RoomDivContainer:React.FC<RoomListProps> = ({data, title, h1 , span})  => {
    const navigate = useNavigate();

    const handleBookNow = (roomId: string) => {
        navigate(`/book-now/${roomId}`);
    };
    return(
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title text-center text-primary text-uppercase">{title}</h6>
                    <h1 className="mb-5">{h1} <span className="text-primary text-uppercase">{span}</span>
                    </h1>
                </div>
                <div className="row g-4">
                    {data && data.map((entity) => (
                        <div  key={entity.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div style={{backgroundColor: "white"}} className="room-item shadow rounded overflow-hidden">
                                <div className="position-relative">
                                    <img className="img-fluid" src={entity.main_image} alt=""/>
                                    <small
                                        className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">${entity.price}/Night</small>
                                </div>
                                <div className="p-4 mt-2">
                                    <div className="d-flex justify-content-between mb-3">
                                        Type: <h5 className="mb-0">{entity.type.name}</h5>
                                        <div className="ps-2">
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-3">
                                        {entity.facilities.map((facility) => (
                                            <small key={entity.id} className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2"></i>{facility.name}</small>
                                        ))}

                                    </div>
                                    <p className="text-body mb-3">Size {entity.size}  m<sup>2</sup></p>
                                    <div className="d-flex justify-content-between">
                                        <a className="btn btn-sm btn-primary rounded py-2 px-4" href="">View
                                            Detail</a>
                                        <a
                                            className="btn btn-sm btn-dark rounded py-2 px-4"
                                            onClick={() => handleBookNow(entity.id)}
                                        >
                                            Book Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}
