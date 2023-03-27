import React, { FC, ReactElement, useState} from "react";
import { Grid, GridItem } from '@chakra-ui/react'


import {Header} from "../../components/header/header";
import RoleForm from "../../components/Forms/RoleForm";
import {DataCounter} from "../../components/dataCounter/dataCounter";
import EntityList from "../../components/formComponents/ListAllComponent";

export const Role: FC = (): ReactElement => {
    const [selectedRoleId, setSelectedRoleId] = useState<string | null>(null);

    const handleEditRole = (roleId: string) => {
        setSelectedRoleId(roleId);
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
                {/*<EntityList onEdit={handleEditRole}/>*/}
                <EntityList onEdit={handleEditRole} endpoint="http://localhost:3300/roles"/>;
            </GridItem>
            <GridItem rowSpan={2} bg='papayawhip' >
                <RoleForm selectedId={selectedRoleId} onSave={() => setSelectedRoleId(null)}/>
            </GridItem>

        </Grid>

    )
};
