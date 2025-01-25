"use client";

import { MenuItem } from "@/components/NavLinkItem";
import { useLanguage } from "@/features/languages/context/LanguageContext";

export const useMenuConfig = (): MenuItem[] => {
  const { t } = useLanguage(); // Access translation function

  return [
    { label: t("menu.services"), href: "#services-section" },
    { label: t("menu.gallery"), href: "#gallery-section" },
    { label: t("menu.faq"), href: "#faq-section" },
  ];
};
