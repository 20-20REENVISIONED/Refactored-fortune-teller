/**

 * The order of the zodiacs along a wheel.
 * @type {string[]}
 */
const zodiacOrder = [
  "zodiac-capricorn",
  "zodiac-sagittarius",
  "zodiac-scorpio",
  "zodiac-libra",
  "zodiac-virgo",
  "zodiac-leo",
  "zodiac-cancer",
  "zodiac-gemini",
  "zodiac-taurus",
  "zodiac-aries",
  "zodiac-pisces",
  "zodiac-aquarius",
];

/**
 * Mapping of zodiacs to their date range.
 * @type {Record<string, string>}
 */
const zodiacDateRanges = {
  "zodiac-capricorn": "date-range-capricorn",
  "zodiac-sagittarius": "date-range-sagittarius",
  "zodiac-scorpio": "date-range-scorpio",
  "zodiac-libra": "date-range-libra",
  "zodiac-virgo": "date-range-virgo",
  "zodiac-leo": "date-range-leo",
  "zodiac-cancer": "date-range-cancer",
  "zodiac-gemini": "date-range-gemini",
  "zodiac-taurus": "date-range-taurus",
  "zodiac-aries": "date-range-aries",
  "zodiac-pisces": "date-range-pisces",
  "zodiac-aquarius": "date-range-aquarius",
};

/**
 * Mapping of zodiac pairs to their college romance analysis.
 * @type {Map<string, string>}
 */
