import * as schema from './schema';
import { drizzle } from 'drizzle-orm/expo-sqlite';
import { SQLiteDatabase } from 'expo-sqlite';
import { NewTask } from './types';

export default class Crud {
  private drizzleDb;

  constructor(db: SQLiteDatabase) {
    this.drizzleDb = drizzle(db, { schema });
  }
  async getTasks() {
    return this.drizzleDb.select().from(schema.tasksTable);
  }

  async createTask(newTask: NewTask) {
    return this.drizzleDb.insert(schema.tasksTable).values({ ...newTask });
  }
}
