import { ActivityIndicator, View } from 'react-native';
import { TodoList } from '@/components/feature/todo/todo-list';
import { useSQLiteContext } from 'expo-sqlite';
import { Suspense, useEffect, useState } from 'react';
import { Task } from '@/database/types';
import { AddButton } from '@/components/shared/add-button';
import { Text } from '@/components/ui/text'

import CRUD from '@/database/crud';

export default function ToDoScreen() {
  const db = useSQLiteContext();
  const [tasks, setTasks] = useState<Task[]>();
  const crud = new CRUD(db);

  function updateTasks() {
    crud.getTasks()
      .then((resolvedTasks) => {
        setTasks(resolvedTasks);
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    updateTasks();
  }, [])

  function handleCreateTask() {
    console.log('Create new task');
    crud.createTask({
      name: "test",
      status: 'done'
    }).then(() => updateTasks())
  }


  return (
    <Suspense fallback={<ActivityIndicator size="large" />}>
      <View className="flex flex-col p-4">
        <AddButton onPress={handleCreateTask} />
        {tasks ? (
          <View className="flex-1 items-center justify-center gap-8">
            <TodoList tasks={tasks} />
          </View>
        ) : (
          <View className='flex'>
            <Text className="font-bold font-xl">There are no tasks. Add task</Text>
          </View>
        )}
      </View>
    </Suspense>
  );
}