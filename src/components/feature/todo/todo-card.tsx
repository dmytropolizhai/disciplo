import { Card, CardDescription, CardFooter, CardHeader, CardProps, CardTitle } from '@ui/card';
import { DoneButton } from '@/components/shared/done-button';
import { useState } from 'react';
import { View } from 'react-native';
import { Task, TaskEvent, TaskStatus } from '@/database/types';

type TodoCardProps = {
  task: Task;
  onTaskCompleted?: TaskEvent;
}

export const TodoCard = ({ task, onTaskCompleted }: TodoCardProps) => {
  const { id, name, description } = task;
  const [status, setStatus] = useState<TaskStatus>(task.status);

  function handleTaskOnCompleted() {
    console.log(`Task ${id} completed`);
    setStatus("done");
    onTaskCompleted?.(task);
  }

  function handleTaskOnDelete() {

  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-row gap-4">
        <View className="w-full">
          <DoneButton isDone={status === "done"} onPress={handleTaskOnCompleted} />
        </View>
      </CardFooter>
    </Card>
  );
};