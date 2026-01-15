import { createContext, PropsWithChildren } from 'react';
import { Task } from '@/types/task';
import { TaskContext } from './task-context';

type TaskProviderProps = {
  tasks: Task[]
} & PropsWithChildren

export const TaskProvider = ({ tasks, children }: TaskProviderProps) => {
  return <TaskContext.Provider value={tasks}>{children}</TaskContext.Provider>;
}