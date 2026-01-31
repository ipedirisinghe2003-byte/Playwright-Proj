import { test, expect } from "@playwright/test";

test("Convert a daily status inquiry", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("oyaagee kadee kohedha?");
  const outputText = page.getByText("ඔයාගේ කඩේ කොහෙද?");

  await expect(outputText).toBeVisible();
});

test("Convert a simple past action statement", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("eyaa iiyee university giyaa");
  const outputText = page.getByText("එයා ඊයේ university ගියා");

  await expect(outputText).toBeVisible();
});

test("Convert a polite request with English term", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("ikmanata message eka evanna");
  const outputText = page.getByText("ඉක්මනට message එක එවන්න");

  await expect(outputText).toBeVisible();
});

test("Convert a future plan with time reference", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("api heta shopping yamu");
  const outputText = page.getByText("අපි හෙට shopping යමු");

  await expect(outputText).toBeVisible();
});

test("Convert a negative statement with ability", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("mata eka karanna bae");
  const outputText = page.getByText("මට එක කරන්න බැ");

  await expect(outputText).toBeVisible();
});

test("Convert an exclamatory informal phrase", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("hari boring ekak!");
  const outputText = page.getByText("හරි boring එකක්!");

  await expect(outputText).toBeVisible();
});

test("Convert a possessive relationship sentence", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("oya magee best friend");
  const outputText = page.getByText("ඔය මගේ best friend");

  await expect(outputText).toBeVisible();
});

test("Convert a question about location", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("movie eka 11.00 AM ta patan gannavaa.");
  const outputText = page.getByText("movie එක 11.00 AM ට පටන් ගන්නවා.");

  await expect(outputText).toBeVisible();
});

test("Convert a sentence with price information", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("eka Rs. 2500 k vitharayi");
  const outputText = page.getByText("එක Rs. 2500 ක් විතරයි");

  await expect(outputText).toBeVisible();
});

test("Convert a question with plural subject", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("oyaalaa kavadhdha aavee?");
  const outputText = page.getByText("ඔයාලා කවද්ද ආවේ?");

  await expect(outputText).toBeVisible();
});

test("Convert an informal greeting response", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("mama lassanayi ayiyee");
  const outputText = page.getByText("මම ලස්සනයි අයියේ");

  await expect(outputText).toBeVisible();
});

test("Convert a compound sentence with two actions", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("ohu ground yanna hadhanavaa");
  const outputText = page.getByText("ඔහු ground යන්න හදනවා");

  await expect(outputText).toBeVisible();
});

test("Convert a complex sentence with condition", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("vaessa vunoth api picnic eka cancel karanna veyi");
  const outputText = page.getByText("වැස්ස වුනොත් අපි picnic එක cancel කරන්න වෙයි");

  await expect(outputText).toBeVisible();
});

test("Convert a sentence with appointment time", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("doctor appointment eka 10.00 AM ta");
  const outputText = page.getByText("doctor appointment එක 10.00 AM ට");

  await expect(outputText).toBeVisible();
});

test("Convert a statement with place name", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("api Kandy valata travel karanava");
  const outputText = page.getByText("අපි Kandy වලට travel කරනව");

  await expect(outputText).toBeVisible();
});

test("Convert a sentence with extra spacing", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("mama gedhara yanava");
  const outputText = page.getByText("මම ගෙදර යනව");

  await expect(outputText).toBeVisible();
});

test("Convert an informal slang expression", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("machan eka godak cool!");
  const outputText = page.getByText("මචන් එක ගොඩක් cool!");

  await expect(outputText).toBeVisible();
});

test("Convert a need expression with politeness", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("heta call ekak dhennavadha?");
  const outputText = page.getByText("හෙට call එකක් දෙන්නවද?");

  await expect(outputText).toBeVisible();
});

test("Convert a sentence with date format", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("exam eka 15/03/2025 ta thiyenava");
  const outputText = page.getByText("exam එක 15/03/2025 ට තියෙනව");

  await expect(outputText).toBeVisible();
});

test("Convert a collaborative suggestion", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("api ekka group study karamu");
  const outputText = page.getByText("අපි එක්ක group study කරමු");

  await expect(outputText).toBeVisible();
});

test("Convert a very short exclamation", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("wow!");
  const outputText = page.getByText("wow!");

  await expect(outputText).toBeVisible();
});

test("Convert a medium narrative with multiple events", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("mama adha morning ekee gym ekata giyaa. godak exercises kalaa. passee protein shake ekak bonava. dhaen mama refresh vela innava.");
  const outputText = page.getByText("මම අද morning එකේ gym එකට ගියා. ගොඩක් exercises කලා. පස්සේ protein shake එකක් බොනව. දැන් මම refresh වෙල ඉන්නව.");

  await expect(outputText).toBeVisible();
});

test("Convert a multi-line input with questions", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("mama assignment eka karala ivarayi. oyaa kaaladha karanne? api ekka karanna enavadha?");
  const outputText = page.getByText("මම assignment එක කරල ඉවරයි. ඔයා කාලද කරන්නේ? අපි එක්ක කරන්න එනවද?");

  await expect(outputText).toBeVisible();
});

test("Convert a long professional email-style paragraph", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("mama oyaata kiyanna hadhannee mama adha presentation eka complete kalaa kiyalaa. api discuss kala haema requirements tikama include karalaa thiyenava. slides tika design eka hari professional saha content eka clear. mata thiyena poddak issue ekak thamayi final data tika verify karanna oona eka. oyaa enavaanam mata Thursday velaa call ekak dhenna. api final version eka review karala Friday client presentation ekata submit karanna oona. project timeline eka maintain karanna mama poddak pressure ekak feel karanavaa. ehenam thank you very much oyaage support ekata.");

  const outputText = page.getByText("මම ඔයාට කියන්න හදන්නේ මම අද presentation එක complete කලා කියලා. අපි discuss කල හැම requirements ටිකම include කරලා තියෙනව. slides ටික design එක හරි professional සහ content එක clear. මට තියෙන පොඩ්ඩක් issue එකක් තමයි final data ටික verify කරන්න ඕන එක. ඔයා එනවානම් මට Thursday වෙලා call එකක් දෙන්න. අපි final version එක review කරල Friday client presentation එකට submit කරන්න ඕන. project timeline එක maintain කරන්න මම පොඩ්ඩක් pressure එකක් feel කරනවා. එහෙනම් thank you very much ඔයාගෙ support එකට.");

  await expect(outputText).toBeVisible();
}); 
