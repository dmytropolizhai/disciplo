import { SettingsIcon } from "lucide-react-native"
import { Button } from "../core/button"
import { Icon } from "../core/icon"
import { router } from "expo-router"
import { Card, CardContent, CardDescription, CardTitle } from "../core/card"
import { View } from "react-native"
import { PropsWithChildren } from "react"

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

export const SettingsField = ({ title, description, children }: PropsWithChildren<{ title: string, description: string }>) => {
    return (
        <Card className="p-4 flex-row">
            <View className="flex flex-col justify-center">
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </View>
            <CardContent className="flex-1 items-end">
                {children}
            </CardContent>
        </Card>
    )
}