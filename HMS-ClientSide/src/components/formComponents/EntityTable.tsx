
export const test = () => {
    return
}
// import { FC } from "react";
// import {Button, Table, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
//
// interface ColumnConfig {
//
//     label: string;
// }
//
// interface Props {
//     data: [];
//     columns: ColumnConfig[];
//     onEdit: (id: string) => void;
//     onDeleteRole: (id: string) => void;
// }
//
// export const EntityTable: FC<Props> = ({ data, columns, onEdit, onDeleteRole }) => {
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
//                                     {column.key === "role"
//                                         ? entity[column.key]?.name ?? "No role assigned"
//                                         : entity[column.key]}
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
