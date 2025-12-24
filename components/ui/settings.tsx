import { SettingsIcon } from "lucide-react-native"
import { Button } from "../core/button"
import { Icon } from "../core/icon"
import { router } from "expo-router"

export const SettingsTrigger = () => {
    return (
        <Button
            onPressIn={() => router.push("/settings")}
            variant="ghost"
            className="ios:size-9 rounded-full web:mx-4"
        >
            <Icon as={SettingsIcon} className="size-5"/>
        </Button>
    )
}