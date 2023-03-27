import React, {FC, ReactElement, useEffect, useState} from "react";
import "./style.sass";
import {DashboardHeader} from "./components/header";
import {DashboardFooter} from "./components/footer";
import {CarouselComp} from "./components/carousel";
import GlideComponent from "./components/Images_Glide";
import {BookingForm} from "./components/booking";
import {Rooms} from "./components/rooms";

export const MainDashboard: FC = (): ReactElement => {


    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await axios.get('http://localhost:3300/entitiesCount');
    //         setData(response.data);
    //     }
    //     fetchData();
    // }, []);

    return (
          <div className="container-xxl p-0">
              <DashboardHeader/>
              <CarouselComp/>
              <BookingForm />
              <Rooms/>
              {/*<GlideComponent/>*/}
              <DashboardFooter/>
          </div>
    )
};



