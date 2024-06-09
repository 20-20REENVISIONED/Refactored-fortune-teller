import {
  roundAngle,
  getMappingLeft,
  getMappingRight,
  determineDateRangeLeft,
  determineDateRangeRight,
  determinePairing,
  textGenerator,
  angleDiff,
} from "../source/love-compatibility/zodiac-angles.js";

describe("roundAngle Tests", () => {
  test("should round positive angles correctly", () => {
    // Test cases for positive angles
    expect(roundAngle(0)).toBe(0);
    expect(roundAngle(30)).toBe(30);
    expect(roundAngle(45)).toBe(60);
    expect(roundAngle(75)).toBe(90);
    expect(roundAngle(105)).toBe(120);

    // Test cases for very large positive angles
    expect(roundAngle(400)).toBe(390);
    expect(roundAngle(430)).toBe(420);
    expect(roundAngle(800)).toBe(810);
  });

  test("should round negative angles correctly", () => {
    // Test cases for negative angles
    // the function will always round up if there is a tie
    expect(roundAngle(-30)).toBe(-30);
    expect(roundAngle(-45)).toBe(-30);
    expect(roundAngle(-75)).toBe(-60);
    expect(roundAngle(-105)).toBe(-90);

    // Test cases for very small negative angles
    expect(roundAngle(-400)).toBe(-390);
    expect(roundAngle(-430)).toBe(-420);
    expect(roundAngle(-800)).toBe(-810);
  });
});

describe("getMappingLeft Tests", () => {
  test("should return the corresponding zodiac sign for a positive rounded angle", () => {
    expect(getMappingLeft(0)).toBe("zodiac-capricorn");
    expect(getMappingLeft(30)).toBe("zodiac-sagittarius");
    expect(getMappingLeft(60)).toBe("zodiac-scorpio");
    expect(getMappingLeft(90)).toBe("zodiac-libra");
    expect(getMappingLeft(120)).toBe("zodiac-virgo");
    expect(getMappingLeft(150)).toBe("zodiac-leo");
    expect(getMappingLeft(180)).toBe("zodiac-cancer");
    expect(getMappingLeft(210)).toBe("zodiac-gemini");
    expect(getMappingLeft(240)).toBe("zodiac-taurus");
    expect(getMappingLeft(270)).toBe("zodiac-aries");
    expect(getMappingLeft(300)).toBe("zodiac-pisces");
    expect(getMappingLeft(330)).toBe("zodiac-aquarius");
    expect(getMappingLeft(360)).toBe("zodiac-capricorn");
  });
  test("should return the corresponding zodiac sign for a negative rounded angle", () => {
    expect(getMappingLeft(-30)).toBe("zodiac-aquarius");
    expect(getMappingLeft(-60)).toBe("zodiac-pisces");
    expect(getMappingLeft(-90)).toBe("zodiac-aries");
    expect(getMappingLeft(-120)).toBe("zodiac-taurus");
    expect(getMappingLeft(-150)).toBe("zodiac-gemini");
    expect(getMappingLeft(-180)).toBe("zodiac-cancer");
    expect(getMappingLeft(-210)).toBe("zodiac-leo");
    expect(getMappingLeft(-240)).toBe("zodiac-virgo");
    expect(getMappingLeft(-270)).toBe("zodiac-libra");
    expect(getMappingLeft(-300)).toBe("zodiac-scorpio");
    expect(getMappingLeft(-330)).toBe("zodiac-sagittarius");
    expect(getMappingLeft(-360)).toBe("zodiac-capricorn");
  });
  test('should return "unknown" for an unrounded angle', () => {
    expect(getMappingLeft(45)).toBe("unknown");
    expect(getMappingLeft(123)).toBe("unknown");
    expect(getMappingLeft(-15)).toBe("unknown");
    expect(getMappingLeft(361)).toBe("unknown");
  });
});

