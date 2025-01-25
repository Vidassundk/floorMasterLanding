export type TranslationSchema = {
  menu: {
    services: string;
    gallery: string;
    faq: string;
    languages: {
      english: string;
      norwegian: string;
      lithuanian: string;
    };
  };
  hero: {
    lovedBy: string;
    companyName: string;
    tagline: string;
    cta: string;
    cta2: string;
  };
  faq: {
    title: string;
    description: string;
    askQuestion: string;
    items: Record<
      string,
      {
        question: string;
        answer: string;
      }
    >;
  };
  services: {
    title: string;
    description: string;
    categories: {
      installation: {
        title: string;
        items: string[];
      };
      customSolutions: {
        title: string;
        items: string[];
      };
      renovation: {
        title: string;
        items: string[];
      };
      consultation: {
        title: string;
        description: string;
      };
    };
  };
  gallery: {
    title: string;
    description: string;
    seeMore: string;
    social: string;
  };
  footer: {
    copyright: string;
  };
};
