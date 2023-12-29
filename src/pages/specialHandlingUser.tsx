import * as React from 'react';

import {
    GridRowsProp,
    GridColDef,
} from '@mui/x-data-grid';
import {
    randomTraderName,
    randomId,
} from '@mui/x-data-grid-generator';
import TableCrud from "./TableCrud.tsx";

const initialRows: GridRowsProp = [
    {
        id: randomId(),
        name: randomTraderName(),
    },
    {
        id: randomId(),
        name: randomTraderName(),
    },
    {
        id: randomId(),
        name: randomTraderName(),
    },
    {
        id: randomId(),
        name: randomTraderName(),
    },
    {
        id: randomId(),
        name: randomTraderName(),
    },
];

const columns: GridColDef[] = [
    {
        field: 'name',
        headerName: 'Name',
        width: 180,
        editable: true
    },
    {
        field: 'id',
        headerName: 'Advisor Id',
        width: 300,
        align: 'left',
        headerAlign: 'left',
        editable: true
    }
];

export default function SpecialHandlingUser() {
    return <TableCrud columns1={columns} initialRows={initialRows}>
    </TableCrud>;
}

