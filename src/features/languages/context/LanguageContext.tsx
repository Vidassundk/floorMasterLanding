"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Define language types
type LanguageValue = "en" | "no" | "lt";

// Define the context properties
interface LanguageContextProps {
  language: LanguageValue;
  setLanguage: (language: LanguageValue) => void;
  t: (key: string) => string;
}

// Import translations from JSON files
import en from "../i18n/en.json";
import no from "../i18n/no.json";
import lt from "../i18n/lt.json";
import { TranslationSchema } from "../i18n/types";

// Combine translations
const translations: Record<LanguageValue, TranslationSchema> = {
  en,
  no,
  lt,
};

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<LanguageValue>("no");

  // Save language in localStorage
  const setLanguage = (language: LanguageValue) => {
    setLanguageState(language);
    if (typeof window !== "undefined") {
      localStorage.setItem("preferredLanguage", language);
    }
  };

  // Translation function to handle nested keys
  const t = (key: string): string => {
    const keys = key.split(".");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let result: any = translations[language];

    for (const k of keys) {
      result = result?.[k];
      if (result === undefined) {
        return key; // Fallback to the key itself if not found
      }
    }

    return result;
  };

  // Detect browser language or load saved language
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem(
        "preferredLanguage"
      ) as LanguageValue | null;
      if (savedLanguage) {
        setLanguageState(savedLanguage);
      } else {
        const browserLanguage = navigator.language.split(
          "-"
        )[0] as LanguageValue;
        if (translations[browserLanguage]) {
          setLanguageState(browserLanguage);
        }
      }
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
