"use client"

import { useColorScheme } from "nativewind";
import { Button } from "../core/button";
import { Icon } from "../core/icon";
import { THEME_ICONS } from "@/constants/theme-icons";


export const ThemeToggle = () => {
    const { colorScheme, toggleColorScheme } = useColorScheme();

    return (
        <Button
            onPressIn={toggleColorScheme}
            size="icon"
            variant="ghost"
            className="ios:size-9 rounded-full web:mx-4"
        >
            <Icon as={THEME_ICONS[colorScheme ?? 'light']} className="size-5" />
        </Button>
    );
}