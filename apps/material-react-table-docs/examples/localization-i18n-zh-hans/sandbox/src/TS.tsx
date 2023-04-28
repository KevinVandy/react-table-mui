import React from 'react';

//Import Material React Table and its Types
import MaterialReactTable, { type TRT_ColumnDef } from 'material-react-table';

//Import Material React Table Translations
import { TRT_Localization_ZH_HANS } from 'material-react-table/locales/zh-Hans';

//mock data
import { data, type Person } from './makeData';

const columns: TRT_ColumnDef<Person>[] = [
  //column definitions...
  {
    accessorKey: 'firstName',
    header: '名',
  },
  {
    accessorKey: 'lastName',
    header: '姓',
    enableClickToCopy: true,
  },
  {
    accessorKey: 'age',
    header: '年龄',
  },
  //end
];

const Example = () => {
  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableColumnFilterModes
      enableColumnOrdering
      enableEditing
      enablePinning
      enableRowActions
      enableRowSelection
      enableSelectAll={false}
      initialState={{ showColumnFilters: true, showGlobalFilter: true }}
      localization={TRT_Localization_ZH_HANS}
    />
  );
};

//App.tsx or similar
import { createTheme, ThemeProvider, useTheme } from '@mui/material';
import { zhCN } from '@mui/material/locale';

const ExampleWithThemeProvider = () => {
  const theme = useTheme(); //replace with your theme/createTheme
  return (
    //Setting Material UI locale as best practice to result in better accessibility
    <ThemeProvider theme={createTheme(theme, zhCN)}>
      <Example />
    </ThemeProvider>
  );
};

export default ExampleWithThemeProvider;
