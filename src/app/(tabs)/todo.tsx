import { ActivityIndicator, View } from 'react-native';
import { TodoList } from '@/components/feature/todo/todo-list';
import { TodoControls } from '@/components/feature/todo/todo-controls';
import { Suspense } from 'react';
import { useTaskStore } from '@/stores/use-task-store';

export default function ToDoScreen() {
    const tasks = useTaskStore(state => state.tasks);

    return (
        <Suspense fallback={<ActivityIndicator size="large" />}>
          <View className="flex flex-col p-4">
            <TodoControls />
            <TodoList />
          </View>
        </Suspense>
  );
}
