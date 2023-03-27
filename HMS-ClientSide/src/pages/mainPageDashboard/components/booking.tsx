import React, { useState } from 'react';
import axios from 'axios';
import {RoomDivContainer} from "./RoomDivContainer";

export function BookingForm() {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [availableRooms, setAvailableRooms] = useState([]);
    const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStartDate(event.target.value);
    };

    const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEndDate(event.target.value);
    };

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(startDate);

        // Make an Axios GET request to retrieve available rooms based on selected date range
        // http://localhost:3300/rooms
        // const response = await axios.get(`/api/rooms?start_date=${startDate}&end_date=${endDate}`);
        const response = await axios.get(`http://localhost:3300/bookings/availableRooms/${startDate}/${endDate}`);

        setAvailableRooms(response.data);
    };


    return (
        <form onSubmit={handleFormSubmit}>
        <div className="container-fluid booking pb-5 wow fadeIn" data-wow-delay="0.1s">
            <div className={"container"}>
                <div className="bg-white shadow" style={{ padding: '35px' }}>
                    <div className="row g-2">
                        <div className="col-md-10">
                            <div className="row g-2">
                                <div className="col">
                                    {/*<div style={{ width: '500px' }}>*/}
                                        <div className="date" id="date1" data-target-input="nearest">
                                            {/*<input type="text" className="form-control datetimepicker-input"*/}
                                            {/*       placeholder="Check in" data-target="#date1"*/}
                                            {/*       data-toggle="datetimepicker"/>*/}
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <label htmlFor="start-date" style={{ marginRight: '10px'   }}>Start Date:</label>
                                                <input type="date" name={"startDate"} id="start-date" value={startDate} onChange={handleStartDateChange} />
                                            </div>

                                        </div>
                                    {/*</div>*/}
                                </div>
                                <div className="col">
                                    <div className="date" id="date1" data-target-input="nearest">
                                        {/*<input type="text" className="form-control datetimepicker-input"*/}
                                        {/*       placeholder="Check in" data-target="#date1"*/}
                                        {/*       data-toggle="datetimepicker"/>*/}
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <label htmlFor="end-date" style={{ marginRight: '10px' }}>Start Date:</label>
                                            <input type="date" name={"endDate"} id="end-date" value={endDate} onChange={handleEndDateChange} />
                                        </div>
                                        {/*<label htmlFor="end-date">End Date:</label>*/}
                                        {/*<input type="date" id="end-date" value={endDate} onChange={handleEndDateChange} />*/}

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <button  className="btn btn-primary w-100" type="submit">Check Availability</button>
                            {/*<Button variant="primary" onClick={handleSubmit} className="btn btn-primary w-100">*/}
                            {/*    Submit*/}
                            {/*</Button>*/}
                        </div>
                    </div>
                </div>
            </div>
            {availableRooms.length > 0 ? (
                <ul>
                    <RoomDivContainer title={"THE MET HOTEL"} h1={"Available rooms"} span={""} data={availableRooms}  checkInDate={startDate} checkOutDate={endDate}/>
                </ul>
            ) : (
                <p style={{textAlign:"center"}}>No rooms available for selected dates</p>
            )}
        </div>
        </form>

    );
}
