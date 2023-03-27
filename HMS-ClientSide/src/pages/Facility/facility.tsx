import React, { FC, ReactElement, useState} from "react";
import { Grid, GridItem } from '@chakra-ui/react'
import {Header} from "../../components/header/header";
import EntityList from "../../components/formComponents/ListAllComponent";
import FacilityForm from "../../components/Forms/FacilityForm";

export const Facility: FC = (): ReactElement => {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const handleEditEntity = (id: string) => {
        setSelectedId(id);
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
                <EntityList onEdit={handleEditEntity} endpoint="http://localhost:3300/facilities"/>;
            </GridItem>
            <GridItem rowSpan={2} bg='papayawhip' >
                <FacilityForm  onSave={() => setSelectedId(null)} selectedId={selectedId}/>
            </GridItem>

        </Grid>

    )
};
