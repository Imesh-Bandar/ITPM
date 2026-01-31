# Singlish to Sinhala Translator - Automated Testing Project

## 📋 Overview

This project implements comprehensive automated testing for a Singlish to Sinhala translation system available at https://www.swifttranslator.com/. The test suite validates translation accuracy, system robustness, and user interface functionality through 41 distinct test cases categorized into positive functional tests, negative functional tests, and UI behavior tests.

The testing framework utilizes Playwright for end-to-end browser automation, ensuring the translation system performs correctly across various input scenarios including simple sentences, complex expressions, slang, technical terms, and edge cases.

## 🚀 Technology Stack

- **Testing Framework**: Playwright v1.40+
- **Language**: JavaScript (Node.js)
- **Test Runner**: Playwright Test Runner
- **Browser**: Chromium (headless & headed modes)
- **Reporting**: Playwright HTML Reporter
- **Package Manager**: npm
- **Node.js**: v14 or higher

## 📁 Folder Structure

 
singlish-translator-testing-IT23822658/
│
├── tests/
│   ├── positive-functional.spec.js    # 25 positive test cases
│   ├── negative-functional.spec.js    # 11 negative/edge case tests
│   └── ui-test.spec.js                # 6 UI behavior tests
│
├── test-results/                      # Auto-generated test artifacts
│   ├── screenshots/                   # Test execution screenshots
│   ├── videos/                        # Test execution videos
│   └── traces/                        # Detailed execution traces
│
├── playwright-report/                 # HTML test report (generated)
│
├── playwright.config.js               # Playwright configuration
├── package.json                       # Project dependencies
├── package-lock.json                  # Dependency lock file
└── README.md                          # Project documentation
 

## 🔄 Code Flow & Architecture

### Test Execution Flow

 
1. Test Initialization
   └── Navigate to https://www.swifttranslator.com/
   └── Wait for network idle state
   └── Locate input/output fields

2. Test Execution
   └── Input Singlish text
   └── Wait 4 seconds for real-time translation
   └── Capture output
   └── Log input/expected/actual values

3. Validation
   └── Compare actual vs expected output
   └── Capture screenshots & videos
   └── Generate test reports

4. Cleanup & Reporting
   └── Aggregate test results
   └── Generate HTML report
   └── Store artifacts (screenshots/videos/traces)
 

### Test Suite Architecture

#### **1. Positive Functional Tests** (25 test cases)
- **Purpose**: Validate correct translation functionality
- **Coverage**:
  - Simple, compound, and complex sentences
  - Different tenses (past, present, future)
  - Question and command forms
  - Common greetings and expressions
  - Mixed Singlish-English content
  - Technical terms and proper nouns
  - Punctuation and formatting
  - Currency and date formats

#### **2. Negative Functional Tests** (11 test cases)
- **Purpose**: Test system robustness and edge cases
- **Coverage**:
  - Joined words without spacing
  - Long paragraph inputs (300+ characters)
  - Multiple consecutive spaces
  - Multi-line input with line breaks
  - Complex slang expressions
  - Special characters and punctuation
  - Uppercase inputs
  - Mixed language with multiple technical terms

#### **3. UI Tests** (6 test cases)
- **Purpose**: Validate user interface behavior
- **Coverage**:
  - Real-time output updates
  - Clear/Delete button functionality
  - Copy button functionality
  - Language swap button
  - Character count display
  - Input/output field visibility

## 📊 Test Coverage Summary

| Category | Test Cases | Purpose |
|----------|-----------|---------|
| Positive Functional | 25 | Validate correct translations |
| Negative Functional | 11 | Test edge cases & robustness |
| UI Behavior | 6 | Validate interface functionality |
| **Total** | **42** | **Comprehensive system testing** |

## ⚙️ Prerequisites

Before running the tests, ensure you have:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (v6 or higher) - Comes with Node.js
- **Internet connection** - Tests access live website
- **Windows/Mac/Linux** - Cross-platform compatible

## 🛠️ Installation

1. **Clone or download this repository**
   ```bash
   cd singlish-translator-testing-IT23822658
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npx playwright install chromium
   ```

## ▶️ How to Run Tests

