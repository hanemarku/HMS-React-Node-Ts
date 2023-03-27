import { Link } from 'react-router-dom';
import React, {FC, ReactElement, useEffect, useState} from "react";
import { Grid, GridItem } from '@chakra-ui/react'
import "./style.sass";

import {Header} from "../../components/header/header";
import RoleForm from "../../components/Forms/RoleForm";
import {DataCounter} from "../../components/dataCounter/dataCounter";
import axios from "axios";
import Profile from "../../components/profile/profile";
import "./style.sass";
import IconComp from "../../components/iconComp/IconComp";

export const Dashboard: FC = (): ReactElement => {
    const [selectedRoleId, setSelectedRoleId] = useState<string | null>(null);

    const handleEditRole = (roleId: string) => {
        setSelectedRoleId(roleId);
    };

    const [data, setData] = useState<{
        role: { name: string; count: number };
        user: { name: string; count: number };
        room: { name: string; count: number };
        type: { name: string; count: number };

    }>();

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:3300/entitiesCount');
            setData(response.data);
        }
        fetchData();
    }, []);


    return (
        <Grid className={"grid"}
            h='500px'
            templateColumns={'65% 35%'}
              paddingBottom={0}
        >
            <GridItem colSpan={2} paddingBottom={0}>
                <Header/>
            </GridItem>

            <GridItem rowSpan={2} bg='papayawhip' style={{ marginTop: "0px"}}>
                <div className={"dataCounter"}>

                    {data &&
                        Object.entries(data).map(([key, value], index) => {
                            const { count, name } = value;
                            return (
                                <Link to={`/${key}s`} key={index}>
                                    <DataCounter key={index} count={count} name={name} />
                                </Link>
                            );
                        })}
                </div>

            </GridItem>
            <GridItem rowSpan={2} bg='papayawhip' >
                <Profile/>
            </GridItem>

        </Grid>

    )
};



