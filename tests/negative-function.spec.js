import { test, expect } from "@playwright/test";

test("Handle completely missing spaces between all words", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("matakannabathonii");
  const outputText = page.getByText("මට කන්න බත් ඕනී");

  await expect(outputText).toBeVisible();
});

test("Handle severe misspelling throughout sentence", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("mm gdr ynw adh");
  const outputText = page.getByText("මම ගෙදර යනව අද");

  await expect(outputText).toBeVisible();
});

test("Handle informal chat abbreviations with slang", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("bruh wt r u doin rn?");
  const outputText = page.getByText("අයියේ මොකද්ද කරන්නේ දැන්?");

  await expect(outputText).toBeVisible();
});

test("Handle grammatically backwards word sequence", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("gedhara mama innava adha");
  const outputText = page.getByText("මම අද ගෙදර ඉන්නව");

  await expect(outputText).toBeVisible();
});

test("Handle conflicting tense markers in sentence", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("mama heta giyaa innava");
  const outputText = page.getByText("මම හෙට යන්නම්");

  await expect(outputText).toBeVisible();
});

test("Handle excessively repeated vowel sounds", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("mamaaaaa class yanavaaaaa");
  const outputText = page.getByText("මම class යනවා");

  await expect(outputText).toBeVisible();
});

test("Handle predominantly English sentence with minimal Singlish", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("I need to go office tomorrow because meeting is very important and cannot miss");
  const outputText = page.getByText("මට හෙට office යන්න ඕනෑ meeting එක ගොඩක් වැදගත් නිසා");

  await expect(outputText).toBeVisible();
});

test("Handle fragmented input with excessive breaks", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("mama/ngedhara/nyanavaa/nadha");
  const outputText = page.getByText("මම ගෙදර යනවා අද");

  await expect(outputText).toBeVisible();
});

test("Handle sentence with random number insertion", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("mama 999 gedhara 777 yanavaa 555");
  const outputText = page.getByText("මම ගෙදර යනවා");

  await expect(outputText).toBeVisible();
});

test("Handle input with only symbols and no text", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("@#$% ^&*() []{}");
  const outputText = page.getByText("Error or empty output");

  await expect(outputText).toBeVisible();
});