const romantic = new Map([
  ["romantic-aries-taurus", "description-romantic-aries-taurus"],
  ["romantic-aries-gemini", "description-romantic-aries-gemini"],
  ["romantic-aries-cancer", "description-romantic-aries-cancer"],
  ["romantic-aries-leo", "description-romantic-aries-leo"],
  ["romantic-aries-virgo", "description-romantic-aries-virgo"],
  ["romantic-aries-libra", "description-romantic-aries-libra"],
  ["romantic-aries-scorpio", "description-romantic-aries-scorpio"],
  ["romantic-aries-sagittarius", "description-romantic-aries-sagittarius"],
  ["romantic-aries-capricorn", "description-romantic-aries-capricorn"],
  ["romantic-aries-aquarius", "description-romantic-aries-aquarius"],
  ["romantic-aries-pisces", "description-romantic-aries-pisces"],
  ["romantic-taurus-gemini", "description-romantic-taurus-gemini"],
  ["romantic-taurus-cancer", "description-romantic-taurus-cancer"],
  ["romantic-taurus-leo", "description-romantic-taurus-leo"],
  ["romantic-taurus-virgo", "description-romantic-taurus-virgo"],
  ["romantic-taurus-libra", "description-romantic-taurus-libra"],
  ["romantic-taurus-scorpio", "description-romantic-taurus-scorpio"],
  ["romantic-taurus-sagittarius", "description-romantic-taurus-sagittarius"],
  ["romantic-taurus-capricorn", "description-romantic-taurus-capricorn"],
  ["romantic-taurus-aquarius", "description-romantic-taurus-aquarius"],
  ["romantic-taurus-pisces", "description-romantic-taurus-pisces"],
  ["romantic-gemini-cancer", "description-romantic-gemini-cancer"],
  ["romantic-gemini-leo", "description-romantic-gemini-leo"],
  ["romantic-gemini-virgo", "description-romantic-gemini-virgo"],
  ["romantic-gemini-libra", "description-romantic-gemini-libra"],
  ["romantic-gemini-scorpio", "description-romantic-gemini-scorpio"],
  ["romantic-gemini-sagittarius", "description-romantic-gemini-sagittarius"],
  ["romantic-gemini-capricorn", "description-romantic-gemini-capricorn"],
  ["romantic-gemini-aquarius", "description-romantic-gemini-aquarius"],
  ["romantic-gemini-pisces", "description-romantic-gemini-pisces"],
  ["romantic-cancer-leo", "description-romantic-cancer-leo"],
  ["romantic-cancer-virgo", "description-romantic-cancer-virgo"],
  ["romantic-cancer-libra", "description-romantic-cancer-libra"],
  ["romantic-cancer-scorpio", "description-romantic-cancer-scorpio"],
  ["romantic-cancer-sagittarius", "description-romantic-cancer-sagittarius"],
  ["romantic-cancer-capricorn", "description-romantic-cancer-capricorn"],
  ["romantic-cancer-aquarius", "description-romantic-cancer-aquarius"],
  ["romantic-cancer-pisces", "description-romantic-cancer-pisces"],
  ["romantic-leo-virgo", "description-romantic-leo-virgo"],
  ["romantic-leo-libra", "description-romantic-leo-libra"],
  ["romantic-leo-scorpio", "description-romantic-leo-scorpio"],
  ["romantic-leo-sagittarius", "description-romantic-leo-sagittarius"],
  ["romantic-leo-capricorn", "description-romantic-leo-capricorn"],
  ["romantic-leo-aquarius", "description-romantic-leo-aquarius"],
  ["romantic-leo-pisces", "description-romantic-leo-pisces"],
  ["romantic-virgo-libra", "description-romantic-virgo-libra"],
  ["romantic-virgo-scorpio", "description-romantic-virgo-scorpio"],
  ["romantic-virgo-sagittarius", "description-romantic-virgo-sagittarius"],
  ["romantic-virgo-capricorn", "description-romantic-virgo-capricorn"],
  ["romantic-virgo-aquarius", "description-romantic-virgo-aquarius"],
  ["romantic-virgo-pisces", "description-romantic-virgo-pisces"],
  ["romantic-libra-scorpio", "description-romantic-libra-scorpio"],
  ["romantic-libra-sagittarius", "description-romantic-libra-sagittarius"],
  ["romantic-libra-capricorn", "description-romantic-libra-capricorn"],
  ["romantic-libra-aquarius", "description-romantic-libra-aquarius"],
  ["romantic-libra-pisces", "description-romantic-libra-pisces"],
  ["romantic-scorpio-sagittarius", "description-romantic-scorpio-sagittarius"],
  ["romantic-scorpio-capricorn", "description-romantic-scorpio-capricorn"],
  ["romantic-scorpio-aquarius", "description-romantic-scorpio-aquarius"],
  ["romantic-scorpio-pisces", "description-romantic-scorpio-pisces"],
  [
    "romantic-sagittarius-capricorn",
    "description-romantic-sagittarius-capricorn",
  ],
  [
    "romantic-sagittarius-aquarius",
    "description-romantic-sagittarius-aquarius",
  ],
  ["romantic-sagittarius-pisces", "description-romantic-sagittarius-pisces"],
  ["romantic-capricorn-aquarius", "description-romantic-capricorn-aquarius"],
  ["romantic-capricorn-pisces", "description-romantic-capricorn-pisces"],
  ["romantic-aquarius-pisces", "description-romantic-aquarius-pisces"],
  ["romantic-aries-aries", "description-romantic-aries-aries"],
  ["romantic-taurus-taurus", "description-romantic-taurus-taurus"],
  ["romantic-gemini-gemini", "description-romantic-gemini-gemini"],
  ["romantic-cancer-cancer", "description-romantic-cancer-cancer"],
  ["romantic-leo-leo", "description-romantic-leo-leo"],
  ["romantic-virgo-virgo", "description-romantic-virgo-virgo"],
  ["romantic-libra-libra", "description-romantic-libra-libra"],
  ["romantic-scorpio-scorpio", "description-romantic-scorpio-scorpio"],
  [
    "romantic-sagittarius-sagittarius",
    "description-romantic-sagittarius-sagittarius",
  ],
  ["romantic-capricorn-capricorn", "description-romantic-capricorn-capricorn"],
  ["romantic-aquarius-aquarius", "description-romantic-aquarius-aquarius"],
  ["romantic-pisces-pisces", "description-romantic-pisces-pisces"],
]);

export { zodiacOrder, zodiacDateRanges, romantic };
