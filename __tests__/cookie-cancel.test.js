import { BASE } from "./consts.js";

describe("Basic user flow for Website", () => {
  // First, visit the fortune cookie website
  beforeAll(async () => {
    await page.goto(`${BASE}/source/fortune-cookie/`);
  });

  // Testing clicking cancel button

  // Check to make sure that cancel button cancel button works when clicked after fortune button is clicked
  it("Make sure cancel button works when clicked after fortune button is clicked", async () => {
    const fortuneButton = await page.$("#fortune-button");
    await fortuneButton.click();

    // Skip animation button should appear
    await page.waitForSelector("#cancel-animation-btn", { visible: true });
    const cancelButton = await page.$("#cancel-animation-btn");
    await cancelButton.click();
    // Skip animation button should disappear
    await page.waitForSelector("#cancel-animation-btn", { visible: false });

    // Fortune button should be disabled
    await page.waitForFunction(() => {
      const fortuneButton = document.querySelector("#fortune-button");
      return fortuneButton && fortuneButton.disabled === true;
    });

    // Check that fortune button is now disabled
    let fortuneButtonDisabled;
    let booleanValue = await fortuneButton.getProperty("disabled");
    fortuneButtonDisabled = await booleanValue.jsonValue();
    expect(fortuneButtonDisabled).toBe(true);

    // Cookie button should be disabled
    let cookieButtonDisabled;
    const cookieButton = await page.$("#cookie-button");
    booleanValue = await cookieButton.getProperty("disabled");
    cookieButtonDisabled = await booleanValue.jsonValue();
    expect(cookieButtonDisabled).toBe(true);

    // Reset button should be enabled
    let resetButtonDisabled;
    const resetButton = await page.$("#reset-button");
    booleanValue = await resetButton.getProperty("disabled");
    resetButtonDisabled = await booleanValue.jsonValue();
    expect(resetButtonDisabled).toBe(false);

    // fortune paper should be visible
    let elementHasClass = await page.evaluate(() => {
      const fortunePaper = document.querySelector("#fortune-paper");
      return fortunePaper.classList.contains("reveal");
    });
    expect(elementHasClass).toBe(true);

    // cancel button should not have animating class
    elementHasClass = await page.evaluate(() => {
      const cancelButton = document.querySelector("#cancel-animation-btn");
      return cancelButton.parentElement.classList.contains("animating");
    });
    expect(elementHasClass).toBe(false);

    // cancel button should not have cancel-animation-wrapper class (only after reset button is clicked and before fortune/cookie button is clicked again)
    elementHasClass = await page.evaluate(() => {
      const cancelButton = document.querySelector("#cancel-animation-btn");
      return cancelButton.parentElement.classList.contains(
        "animating-new-cookie"
      );
    });
    expect(elementHasClass).toBe(false);
  }, 5000);
});
