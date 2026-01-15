import { Label } from "@/components/ui/label";
import { useTranslation } from "@/hooks/use-translation";
import { View } from "react-native";
import { PropsWithChildren, useState } from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { Target } from "lucide-react-native";
import { Text } from "@/components/ui/text";
import DateTimePicker from "@react-native-community/datetimepicker"
import { AddButton } from "@/components/shared/add-button";
import { useTaskStore } from "@/stores/use-task-store";
import { NewTask } from "@/database/types";
import { router } from "expo-router";
import { Form, FormField, FormInput, FormSubmit } from "@/components/shared/form";

const today = new Date();


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

type CreateTaskForm = NonNullable<NewTask>
const defaultFormProps = {
    defaultValues: {
        name: "",
        description: ""
    }
}



export default function CreateTaskModal() {
    const { t } = useTranslation("modals.create-task")
    const createTask = useTaskStore(state => state.createTask)

    function handleCreateTask(data: CreateTaskForm) {
        createTask(data)
        router.navigate("/todo")
    }

    return (
        <Form<CreateTaskForm> formProps={defaultFormProps} className="w-full h-full justify-between p-4">
            <View className="flex gap-4 flex-col">
                <FormField id="name" label={t("input.task-name.label")}>
                    <FormInput placeholder={t("input.task-name.placeholder")} rules={{ required: t("input.task-name.required"), maxLength: 25 }} />
                </FormField>

                <FormField id="description" label={t("input.task-description.label")}>
                    <FormInput placeholder={t("input.task-description.placeholder")}  />
                </FormField>
            </View>

            <FormSubmit<CreateTaskForm> onSubmit={handleCreateTask} className="w-full mb-8">
                <AddButton />
            </FormSubmit>
        </Form>
    )
}
