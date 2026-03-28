import type { StaticImageData } from "next/image";

import carlosHeadshot from "@/Imagery/Carlos-Luna-Headshot.jpeg";
import joseHeadshot from "@/Imagery/Jose-Tirado-Headshot.jpeg";
import logoDark from "@/Imagery/Logo-Dark.png";
import logoLight from "@/Imagery/Logo.png";
import nicanorHeadshot from "@/Imagery/Nicanor-Garza-Zazueta-headshot.png";
import pricingStrategyImage from "@/Imagery/Pricing-Strat.png";
import productImage1 from "@/Imagery/Product-Image-1.png";
import productImage2 from "@/Imagery/Product-Image-2.png";
import productImage3 from "@/Imagery/Product-Image-3.png";
import productImage4 from "@/Imagery/Product-Image-4.png";
import productImage5 from "@/Imagery/Product-Image-5.png";

export type NavLink = {
  href: string;
  label: string;
};

export type FaqItem = {
  answer: string;
  question: string;
};

export type ShowcaseTab = {
  description: string;
  detail: string;
  image: StaticImageData;
  label: string;
  title: string;
};

export type WorkflowStep = {
  body: string;
  caption: string;
  id: string;
  image: StaticImageData;
  number: string;
  title: string;
};

export type Founder = {
  bio: string;
  image: StaticImageData;
  label: string;
  name: string;
};

export const brandLine =
  "Finch helps students apply with more strategy and less wasted effort.";

