import en from './en.json'
import pl from './pl.json'
import de from './de.json'
import type { Locale } from './locales'

const translations = { en, pl, de }

export function getTranslation(locale: Locale) {
  return translations[locale]
}
