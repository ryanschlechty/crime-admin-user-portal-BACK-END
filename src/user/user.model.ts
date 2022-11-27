import { Model } from 'objection';

export default class User extends Model {
  static tableName = 'users';

  id: number;
  email: string;
}