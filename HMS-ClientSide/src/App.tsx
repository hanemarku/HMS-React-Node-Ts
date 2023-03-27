import React, {FC, ReactElement} from 'react';

import {Dashboard} from "./pages/adminDashboard/dashboard";
import {MainDashboard} from "./pages/mainPageDashboard/dashboard";

import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
import Error404 from "./pages/Error404/Error404";
import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";
import {Role} from "./pages/role/role";
import {User} from "./pages/user/user";
import {Type} from "./pages/type/type";
import {Room} from "./pages/room/room";
import {BookingPage} from "./pages/mainPageDashboard/BookingForm";
import {RoomDetails} from "./pages/mainPageDashboard/roomDetails";
import {ShowRooms} from "./pages/mainPageDashboard/showRooms";
import {Facility} from "./pages/Facility/facility";
const App:FC = (): ReactElement => {
  const token = localStorage.getItem("token");
  return(
      <Router>
        <Routes>
          <Route
            path="/admin"
            element={<Dashboard />}
          />
          <Route
            path="/signin"
            element={ <Signin /> }
          />
            <Route
                path="/roles"
                element={<Role />}
            />
            <Route
                path="/facilities"
                element={<Facility />}
            />
            <Route
                path="/types"
                element={<Type />}
            />
            <Route
                path="/users"
                element={<User />}
            />
            <Route
                path="/rooms"
                element={<Room />}
            />

            <Route
                path="/"
                element={<MainDashboard/>}
            />

            <Route
                path="/book-now/:id/:startDate/:endDate"
                element={<BookingPage/>}
            />

            <Route
                path="/room-details/:id"
                element={<RoomDetails/>}
            />

            <Route
                path="/allrooms"
                element={<ShowRooms/>}
            />

          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    //   <ThemeProvider theme={customTheme}>
    //       <Header/>
    //       <CssBaseline/>
    //       <Dashboard/>
    //   </ThemeProvider>
      
      );
}

export default App;
