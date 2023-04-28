import { TRT_TableState } from 'material-react-table';

export type StateRow = {
  defaultValue?: string;
  description?: string;
  link?: string;
  linkText?: string;
  source?: 'MRT' | 'TanStack Table' | 'Material UI' | '';
  stateOption: keyof TRT_TableState;
  type?: string;
};

export const stateOptions: StateRow[] = [
  {
    defaultValue: '{}',
    description:
      'an array of objects with id and value properties, representing the current filter values for each column',
    link: 'https://tanstack.com/table/v8/docs/api/features/filters',
    linkText: 'TanStack Table Filters Docs',
    source: 'TanStack Table',
    stateOption: 'columnFilters',
    type: 'Array<{id: string, value: unknown}>',
  },
  {
    defaultValue: '[]',
    description:
      'an array of strings representing the current order of the table columns',
    link: 'https://tanstack.com/table/v8/docs/api/features/column-ordering',
    linkText: 'TanStack Table Column Ordering Docs',
    source: 'TanStack Table',
    stateOption: 'columnOrder',
    type: 'Array<string>',
  },
  {
    defaultValue: '{ left: [], right: [] }',
    description:
      'an object with left and right properties, each of which is an array of strings representing the columns that are pinned to the left or right side of the table',
    link: 'https://tanstack.com/table/v8/docs/api/features/column-pinning',
    linkText: 'TanStack Table Column Pinning Docs',
    source: 'TanStack Table',
    stateOption: 'columnPinning',
    type: '{ left: Array<string>, right: Array<string> }',
  },
  {
    defaultValue: '{}',
    description:
      'an object mapping column IDs to their current width in pixels',
    link: 'https://tanstack.com/table/v8/docs/api/features/column-sizing',
    linkText: 'TanStack Table Column Sizing Docs',
    source: 'TanStack Table',
    stateOption: 'columnSizing',
    type: 'Record<string, number>',
  },
  {
    defaultValue: '{}',
    description: 'an object containing information about column sizing',
    link: 'https://tanstack.com/table/v8/docs/api/features/column-sizing',
    linkText: 'TanStack Table Column Sizing Docs',
    source: 'TanStack Table',
    stateOption: 'columnSizingInfo',
    type: 'See TanStack Docs',
  },
  {
    defaultValue: '{}',
    description:
      'an object mapping column IDs to a boolean indicating whether the column is currently visible',
    link: 'https://tanstack.com/table/v8/docs/api/features/column-visibility',
    linkText: 'TanStack Table Column Visibility Docs',
    source: 'TanStack Table',
    stateOption: 'columnVisibility',
    type: 'Record<string, boolean>',
  },
  {
    defaultValue: '',
    description: 'a variable representing the currently dragged column',
    link: '',
    linkText: '',
    source: 'MRT',
    stateOption: 'draggingColumn',
    type: 'TRT_Column | null',
  },
  {
    defaultValue: '',
    description: 'a variable representing the currently dragged row',
    link: '',
    linkText: '',
    source: 'MRT',
    stateOption: 'draggingRow',
    type: 'TRT_Row | null',
  },
  {
    defaultValue: '',
    description: 'a variable representing the currently editing cell',
    link: '',
    linkText: '',
    source: 'MRT',
    stateOption: 'editingCell',
    type: 'TRT_Cell',
  },
  {
    defaultValue: '',
    description: 'a variable representing the currently editing row',
    link: '',
    linkText: '',
    source: 'MRT',
    stateOption: 'editingRow',
    type: 'TRT_Row',
  },
  {
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    stateOption: 'columnFilterFns',
    type: '{ [key: string]: TRT_FilterFn }',
  },
  {
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    stateOption: 'globalFilterFn',
    type: 'TRT_FilterFn',
  },
  {
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    stateOption: 'hoveredColumn',
    type: 'TRT_Column | null',
  },
  {
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    stateOption: 'hoveredRow',
    type: 'TRT_Row | null',
  },
  {
    defaultValue: '{}',
    description: '',
    link: 'https://tanstack.com/table/v8/docs/api/features/expanding',
    linkText: 'TanStack Table Expanding Docs',
    source: 'TanStack Table',
    stateOption: 'expanded',
    type: 'Record<string, boolean> | boolean',
  },
  {
    defaultValue: '',
    description: '',
    link: 'https://tanstack.com/table/v8/docs/api/features/filters',
    linkText: 'TanStack Table Filtering Docs',
    source: 'TanStack Table',
    stateOption: 'globalFilter',
    type: 'any',
  },
  {
    defaultValue: '[]',
    description: '',
    link: 'https://tanstack.com/table/v8/docs/api/features/grouping',
    linkText: 'TanStack Table Grouping Docs',
    source: 'TanStack Table',
    stateOption: 'grouping',
    type: 'Array<string>',
  },
  {
    defaultValue: "'comfortable'",
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    stateOption: 'density',
    type: "'comfortable' | 'compact' | 'spacious'",
  },
  {
    defaultValue: 'false',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    stateOption: 'isFullScreen',
    type: 'boolean',
  },
  {
    defaultValue: 'false',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    stateOption: 'isLoading',
    type: 'boolean',
  },
  {
    defaultValue: '{ pageIndex: 0, pageSize: 10 }',
    description: '',
    link: 'https://tanstack.com/table/v8/docs/api/features/pagination',
    linkText: 'TanStack Table Pagination Docs',
    source: 'TanStack Table',
    stateOption: 'pagination',
    type: '{ pageIndex: number, pageSize: number } ',
  },
  {
    defaultValue: '{}',
    description: '',
    link: 'https://tanstack.com/table/v8/docs/api/features/row-selection',
    linkText: 'TanStack Table Row Selection Docs',
    source: 'TanStack Table',
    stateOption: 'rowSelection',
    type: 'Record<string, boolean>',
  },
  {
    defaultValue: 'false',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    stateOption: 'showAlertBanner',
    type: 'boolean',
  },
  {
    defaultValue: 'false',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    stateOption: 'showColumnFilters',
    type: 'boolean',
  },
  {
    defaultValue: 'false',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    stateOption: 'showGlobalFilter',
    type: 'boolean',
  },
  {
    defaultValue: 'false',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    stateOption: 'showProgressBars',
    type: 'boolean',
  },
  {
    defaultValue: 'false',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    stateOption: 'showSkeletons',
    type: 'boolean',
  },
  {
    defaultValue: 'false',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    stateOption: 'showToolbarDropZone',
    type: 'boolean',
  },
  {
    defaultValue: '[]',
    description: '',
    link: 'https://tanstack.com/table/v8/docs/api/features/sorting',
    linkText: 'TanStack Table Sorting Docs',
    source: 'TanStack Table',
    stateOption: 'sorting',
    type: 'Array<{ id: string, desc: boolean }>',
  },
];
