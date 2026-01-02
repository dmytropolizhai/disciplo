import { View } from 'react-native';
import { TodoList } from '@/components/feature/todo/todo-list';
import { Task } from '@/types/task';

const ExampleTodoTaskList: Task[] = [
  { id: 0, name: 'Meeting', description: 'Meeting', status: 'done' },
  { id: 1, name: 'Do homework', description: 'Do homework due September.', status: 'pending' },
  {
    id: 2,
    name: 'Buy groceries',
    description: 'Milk, eggs, bread, and vegetables.',
    status: 'pending',
  },
  { id: 3, name: 'Workout', description: '30-minute cardio and stretching.', status: 'done' },
  {
    id: 4,
    name: 'Read book',
    description: 'Read 20 pages of a non-fiction book.',
    status: 'pending',
  },
  { id: 5, name: 'Clean room', description: 'Organize desk and vacuum the floor.', status: 'done' },
  {
    id: 6,
    name: 'Prepare presentation',
    description: 'Slides for Monday’s team presentation.',
    status: 'pending',
  },
  {
    id: 7,
    name: 'Reply to emails',
    description: 'Respond to unread work emails.',
    status: 'pending',
  },
  { id: 8, name: 'Pay bills', description: 'Electricity and internet bills.', status: 'done' },
  {
    id: 9,
    name: 'Plan weekend',
    description: 'Decide activities and make reservations.',
    status: 'pending',
  },
];

export default function ToDoScreen() {
  return (
    <>
      <View className="flex-1 items-center justify-center gap-8 p-4">
        <TodoList tasks={ExampleTodoTaskList}/>
      </View>
  </>
)
}