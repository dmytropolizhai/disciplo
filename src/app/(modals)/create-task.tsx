import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslation } from "@/hooks/use-translation";
import { Task, View } from "react-native";
import { ChangeEvent, PropsWithChildren, useState } from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { Target } from "lucide-react-native";
import { Text } from "@/components/ui/text";
import DateTimePicker from "@react-native-community/datetimepicker"
import { AddButton } from "@/components/shared/add-button";
import { useTaskStore } from "@/stores/use-task-store";
import { NewTask } from "@/database/types";
import { router } from "expo-router";

const today = new Date();

type FieldProps = {
    name: string,
    label: string,
} & PropsWithChildren


const Field = ({ name, label, children }: FieldProps) => (
    <View className="flex w-full gap-2">
        <Label htmlFor={name} nativeID={name}>{label}</Label>
        {children}
    </View>
)


const DeadlinePicker = (props: Omit<ButtonProps, "onPress">) => {
    const [show, setShow] = useState<boolean>(false);
    const [date, setDate] = useState<Date>(today);

    return (
        <>
            <Button {...props} onPress={() => setShow(true)}>
                <Text>Select</Text>
                <Target />
            </Button>
            {show && (
                <DateTimePicker 
                    testID="deadlinePicker"
                    value={today}
                    mode="datetime"
                    is24Hour
                    onChange={(_, selectedDate) => {
                        setShow(false)
                        if (selectedDate) {
                            setDate(selectedDate)
                        }
                    }}

                />
            )}
        </>
    )

}

export default function CreateTaskModal() {
    const { t } = useTranslation("modals.create-task")
    const [newTask, setNewTask] = useState<NewTask | undefined>(undefined)
    const createTask = useTaskStore(state => state.createTask)

    function handleCreateTask() {
        if (!newTask) {
            throw new Error("Can't create empty task!")
        }
        createTask(newTask)
        router.navigate("/todo")
    }

    function handleChange<K extends keyof NewTask>(key: K, value: NewTask[K]) {
        setNewTask(prev => ({
            ...(prev ?? {} as NewTask),
            [key]: value
        }))
    }

    return (
        <View className="w-full h-full justify-between pr-4 pl-4">
           <View className="w-full flex items-center gap-4">
                <Field name="task-name" label={t("input.task-name.name")}>
                    <Input placeholder={t("input.task-name.placeholder")} onChangeText={text => handleChange("name", text)} />
                </Field>
                <Field name="task-description" label={t("input.task-description.name")}>
                    <Input placeholder={t("input.task-description.placeholder")} onChangeText={text => handleChange("description", text)}/>
                </Field>
                <Field name="task-deadline" label={t("input.task-deadline.name")} >
                    <DeadlinePicker variant="outline" />
                </Field>
            </View>
            <AddButton className="mb-8" onPress={handleCreateTask}/>
        </View>
    )
}
