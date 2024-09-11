import type { ColumnType } from 'kysely';
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export type order = {
  id: Generated<string>;
};
export type product = {
  id: Generated<string>;
  name: string;
  amount: number;
};
export type transaction = {
  id: Generated<string>;
};
export type user = {
  id: Generated<string>;
  email: string;
  first_name: string;
  last_name: string;
  username: string;
  password: string;
};
export type DB = {
  order: order;
  product: product;
  transaction: transaction;
  user: user;
};
