"use client";

import React from "react";
import SectionTitle from "../SectionTitle";
import QuestionMarkIcon from "../icons/QuestionMarkIcon";
import PersonIcon from "../icons/PersonIcon";
import Button from "../Button";

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface FAQSectionBlockProps {
  faqData: FAQItem[];
  sectionTitle: string; // Title of the FAQ section
  sectionSubtitle: string; // Subtitle of the FAQ section
  buttonText: string; // Text for the button
  buttonHref: string; // URL for the button link
  questionIconLabel?: string; // Accessibility label for the question icon
  answerIconLabel?: string; // Accessibility label for the answer icon
}

const FAQSectionBlock: React.FC<FAQSectionBlockProps> = ({
  faqData,
  sectionTitle,
  sectionSubtitle,
  buttonText,
  buttonHref,
  questionIconLabel = "Question Icon",
  answerIconLabel = "Answer Icon",
}) => {
  return (
    <section id="faq-section" className="pb-10 bg-foreground scroll-m-32">
      <SectionTitle title={sectionTitle} subTitle={sectionSubtitle} dark />
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
        {/* FAQ List */}
        <div className="mt-6 lg:mt-20">
          <ul>
            {faqData.map((item) => (
              <li key={item.id} className="text-left mb-10">
                {/* Question Row */}
                <div className="flex flex-row items-start mb-5">
                  {/* Left Icon (hidden on small screens) */}
                  <div
                    className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-background text-foreground text-xl font-semibold"
                    aria-label={questionIconLabel}
                  >
                    <QuestionMarkIcon />
                  </div>

                  {/* Question Text */}
                  <div className="bg-background p-5 px-10 w-full flex items-center rounded-xl">
                    <h4 className="text-md leading-6 font-medium text-foreground">
                      {item.question}
                    </h4>
                  </div>
                </div>

                {/* Answer Row */}
                <div className="flex flex-row items-start">
                  <div className="bg-gulvGreen p-5 px-10 w-full flex items-center rounded-xl">
                    <p className="text-white text-md">{item.answer}</p>
                  </div>

                  {/* Right Icon (hidden on small screens) */}
                  <div
                    className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-gulvGreen text-white text-xl font-semibold"
                    aria-label={answerIconLabel}
                  >
                    <PersonIcon />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Button
          href={buttonHref}
          text={buttonText}
          className="text-base bg-background hover:bg-white"
          accessabilityLabel="Ask Us Anything Button"
        />
      </div>
    </section>
  );
};

export default FAQSectionBlock;
