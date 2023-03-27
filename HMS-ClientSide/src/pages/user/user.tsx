import React, { FC, ReactElement, useState} from "react";
import { Grid, GridItem } from '@chakra-ui/react'

import EntityList from "../../components/Areas/userArea";

import {Header} from "../../components/header/header";
import RoleForm from "../../components/Forms/RoleForm";
import {DataCounter} from "../../components/dataCounter/dataCounter";
import Signup from "../Signup/Signup";
import {FormProps} from "../../components/interfaces/FormProps";
export const User: FC = (): ReactElement => {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const handleEditRole = (userId: string) => {
        setSelectedId(userId);
    };

    return (
        <Grid
            h='500px'
            templateColumns={'65% 35%'}
            gap={4}
        >
            <GridItem colSpan={2}>
                <Header/>
            </GridItem>
            <GridItem rowSpan={2} bg='papayawhip'>
                <EntityList onEdit={handleEditRole}/>
            </GridItem>
            <GridItem rowSpan={2} bg='papayawhip' >
                <Signup selectedId={selectedId} onSave={() => setSelectedId(null)}/>
                {/*<RoleForm selectedRoleId={selectedRoleId} onSave={() => setSelectedRoleId(null)}/>*/}
            </GridItem>
        </Grid>
    )
};
