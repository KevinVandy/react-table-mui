import { type DropdownOption } from '../types';

export const parseFromValuesOrFunc = <T, U>(
  fn: ((arg: U) => T) | T | undefined,
  arg: U,
): T | undefined => (fn instanceof Function ? fn(arg) : fn);

export const getValueAndLabel = (
  option?: DropdownOption,
): { label: string; value: string } => {
  let label: string = '';
  let value: string = '';
  if (option) {
    if (typeof option !== 'object') {
      label = option;
      value = option;
    } else {
      label = option.label ?? option.text ?? option.value;
      value = option.value ?? label;
    }
  }
  return { label, value };
};

export function reorderArray<T>(
  arr: T[],
  sourceIndex: number,
  destinationIndex: number,
): T[] {
  const reorderedArr = [...arr];
  reorderedArr.splice(
    destinationIndex,
    0,
    reorderedArr.splice(sourceIndex, 1)[0],
  );
  return reorderedArr;
}
