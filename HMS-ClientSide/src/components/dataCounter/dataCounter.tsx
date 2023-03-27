import Avatar from "../profile/Avatar/avatar";
import React, { FC, ReactElement } from 'react';
// import {IDataCounter} from "./iterfaces/IDataCounter";
import "./style.sass"

interface IDataCounter {
    count: string | number
    name: string ;
}
export const DataCounter: FC<IDataCounter> = ({count, name}): ReactElement => {

  return (
    <>
      <div className={"counter-container"}>
        <Avatar  name={count}/>
        <h3>
            {name}
        </h3>
      </div>
    </>
  );
};