describe("getMappingRight", () => {
  test("should return the corresponding zodiac sign for a rounded positive angle", () => {
    expect(getMappingRight(0)).toBe("zodiac-cancer");
    expect(getMappingRight(30)).toBe("zodiac-gemini");
    expect(getMappingRight(60)).toBe("zodiac-taurus");
    expect(getMappingRight(90)).toBe("zodiac-aries");
    expect(getMappingRight(120)).toBe("zodiac-pisces");
    expect(getMappingRight(150)).toBe("zodiac-aquarius");
    expect(getMappingRight(180)).toBe("zodiac-capricorn");
    expect(getMappingRight(210)).toBe("zodiac-sagittarius");
    expect(getMappingRight(240)).toBe("zodiac-scorpio");
    expect(getMappingRight(270)).toBe("zodiac-libra");
    expect(getMappingRight(300)).toBe("zodiac-virgo");
    expect(getMappingRight(330)).toBe("zodiac-leo");
    expect(getMappingRight(360)).toBe("zodiac-cancer");
  });

  test("should return the corresponding zodiac sign for a rounded negative angle", () => {
    expect(getMappingRight(-30)).toBe("zodiac-leo");
    expect(getMappingRight(-60)).toBe("zodiac-virgo");
    expect(getMappingRight(-90)).toBe("zodiac-libra");
    expect(getMappingRight(-120)).toBe("zodiac-scorpio");
    expect(getMappingRight(-150)).toBe("zodiac-sagittarius");
    expect(getMappingRight(-180)).toBe("zodiac-capricorn");
    expect(getMappingRight(-210)).toBe("zodiac-aquarius");
    expect(getMappingRight(-240)).toBe("zodiac-pisces");
    expect(getMappingRight(-270)).toBe("zodiac-aries");
    expect(getMappingRight(-300)).toBe("zodiac-taurus");
    expect(getMappingRight(-330)).toBe("zodiac-gemini");
    expect(getMappingRight(-360)).toBe("zodiac-cancer");
  });

  test('should return "unknown" for an unknown angle', () => {
    expect(getMappingRight(45)).toBe("unknown");
    expect(getMappingRight(123)).toBe("unknown");
    expect(getMappingRight(-15)).toBe("unknown");
    expect(getMappingLeft(361)).toBe("unknown");
  });
});

describe("determineDateRangeLeft Tests", () => {
  test("should return the corresponding date range for the zodiac sign returned by determineDateRangeLeft", () => {
    expect(determineDateRangeLeft(0)).toBe("date-range-capricorn"); // Capricorn
    expect(determineDateRangeLeft(30)).toBe("date-range-sagittarius"); // Sagittarius
    expect(determineDateRangeLeft(60)).toBe("date-range-scorpio"); // Scorpio
    expect(determineDateRangeLeft(90)).toBe("date-range-libra"); // Libra
    expect(determineDateRangeLeft(120)).toBe("date-range-virgo"); // Virgo
    expect(determineDateRangeLeft(150)).toBe("date-range-leo"); // Leo
    expect(determineDateRangeLeft(180)).toBe("date-range-cancer"); // Cancer
    expect(determineDateRangeLeft(210)).toBe("date-range-gemini"); // Gemini
    expect(determineDateRangeLeft(240)).toBe("date-range-taurus"); // Taurus
    expect(determineDateRangeLeft(270)).toBe("date-range-aries"); // Aries
    expect(determineDateRangeLeft(300)).toBe("date-range-pisces"); // Pisces
    expect(determineDateRangeLeft(330)).toBe("date-range-aquarius"); // Aquarius
  });

  test('should return "unknown" for an unknown angle', () => {
    expect(determineDateRangeLeft(45)).toBe("unknown");
    expect(determineDateRangeLeft(123)).toBe("unknown");
    expect(determineDateRangeLeft(500)).toBe("unknown");
  });
});

describe("determineDateRangeRight Tests", () => {
  test("should return the corresponding date range for a known zodiac sign", () => {
    expect(determineDateRangeRight(0)).toBe("date-range-cancer"); // Cancer
    expect(determineDateRangeRight(30)).toBe("date-range-gemini"); // Gemini
    expect(determineDateRangeRight(60)).toBe("date-range-taurus"); // Taurus
    expect(determineDateRangeRight(90)).toBe("date-range-aries"); // Aries
    expect(determineDateRangeRight(120)).toBe("date-range-pisces"); // Pisces
    expect(determineDateRangeRight(150)).toBe("date-range-aquarius"); // Aquarius
    expect(determineDateRangeRight(180)).toBe("date-range-capricorn"); // Capricorn
    expect(determineDateRangeRight(210)).toBe("date-range-sagittarius"); // Sagittarius
    expect(determineDateRangeRight(240)).toBe("date-range-scorpio"); // Scorpio
    expect(determineDateRangeRight(270)).toBe("date-range-libra"); // Libra
    expect(determineDateRangeRight(300)).toBe("date-range-virgo"); // Virgo
    expect(determineDateRangeRight(330)).toBe("date-range-leo"); // Leo
  });

  test('should return "unknown" for an unknown angle', () => {
    expect(determineDateRangeRight(45)).toBe("unknown");
    expect(determineDateRangeRight(123)).toBe("unknown");
  });
});

