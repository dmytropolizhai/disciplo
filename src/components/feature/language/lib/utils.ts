import { Option } from '@ui/select';
import { Language } from '@/types/language';
import { LanguageOptionList } from '@/components/feature/language/lib/language-option-list';

/**
 * Returns the corresponding language option object for a given language code.
 *
 * This function searches through `LanguageOptionList` to find a matching
 * language value and returns an `Option` object containing the display label
 * and language value. If no match is found, it defaults to `"English"` as
 * the label.
 *
 * @param language - The language identifier to look up.
 *
 * @returns An `Option` object containing:
 * - `label`: The human-readable language name
 * - `value`: The language identifier
 *
 * @example
 * ```ts
 * getOptionByLanguage("en");
 * // { label: "English", value: "en" }
 * ```
 */
export function getOptionByLanguage(language: Language): Option {
  let languageLabel = "English";

  LanguageOptionList.forEach(({ label, value }) => {
    if (value === language) {
      languageLabel = label;
    }
  })

  return {
    label: languageLabel,
    value: language,
  };
}