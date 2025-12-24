import { useState } from 'react';
import { THEME_ICONS, THEME_KEY } from '@/constants/theme';
import { useColorScheme } from 'nativewind';


export const useExtendedColorScheme = () => {
    const { colorScheme, setColorScheme, toggleColorScheme } = useColorScheme();
    const colorIcon = THEME_ICONS[colorScheme ?? "light"]

    return { colorScheme, toggleColorScheme, setColorScheme, colorIcon  }
};