### Run All Tests
```bash
npm test
```

### Run Tests with Browser UI Visible
```bash
npm run test:headed
```

### Run Specific Test Suites
```bash
# Run only positive functional tests (25 tests)
npm run test:positive

# Run only negative functional tests (11 tests)
npm run test:negative

# Run only UI tests (6 tests)
npm run test:ui
```

### View Test Report
```bash
npm run report
```
*Automatically opens HTML report in browser*

## 📈 Test Results & Artifacts

After running tests, the following artifacts are automatically generated:

### 1. **Console Output**
- Real-time test execution logs
- Input/Expected/Actual values for each test
- Pass/Fail status with detailed messages

### 2. **HTML Report** (`playwright-report/`)
- Visual test results dashboard
- Pass/fail statistics
- Execution timeline
- Screenshots and videos embedded

### 3. **Screenshots** (`test-results/`)
- Captured during each test execution
- Organized by test name and timestamp

### 4. **Videos** (`test-results/`)
- Full video recording of each test
- Useful for debugging failures

### 5. **Traces** (`test-results/`)
- Detailed execution traces (on failure)
- View with: `npx playwright show-trace test-results/.../trace.zip`

## 🏷️ Test Case Naming Convention

- **Pos_Fun_XXXX**: Positive Functional Test Cases (e.g., Pos_Fun_0001)
- **Neg_Fun_XXXX**: Negative Functional Test Cases (e.g., Neg_Fun_0001)
- **Pos_UI_XXXX**: Positive UI Test Cases (e.g., Pos_UI_0001)

## � Detailed Test Cases Documentation

### **Positive Functional Tests (25 Cases)**

These tests validate correct translation functionality under normal operating conditions.

#### **Test Case: Pos_Fun_0001 - Simple Present Tense Sentence**
- **Input**: `mama vaeda karanavaa`
- **Expected Output**: `මම වැඩ කරනවා`
- **Pass Reason**: System correctly translates basic present tense sentence with common vocabulary
- **Fail Reason**: Incorrect verb conjugation or missing Sinhala characters

#### **Test Case: Pos_Fun_0002 - Compound Sentence with Daily Activities**
- **Input**: `eyaa poth kiyavanavaa ethakota mama ahagena hitiyaa`
- **Expected Output**: `එයා පොත් කියවනවා එතකොට මම අහගෙන හිටියා`
- **Pass Reason**: Successfully handles compound sentences with temporal clause
- **Fail Reason**: Word order confusion or incorrect conjunction translation

#### **Test Case: Pos_Fun_0003 - Complex Conditional Clause**
- **Input**: `vaesse naeththam gedhara yamu`
- **Expected Output**: `වැස්සෙ නැත්තම් ගෙදර යමු`
- **Pass Reason**: Correctly translates conditional statements with negative form
- **Fail Reason**: Conditional marker missing or incorrect verb mood

#### **Test Case: Pos_Fun_0004 - Interrogative Sentence**
- **Input**: `kohedha oyaage iskoole?`
- **Expected Output**: `කොහෙද ඔයාගෙ ඉස්කෝලෙ?`
- **Pass Reason**: Properly handles question formation with interrogative pronoun
- **Fail Reason**: Question mark missing or incorrect word order

#### **Test Case: Pos_Fun_0005 - Imperative Command**
- **Input**: `ara potha gennako`
- **Expected Output**: `අර පොත ගෙන්නකො`
- **Pass Reason**: Correctly translates command form with demonstrative pronoun
- **Fail Reason**: Imperative mood not recognized or particle missing

#### **Test Case: Pos_Fun_0006 - Negative Sentence Form**
- **Input**: `thaaththaa office ekata giyeth naha`
- **Expected Output**: `තාත්තා office එකට ගියෙත් naha`
- **Pass Reason**: Handles mixed language negation with English technical term
- **Fail Reason**: Negation marker incorrect or English word translated unnecessarily

#### **Test Case: Pos_Fun_0007 - Common Greeting**
- **Input**: `oyaata suba nava vasarak veevaa!`
- **Expected Output**: `ඔයාට සුබ නව වසරක් වේවා!`
- **Pass Reason**: Traditional greeting translated with proper blessing form
- **Fail Reason**: Formal register not maintained or exclamation mark missing

