const { test, expect } = require('@playwright/test');

test.describe('Negative Functional Tests - Singlish to Sinhala Translation', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  // Test Case 1: Joined words without spaces (stress test)
  test('Neg_Fun_0001 - Convert joined words without proper spacing', async ({ page }) => {
    const input = 'MataAmmaabalannayannoni';
    const expectedOutput = 'මට අම්මා බලන්න යන්නොනි';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(4000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
    console.log('Issue: System may fail to properly segment joined words');

    // Strict assertion - expect exact match (will FAIL if incorrect)
    expect(actualOutput?.trim()).toBe(expectedOutput);
  });

  // Test Case 2: Complex joined expression
  test('Neg_Fun_0002 - Convert multiple joined words', async ({ page }) => {
    const input = 'oyatehemakarannaepakiyalamankiwaneoyata';
    const expectedOutput = 'ඔයාට එහෙම කරන්න එපා කියලා මන් කිවානෙ ඔයාට';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(4000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
    console.log('Issue: Word boundary detection failure');

    // Strict assertion - expect exact match (will FAIL if incorrect)
    expect(actualOutput?.trim()).toBe(expectedOutput);
  });

  // Test Case 3: Long paragraph-style input
  test('Neg_Fun_0003 - Convert long paragraph exceeding 300 characters', async ({ page }) => {
    const input = 'maedhaperadhigakalaapayaharahaaaethiveminpavathinauNusumaarakShakapravaNathaapiLibaDHAva niranthara avaDhaanaya yomu karana lesa iishraayalayee shrii lQQkaa thaanaapathi kaarYaalaya erata sitina shrii laaQQkikayanta dhaenumdhii thibee.';
    const expectedOutput = 'මැදපෙරදිග කලාපය හරහා ඇතිවෙමින් පවතින උණුසුම් ආරක්ෂක ප්‍රවණතා පිළිබඳව නිරන්තර අවධානය යොමු කරන ලෙස ඊශ්‍රායලයේ ශ්‍රී ලංකා තානාපති කාර්යාලය එරට සිටින ශ්‍රී ලාංකිකයන්ට දැනුම්දී තිබේ. ';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(4000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input length: ${input.length} characters`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
    console.log('Issue: Long input may cause incomplete or incorrect conversion');

    // Strict assertion - expect exact match (will FAIL if incorrect)
    expect(actualOutput?.trim()).toBe(expectedOutput);
  });

  // Test Case 4: Multiple spaces between words
  test('Neg_Fun_0004 - Convert input with multiple consecutive spaces', async ({ page }) => {
    const input = 'computer       eeka       format       karanna';
    const expectedOutput = 'computer ඒක format කරන්න';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(4000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
    console.log('Issue: Extra spaces may not be handled correctly');

    // Strict assertion - expect exact match (will FAIL if incorrect)
    expect(actualOutput?.trim()).toBe(expectedOutput);
  });

  // Test Case 5: Line breaks in input
  test('Neg_Fun_0005 - Convert multi-line input with line breaks', async ({ page }) => {
    const input = `mage phone eka kaduna 
Hadagann oniiiiiii`;
    const expectedOutput = `මගේ Phone එක කැඩුනා
හදාගන්න ඔනි`;

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(4000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
    console.log('Issue: Line breaks may not be preserved correctly');

    // Strict assertion - expect exact match (will FAIL if incorrect)
    expect(actualOutput?.trim()).toBe(expectedOutput);
  });

 

  // Test Case 6: Complex slang with multiple informal terms
  test('Neg_Fun_0006 - Convert complex slang expression', async ({ page }) => {
    const input = 'ado mokada karanne eka hariyan naththam wena ekak hoyagamu ban';
    const expectedOutput = ' අඩෝ මොකද කරන්නෙ ඒක හරියන් නැත්තම් වෙන එකක් හොයාගමු බන්';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(4000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
    console.log('Issue: Slang terms may not be recognized correctly');

    // Strict assertion - expect exact match (will FAIL if incorrect)
    expect(actualOutput?.trim()).toBe(expectedOutput);
  });

  // Test Case 7: Mixed content with parentheses
  test('Neg_Fun_0007 - Convert input with parentheses punctuation', async ({ page }) => {
    const input = 'hasithui dinithui Mal Dadhnawa (pissu ned)';
    const expectedOutput = `හසිතුයි දිනිති මල් කඩනවා (පිස්සු නේද?) `;

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(4000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
    console.log('Issue: Parentheses may not be preserved or handled correctly');

    // Strict assertion - expect exact match (will FAIL if incorrect)
    expect(actualOutput?.trim()).toBe(expectedOutput);
  });

  // Test Case 8: Input with quotation marks
  test('Neg_Fun_0008 - Convert input with quotation marks', async ({ page }) => {
    const input = 'nandaa kiivaaa "meka hariyata karanna" kiyalaa';
    const expectedOutput = 'නැන්දා කිව්වා "මෙක හරියට කරන්න" කියලා';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(4000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
    console.log('Issue: Quotation marks may interfere with conversion');

    // Strict assertion - expect exact match (will FAIL if incorrect)
    expect(actualOutput?.trim()).toBe(expectedOutput);
  });

  // Test Case 9: Unusual character combinations - FIXED SPELLING
  test('Neg_Fun_0009 - Convert input with special character combinations', async ({ page }) => {
    const input = 'mara magulak ban wela tiynne api krala tiyanwa waradilu';
    const expectedOutput = 'මාර මගුලක් බන් වෙලා තියෙන්නේ,අපි කරලා තියෙනවා වැරදීලු';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(4000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
    console.log('Issue: Special character patterns may not convert correctly');

    // Strict assertion - expect exact match (will FAIL if incorrect)
    expect(actualOutput?.trim()).toBe(expectedOutput);
  });

  // Test Case 10: Complex mixed language with multiple technical terms
  test('Neg_Fun_0010 - Convert complex mixed input with multiple English terms', async ({ page }) => {
    const input = 'laptop eeke battery backup eka hodhai camera quality ekath lassanai screen size eka loku venna oonee';
    const expectedOutput = 'laptop එකේ battery backup එක හොඳයි camera quality එකත් ලස්සනයි screen size එක ලොකු වෙන්න ඕනේ';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(4000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
    console.log('Issue: Multiple English technical terms may cause context confusion');

    // Strict assertion - expect exact match (will FAIL if incorrect)
    expect(actualOutput?.trim()).toBe(expectedOutput);
  });

  // Test Case 11: All uppercase input
  test('Neg_Fun_0011 - Convert all uppercase Singlish input', async ({ page }) => {
    const input = 'ALUTH EKA HRI RASAI BAN';
    const expectedOutput = 'අලුත් එක හරි රසයි බන්';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(4000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
    console.log('Issue: Uppercase letters may not be recognized properly');

    // Strict assertion - expect exact match (will FAIL if incorrect)
    expect(actualOutput?.trim()).toBe(expectedOutput);
  });


  test.afterAll(async () => {
    console.log('\n' + '='.repeat(80));
    console.log(' NEGATIVE FUNCTIONAL TESTS COMPLETED!');
    console.log('Total Test Cases: 10');
    console.log('Status: These tests demonstrate system limitations and edge cases');
    console.log('Expected Result: Most tests should FAIL showing incorrect/incomplete translations');
    console.log('='.repeat(80) + '\n');
  });

});