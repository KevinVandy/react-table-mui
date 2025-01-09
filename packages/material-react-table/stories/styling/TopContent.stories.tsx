import { type MRT_ColumnDef, MaterialReactTable } from '../../src';
import { faker } from '@faker-js/faker';
import { type Meta } from '@storybook/react';
import Paper from '@mui/material/Paper';

const meta: Meta = {
  parameters: {
    status: {
      type: 'stable',
    },
  },
  title: 'Styling/Top Content Examples',
};

export default meta;

const columns: MRT_ColumnDef<(typeof data)[0]>[] = [
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
    accessorKey: 'state',
    header: 'State',
  },
  {
    accessorKey: 'phoneNumber',
    header: 'Phone Number',
  },
];

const data = [...Array(88)].map(() => ({
  address: faker.location.streetAddress(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  phoneNumber: faker.phone.number(),
  state: faker.location.state(),
}));

export const TopContentWithStaticHeaderDefault = () => (
  <MaterialReactTable
    columns={columns}
    data={data}
    initialState={{ pagination: { pageIndex: 0, pageSize: 25 } }}
    enableTopContent={true}
    renderTopContent={({ table }) => (
      <Paper elevation={3} sx={{ padding: '0.5rem', margin: '0.5rem' }}>
        <h2 style={{ margin: '2rem', textAlign: 'center' }}>
          Total rows: {table.getRowCount()}
        </h2>
      </Paper>
    )}
  />
);

export const TopContentWithStickyHeader = () => (
  <MaterialReactTable
    columns={columns}
    data={data}
    enableStickyHeader
    initialState={{ pagination: { pageIndex: 0, pageSize: 25 } }}
    enableTopContent={true}
    renderTopContent={({ table }) => (
      <Paper elevation={3} sx={{ padding: '0.5rem', margin: '0.5rem' }}>
        <h2 style={{ margin: '2rem', textAlign: 'center' }}>
          Total rows: {table.getRowCount()}
        </h2>
      </Paper>
    )}
  />
);

export const TopContentWithStickyHeaderShorterTable = () => (
  <MaterialReactTable
    columns={columns}
    data={data}
    enableColumnPinning
    enableRowSelection
    enableStickyHeader
    initialState={{ pagination: { pageIndex: 0, pageSize: 25 } }}
    muiTableContainerProps={{ sx: { maxHeight: 400 } }}
    enableTopContent={true}
    renderTopContent={({ table }) => (
      <Paper elevation={3} sx={{ padding: '0.5rem', margin: '0.5rem' }}>
        <h2 style={{ margin: '2rem', textAlign: 'center' }}>
          Total rows: {table.getRowCount()}
        </h2>
      </Paper>
    )}
  />
);

export const TopContentWithHiddenTopToolbar = () => (
  <MaterialReactTable
    columns={columns}
    data={data}
    initialState={{ pagination: { pageIndex: 0, pageSize: 25 } }}
    muiTableContainerProps={{ sx: { maxHeight: 400 } }}
    enableStickyHeader
    enableTopToolbar={false}
    enableTopContent={true}
    renderTopContent={({ table }) => (
      <Paper elevation={3} sx={{ padding: '0.5rem', margin: '0.5rem' }}>
        <h2 style={{ margin: '2rem', textAlign: 'center' }}>
          Total rows: {table.getRowCount()}
        </h2>
      </Paper>
    )}
  />
);
