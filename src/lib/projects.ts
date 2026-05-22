import together from "@/assets/project-together.png";
import assortment from "@/assets/project-assortment.png";
import kooga from "@/assets/project-kooga.png";
import homeintegrity from "@/assets/project-homeintegrity.png";
import vinka from "@/assets/project-vinka.png";
import crimsonbadger from "@/assets/project-crimsonbadger.png";
import tinypools from "@/assets/project-tinypools.png";
import goodfood from "@/assets/project-goodfood.png";
import larsons from "@/assets/project-larsons.png";
import primegrafix from "@/assets/project-primegrafix.png";
import bravalingerie from "@/assets/project-bravalingerie.png";

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
  {
    slug: "home-integrity",
    title: "Home Integrity",
    tagline: "Award-winning building inspections site for Perth & WA.",
    url: "https://homeintegrity.com.au",
    image: homeintegrity,
    year: "2024",
    role: "WordPress Developer",
    stack: ["WordPress", "ACF Pro", "Custom Theme", "Gravity Forms", "PHP"],
    description:
      "A multi-location building-inspection brand needed a site that converted visitors into bookings. Built a custom theme with location-aware service pages, an instant-quote funnel, and a maintainable block library for the in-house team.",
  },
  {
    slug: "vinka-design",
    title: "Vinka Design",
    tagline: "Bespoke bridal couture with a multi-currency store.",
    url: "https://vinkadesign.co.nz",
    image: vinka,
    year: "2024",
    role: "WordPress / WooCommerce Developer",
    stack: ["WordPress", "WooCommerce", "Multi-currency", "ACF", "Custom Theme"],
    description:
      "New Zealand's leading bridal house since 1959. Delivered a refined editorial WooCommerce experience: gown collections, consultation booking, multi-currency pricing, and international shipping.",
  },
  {
    slug: "crimson-badger",
    title: "Crimson Badger Brewing",
    tagline: "Craft brewery e-commerce with age-gated storefront.",
    url: "https://crimsonbadger.co.nz",
    image: crimsonbadger,
    year: "2024",
    role: "WordPress / WooCommerce Developer",
    stack: ["WordPress", "WooCommerce", "Age Verification", "Custom Theme", "PHP"],
    description:
      "A craft brewery wanted to sell direct without losing their wild brand voice. Built a WooCommerce store with age verification, stockist map, and a product system tuned for limited drops and seasonal releases.",
  },
  {
    slug: "tiny-pools",
    title: "Tiny Pools NZ",
    tagline: "Configurable kit-set plunge pools with combo deal builder.",
    url: "https://tinypools.co.nz/",
    image: tinypools,
    year: "2024",
    role: "WordPress Developer",
    stack: ["WordPress", "WooCommerce", "Custom Configurator", "ACF Pro"],
    description:
      "A playful, retro brand selling concrete plunge pools nationwide. Built a configurable product flow for kit-set pools plus a 'combo deals' module that bundles pools with spas — all editable by the client without touching code.",
  },
  {
    slug: "goodfood-group",
    title: "Goodfood Group",
    tagline: "Premium food importer brand site with catalogue & ordering.",
    url: "https://goodfoodgroup.co.nz",
    image: goodfood,
    year: "2024",
    role: "WordPress Developer",
    stack: ["WordPress", "ACF Pro", "Custom Theme", "Upstock Integration"],
    description:
      "A B2B food importer with a portfolio of premium brands (Emborg, Rana, Tai-Yo and more). Built a brand-led marketing site with structured brand and product catalogues, plus integration with Upstock for foodservice ordering.",
  },
  {
    slug: "larsons-pharmacy",
    title: "Larson's Pharmacy",
    tagline: "Full WooCommerce pharmacy with rewards & complex compliance.",
    url: "https://larsonspharmacy.co.nz/",
    image: larsons,
    year: "2023",
    role: "Senior WordPress / WooCommerce Developer",
    stack: ["WordPress", "WooCommerce", "Rewards Plugin", "Wishlist", "PHP"],
    description:
      "A full-scale online pharmacy with thousands of SKUs, prescription-medicine compliance, a points-based rewards system, wishlists, and sale management. Performance-tuned for a large catalogue and seasonal traffic.",
  },
  {
    slug: "prime-grafix",
    title: "Prime Grafix",
    tagline: "Branded presentation specialists — product store & solutions.",
    url: "https://www.primegrafix.com.au/",
    image: primegrafix,
    year: "2023",
    role: "WordPress / WooCommerce Developer",
    stack: ["WordPress", "WooCommerce", "Custom Theme", "ACF Pro"],
    description:
      "Australian master distributor for Peleman branded presentation products. Built a store, services, and applications system on WooCommerce with deep product taxonomies and account-based ordering.",
  },
];
