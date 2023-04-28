import React, { useMemo } from 'react';
import MaterialReactTable, { type TRT_ColumnDef } from 'material-react-table';
import { Typography } from '@mui/material';
import { data, type Person } from './makeData';

export const Example = () => {
  const columns = useMemo<TRT_ColumnDef<Person>[]>(
    //column definitions...
    () => [
      {
        accessorKey: 'firstName',
        header: 'First Name',
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
      },
      {
        accessorKey: 'address',
        header: 'Address',
      },
      {
        accessorKey: 'city',
        header: 'City',
      },
      {
        accessorKey: 'state',
        header: 'State',
      },
    ],
    [],
    //end
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      //just for demo purposes
      defaultColumn={{
        Cell: ({ renderedCellValue }) => {
          //see how often cells are re-rendered
          // console.info('render cell', cell.id);
          return <>{renderedCellValue}</>;
        },
      }}
      enableDensityToggle={false} //density toggle is not compatible with memoization
      enableHiding={false}
      enableStickyHeader
      initialState={{ pagination: { pageSize: 20, pageIndex: 0 } }}
      memoMode="rows"
      muiTableContainerProps={{ sx: { maxHeight: '500px' } }}
      renderTopToolbarCustomActions={() => (
        <Typography component="span" variant="h4">
          Memoized Rows
        </Typography>
      )}
    />
  );
};

export default Example;
