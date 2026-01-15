import Crud from "@/database/crud"
import { NewTask, Task } from "@/database/types"
import { useSQLiteContext } from "expo-sqlite"
import { create }  from "zustand"


type TaskStoreState = { tasks: Task[] | [], isLoading: boolean } 
type TaskStoreActions = {
    createTask: (newTask: NewTask) => void,
}
type TaskStore = TaskStoreState & TaskStoreActions

/**
 * Create a hook-store for database using zustand
*/
export const useTaskStore = create<TaskStore>(set => ({
    tasks: [],
    isLoading: true,
    createTask(newTask) {
        set(state => ({tasks: [...state.tasks, { ...newTask as Task }]}))
    },
}))
