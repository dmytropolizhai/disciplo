import { LanguageSelect } from "@/components/feature/language/language-select";
import { SettingsField } from "@/components/feature/settings";
import { ThemeToggle } from "@/components/feature/theme/theme-toggle";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";


export default function SettingsScreen() {
    const { t } = useTranslation("common", { keyPrefix: "screen.settings" })

    return (
        <>
            <View className="m-4 flex flex-col gap-4">
                <Suspense fallback={null}>
                    <SettingsField title={t("theme.title")} description={t("theme.description")}>
                        <ThemeToggle />
                    </SettingsField>
                </Suspense>
                <Suspense fallback={null}>
                    <SettingsField title={t("language.title")} description={t("language.description")}>
                        <LanguageSelect />
                    </SettingsField>
                </Suspense>
            </View>
        </>
    )
}