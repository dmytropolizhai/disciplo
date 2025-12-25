import {
    Option,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/core/select"
import { LANGUAGES } from "@/constants/languages"
import { useState } from "react"
import { useTranslation } from "react-i18next"



export const LanguageSelect = () => {
    const { t, i18n } = useTranslation("common", { keyPrefix: "screen.settings.language" });

    return (
        <Select onValueChange={option => i18n.changeLanguage(option?.value)} >
            <SelectTrigger>
                <SelectValue placeholder={t("placeholder")}/>
            </SelectTrigger>
            <SelectContent >
                <SelectGroup>
                    <SelectLabel>{t("title")}</SelectLabel>
                    {LANGUAGES.map(lang => (
                        <SelectItem key={lang.value} label={lang.label} value={lang.value}>
                            {lang.label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}