export const navLinks: NavLink[] = [
  { href: "/product", label: "Product" },
  { href: "/product#workflow", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const actionLinks = {
  downloadExtension: "/extension",
  earlyAccess: "/early-access",
  signIn: "/sign-in",
};

export const brandAssets = {
  dark: logoDark,
  light: logoLight,
};

export const trustChips = [
  "Built for engineering and CS students",
  "Works across major ATS platforms",
  "Tailored materials in seconds",
  "Final review stays in your hands",
];

export const compatibilityChips = [
  "Greenhouse",
  "Lever",
  "Workday",
  "User-controlled final review",
];

export const problemCards = [
  {
    description:
      "Submitting 100 to 200 applications does not guarantee traction when every application looks the same.",
    title: "More applications, same silence",
  },
  {
    description:
      "Each application takes time, but most students never learn what is actually improving their chances.",
    title: "Too much time, too little signal",
  },
  {
    description:
      "A resume that is not tailored to the role is easy for recruiters and ATS systems to pass over.",
    title: "Generic materials get ignored",
  },
  {
    description:
      "\"Apply more\" and \"network more\" are not enough when there is no workflow behind them.",
    title: "Advice without a system",
  },
];

export const solutionCards = [
  {
    description:
      "Focus on roles that are worth your time instead of treating every posting the same.",
    title: "Target better opportunities",
  },
  {
    description:
      "Generate role-specific materials without restarting from scratch every time.",
    title: "Tailor faster",
  },
  {
    description:
      "Increase your chances of getting noticed with stronger, more relevant applications.",
    title: "Stay visible where it matters",
  },
];

export const workflowSteps: WorkflowStep[] = [
  {
    body: "Start by linking your LinkedIn profile so Finch can build a richer picture of your experience, skills, and background.",
    caption: "Start with the profile you already maintain",
    id: "profile",
    image: productImage1,
    number: "01",
    title: "Connect your profile",
  },
  {
    body: "Keep searching on the platforms employers already use. Finch is designed to work alongside major ATS platforms as you browse.",
    caption: "Stay on Greenhouse, Lever, and Workday",
    id: "browse",
    image: productImage2,
    number: "02",
    title: "Browse internships as usual",
  },
  {
    body: "For each job, Finch creates a role-specific resume and cover letter that better match what the employer is looking for.",
    caption: "Tailored materials in seconds",
    id: "tailor",
    image: productImage3,
    number: "03",
    title: "Generate tailored materials in seconds",
  },
  {
    body: "Instead of re-entering the same details over and over, Finch helps fill out the application for you, including the repetitive parts that slow students down.",
    caption: "Reduce the drag of repetitive forms",
    id: "autofill",
    image: productImage4,
    number: "04",
    title: "Autofill the application",
  },
  {
    body: "Finch stops at the final review step so you stay in control before anything gets submitted.",
    caption: "Final review stays in your hands",
    id: "review",
    image: productImage5,
    number: "05",
    title: "Review, then submit with confidence",
  },
];

export const showcaseTabs: ShowcaseTab[] = [
  {
    description:
      "Finch helps create resumes that are aligned to the role in front of you, so you are not relying on one generic file for every application.",
    detail: "Tailor every application more intelligently without restarting from scratch.",
    image: productImage1,
    label: "Tailoring",
    title: "Tailored resumes",
  },
  {
    description:
      "Generate a stronger first draft in seconds, then refine it before submitting.",
    detail: "A product surface that feels fast, guided, and built around quality control.",
    image: productImage2,
    label: "Extension",
    title: "Faster cover letters",
  },
  {
    description:
      "Reduce the repetitive form work that makes internship season so draining.",
    detail: "Keep the repetitive fields moving while the signal-rich parts stay visible.",
    image: productImage3,
    label: "Autofill",
    title: "Application autofill",
  },
  {
    description:
      "Stay in charge at the last step. Finch is designed to speed up the process, not take away your judgment.",
    detail: "Finch supports the workflow without hiding the decision moment from the user.",
    image: productImage4,
    label: "Final Review",
    title: "Final review control",
  },
  {
    description:
      "Bring the full workflow together so every application feels less repetitive and more strategic.",
    detail: "What used to take 20 to 30 minutes can feel closer to a guided minute.",
    image: productImage5,
    label: "Speed",
    title: "A smoother recruiting rhythm",
  },
];

export const traditionalApplying = [
  "Open every application from scratch",
  "Re-enter the same information repeatedly",
  "Use one general resume for dozens of roles",
  "Spend 20 to 30 minutes on each application",
  "Hope volume alone leads to interviews",
];

export const finchApplying = [
  "Browse roles normally",
  "Tailor faster for each opportunity",
  "Cut repetitive form work",
  "Review before submitting",
  "Focus on interview probability, not just application count",
];

export const pricingTiers = [
  {
    cta: "Join the Waitlist",
    description:
      "A simple way to explore Finch and start applying more intentionally.",
    features: [
      "Basic workflow access",
      "Limited tailored applications",
      "Core application support",
      "Early product access",
    ],
    href: actionLinks.earlyAccess,
    name: "Free",
  },
  {
    cta: "Get Early Access",
    description:
      "For students deep in recruiting season who want more speed, more personalization, and more control.",
    featured: true,
    features: [
      "Expanded application support",
      "More tailored materials",
      "Faster workflows",
      "Priority access to new features",
    ],
    href: actionLinks.earlyAccess,
    name: "Premium",
    tag: "Most Popular",
  },
  {
    cta: "Contact Us",
    description:
      "Bring Finch to students at scale through a campus or program partnership.",
    features: [
      "Program-level access",
      "Student onboarding support",
      "Partnership discussions",
      "Custom rollout conversations",
    ],
    href: "/contact",
    name: "University Partnerships",
  },
];

export const faqItems: FaqItem[] = [
  {
    answer:
      "No. Finch is built to help students apply more strategically, not spam more applications. The goal is better targeting, stronger materials, and a smoother workflow.",
    question: "Is Finch an auto-apply bot?",
  },
  {
    answer:
      "No. Finch is designed to stop at final review so the user stays in control before submission.",
    question: "Does Finch submit applications for me automatically?",
  },
  {
    answer:
      "Finch is built primarily for students in engineering, computer science, and other competitive, high-volume internship pipelines.",
    question: "Who is Finch for?",
  },
  {
    answer:
      "Finch is designed around major ATS platforms used by employers, including platforms like Greenhouse, Lever, and Workday.",
    question: "What platforms does Finch support?",
  },
  {
    answer:
      "More applications do not always mean better results. Finch is built around improving the quality and relevance of each application, not just the quantity.",
    question: "Why not just apply to more jobs?",
  },
  {
    answer:
      "Finch is focused on interview probability. Instead of treating every application the same, it helps users apply with more intention and less wasted effort.",
    question: "What makes Finch different?",
  },
  {
    answer:
      "Finch is currently in early access. Join the waitlist to be first in line when access opens.",
    question: "Is Finch available now?",
  },
  {
    answer:
      "Yes. Finch is being built with both student tiers and university partnership options in mind.",
    question: "Will there be student and university plans?",
  },
];

export const founders: Founder[] = [
  {
    bio: "Focused on growth, relationships, and building ventures that create measurable impact.",
    image: nicanorHeadshot,
    label: "CEO & Co-founder",
    name: "Nicanor Garza-Zazueta",
  },
  {
    bio: "Focused on systems, operations, and solving complex problems with practical structure.",
    image: joseHeadshot,
    label: "CTO & Co-founder",
    name: "Jose Tirado",
  },
  {
    bio: "Focused on product, technical execution, and turning recruiting pain points into usable tools.",
    image: carlosHeadshot,
    label: "CTO & Co-founder",
    name: "Carlos Luna Pena",
  },
];

export const footerLinks = [
  { href: "/product", label: "Product" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const placeholderContactOptions = [
  {
    label: "Partnership conversations",
    name: "Nicanor Garza-Zazueta",
  },
  {
    label: "Technical and product questions",
    name: "Jose Tirado",
  },
  {
    label: "Product workflow and recruiting pain points",
    name: "Carlos Luna Pena",
  },
];

export const earlyAccessSteps = [
  "Share your email, school, and major",
  "Preview the extension and workflow direction",
  "Get notified when early access opens",
];

export const extensionHighlights = [
  "Works alongside major ATS platforms",
  "Reduces repetitive application form work",
  "Keeps final review in the student’s hands",
];

export const pricingStrategy = pricingStrategyImage;

export {
  productImage1,
  productImage2,
  productImage3,
  productImage4,
  productImage5,
};
