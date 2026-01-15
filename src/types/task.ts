/**
 * @deprecated use types from database schema
 */
export type TaskStatus = 'done' | 'overdue' | 'pending';

/**
 * @deprecated use types from database schema
 */
export type TaskEvent = (task: Task) => void;

/**
 * @deprecated use types from database schema
 */
export interface Task {
  id: number;
  name: string;
  status: TaskStatus;
  description?: string;
}
