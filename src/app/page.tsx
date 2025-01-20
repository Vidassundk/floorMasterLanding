import Background from "@/components/Background";
import FaqButtonBlock from "@/components/Blocks/FaqButtonBlock";
import FAQSectionBlock, { FAQItem } from "@/components/Blocks/FaqSesctionBlock";

import GalleryBlock from "@/components/Blocks/GalleryBlock";
import LandingBlock from "@/components/Blocks/LandingBlock";
import ServicesBlock from "@/components/Blocks/ServicesBlock";

const sampleFAQData: FAQItem[] = [
  {
    id: 1,
    question: "How to create an account?",
    answer:
      "To create an account, find the 'Sign up' button, fill out the form, verify your email, and then log in to start using the platform.",
  },
  {
    id: 2,
    question: "Have any trust issues?",
    answer:
      "We provide robust and user-friendly content management capabilities, ensuring that you can trust our platform.",
  },
  {
    id: 3,
    question: "How can I reset my password?",
    answer:
      "Go to the login page, click 'Forgot Password,' and follow instructions to reset via email.",
  },
  {
    id: 4,
    question: "What is the payment process?",
    answer:
      "We accept various forms of payment. Simply add your billing details under 'Account Settings' and proceed to checkout.",
  },
];

export default function Home() {
  return (
    <div className="relative flex flex-col mx-auto gap-14 -mt-[116px] pt-12 ms:pt-0">
      <Background />
      <LandingBlock />
      <ServicesBlock />
      <GalleryBlock />
      <FAQSectionBlock faqData={sampleFAQData} />
    </div>
  );
}
