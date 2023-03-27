import React, {createContext, useContext} from 'react';
import { Flex, Grid, Heading, Stack, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { InputControl, SubmitButton } from "formik-chakra-ui";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useSigninUserMutation } from "../../store/api/authApi";
import { useAppDispatch } from "../../store/hook";
import { setUser } from "../../store/state/authSlice";
// import "./signin.sass";
import axios from "axios";
const LOGIN_URL = "http://localhost:3300/user/signin";
import "./signin.sass";

// const initialState={
//   email: "",
//   password: "",
// }

interface AuthContextValue {
  auth: any;
  setAuth: (auth: any) => void;
}

interface AxiosError {
  response?: {
    status: number;
    data: any;
  };
}

const Signin = () => {
  // const [state, setState] = useState(initialState);
  // const { email, password } = initialState;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const AuthContext = createContext<AuthContextValue>({} as AuthContextValue);
  // const { setAuth } = useContext(AuthContext);
  // const [success, setSuccess] = useState(false);

  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  //   const { name, value } = event.target;
  //   setState({ ...state, [name]: value });
  // };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      console.log(email, password);
      const response = await axios.post('http://localhost:3300/user/signin', { email, password });
     console.log(response);
      const { accessToken } = response.data;
      console.log(response.data);
      localStorage.setItem('accessToken', accessToken);
    } catch (error) {
      console.error(error);
    }
    // e.preventDefault();
    // console.log(email, password);
    //
    // try {
    //   const response = await axios.post("http://localhost:3300/user/signin", {email, password}
    //       // JSON.stringify({email, password}),
    //       // {
    //       //   headers: {'Content-Type': 'application/json'},
    //       //   withCredentials: true
    //       // }
    //   );
    //   console.log(JSON.stringify(response?.data));
    //   const accessToken = response?.data?.accessToken;
    //   const roles = response?.data?.roles;
    //
    //   setAuth({email, password, roles, accessToken});
    //   setEmail('');
    //   setPassword('');
    //   setSuccess(true);
    // } catch (err: any) {
    //   if (!err.response) {
    //     console.log("No Server Response");
    //   } else if (err.response.status === 400) {
    //     console.log("Missing Username or Password");
    //   } else if (err.response.status === 401) {
    //     console.log("Unauthorized");
    //   } else {
    //     console.log("Login Failed");
    //   }
    // }
  }
  // const dispatch = useAppDispatch();
  // const [email, setEmail] = useState<string>();
  // const toast = useToast();
  // const navigate = useNavigate();
  // const [signinUser, { data, isLoading, error, isError, isSuccess }] =
  //   useSigninUserMutation();
  // console.log(data);
  // if (isError) {
  //   toast({
  //     title: (error as any).data.message,
  //     status: "error",
  //     duration: 5000,
  //   });
  // }
  // if (isSuccess) {
  //   dispatch(setUser({ token: data.token, name: data.name }));
  //   navigate("/");
  //   localStorage.setItem("token", data.token);
  // }

  // console.log(error);

  return (

      <div className="container-signup">
        {/*<p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>*/}
        <div className="card-signup">
          <div className="card-image">
            <h2 className="card-heading">
              THE MET HOTEL
              <small>Royal Hotel</small>
            </h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="card-form">
              <div className="column">
                <div className="input">
                  <input type="text" className="input-field"
                         name={"email"}
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         required/>
                  <label className="input-label">Email</label>
                </div>
                <div className="input">
                  <input type="password" className="input-field"
                         name={"password"}
                         value={password}
                         onChange={(e) => setPassword(e.target.value)}
                         required/>
                  <label className="input-label">Password</label>
                </div>
              </div>

            </div>
            <div className="action">
              <button  className="action-button">Login</button>
              {/*disabled={!validName || !validPwd || !validMatch ? true : false}*/}
            </div>
          </form>

        </div>
      </div>

  );
};

export default Signin;
