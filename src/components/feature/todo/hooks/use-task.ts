import { useContext } from 'react';
import { TaskContext } from '@/components/feature/task/context/tasks-context';
import { TaskEvent } from '@/types/task';

interface UseTaskReturn {
  onTaskCompleted: TaskEvent;
  onTaskRemoved: TaskEvent;
}

export function useTaskEvent(id: number): UseTaskReturn {
  const tasks = useContext(TaskContext);
  const {  } = task[id];
}