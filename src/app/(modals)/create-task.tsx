import { TodoCard } from "@/components/feature/todo/todo-card";
import { Input, type InputProps } from "@/components/ui/input";
import { Label, type LabelProps } from "@/components/ui/label";
import { useTranslation } from "@/hooks/use-translation";
import { View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker"
import { PropsWithChildren, useState } from "react";
import { Button } from "@/components/ui/button";
import { Target } from "lucide-react-native";

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


const DeadlinePicker = () => {
    const [show, setShow] = useState<boolean>(false);
    const [date, setDate] = useState<Date>(today);

    return (
        <>
            <Button variant="outline" onPressIn={() => setShow(true)}>
                <Target />
            </Button>
            {show && (
                <DateTimePicker 
                    testID="deadlinePicker"
                    value={date}
                    mode="datetime"
                    is24Hour
                    onChange={(_, selectedDate) => {
                        setShow(false)
                        if (selectedDate) setDate(selectedDate)
                    }}

                />
            )}
        </>
    )

}


export default function CreateTaskModal() {
    const { t } = useTranslation("modals.create-task")

    return (
       <View className="w-full h-full flex items-center gap-4 p-4">
            <Field name="task-name" label={t("input.task-name.name")}>
                <Input placeholder={t("input.task-name.placeholder")} />
            </Field>
            <Field name="task-description" label={t("input.task-description.name")}>
                <Input placeholder={t("input.task-description.placeholder")} />
            </Field>
                    
            <Field name="task-deadline" label={t("input.task-deadline")} >
                <DeadlinePicker />
            </Field>
        </View>
    )
}
