import { Button, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import axios from "axios";
import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";

interface Entity {
    id: string;
    name: string;
    description: string;
}

interface EntityListProps {
    onEdit: (id: string) => void;
    endpoint: string;
}

const EntityList = ({ onEdit, endpoint }: EntityListProps) => {
    const [data, setData] = useState<Entity[]>([]);
    const [editingItemId, setEditingItemId] = useState<string | null>(null);

    const onEditItem = (id: string) => {
        setEditingItemId(id);
    };

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const response = await axios.get(endpoint);
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const onDeleteItem = async (id: string) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            try {
                const response = await axios.delete(`${endpoint}/${id}`);
                toast.success(response.data);
                getData();
            } catch (error) {
                console.log(error);
            }
        }
    };

    const handleEdit = (id: string) => {
        setEditingItemId(id);
    };

    return (
        <div className={"div-container"}>
            <TableContainer>
                <Table size={"sm"}>
                    <Thead bg={"burlywood"} className={"thead"}>
                        <Tr className={"tr"}>
                            <Th className={"th"}>Name</Th>
                            <Th className={"th"}>Description</Th>
                            <Th className={"th"}>Edit</Th>
                            <Th className={"th"}>Delete</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data && data.map((entity) => (
                            <Tr className={"tr"} key={entity.id}>
                                <Td className={"td"}>{entity.name}</Td>
                                <Td className={"td"}>{entity.description}</Td>
                                <Td className={"td"}>
                                    <Button onClick={() => onEdit(entity.id)}  bg={"darkcyan"} className={"edit"}>Edit</Button>
                                </Td>
                                <Td className={"td"}>
                                    <Button onClick={() => onDeleteItem(entity.id)} bg={"darkred"} className={"delete"}>Delete</Button>
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
