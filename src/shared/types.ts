export enum SlctdPage {
    Home = "home",
    Benefits = "benefits",
    OurClasses = "ourclasses",
    ContactUs = "contactus"
  }

  export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
  }