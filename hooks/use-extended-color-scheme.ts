import { THEME_ICONS } from '@/constants/theme';
import { useColorScheme } from 'nativewind';
import { useStorage } from './use-storage';
import { useEffect } from 'react';


export const useExtendedColorScheme = () => {
    const { colorScheme, setColorScheme, toggleColorScheme } = useColorScheme();
    const [colorSchemeInStorage, setColorSchemeInStorage, loading] = useStorage("color-scheme", colorScheme);
    
    useEffect(() => {
        if (!loading && colorSchemeInStorage && colorSchemeInStorage !== colorScheme) {
            setColorScheme(colorSchemeInStorage);
        }
    }, [loading, colorSchemeInStorage, colorScheme, setColorScheme]);
    
    const colorIcon = THEME_ICONS[colorScheme!];
    
    const handleToggleColorScheme = () => {
        toggleColorScheme();
        const newScheme = colorScheme === 'dark' ? 'light' : 'dark'; 
        setColorSchemeInStorage(newScheme);
    };
    
    return { 
        colorScheme, 
        toggleColorScheme: handleToggleColorScheme, 
        setColorScheme: (scheme: "dark" | "light") => {
            setColorScheme(scheme);
            setColorSchemeInStorage(scheme);
        }, 
        colorIcon,
        loading
    }
};