#### **Test Case: Pos_Fun_0008 - Polite Request**
- **Input**: `mata udhav karanna puLuvannadha?`
- **Expected Output**: `මට උදව් කරන්න පුළුවන්නද?`
- **Pass Reason**: Polite form correctly preserved with ability modal
- **Fail Reason**: Politeness level incorrect or question particle missing

#### **Test Case: Pos_Fun_0009 - Informal Command Phrase**
- **Input**: `api koLambata yanna hitiye`
- **Expected Output**: `අපි කොළම්බට යන්න හිටියෙ`
- **Pass Reason**: Casual speech style maintained with place name preserved
- **Fail Reason**: Informality level not matched or tense confusion

#### **Test Case: Pos_Fun_0010 - Daily Expression**
- **Input**: `ee kaeema patta rasayi`
- **Expected Output**: `ඒ කෑම පට්ට රසයි`
- **Pass Reason**: Slang intensifier "patta" correctly translated
- **Fail Reason**: Slang term not recognized or literal translation attempted

#### **Test Case: Pos_Fun_0011 - Multi-word Phrase**
- **Input**: `loku akkaa hospital ekata giyaa`
- **Expected Output**: `ලොකු අක්කා hospital එකට ගියා`
- **Pass Reason**: Kinship term with modifier plus English technical term handled
- **Fail Reason**: Compound kinship term split incorrectly

#### **Test Case: Pos_Fun_0012 - Repeated Word Emphasis**
- **Input**: `ikmanin ikmanin karanna`
- **Expected Output**: `ඉක්මනින් ඉක්මනින් කරන්න`
- **Pass Reason**: Reduplication for emphasis preserved correctly
- **Fail Reason**: Repetition removed or incorrectly interpreted as error

#### **Test Case: Pos_Fun_0013 - Past Tense Sentence**
- **Input**: `mama  koththu kaeevaa`
- **Expected Output**: `මම  කොත්තු කෑවා`
- **Pass Reason**: Past tense verb form and food term correctly translated
- **Fail Reason**: Tense marker missing or food term translated literally

#### **Test Case: Pos_Fun_0014 - Future Tense Sentence**
- **Input**: `ammaa heta poLata yaavii`
- **Expected Output**: `අම්මා හෙට පොළට යාවී?`
- **Pass Reason**: Future marker with question particle preserved
- **Fail Reason**: Future tense not recognized or question form lost

#### **Test Case: Pos_Fun_0015 - Plural Pronoun**
- **Input**: `eyalaa paare hitiya api enakota`
- **Expected Output**: `එයලා පාරෙ හිටිය අපි එනකොට`
- **Pass Reason**: Plural forms and temporal clause correctly handled
- **Fail Reason**: Plural marker missing or temporal relationship unclear

#### **Test Case: Pos_Fun_0016 - English Technical Term**
- **Input**: `computer eke software ekak install karanna oonee`
- **Expected Output**: `computer එකේ software එකක් install කරන්න ඕනේ`
- **Pass Reason**: Technical English terms preserved within Sinhala grammar
- **Fail Reason**: Technical terms translated unnecessarily

#### **Test Case: Pos_Fun_0017 - Place Name**
- **Input**: ` Kandy valatath podi un hari kaemathi`
- **Expected Output**: `Kandy වලටත් පොඩි උන් හරි කැමති`
- **Pass Reason**: Proper noun preserved with correct plural and preference marker
- **Fail Reason**: Place name translated or grammatical markers incorrect

#### **Test Case: Pos_Fun_0018 - Abbreviation**
- **Input**: `project eka hodhamatama finish karanna try karamu`
- **Expected Output**: `project එක හොදමටම finish කරන්න try කරමු`
- **Pass Reason**: English terms in tech context preserved with superlative adverb
- **Fail Reason**: Mixed language structure not maintained

#### **Test Case: Pos_Fun_0019 - Question with Punctuation**
- **Input**: `mobile phone ekee battery eka charge veladha?`
- **Expected Output**: `mobile phone එකේ battery එක charge වෙලද?`
- **Pass Reason**: Technical terms maintained with question particle and punctuation
- **Fail Reason**: Question mark missing or technical vocabulary altered

