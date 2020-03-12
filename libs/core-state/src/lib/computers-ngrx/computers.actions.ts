import { createAction, props } from '@ngrx/store';
import { Computer } from '@ngrx-computers/core-data';

export const computerSelected = createAction(
  '[COMPUTER] Computer Selected',
  props<{ selectedComputerId: string | number }>()
);

export const loadComputers = createAction(
  '[COMPUTER] Load Computers',
);

export const computersLoaded = createAction(
  '[COMPUTER] Computers Loaded',
  props<{ computers: Computer[] }>()
);

export const loadComputer = createAction(
  '[COMPUTER] Load Computer',
  props<{ computer: Computer }>()
);

export const computerLoaded = createAction(
  '[COMPUTER] Computer Loaded',
  props<{ computer: Computer }>()
);

export const createComputer = createAction(
  '[COMPUTER] Create Computer',
  props<{ computer: Computer }>()
);

export const computerCreated = createAction(
  '[COMPUTER] Computer Created',
  props<{ computer: Computer }>()
);

export const updateComputer = createAction(
  '[COMPUTER] Update Computer',
  props<{ computer: Computer }>()
);

export const computerUpdated = createAction(
  '[COMPUTER] Computer Updated',
  props<{ computer: Computer }>()
);

export const deleteComputer = createAction(
  '[COMPUTER] Delete Computer',
  props<{ computer: Computer }>()
);

export const computerDeleted = createAction(
  '[COMPUTER] Computer Deleted',
  props<{ computer: Computer }>()
);


