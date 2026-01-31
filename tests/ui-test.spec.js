import { test, expect } from "@playwright/test";

test("Real-time conversion updates as user types", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("mama adha library ekata gihilla assignment eka complete karanna gaththa");
  
  const outputText = page.getByText("මම අද library එකට ගිහිල්ල assignment එක complete කරන්න ගත්ත");

  await expect(outputText).toBeVisible();
});
