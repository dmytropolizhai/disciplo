import { Tabs } from 'expo-router';
import { ChartNoAxesCombinedIcon, HomeIcon, SettingsIcon } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';

export default function TabLayout() {
    const { t } = useTranslation("common", { keyPrefix: "screen" })
    
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: "#FF6900"
    }}>
    <Tabs.Screen
    name="index"
    options={{
        title: t("home.title"),
        tabBarIcon: ({ color }) => <HomeIcon color={color} />,
    }}
    />
    <Tabs.Screen 
    name="dashboard"
    options={{
        title: t("dashboard.title"),
        tabBarIcon: ({ color }) => <ChartNoAxesCombinedIcon color={color} />
    }}
    />
    <Tabs.Screen
        name="settings"
        options={{
        title: t("settings.title"),
        tabBarIcon: ({ color }) => <SettingsIcon color={color} />,
        }}
    />
    </Tabs>
  );
}
