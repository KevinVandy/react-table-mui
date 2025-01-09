import TableHead, { type TableHeadProps } from '@mui/material/TableHead';
import { MRT_TableHeadRow } from './MRT_TableHeadRow';
import {
  type MRT_ColumnVirtualizer,
  type MRT_RowData,
  type MRT_TableInstance,
} from '../../types';
import { parseFromValuesOrFunc } from '../../utils/utils';
import { MRT_ToolbarAlertBanner } from '../toolbar/MRT_ToolbarAlertBanner';
import { getCommonToolbarStyles } from '../../utils/style.utils';

export interface MRT_TableHeadProps<TData extends MRT_RowData>
  extends TableHeadProps {
  columnVirtualizer?: MRT_ColumnVirtualizer;
  table: MRT_TableInstance<TData>;
}

export const MRT_TableHead = <TData extends MRT_RowData>({
  columnVirtualizer,
  table,
  ...rest
}: MRT_TableHeadProps<TData>) => {
  const {
    getState,
    options: {
      enableStickyHeader,
      enableTopContent,
      enableTopToolbar,
      layoutMode,
      muiTableHeadProps,
      positionToolbarAlertBanner,
    },
    refs: { tableHeadRef },
  } = table;
  const { isFullScreen, showAlertBanner } = getState();

  const tableHeadProps = {
    ...parseFromValuesOrFunc(muiTableHeadProps, { table }),
    ...rest,
  };

  const stickyHeader = enableStickyHeader || isFullScreen;

  return (
    <TableHead
      {...tableHeadProps}
      ref={(ref: HTMLTableSectionElement) => {
        tableHeadRef.current = ref;
        if (tableHeadProps?.ref) {
          // @ts-expect-error
          tableHeadProps.ref.current = ref;
        }
      }}
      sx={(theme) => ({
        display: layoutMode?.startsWith('grid') ? 'grid' : undefined,
        opacity: 0.97,
        position: stickyHeader ? 'sticky' : 'relative',
        top:
          stickyHeader && layoutMode?.startsWith('grid')
            ? 0
            : enableStickyHeader && enableTopContent && enableTopToolbar
              ? getCommonToolbarStyles({ table, theme }).minHeight
              : undefined,
        zIndex: stickyHeader ? 2 : undefined,
        ...(parseFromValuesOrFunc(tableHeadProps?.sx, theme) as any),
      })}
    >
      {positionToolbarAlertBanner === 'head-overlay' &&
      (showAlertBanner || table.getSelectedRowModel().rows.length > 0) ? (
        <tr
          style={{
            display: layoutMode?.startsWith('grid') ? 'grid' : undefined,
          }}
        >
          <th
            colSpan={table.getVisibleLeafColumns().length}
            style={{
              display: layoutMode?.startsWith('grid') ? 'grid' : undefined,
              padding: 0,
            }}
          >
            <MRT_ToolbarAlertBanner table={table} />
          </th>
        </tr>
      ) : (
        table
          .getHeaderGroups()
          .map((headerGroup) => (
            <MRT_TableHeadRow
              columnVirtualizer={columnVirtualizer}
              headerGroup={headerGroup as any}
              key={headerGroup.id}
              table={table}
            />
          ))
      )}
    </TableHead>
  );
};