#### **Test Case: Pos_Fun_0020 - Expression with Exclamation**
- **Input**: `bohoma lassanayi!`
- **Expected Output**: `බොහොම ලස්සනයි!`
- **Pass Reason**: Emphatic statement with exclamation correctly translated
- **Fail Reason**: Exclamation mark lost or intensity reduced

#### **Test Case: Pos_Fun_0021 - Currency Format**
- **Input**: `mee potha Rs. 2500 ta ganna puLuvan`
- **Expected Output**: `මේ පොත Rs. 2500 ට ගන්න පුළුවන්`
- **Pass Reason**: Currency symbol and numerical value preserved correctly
- **Fail Reason**: Currency format altered or number translated

#### **Test Case: Pos_Fun_0022 - Date Format**
- **Input**: `april 15 veni dhavase office ekata yanna oonee`
- **Expected Output**: `april 15 වෙනි දවසෙ office එකට යන්න ඕනේ`
- **Pass Reason**: Date components preserved with ordinal marker
- **Fail Reason**: Date format modified or ordinal suffix missing

#### **Test Case: Pos_Fun_0023 - Medium Length Compound**
- **Input**: `podi lamayaa football kriidaa karanna aasaayi haebaeyi rata yata yanna oni`
- **Expected Output**: `පොඩි ලමයා football ක්‍රීඩා කරන්න ආසායි හැබැයි රට යට යන්න ඔනි`
- **Pass Reason**: Long sentence with contrast maintained coherently
- **Fail Reason**: Sentence structure fragmented or adversative marker lost

#### **Test Case: Pos_Fun_0024 - Colloquial Slang**
- **Input**: `mokadhdha mee  thiyenne? maara traffic eka`
- **Expected Output**: `මොකද්ද මේ  තියෙන්නෙ? මාර traffic එක`
- **Pass Reason**: Informal interrogative with slang intensifier preserved
- **Fail Reason**: Colloquial register lost or slang term formalized

#### **Test Case: Pos_Fun_0025 - Food Preferences**
- **Input**: `restaurant eeken pizza order karalaa thiyenne`
- **Expected Output**: (Not fully visible in attachment)
- **Pass Reason**: Restaurant context with English food terms preserved
- **Fail Reason**: Code-switching not handled or past perfect tense incorrect

---

### **Negative Functional Tests (11 Cases)**

These tests identify system limitations and edge cases that may cause translation failures.

#### **Test Case: Neg_Fun_0001 - Joined Words**
- **Input**: `MataAmmaabalannayannoni`
- **Expected Output**: `මට අම්මා බලන්න යන්නොනි`
- **Pass Reason**: System successfully segments joined words without spaces
- **Fail Reason**: Word boundary detection fails; output is garbled or incomplete

#### **Test Case: Neg_Fun_0002 - Complex Joined Expression**
- **Input**: `oyatehemakarannaepakiyalamankiwaneoyata`
- **Expected Output**: `ඔයාට එහෙම කරන්න එපා කියලා මන් කිවානෙ ඔයාට`
- **Pass Reason**: Advanced tokenization correctly identifies word boundaries
- **Fail Reason**: Cannot parse continuous text; produces incorrect segmentation

#### **Test Case: Neg_Fun_0003 - Long Paragraph (300+ chars)**
- **Input**: `maedhaperadhigakalaapayaharahaaaethiveminpavathinauNusumaarakShakapravaNathaapiLibaDHAva niranthara avaDhaanaya yomu karana lesa iishraayalayee shrii lQQkaa thaanaapathi kaarYaalaya erata sitina shrii laaQQkikayanta dhaenumdhii thibee.`
- **Expected Output**: `මැදපෙරදිග කලාපය හරහා ඇතිවෙමින් පවතින උණුසුම් ආරක්ෂක ප්‍රවණතා පිළිබඳව නිරන්තර අවධානය යොමු කරන ලෙස ඊශ්‍රායලයේ ශ්‍රී ලංකා තානාපති කාර්යාලය එරට සිටින ශ්‍රී ලාංකිකයන්ට දැනුම්දී තිබේ. `
- **Pass Reason**: System handles long text without truncation or quality loss
- **Fail Reason**: Translation incomplete, truncated, or character limit exceeded

