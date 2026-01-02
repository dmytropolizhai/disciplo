import {
    Option,
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useStorage } from "@/hooks/use-storage"
import { LanguageList } from "./lib/language-list"
import { useTranslation } from "react-i18next"


export const LanguageSelect = () => {
    const { t, i18n } = useTranslation("common", { keyPrefix: "screen.settings.language" });
    const [language, setLanguage] = useStorage("lang");

    function handleOnValueChange(option: Option) {
        i18n.changeLanguage(option?.value);
        setLanguage(option?.value);
    }   

    return (
        <Select value={{ label: language!, value: language! }} onValueChange={handleOnValueChange} >
            <SelectTrigger>
                <SelectValue placeholder={t("placeholder")} />
            </SelectTrigger>
            <SelectContent >
                <SelectGroup>
                    <SelectLabel>{t("title")}</SelectLabel>
                    {LanguageList.map(lang => (
                        <SelectItem key={lang.value} label={lang.label} value={lang.value}>
                            {lang.label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}