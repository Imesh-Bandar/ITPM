<div align="center">

# 🌐 Singlish to Sinhala Translator - Automated Testing Suite

### Comprehensive End-to-End Testing Framework for Translation System Validation

[![Playwright](https://img.shields.io/badge/Playwright-1.40+-45ba4b?style=for-the-badge&logo=playwright&logoColor=white)](https://playwright.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-14+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-Educational-blue?style=for-the-badge)](LICENSE)

[Features](#-key-features) • [Installation](#-installation--setup) • [Usage](#-usage--execution) • [Test Cases](#-test-case-documentation) • [Reports](#-test-reports--artifacts) • [Troubleshooting](#-troubleshooting)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Technology Stack](#-technology-stack)
- [System Architecture](#-system-architecture)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation & Setup](#-installation--setup)
- [Usage & Execution](#-usage--execution)
- [Test Case Documentation](#-test-case-documentation)
- [Configuration](#-configuration)
- [Test Reports & Artifacts](#-test-reports--artifacts)
- [CI/CD Integration](#-cicd-integration)
- [Troubleshooting](#-troubleshooting)
- [Best Practices](#-best-practices)
- [Contributing](#-contributing)
- [Author](#-author)
- [License](#-license)

---

## 🎯 Overview

This project implements a **production-grade automated testing framework** for the Singlish to Sinhala translation system available at [SwiftTranslator](https://www.swifttranslator.com/). The comprehensive test suite validates **translation accuracy**, **system robustness**, and **user interface functionality** through **42 meticulously designed test cases**.

### 🎓 Academic Context

**Name**: S.A.I.B. Dharmasiri  
**Student ID**: IT23822658  
**Module**: IT3040 - Information Technology Project Management (ITPM)  
**Assignment**: Assignment 1 - Automated Testing Project  
**Academic Year**: 2026  
**Batch**: Weekend Batch - Year 3

### 🔬 Testing Scope

- ✅ **25 Positive Functional Tests** - Core translation validation
- ⚠️ **11 Negative/Edge Case Tests** - Boundary & error handling
- 🖥️ **6 UI Behavior Tests** - Interface interaction validation
- 📊 **100% Coverage** of critical user workflows

 

 
---

## 🛠️ Technology Stack

| Category | Technology | Version | Purpose |
|----------|-----------|---------|---------|
| **Testing Framework** | Playwright | v1.40+ | Browser automation & testing |
| **Runtime** | Node.js | v14+ | JavaScript execution environment |
| **Language** | JavaScript | ES6+ | Test script development |
| **Test Runner** | Playwright Test | Latest | Test orchestration & execution |
| **Reporter** | HTML Reporter | Built-in | Visual test result presentation |
| **Browser Engine** | Chromium | Latest | Test execution browser |
| **Package Manager** | npm | v6+ | Dependency management |
| **Version Control** | Git | Latest | Source code management |

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Test Execution Flow                      │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  1. TEST INITIALIZATION                                     │
│     ├─ Launch Chromium Browser (Headless/Headed)           │
│     ├─ Navigate to https://www.swifttranslator.com/        │
│     ├─ Wait for Network Idle State                         │
│     └─ Locate DOM Elements (Input/Output Fields)           │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  2. TEST EXECUTION LOOP                                     │
│     ├─ Load Test Data (Input/Expected Output)              │
│     ├─ Clear Previous Input State                          │
│     ├─ Input Singlish Text via Automation                  │
│     ├─ Wait 4s for Real-time Translation                   │
│     ├─ Capture Actual Sinhala Output                       │
│     └─ Log Test Context (Input/Expected/Actual)            │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  3. VALIDATION & ASSERTION                                  │
│     ├─ String Comparison (Expected vs Actual)              │
│     ├─ Character-level Accuracy Check                      │
│     ├─ Screenshot Capture (Pass/Fail)                      │
│     ├─ Video Recording Storage                             │
│     └─ Trace Generation (On Failure)                       │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  4. REPORTING & CLEANUP                                     │
│     ├─ Aggregate Test Results (Pass/Fail/Skip)             │
│     ├─ Generate HTML Report with Visuals                   │
│     ├─ Store Artifacts (Screenshots/Videos/Traces)         │
│     ├─ Console Summary Output                              │
│     └─ Browser Context Cleanup                             │
└─────────────────────────────────────────────────────────────┘
```

### 🔄 Test Suite Categories

```
📦 Test Suite Architecture
│
├── 🟢 Positive Functional Tests (25 Cases)
│   ├── Simple sentence translation
│   ├── Compound sentence structures
│   ├── Different tenses (past/present/future)
│   ├── Question & command forms
│   ├── Greetings & expressions
│   ├── Mixed language content
│   ├── Technical terminology
│   └── Date/currency formats
│
├── 🔴 Negative Functional Tests (11 Cases)
│   ├── Joined words without spaces
│   ├── Extra-long paragraphs (300+ chars)
│   ├── Multiple consecutive spaces
│   ├── Multi-line input with breaks
│   ├── Complex slang expressions
│   ├── Special character handling
│   ├── Uppercase text processing
│   └── Heavy code-switching scenarios
│
└── 🔵 UI Behavior Tests (6 Cases)
    ├── Real-time translation updates
    ├── Clear/Delete button functionality
    ├── Copy to clipboard operation
    ├── Language swap mechanism
    ├── Character count display
    └── Input/Output field visibility
```

---

## 📁 Project Structure

```
singlish-translator-testing-IT23822658/
│
├── 📂 tests/                           # Test suite directory
│   ├── 📄 positive-functional.spec.js  # 25 positive test cases
│   ├── 📄 negative-functional.spec.js  # 11 negative/edge cases
│   └── 📄 ui-test.spec.js              # 6 UI behavior tests
│
├── 📂 test-results/                    # Auto-generated artifacts
│   ├── 📂 screenshots/                 # Test execution screenshots
│   │   ├── Pos_Fun_0001-chromium.png
│   │   ├── Neg_Fun_0001-chromium.png
│   │   └── ...
│   ├── 📂 videos/                      # Recorded test sessions
│   │   ├── test-session-1.webm
│   │   └── ...
│   └── 📂 traces/                      # Detailed execution traces
│       ├── trace-failed-test.zip
│       └── ...
│
├── 📂 playwright-report/               # HTML test reports
│   ├── index.html                      # Main report dashboard
│   ├── data/                           # Report data files
│   └── assets/                         # Report assets (CSS/JS)
│
├── 📂 .github/                         # CI/CD workflows
│   └── workflows/
│       └── test.yml                    # Automated test execution
│
├── 📄 playwright.config.js             # Playwright configuration
├── 📄 package.json                     # Project dependencies
├── 📄 package-lock.json                # Dependency lock file
├── 📄 .gitignore                       # Git ignore rules
├── 📄 README.md                        # This documentation
└── 📄 LICENSE                          # Project license
```

---

## ✅ Prerequisites

### System Requirements

| Requirement | Minimum Version | Recommended | Purpose |
|-------------|----------------|-------------|---------|
| **Node.js** | v14.0.0 | v18.0.0+ | JavaScript runtime |
| **npm** | v6.0.0 | v9.0.0+ | Package manager |
| **RAM** | 4 GB | 8 GB | Test execution |
| **Disk Space** | 500 MB | 1 GB | Dependencies & artifacts |
| **Internet** | Stable | High-speed | Live website access |
| **OS** | Windows 10/macOS 10.15/Ubuntu 18.04 | Latest | Cross-platform support |

### Software Dependencies

```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# Check Git installation
git --version
```

---

## 🚀 Installation & Setup

### Step 1: Clone Repository

```bash
# Option 1: Using HTTPS
git clone https://github.com/Imesh-Bandar/ITPM.git

# Option 2: Using SSH
git clone git@github.com:Imesh-Bandar/ITPM.git

# Navigate to project directory
cd ITPM
```

### Step 2: Install Dependencies

```bash
# Install all project dependencies
npm install

# Verify installation
npm list --depth=0
```

### Step 3: Install Playwright Browsers

```bash
# Install Chromium browser (default)
npx playwright install chromium

# Optional: Install all browsers (Chromium, Firefox, WebKit)
npx playwright install

# Verify browser installation
npx playwright --version
```

### Step 4: Verify Setup

```bash
# Run a quick verification test
npm test -- --grep="Pos_Fun_0001"

# Expected output: 1 test passed
```

---

## 💻 Usage & Execution

### Quick Start Commands

```bash
# Run all 42 tests
npm test

# Run with visible browser (headed mode)
npm run test:headed

# Run specific test suite
npm run test:positive    # 25 positive tests
npm run test:negative    # 11 negative tests
npm run test:ui          # 6 UI tests

# View test report
npm run report
```

### Advanced Execution Options

```bash
# Run tests in parallel (faster execution)
npx playwright test --workers=4

# Run tests with specific browser
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit

# Run single test file
npx playwright test tests/positive-functional.spec.js

# Run tests matching pattern
npx playwright test --grep="Simple"

# Run tests in debug mode
npx playwright test --debug

# Run with custom timeout
npx playwright test --timeout=60000

# Run and update snapshots
npx playwright test --update-snapshots
```

### Continuous Integration Commands

```bash
# Run tests in CI environment
npm run test:ci

# Generate JSON report for CI tools
npx playwright test --reporter=json

# Run with code coverage
npm run test:coverage
```

---

## 📚 Test Case Documentation

### Test Case Naming Convention

```
[Category]_[Type]_[Number] - [Description]

Examples:
- Pos_Fun_0001: Positive Functional Test Case #1
- Neg_Fun_0001: Negative Functional Test Case #1
- Pos_UI_0001: Positive UI Test Case #1
```
 

## 📖 Best Practices

### Writing New Tests

1. **Follow Naming Convention**: Use descriptive test names
2. **Add Comments**: Explain complex logic
3. **Use Page Objects**: Encapsulate UI interactions
4. **Avoid Hard Waits**: Use `waitFor` methods
5. **Clean Up**: Close contexts and browsers properly

### Test Maintenance

- 🔄 Regular dependency updates
- 📝 Keep documentation synchronized
- 🧹 Remove obsolete test cases
- 📊 Monitor test execution times
- 🎯 Maintain test independence

---

## 🤝 Contributing

### How to Contribute

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Contribution Guidelines

- Write clear commit messages
- Add tests for new features
- Update documentation accordingly
- Follow existing code style
- Ensure all tests pass before PR

---

## 👨‍💻 Author

<div align="center">

### S.A.I.B. Dharmasiri

**Student ID**: IT23822658  
**Program**: BSc (Hons) Information Technology - Year 3  
**Batch**: Weekend Batch  
**Institution**: Sri Lanka Institute of Information Technology (SLIIT)

**Module**: IT3040 - Information Technology Project Management  
**Assignment**: Assignment 1 - Automated Testing Project

---

📧 **Email**: [IT23822658@my.sliit.lk](mailto:IT23822658@my.sliit.lk)  
🔗 **LinkedIn**: [Connect with me](https://linkedin.com/in/yourprofile)  
🐙 **GitHub**: [@yourusername](https://github.com/yourusername)

</div>

---

## 📄 License

This project is developed for **educational purposes** as part of SLIIT IT3040 coursework.

```
Copyright (c) 2024 S.A.I.B. Dharmasiri

This software is provided for educational purposes only.
Unauthorized commercial use is prohibited.
```

---

## 📞 Support & Contact

### Need Help?

- 💬 **Issues**: [GitHub Issues](https://github.com/yourusername/singlish-translator-testing-IT23822658/issues)
- 📧 **Email**: IT23822658@my.sliit.lk
- 📚 **Documentation**: [Wiki](https://github.com/yourusername/singlish-translator-testing-IT23822658/wiki)

---

## 🏆 Acknowledgments

- **SLIIT Faculty** - Project guidance and support
- **Playwright Team** - Excellent testing framework
- **SwiftTranslator** - Translation system under test
- **Open Source Community** - Inspiration and resources

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

**Last Updated**: December 2024 | **Version**: 2.0.0 | **Status**: ✅ Production Ready

Made with ❤️ by [S.A.I.B. Dharmasiri](https://github.com/yourusername)

</div>
