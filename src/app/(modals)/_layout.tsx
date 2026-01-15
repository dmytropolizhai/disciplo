import { useTranslation } from "@/hooks/use-translation";
import { Stack } from "expo-router";

export default function ModalsLayout() {
    const { t } = useTranslation("modals")
    return (
        <Stack screenOptions={{ presentation: "modal" }}>
            <Stack.Screen name="create-task" options={{ title: t("create-task.title") }}/>

        </Stack>
    );
}
