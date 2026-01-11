import { ScrollView, View } from 'react-native';
import { TodoCard } from '@/components/feature/todo/todo-card';
import { Task, TaskEvent } from '@/database/types';
import { useTaskStore } from '@/stores/use-task-store';

interface TodoListProps {
  onTaskCompleted?: TaskEvent;

}

export const TodoList = ({ onTaskCompleted }: TodoListProps) => {
    const tasks = useTaskStore(state => state.tasks);

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
