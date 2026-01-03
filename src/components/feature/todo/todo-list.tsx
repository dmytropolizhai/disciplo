import { ScrollView, View } from 'react-native';
import { TodoCard } from '@/components/feature/todo/todo-card';
import { Task, TaskEvent } from '@/database/types';

interface TodoListProps {
  tasks: Task[];
  onTaskCompleted?: TaskEvent;
}

export const TodoList = ({ tasks, onTaskCompleted }: TodoListProps) => {
  return (
    <ScrollView>
      <View className="w-full h-full items-start justify-start gap-4 p-4">
        {tasks.map((task) => (
          <TodoCard key={task.id} task={task} onTaskCompleted={onTaskCompleted} />
        ))}
      </View>
    </ScrollView>
  );
};