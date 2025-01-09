import Box from '@mui/material/Box';
import { parseFromValuesOrFunc } from '../../utils/utils';
import { MRT_TopToolbar } from './MRT_TopToolbar';
import type { MRT_RowData, MRT_TableInstance } from '../../types';

export interface MRT_TopContentProps<TData extends MRT_RowData> {
  table: MRT_TableInstance<TData>;
}

export const MRT_TopContent = <TData extends MRT_RowData>({
  table,
}: MRT_TopContentProps<TData>) => {
  const {
    options: { renderTopContent, enableTopToolbar },
  } = table;
  return (
    <>
      <Box
        sx={() => ({
          position: 'sticky',
          insetInlineStart: 0,
        })}
      >
        {parseFromValuesOrFunc(renderTopContent, { table })}
      </Box>
      {enableTopToolbar && <MRT_TopToolbar table={table} />}
    </>
  );
};