describe("determinePairing Tests", () => {
  test("should return the zodiac sign pair for various angles", () => {
    expect(determinePairing(120, 210)).toEqual([
      "zodiac-virgo",
      "zodiac-sagittarius",
    ]);
    expect(determinePairing(240, 330)).toEqual(["zodiac-taurus", "zodiac-leo"]);
    expect(determinePairing(270, 150)).toEqual([
      "zodiac-aries",
      "zodiac-aquarius",
    ]);
    // Add more test cases for different angle pairs and expected zodiac sign pairs
  });

  test("should return the zodiac sign pair when angles exceed 360 degrees and negative angles", () => {
    expect(determinePairing(390, -45)).toEqual([
      "zodiac-sagittarius",
      "unknown",
    ]);
    expect(determinePairing(-180, 420)).toEqual([
      "zodiac-cancer",
      "zodiac-taurus",
    ]);
    // Add more test cases for angles greater than 360 degrees and negative angles
  });

  test("should return the unknown for unrounded angles", () => {
    expect(determinePairing(45, 135)).toEqual(["unknown", "unknown"]);
    expect(determinePairing(-361, 361)).toEqual(["unknown", "unknown"]);
    // Add more test cases for unknown angles
  });
});

describe("textGenerator Tests", () => {
  test("should generate the matching romantic compatibility text for various zodiac sign pairs", () => {
    expect(textGenerator("aries", "taurus")).toBe(
      "description-romantic-aries-taurus"
    );

    //There is no capricorn-gemini entry but there is one for the otherway
    //around so that's should be returned.
    expect(textGenerator("capricorn", "gemini")).toBe(
      "description-romantic-gemini-capricorn"
    );

    //Similar to above test.
    expect(textGenerator("pisces", "cancer")).toBe(
      "description-romantic-cancer-pisces"
    );
    expect(textGenerator("virgo", "virgo")).toBe(
      "description-romantic-virgo-virgo"
    );
  });
  test("should tell the user there's an error if an unknown pair is passed into the function", () => {
    expect(textGenerator("unknown", "unknown")).toBe("error-occurred");
  });
});

// Generated by ChatGPT, except some of its expectations were wrong.
describe("angleDiff", () => {
  test("returns the correct difference when angle > base", () => {
    const angle = 120;
    const base = 30;
    const result = angleDiff(angle, base);
    expect(result).toBe(90);
  });

  test("returns the correct difference when angle < base", () => {
    const angle = 30;
    const base = 120;
    const result = angleDiff(angle, base);
    expect(result).toBe(-90);
  });

  test("returns 0 when angle and base are equal", () => {
    const angle = 90;
    const base = 90;
    const result = angleDiff(angle, base);
    expect(result).toBe(0);
  });

  test("returns the correct difference when angle and base are opposite", () => {
    const angle = -170;
    const base = 170;
    const result = angleDiff(angle, base);
    expect(result).toBe(20);
  });

  test("returns the correct difference when angle and base are negative", () => {
    const angle = -30;
    const base = -60;
    const result = angleDiff(angle, base);
    expect(result).toBe(30);
  });

  test("returns the correct difference when angle and base are positive", () => {
    const angle = 200;
    const base = 100;
    const result = angleDiff(angle, base);
    expect(result).toBe(100);
  });

  test("returns the correct difference when angle is near 180° and base is negative", () => {
    const angle = 179;
    const base = -179;
    const result = angleDiff(angle, base);
    expect(result).toBe(-2);
  });

  test("returns the correct difference when angle is near -180° and base is positive", () => {
    const angle = -179;
    const base = 179;
    const result = angleDiff(angle, base);
    expect(result).toBe(2);
  });

  test("returns the correct difference when angle is near 180° and base is positive", () => {
    const angle = 179;
    const base = 1;
    const result = angleDiff(angle, base);
    expect(result).toBe(178);
  });

  test("returns the correct difference when angle is near -180° and base is negative", () => {
    const angle = -179;
    const base = -1;
    const result = angleDiff(angle, base);
    expect(result).toBe(-178);
  });
});
