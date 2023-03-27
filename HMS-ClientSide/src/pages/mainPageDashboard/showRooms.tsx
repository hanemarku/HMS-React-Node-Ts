import React, {FC, ReactElement, useEffect, useState} from "react";
import "./style.sass";
import {DashboardHeader} from "./components/header";
import {DashboardFooter} from "./components/footer";
import {Rooms} from "./components/rooms";

export const ShowRooms: FC = (): ReactElement => {
    return (
        <div className="container-xxl p-0">
            <DashboardHeader/>
            <Rooms/>
            <DashboardFooter/>
        </div>
    )
};



