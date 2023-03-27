import Profile from "../profile/profile";
import React, {useState, useEffect, FC} from "react";
import {Button, Table, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import "../formComponents/ListAllstyle.sass";
import axios from "axios";
import {toast} from "react-toastify";

interface Entity {
    id: string;
    firstname: string;
    lastname: string;
    email: string;

    role: {
        roleId: string;
        name: string;
    }
}

interface ColumnConfig {
    key: keyof Entity;
    label: string;
}

interface Props {
    data: Entity[];
    columns: ColumnConfig[];
    onEdit: (id: string) => void;
    onDeleteRole: (id: string) => void;
}

interface ListProps {
    onEdit: (id: string) => void;
}

const EntityList = ({ onEdit }: ListProps) => {

    const [data, setData] = useState<Entity[]>([]);
    const [editingItemId, setEditingItemId] = useState<string | null>(null);

    const onEditItem = (id: string) => {
        setEditingItemId(id);
    };

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await axios.get("http://localhost:3300/users");
        if(response.status === 200){
            setData(response.data);
            console.log(response.data);
        }
    }

    const onDeleteRole = async (id: string) => {
        if(window.confirm("Are you sure you want to delete this user")){
            const response = await axios.delete(`http://localhost:3300/users/${id}`);
            if(response.status === 200){
                toast.success(response.data);
                getUsers();
            }
        }
    }

    console.log("data " + data);

    const [editId, setEditId] = useState<string | null>(null);

    const handleEdit = (id: string) => {
        setEditId(id);
    };

    // const EntityTable: FC<Props> = ({ data, columns, onEdit, onDeleteRole }) => {
    //     return (
    //         <TableContainer>
    //             <Table size={"sm"}>
    //                 <Thead bg={"burlywood"} className={"thead"}>
    //                     <Tr className={"tr"}>
    //                         {columns.map((column) => (
    //                             <Th key={column.key} className={"th"}>
    //                                 {column.label}
    //                             </Th>
    //                         ))}
    //                         <Th className={"th"}>Actions</Th>
    //                     </Tr>
    //                 </Thead>
    //                 <Tbody>
    //                     {data.map((entity) => (
    //                         <Tr className={"tr"} key={entity.id}>
    //                             {columns.map((column) => (
    //                                 <Td key={column.key} className={"td"}>
    //                                     {entity.role ? entity.role.name : "No role assigned"}
    //                                     {/*{column.key === "role"*/}
    //                                     {/*    ? entity[column.key]?.name ?? "No role assigned"*/}
    //                                     {/*    : entity[column.key]}*/}
    //                                 </Td>
    //                             ))}
    //                             <Td className={"td"}>
    //                                 <Button
    //                                     onClick={() => onEdit(entity.id)}
    //                                     bg={"darkcyan"}
    //                                     className={"edit"}
    //                                 >
    //                                     Edit
    //                                 </Button>
    //                             </Td>
    //                             <Td className={"td"}>
    //                                 <Button
    //                                     onClick={() => onDeleteRole(entity.id)}
    //                                     bg={"darkred"}
    //                                     className={"delete"}
    //                                 >
    //                                     Delete
    //                                 </Button>
    //                             </Td>
    //                         </Tr>
    //                     ))}
    //                 </Tbody>
    //             </Table>
    //         </TableContainer>
    //     );
    // };

    return (
        <div className={"div-container"}>
            <TableContainer>
                <Table size={"sm"}>
                    <Thead bg={"burlywood"} className={"thead"}>
                        <Tr className={"tr"}>
                            <Th className={"th"}>Firstname</Th>
                            <Th className={"th"}>Lastname</Th>
                            <Th className={"th"}>Email</Th>
                            <Th className={"th"}>Role</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data && data.map((entity) => (
                            <Tr className={"tr"} key={entity.id}>
                                <Td className={"td"}>{entity.firstname}</Td>
                                <Td className={"td"}>{entity.lastname}</Td>
                                <Td className={"td"}>{entity.email}</Td>
                                <Td className={"td"}>{entity.role ? entity.role.name : "No role assigned"}</Td>
                                <Td className={"td"}>
                                    <Button onClick={() => onEdit(entity.id)}  bg={"darkcyan"} className={"edit"}>Edit</Button>
                                </Td>
                                <Td className={"td"}>
                                    <Button onClick={() => onDeleteRole(entity.id)} bg={"darkred"} className={"delete"}>Delete</Button>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>

                </Table>

            </TableContainer>

        </div>

    );
};

export default EntityList;