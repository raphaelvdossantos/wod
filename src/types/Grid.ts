import React from 'react';

export interface GridConfig<T> {
  defaultComponent?: React.FC<T>;
  defaultProps?: Partial<T>;
  rows: Array<Cell<T>[]>;
}

export type Cell<T> = Partial<T>;
