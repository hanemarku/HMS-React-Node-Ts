import React, { FC, ReactElement, useState} from "react";
import { Grid, GridItem } from '@chakra-ui/react'


import {Header} from "../../components/header/header";

import {EntityList} from "../../components/Areas/roomArea";
import {RoomForm} from "../../components/Forms/RoomForm";

export const Room: FC = (): ReactElement => {
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
                <EntityList onEdit={handleEditEntity}/>
            </GridItem>
            <GridItem rowSpan={2} bg='papayawhip' >
                <RoomForm selectedId={selectedId} onSave={() => setSelectedId(null)}/>
            </GridItem>
        </Grid>

    )
};
