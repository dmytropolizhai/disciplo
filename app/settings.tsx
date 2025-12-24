import { Stack } from "expo-router";

const SCREEN_OPTIONS = {
    title: 'Settings',
    headerTransparent: true,
};


export default function SettingsScreen() {
    return (
        <>
            <Stack.Screen options={SCREEN_OPTIONS} />
            
        </>
    )
}