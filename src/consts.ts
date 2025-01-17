// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import { t } from "i18next";
// Site title and description
export const SITE_LANG = "en";
export const SITE_TAB = "Tanguy Frageul";
export const SITE_TITLE = "Tanguy Frageul's portoflio";
export const SITE_DESCRIPTION = "Discover Tanguy Frageul's portfolio: innovative web development projects built with Node.js, HTML, CSS, PHP, SQL, and more. Creative solutions and technical expertise to bring ideas to life.";
export const DATE_FORMAT = "ddd MMM DD YYYY";

// User profile information
export const USER_NAME = "Tanguy Frageul";
export const USER_SITE = "https://tanguy-fgl.github.io"; // At the same time, this is also the site retrieved by the i18n configuration.
export const USER_AVATAR = "https://avatars.githubusercontent.com/u/44116544";

// Server and transition settings
export const SERVER_URL = "https://tanguy-fgl.github.io";

// Theme settings
export const DAISYUI_THEME = {
  light: "winter",
  dark: "dracula",
};

export const CODE_THEME = {
  light: "github-light",
  dark: "github-dark",
};

// Menu items for navigation
export const menuItems = [
  { id: "home", text: t("navbar.home"), href: "/", svg: "material-symbols:home-outline-rounded", target: "_self" }, // Home page
  {
    id: "projects",
    text: t("navbar.projects"),
    href: "/projects",
    svg: "material-symbols:code-blocks-outline",
    target: "_self",
  }, // Projects page

  {
    id: "friends",
    text: t("navbar.friends"),
    href: "/friends",
    svg: "material-symbols:supervisor-account-outline-rounded",
    target: "_self",
  }, // Friends page
  {
    id: "blog",
    text: t("navbar.blogs"),
    href: "/blog",
    svg: "material-symbols:book-2-outline-rounded",
    target: "_self",
    subItems: [
      {
        id: "all",
        text: "All blogs",
        href: "/blog",
        svg: "material-symbols:ink-pen-outline-rounded",
        target: "_self",
      }, // All blog
      {
        id: "tech",
        text: "Tech blogs",
        href: "/blog/categories/tech",
        svg: "material-symbols:deployed-code-outline",
        target: "_self",
      }, // Technology category
      {
        id: "life",
        text: "Life blogs",
        href: "/blog/categories/life",
        svg: "material-symbols:earthquake-rounded",
        target: "_self",
      }, // Life category
    ],
  }, // Blog page with sub-items

  {
    id: "contact",
    text: t("navbar.contact"),
    href: "mailto:tanguyfrageul@gmail.com", // Contact email
    target: "_blank", // Open in a new tab
    svg: "material-symbols:attach-email-outline-rounded",
  },
  { id: "about", text: t("navbar.about"), href: "/about", svg: "material-symbols:info-outline-rounded", target: "_self" }, // About page
];

// Social media and contact icons
export const socialIcons = [
  {
    href: "https://paypal.me/tanguyfgl",
    ariaLabel: "Support my work",
    title: "Support my work",
    svg: "ri:paypal-line",
  },
  {
    href: "https://github.com/tanguy-fgl",
    ariaLabel: "Github",
    title: "Github",
    svg: "ri:github-line",
  },
  {
    href: "https://linkedin.com/in/tanguy-frageul",
    ariaLabel: "LinkedIn",
    title: "LinkedIn",
    svg: "ri:linkedin-box-line",
  },
  {
    href: "/rss.xml",
    ariaLabel: "RSS Feed",
    title: "RSS Feed",
    svg: "ri:rss-line",
  },
];
