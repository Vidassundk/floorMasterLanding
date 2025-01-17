import EnglishFlagIcon from "@/components/icons/flags/EnglishFlagIcon";
import LithuanianFlagIcon from "@/components/icons/flags/LithuanianFlagIcon";
import NorwegianFlagIcon from "@/components/icons/flags/NorwegianFlagIcon";

export const languageOptions = [
  { label: "English", value: "en", flag: <EnglishFlagIcon /> },
  { label: "Norwegian", value: "no", flag: <NorwegianFlagIcon /> },
  { label: "Lithuanian", value: "lt", flag: <LithuanianFlagIcon /> },
] as const;

export type LanguageValue = (typeof languageOptions)[number]["value"];
