import React, {useEffect, useState} from 'react';
import "./signup.sass";
import axios from "axios";
import {toast} from "react-toastify";
import Dropdown from "../../components/dropdownComp/dropdown";
import {FormProps} from "../../components/interfaces/FormProps";
import {useParams} from "react-router-dom";
import TextComp from "../../components/fieldComponents/textComp";
import SelectOption from "../../components/inputComponents/selectOption";



const initialState={
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    roleId: ""

}

interface Entity {
    id: number;
    name: string;
    description: string;
}

const Signup:React.FC<FormProps> = ({ selectedId , onSave})  => {

    const [state, setState] = useState(initialState);
    const { firstname, lastname, email, password, roleId } = initialState;
    // const [roleId, setRoleId] = useState("");
    const [roleList, setRoleList] = useState([{"name": " ", "id":""}]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value });
    };

    useEffect(() => {

        const getUser = async () => {
            const response = await axios.get(`http://localhost:3300/users/${selectedId}`);
            if(response.status === 200){
                console.log(response.data);
                setState(response.data);
                // setData(response.data);
            }
        }

        if (selectedId !== null) {
            getUser();
        }
    }, [selectedId]);

    // const RoleSelect = () => {
        useEffect(() => {
            axios.get('http://localhost:3300/roles')
                .then(response => setRoleList(response.data))
                .catch(error => console.log(error));
        }, []);

    // }



    const addUser = async (data: {firstname: string; lastname: string; email:string; password:string; roleId: string}) => {
        console.log(data);
        const response = await axios.post("http://localhost:3300/users", data);
        toast.success(response.data);
    }

    const updateUser = async (data: { firstname: string, lastname: string, email: string, password: string, roleId: string}, id: string | null) => {
        console.log(data);
        const response = await axios.put(`http://localhost:3300/users/${id}`, data);
        toast.success(response.data);
    }

    const getSingleUser = async (id: string | null) => {
        const response = await axios.get(`http://localhost:3300/users/${id}`);
        if(response.status === 200){
            toast.success(response.data);
            setState({...response.data[0]});
        }
    }

    const {id} = useParams();
    useEffect(() => {
        if(id){
            getSingleUser(id);
        }
    }, [id])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(state);
        // onSave(role);
        if(!state){

            alert("empty fields");
            toast.error("Do not leave blank fields");
        } else{
            // console.log("name: " + name);
            // alert(name);
            // alert(selectedRoleId);
            if(!selectedId){
                // alert("add");
                addUser(state)
            }else{
                // alert("edit");
                console.log(state);
                // alert(selectedRoleId);
                updateUser(state, selectedId)
                console.log(state);
            }

        }
        window.location.reload()
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.value });
    };

    return (
      <div className="container-signup">
          {/*<p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>*/}
          <div className="card-signup">
              <div className="card-image">
                  <h2 className="card-heading">
                      <TextComp text={selectedId === null ? 'Add User' : 'Edit User'} />
                  </h2>
              </div>

              <form onSubmit={handleSubmit}>
                  <div className="card-form">
                      <div className="column">
                          <div className="input">
                              <input type="text" className="input-field"
                                     onChange={handleInputChange}
                                     name={"firstname"}
                                     value={state.firstname}
                                     required/>
                              <label className="input-label">Name</label>
                          </div>
                          <div className="input">
                              <input type="text" className="input-field"
                                     name={"email"}
                                     value={state.email}
                                     onChange={handleInputChange}
                                     required/>
                              <label className="input-label">Email</label>
                          </div>
                          <div className="input">
                              <input type="password" className="input-field"
                                     name={"password"}
                                     // value={state.password}
                                     onChange={handleInputChange}/>
                              <label className="input-label">Password</label>
                          </div>
                      </div>
                      <div className={"column"}>
                          <div className="input">
                              <input type="text" className="input-field"
                                     name={"lastname"}
                                     value={state.lastname}
                                     onChange={handleInputChange}
                                     required/>
                              <label className="input-label">Lastname</label>
                          </div>
                          <div className={"input"}>
                              <SelectOption name={"roleId"} value={state.roleId} onChange={handleInputChange} entityList={roleList} className={"form-control-select"} />
                          </div>
                          <div className="input">
                              <input type="password" className="input-field"/>
                              <label className="input-label">Confirm Password</label>
                          </div>
                      </div>

                  </div>
                      <div className="action">
                          <input className="action-button" type={"submit"} value={selectedId === null ? 'Add User' : 'Edit User'}/>

                          {/*disabled={!validName || !validPwd || !validMatch ? true : false}*/}
                      </div>


              </form>
              <div className="card-info">
                  <p>By signing up you are agreeing to our <a href="#">Terms and Conditions</a></p>
              </div>
          </div>
      </div>

  );
};

export default Signup;
