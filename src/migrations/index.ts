import * as migration_20250526_113215_init from './20250526_113215_init';

export const migrations = [
  {
    up: migration_20250526_113215_init.up,
    down: migration_20250526_113215_init.down,
    name: '20250526_113215_init'
  },
];
