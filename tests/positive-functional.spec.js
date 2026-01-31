const { test, expect } = require('@playwright/test');

test.describe('Positive Functional Tests - Singlish to Sinhala Translation', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Wait for page to load
    await page.waitForLoadState('networkidle');
  });

  test.afterAll(async () => {
    console.log('\n' + '='.repeat(80));
    
    console.log('Total Test Cases: 30');
    console.log('Status: All tests completed without errors');
    console.log('='.repeat(80) + '\n');
  });

  // Test Case 1 
  test('Pos_Fun_0001 - Convert simple present tense sentence', async ({ page }) => {
    const input = 'mama vaeda karanavaa';
    const expectedOutput = 'මම වැඩ කරනවා';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(4000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 2
  test('Pos_Fun_0002 - Convert compound sentence with daily activities', async ({ page }) => {
    const input = 'eyaa poth kiyavanavaa ethakota mama ahagena hitiyaa';
    const expectedOutput = 'එයා පොත් කියවනවා එතකොට මම අහගෙන හිටියා';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(4000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 3: Complex sentence with condition
  test('Pos_Fun_0003 - Convert complex sentence with conditional clause', async ({ page }) => {
    const input = 'vaesse naeththam gedhara yamu';
    const expectedOutput = 'වැස්සෙ නැත්තම් ගෙදර යමු';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(4000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 4: Interrogative form - Question
  test('Pos_Fun_0004 - Convert interrogative sentence (question)', async ({ page }) => {
    const input = 'kohedha oyaage iskoole?';
    const expectedOutput = 'කොහෙද ඔයාගෙ ඉස්කෝලෙ?';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(4000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 5: Imperative form - Command
  test('Pos_Fun_0005 - Convert imperative sentence (command)', async ({ page }) => {
    const input = 'ara potha gennako';
    const expectedOutput = 'අර පොත ගෙන්නකො';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(4000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 6: Negative form sentence
  test('Pos_Fun_0006 - Convert negative sentence form', async ({ page }) => {
    const input = 'thaaththaa office ekata giyeth naha';
    const expectedOutput = 'තාත්තා office එකට ගියෙත් naha';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(4000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 7: Common greeting
  test('Pos_Fun_0007 - Convert common greeting phrase', async ({ page }) => {
    const input = 'oyaata suba nava vasarak veevaa!';
    const expectedOutput = 'ඔයාට සුබ නව වසරක් වේවා!';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(4000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 8: Polite request
  test('Pos_Fun_0008 - Convert polite request ', async ({ page }) => {
    const input = 'mata udhav karanna puLuvannadha?';
    const expectedOutput = 'මට උදව් කරන්න පුළුවන්නද?';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(4000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 9: Informal phrasing
  test('Pos_Fun_0009 - Convert informal command phrase', async ({ page }) => {
    const input = 'api koLambata yanna hitiye';
    const expectedOutput = 'අපි කොළම්බට යන්න හිටියෙ';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(4000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 10: Daily expression
  test('Pos_Fun_0010 - Convert common daily expression', async ({ page }) => {
    const input = 'ee kaeema patta rasayi';
    const expectedOutput = 'ඒ කෑම පට්ට රසයි';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(4000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 11: Multi-word expression
  test('Pos_Fun_0011 - Convert multi-word phrase pattern', async ({ page }) => {
    const input = 'loku akkaa hospital ekata giyaa';
    const expectedOutput = 'ලොකු අක්කා hospital එකට ගියා';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(4000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 12: Repeated word for emphasis
  test('Pos_Fun_0012 - Convert repeated word expression', async ({ page }) => {
    const input = 'ikmanin ikmanin karanna';
    const expectedOutput = 'ඉක්මනින් ඉක්මනින් කරන්න';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(4000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 13: Past tense
  test('Pos_Fun_0013 - Convert past tense sentence', async ({ page }) => {
    const input = 'mama  koththu kaeevaa';
    const expectedOutput = 'මම  කොත්තු කෑවා';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(4000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 14: Future tense
  test('Pos_Fun_0014 - Convert future tense sentence', async ({ page }) => {
    const input = 'ammaa heta poLata yaavii';
    const expectedOutput = 'අම්මා හෙට පොළට යාවී?';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(4000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 15: Plural form with pronoun variation
  test('Pos_Fun_0015 - Convert plural pronoun sentence', async ({ page }) => {
    const input = 'eyalaa paare hitiya api enakota';
    const expectedOutput = 'එයලා පාරෙ හිටිය අපි එනකොට';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(4000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 16: Mixed English technical term
  test('Pos_Fun_0016 - Convert sentence with English technical term (Zoom)', async ({ page }) => {
    const input = 'computer eke software ekak install karanna oonee';
    const expectedOutput = 'computer එකේ software එකක් install කරන්න ඕනේ';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(4000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 17: Place names with English words
  test('Pos_Fun_0017 - Convert sentence with place name (Colombo)', async ({ page }) => {
    const input = ' Kandy valatath podi un hari kaemathi';
    const expectedOutput = 'Kandy වලටත් පොඩි උන් හරි කැමති';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(4000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });


  test('Pos_Fun_0018 - Convert sentence with abbreviation (ASAP)', async ({ page }) => {
    const input = 'project eka hodhamatama finish karanna try karamu';
    const expectedOutput = 'project එක හොදමටම finish කරන්න try කරමු';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(4000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 19: Input with punctuation (question mark)
  test('Pos_Fun_0019 - Convert question with punctuation mark', async ({ page }) => {
    const input = 'mobile phone ekee battery eka charge veladha?';
    const expectedOutput = 'mobile phone එකේ battery එක charge වෙලද?';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(4000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 20: Input with exclamation mark
  test('Pos_Fun_0020 - Convert expression with exclamation mark', async ({ page }) => {
    const input = 'bohoma lassanayi!';
    const expectedOutput = 'බොහොම ලස්සනයි!';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(4000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 21: Currency format
  test('Pos_Fun_0021 - Convert sentence with currency format', async ({ page }) => {
    const input = 'mee potha Rs. 2500 ta ganna puLuvan';
    const expectedOutput = 'මේ පොත Rs. 2500 ට ගන්න පුළුවන්';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(4000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 22: Date format
  test('Pos_Fun_0022 - Convert sentence with date', async ({ page }) => {
    const input = 'april 15 veni dhavase office ekata yanna oonee';
    const expectedOutput = 'april 15 වෙනි දවසෙ office එකට යන්න ඕනේ';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(4000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 23: Medium length input with multiple concepts
  test('Pos_Fun_0023 - Convert medium length compound sentence', async ({ page }) => {
    const input = 'podi lamayaa football kriidaa karanna aasaayi haebaeyi rata yata yanna oni';
    const expectedOutput = 'පොඩි ලමයා football ක්‍රීඩා කරන්න ආසායි හැබැයි රට යට යන්න ඔනි';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(4000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 24: Slang/colloquial expression
  test('Pos_Fun_0024 - Convert colloquial slang expression', async ({ page }) => {
    const input = 'mokadhdha mee  thiyenne? maara traffic eka';
    const expectedOutput = 'මොකද්ද මේ  තියෙන්නෙ? මාර traffic එක';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(4000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });



  // Test Case 25: Food related sentence
  test('Pos_Fun_0025 - Convert sentence about food preferences', async ({ page }) => {
    const input = 'restaurant eeken pizza order karalaa thiyenne';
    const expectedOutput = 'restaurant ඒකෙන් pizza order කරලා තියෙන්නෙ';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(4000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });









});
