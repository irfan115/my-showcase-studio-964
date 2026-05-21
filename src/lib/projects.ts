import together from "@/assets/project-together.png";
import assortment from "@/assets/project-assortment.png";
import kooga from "@/assets/project-kooga.png";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  url: string;
  image: string;
  year: string;
  role: string;
  stack: string[];
  description: string;
};

export const projects: Project[] = [
  {
    slug: "together-journal",
    title: "Together Journal",
    tagline: "Editorial commerce for a print wedding journal.",
    url: "https://togetherjournal.com/",
    image: together,
    year: "2024",
    role: "Lead WordPress / WooCommerce Developer",
    stack: ["WordPress", "WooCommerce", "ACF Pro", "Custom Theme", "PHP", "JS"],
    description:
      "A WooCommerce build for an independent print journal — custom theme, subscription products, editorial directory, and a finely-tuned checkout. Focused on typography-led storytelling without sacrificing conversion.",
  },
  {
    slug: "assortment-foods",
    title: "Assortment Foods",
    tagline: "Membership meal-planning platform with weekly menu builder.",
    url: "https://assortmentfoods.com/",
    image: assortment,
    year: "2024",
    role: "Full-stack WordPress Developer",
    stack: ["WordPress", "WooCommerce Subscriptions", "Custom Plugin", "Stripe", "ACF"],
    description:
      "Built a gated membership experience on WordPress: recipe library, custom menu builder, auto-generated shopping lists, and a 7-day free trial flow. Designed and shipped the custom plugin powering meal planning.",
  },
  {
    slug: "kooga-nz",
    title: "Kooga New Zealand",
    tagline: "Custom team-kit configurator and B2B storefront.",
    url: "https://kooga.co.nz/",
    image: kooga,
    year: "2023",
    role: "WordPress / WooCommerce Developer",
    stack: ["WordPress", "WooCommerce", "Custom Configurator", "PHP", "Tailwind"],
    description:
      "A sportswear platform with a design-your-own-kit configurator, club accounts, and bulk ordering. Optimised for a small team to manage hundreds of custom orders per season.",
  },
];
