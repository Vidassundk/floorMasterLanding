"use client";

import React from "react";
import SectionTitle from "../SectionTitle";
import QuestionMarkIcon from "../icons/QuestionMarkIcon";
import CheckcircleIcon from "../icons/CheckCircleIcon";
import PersonIcon from "../icons/PersonIcon";
import Button from "../Button";
import MailIcon from "../icons/MailIcon";

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface FAQSectionBlockProps {
  faqData: FAQItem[];
}

const FAQSectionBlock: React.FC<FAQSectionBlockProps> = ({ faqData }) => {
  return (
    <div className="py-4 bg-brown">
      <SectionTitle
        title="F.A.Q."
        subTitle="Answers to common questions by out customers."
        dark
      />
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
        {/* Title */}
        {/* FAQ List */}
        <div className="mt-20">
          <ul>
            {faqData.map((item) => (
              <li key={item.id} className="text-left mb-10">
                {/* Question Row */}
                <div className="flex flex-row items-start mb-5">
                  {/* Left Icon (hidden on small screens) */}
                  <div className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-background text-foreground text-xl font-semibold">
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
                  <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-gulvGreen text-white text-xl font-semibold">
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
          href="#"
          text="Ask Us Anything"
          icon={<MailIcon size={28} />}
          className="text-base bg-white"
          accessabilityLabel="Ask Us Anything Button"
        />
      </div>
    </div>
  );
};

export default FAQSectionBlock;
