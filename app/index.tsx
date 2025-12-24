import { SettingsTrigger } from "@/components/ui/settings";
import { Stack } from "expo-router";
import { View } from "react-native";

const SCREEN_OPTIONS = {
    title: 'Home',
    headerTransparent: true,
    headerRight: () => <SettingsTrigger />,
};

export default function HomeScreen() {
    return (
        <>
            <Stack.Screen options={SCREEN_OPTIONS} />
            <View className="flex-1 items-center justify-center gap-8 p-4">
                
            </View>
        </> 
    )
}