#### **Test Case: Neg_Fun_0004 - Multiple Consecutive Spaces**
- **Input**: `computer       eeka       format       karanna`
- **Expected Output**: `computer ඒක format කරන්න`
- **Pass Reason**: Extra whitespace normalized correctly during processing
- **Fail Reason**: Spaces preserved incorrectly or words merged/split improperly

#### **Test Case: Neg_Fun_0005 - Line Breaks**
- **Input**: `mage phone eka kaduna \nHadagann oniiiiiii`
- **Expected Output**: `මගේ Phone එක කැඩුනා\nහදාගන්න ඔනි`
- **Pass Reason**: Line breaks preserved and multi-line input handled correctly
- **Fail Reason**: Line breaks lost or text merged into single line

#### **Test Case: Neg_Fun_0005a - Multiple Empty Lines**
- **Input**: `mage phone eka reset karalaa\n\nsoftware update eekath karanna\n\npassword eka change karanna`
- **Expected Output**: `මගෙ පෝන් එක රීසෙට් කරලා\n\n\nසොෆ්ට්වෙයාර් අප්ඩේට් කරන්න ඕනි`
- **Pass Reason**: Multiple consecutive line breaks maintained in output
- **Fail Reason**: Empty lines collapsed or extra spacing removed

#### **Test Case: Neg_Fun_0006 - Complex Slang**
- **Input**: `ado mokada karanne eka hariyan naththam wena ekak hoyagamu ban`
- **Expected Output**: ` අඩෝ මොකද කරන්නෙ ඒක හරියන් නැත්තම් වෙන එකක් හොයාගමු බන්`
- **Pass Reason**: Multiple informal terms and slang correctly recognized
- **Fail Reason**: Slang vocabulary not in system dictionary; literal translation attempted

#### **Test Case: Neg_Fun_0007 - Parentheses Punctuation**
- **Input**: `hasithui dinithui Mal Dadhnawa (pissu ned)`
- **Expected Output**: `හසිතුයි දිනිති මල් කඩනවා (පිස්සු නේද?) `
- **Pass Reason**: Parenthetical expressions preserved with internal structure
- **Fail Reason**: Parentheses removed or content inside parentheses not translated

#### **Test Case: Neg_Fun_0008 - Quotation Marks**
- **Input**: `nandaa kiivaaa "meka hariyata karanna" kiyalaa`
- **Expected Output**: `නැන්දා කිව්වා "මෙක හරියට කරන්න" කියලා`
- **Pass Reason**: Quoted speech preserved with proper quotation marks
- **Fail Reason**: Quotation marks lost or quoted content not translated

#### **Test Case: Neg_Fun_0009 - Special Character Combinations**
- **Input**: `mara magulak ban wela tiynne api krala tiyanwa waradilu`
- **Expected Output**: `මාර මගුලක් බන් වෙලා තියෙන්නේ,අපි කරලා තියෙනවා වැරදීලු`
- **Pass Reason**: Non-standard spelling variations correctly interpreted
- **Fail Reason**: Spelling variations not recognized; phonetic matching fails

#### **Test Case: Neg_Fun_0010 - Multiple English Terms**
- **Input**: `laptop eeke battery backup eka hodhai camera quality ekath lassanai screen size eka loku venna oonee`
- **Expected Output**: `laptop එකේ battery backup එක හොඳයි camera quality එකත් ලස්සනයි screen size එක ලොකු වෙන්න ඕනේ`
- **Pass Reason**: Heavy code-switching context maintained throughout
- **Fail Reason**: Too many English terms cause context confusion or incorrect grammar

#### **Test Case: Neg_Fun_0011 - All Uppercase Input**
- **Input**: `ALUTH EKA HRI RASAI BAN`
- **Expected Output**: `අලුත් එක හරි රසයි බන්`
- **Pass Reason**: System normalizes case and translates correctly
- **Fail Reason**: Uppercase not recognized or interpreted as acronym/abbreviation

