// @ts-check

/**
 * @file Creates a navigation menu that gets added to all pages on the web app,
 * linking all pages with each other.
 */

/**
 * Defines an entry in the navigation menu.
 * @typedef {object} Link
 * @property {string} label - The text to show for the link.
 * @property {string} url - The URL of the page to link to.
 * @property {string} imageUrlBase - The URL base of the image icon to show next
 *  to the link text.
 * @property {string[]} imageFormats - The possible formats for the image icons.
 * This is just appended to the URL base to create valid references. Each string
 * must start with a "." and the array is ordered from highest priority to least
 * priority.
 */

/**
 * The list of entries in the navigation menu.
 * @type {Link[]}
 */
const links = [
  {
    label: "Home",
    url: "../home-page/",
    imageUrlBase: "../common/icons/home",
    imageFormats: [".svg"],
  },
  {
    label: "Love Compatibility",
    url: "../love-compatibility/",
    imageUrlBase: "../home-page/images/new-love-compatibility-img",
    imageFormats: [".avif", ".webp", ".jpg"],
  },
  {
    label: "Fortune Cookie",
    url: "../fortune-cookie/",
    imageUrlBase: "../home-page/images/new-fortune-cookie-img",
    imageFormats: [".avif", ".webp", ".jpg"],
  },
  {
    label: "Palm Reading",
    url: "../palm-reading/",
    imageUrlBase: "../home-page/images/new-palm-reading-img",
    imageFormats: [".avif", ".webp", ".jpg"],
  },
  {
    label: "Settings",
    url: "../settings/",
    imageUrlBase: "../common/icons/settings-img",
    imageFormats: [".svg"],
  },
];

/**
 * The created `<nav>` element that gets prepended to `<body>` containing the
 * navigation menu.
 * @type {HTMLElement}
 */
const nav = document.createElement("nav");
nav.className = "site-nav";

/**
 * The menu icon, which is a focusable element to allow the menu contents to be
 * tab accessible.
 * @type {HTMLAnchorElement}
 */
const menuButton = document.createElement("a");
menuButton.className = "site-nav-menu-icon";
menuButton.tabIndex = 0;
nav.append(menuButton);

for (const { label, imageUrlBase, url, imageFormats } of links) {
  const link = document.createElement("a");
  link.className = "site-nav-link";
  link.href = url;
  nav.append(link);

  const picture = document.createElement("picture");

  const image = document.createElement("img");
  image.className = "site-nav-image";
  image.src = imageUrlBase + imageFormats.pop();

  for (const format of imageFormats) {
    const source = document.createElement("source");
    source.srcset = imageUrlBase + format;
    picture.append(source);
  }

  picture.append(image);

  link.append(picture, label);
}

document.body.prepend(nav);
