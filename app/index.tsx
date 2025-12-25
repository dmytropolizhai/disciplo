import { Text } from "@/components/core/text";
import { SettingsTrigger } from "@/components/ui/settings";
import { Stack } from "expo-router";
import { View } from "react-native";

export default function HomeScreen() {
    return (
        <>
            <Stack.Screen options={{
                title: "Home",
                headerRight: () => <SettingsTrigger />
            }} />
            <View className="flex-1 items-center justify-center gap-8 p-4">
            </View>
        </> 
    )
}