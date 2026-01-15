import { AddButton } from "@/components/shared/add-button"
import { useRouter } from "expo-router"
import { View } from "react-native"

export const TodoControls = () => {
    const router = useRouter()

    return (
        <View className="w-full p-4 h-25">
            <AddButton onPress={() => router.push("/(modals)/create-task")}/>

        </View>
    )
}
