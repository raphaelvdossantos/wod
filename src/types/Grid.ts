import React from 'react';

export interface GridConfig<T> {
  defaultComponent?: React.FC<T>;
  defaultProps?: Partial<T>;
  data: Array<Cell<T>[]>;
  display: GridDisplay;
}

export enum GridDisplay {
  rows,
  columns,
}

export type Cell<T> = Partial<T>;
