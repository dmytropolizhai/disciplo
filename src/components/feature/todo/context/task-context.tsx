import { createContext } from 'react';
import { Task } from '@/types/task';

export const TaskContext = createContext<Task[] | null>(null);