---

### **UI Behavior Tests (6 Cases)**

These tests validate user interface functionality and interaction patterns.

#### **Test Case: Pos_UI_0001 - Real-time Output Update**
- **Input**: Progressive typing of `aluth potha kiyanna hodhai`
- **Expected Behavior**: Output field updates automatically after each word
- **Pass Reason**: Translation appears dynamically as user types without button click
- **Fail Reason**: Output delayed beyond 4 seconds or requires manual trigger

#### **Test Case: Pos_UI_0002 - Clear Button**
- **Input**: `teacher geeta poddak balanna yannee`
- **Expected Behavior**: Clear/delete button removes all input text
- **Pass Reason**: Input field completely emptied when clear button clicked
- **Fail Reason**: Clear button not visible, non-functional, or input remains

#### **Test Case: Pos_UI_0003 - Copy Button**
- **Input**: `mobile phone eke software ekak install karanna`
- **Expected Behavior**: Copy button copies Sinhala output to clipboard
- **Pass Reason**: Button state changes (shows "Copied" tooltip) after click
- **Fail Reason**: Copy button not found or clipboard operation fails

#### **Test Case: Pos_UI_0004 - Language Swap**
- **Input**: `computer eeke RAM eka upgrade karanna oonee`
- **Expected Behavior**: Swap button switches Singlish/Sinhala language positions
- **Pass Reason**: Language labels swap positions; input/output fields exchange
- **Fail Reason**: Swap button not visible or languages don't switch positions

#### **Test Case: Pos_UI_0005 - Character Limit**
- **Input**: Long text (~500+ characters)
- **Expected Behavior**: Text area accepts input; character counter displays
- **Pass Reason**: Long input accepted without truncation; counter shows length
- **Fail Reason**: Input truncated before limit or character counter not displayed

#### **Test Case: Pos_UI_0006 - Field Visibility**
- **Input**: `loku akka hospital ekata yannee`
- **Expected Behavior**: Both input and output fields visible and functional
- **Pass Reason**: Input editable, output displays translation, both clearly visible
- **Fail Reason**: Fields hidden, overlapping, or not displaying correctly

---

## �📝 Important Notes

1. **Wait Time**: All tests include a 4-second delay after input to allow for real-time translation processing
2. **Network Dependency**: Tests require internet connection to access https://www.swifttranslator.com/
3. **Real-time Translation**: The system translates automatically without a "Convert" button
4. **Console Logging**: Each test logs input, expected, and actual output for manual verification
5. **Strict Assertions**: Negative tests use strict assertions to demonstrate system limitations

## 🔍 Test Execution Details

### Functional Tests Process:
1. Navigate to translator page
2. Locate Singlish input textarea
3. Fill input with test data
4. Wait 4 seconds for translation
5. Capture Sinhala output
6. Compare with expected result
7. Log results to console

### UI Tests Process:
1. Interact with UI elements (buttons, text areas)
2. Monitor real-time behavior
3. Verify element visibility and state changes
4. Validate user interactions

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Tests fail to run | Verify Node.js and npm are installed: `node -v` & `npm -v` |
| Browser not launching | Run: `npx playwright install chromium` |
| Network errors | Check internet connection and firewall settings |
| Timeout errors | Increase timeout in `playwright.config.js` |
| Missing dependencies | Run: `npm install` |

## 👨‍💻 Author & Project Details

**Name**: S.A.I.B. Dharmasiri  
**Student ID**: IT23822658  
**Program**: BSc (Hons) Information Technology - Year 3  
**Batch**: Weekend Batch  
**Module**: IT3040 - ITPM (Information Technology Project Management)  
**Assignment**: Assignment 1 - Automated Testing Project  
**Institution**: Sri Lanka Institute of Information Technology (SLIIT)

 

## 📄 License

This project is created for educational purposes as part of SLIIT IT3040 coursework.

## 📞 Contact

For questions or issues regarding this test suite, please contact:
- **Email**: IT23822658@my.sliit.lk
- **Student ID**: IT23822658

 

**Last Updated**: December 2024  
**Version**: 1.0.0  
**Status**: ✅ Active Development
