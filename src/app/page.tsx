"use client";

import Background from "@/components/Background";
import FAQSectionBlock, { FAQItem } from "@/components/Blocks/FaqSesctionBlock";
import GalleryBlock from "@/components/Blocks/GalleryBlock";
import LandingBlock from "@/components/Blocks/LandingBlock";
import ServicesBlock, {
  ServicesBlockProps,
} from "@/components/Blocks/ServicesBlock";
import MailIcon from "@/components/icons/MailIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import { useLanguage } from "@/features/languages/context/LanguageContext";
import ParquetIcon from "@/components/icons/ParquetIcon";
import ParquetTwoIcon from "@/components/icons/ParquetTwoIcon";
import BrushIcon from "@/components/icons/BrushIcon";
import LightBulb from "@/components/icons/LightBulb";
import { usePlaceRating } from "@/features/places/usePlaceRating";

export default function Home() {
  const { t } = useLanguage();

  const { ratingData } = usePlaceRating();

  // Generate FAQ items dynamically from translations
  const faqData: FAQItem[] = Array.from({ length: 10 }, (_, i) => {
    const id = i + 1; // IDs start from 1
    return {
      id,
      question: t(`faq.items.${id}.question`),
      answer: t(`faq.items.${id}.answer`),
    };
  });

  const servicesData: ServicesBlockProps = {
    sectionTitle: t("services.title"), // Translated title
    sectionSubtitle: t("services.description"), // Translated subtitle
    locationButton: {
      title: t("hero.companyName"), // Translated company name
      ghost: true,
    },
    services: [
      {
        title: t("services.categories.installation.title"), // Translated category title
        list: t(
          "services.categories.installation.items"
        ) as unknown as string[], // List of items
        icon: <ParquetIcon />, // Icon remains the same
        mode: "dark",
        hasFooter: false,
      },
      {
        title: t("services.categories.customSolutions.title"), // Translated category title
        list: t(
          "services.categories.customSolutions.items"
        ) as unknown as string[], // List of items, // List of items
        icon: <ParquetTwoIcon />,
        mode: "light",
      },
      {
        title: t("services.categories.renovation.title"), // Translated category title
        list: t("services.categories.renovation.items") as unknown as string[], // List of items, // List of items
        icon: <BrushIcon />,
        mode: "dark",
      },
      {
        title: t("services.categories.consultation.title"), // Translated category title
        list: [
          t("services.categories.consultation.description"), // Single description item
        ],
        icon: <LightBulb />,
        mode: "light",
      },
    ],
  };

  const images = [
    { src: "/photos/1.jpg", alt: "Parquet 1" },
    { src: "/photos/2.jpg", alt: "Parquet 2" },
    { src: "/photos/3.jpg", alt: "Parquet 3" },
    { src: "/photos/4.jpg", alt: "Parquet 4" },
    { src: "/photos/5.jpg", alt: "Parquet 5" },
  ];

  return (
    <div className="relative flex flex-col mx-auto gap-14 -mt-[116px] pt-12 ms:pt-0">
      <Background />
      <LandingBlock
        locationButton={{
          title: t("hero.companyName"), // "Rogalando"
          starRating: ratingData?.rating,
          ratingText: t("hero.lovedBy"), // "Loved by 3 customers"
          ratingNumber: ratingData?.voteCount,
        }}
        title={t("hero.tagline")} // "We deliver expert flooring solutions with speed and precision."
        primaryButton={{
          text: t("hero.cta"), // "Start Your Flooring Project"
          href: "tel:+4531886266",
          icon: <PhoneIcon fill="#f8fafc" />,
          accessibilityLabel: t("hero.cta2"), // "Call Us"
        }}
        secondaryButton={{
          text: t("faq.askQuestion"), // "Ask Us Anything"
          href: "mailto:info@gulvmestere.no",
          icon: <MailIcon size={28} fill="#f8fafc" />,
          accessibilityLabel: t("faq.askQuestion"), // "Ask Us Anything"
        }}
        images={[
          { src: "/images/parquet1.png", alt: t("gallery.description") },
          { src: "/images/parquet2.png", alt: t("gallery.description") },
          { src: "/images/parquet3.png", alt: t("gallery.description") },
        ]}
      />
      <ServicesBlock {...servicesData} />
      <GalleryBlock
        sectionTitle={t("gallery.title")} // "Gallery"
        sectionSubtitle={t("gallery.description")} // "Photos of our work"
        navLinkLabel={t("gallery.seeMore")} // "See More"
        socialPlatform={t("gallery.social")} // "on our Facebook"
        images={images}
      />
      <FAQSectionBlock
        faqData={faqData}
        sectionTitle={t("faq.title")} // "F.A.Q."
        sectionSubtitle={t("faq.description")} // "Answers to common questions by our customers."
        buttonText={t("faq.askQuestion")} // "Have a question?"
        buttonHref="mailto:info@gulvmestere.no"
        questionIconLabel={t("faq.questionIconLabel")}
        answerIconLabel={t("faq.answerIconLabel")}
      />
    </div>
  );
}
