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
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation & Setup](#-installation--setup)
- [Usage & Execution](#-usage--execution)
- [Test Case Documentation](#-test-case-documentation)
- [Best Practices](#-best-practices)
- [Contributing](#-contributing)
- [Author](#-author)
- [License](#-license)
- [Support & Contact](#-support--contact)
- [Acknowledgments](#-acknowledgments)

---

## 🎯 Overview

This project implements a **production-grade automated testing framework** for the Singlish to Sinhala translation system available at [SwiftTranslator](https://www.swifttranslator.com/). The comprehensive test suite validates **translation accuracy**, **system robustness**, and **user interface functionality** through **42 meticulously designed test cases**.

### 🎓 Academic Context

<div align="center">

| Field              | Details                                                    |
|--------------------|-------------------------------------------------------------|
| **Name**           | S.A.I.B. Dharmasiri                                        |
| **Student ID**     | IT23822658                                                 |
| **Module**         | IT3040 - Information Technology Project Management (ITPM) |
| **Assignment**     | Assignment 1 - Automated Testing Project                   |
| **Academic Year**  | 2026                                                       |
| **Batch**          | Weekend Batch - Year 3                                     |

</div>

### 🔬 Testing Scope

<div align="center">

| Test Type                  | Count | Coverage Area                    |
|----------------------------|-------|----------------------------------|
| ✅ Positive Functional     | 25    | Core translation validation      |
| ⚠️ Negative/Edge Case      | 11    | Boundary & error handling        |
| 🖥️ UI Behavior            | 6     | Interface interaction validation |
| 📊 Total Coverage          | 42    | 100% of critical workflows       |

</div>

---

## 🛠️ Technology Stack

<div align="center">

| Category                | Technology       | Version | Purpose                          |
|-------------------------|------------------|---------|----------------------------------|
| **Testing Framework**   | Playwright       | v1.40+  | Browser automation & testing     |
| **Runtime**             | Node.js          | v14+    | JavaScript execution environment |
| **Language**            | JavaScript       | ES6+    | Test script development          |
| **Test Runner**         | Playwright Test  | Latest  | Test orchestration & execution   |
| **Reporter**            | HTML Reporter    | Built-in| Visual test result presentation  |
| **Browser Engine**      | Chromium         | Latest  | Test execution browser           |
| **Package Manager**     | npm              | v6+     | Dependency management            |
| **Version Control**     | Git              | Latest  | Source code management           |

</div>

---

## 📁 Project Structure

```
ITPM/
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
├── 📄 playwright.config.js             # Playwright configuration
├── 📄 package.json                     # Project dependencies
├── 📄 package-lock.json                # Dependency lock file
├── 📄 .gitignore                       # Git ignore rules
└── 📄 README.md                        # This documentation
```

---

## ✅ Prerequisites

### System Requirements

<div align="center">

| Requirement     | Minimum Version               | Recommended  | Purpose                     |
|-----------------|-------------------------------|--------------|------------------------------|
| **Node.js**     | v14.0.0                       | v18.0.0+     | JavaScript runtime           |
| **npm**         | v6.0.0                        | v9.0.0+      | Package manager              |
| **RAM**         | 4 GB                          | 8 GB         | Test execution               |
| **Disk Space**  | 500 MB                        | 1 GB         | Dependencies & artifacts     |
| **Internet**    | Stable                        | High-speed   | Live website access          |
| **OS**          | Windows 10/macOS/Ubuntu 18.04 | Latest       | Cross-platform support       |

</div>

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

---

## 📖 Best Practices

### Writing New Tests

<div align="center">

| Best Practice              | Description                            |
|----------------------------|----------------------------------------|
| **Follow Naming Convention** | Use descriptive test names           |
| **Add Comments**            | Explain complex logic                 |
| **Use Page Objects**        | Encapsulate UI interactions           |
| **Avoid Hard Waits**        | Use `waitFor` methods                 |
| **Clean Up**                | Close contexts and browsers properly  |

</div>

### Test Maintenance

<div align="center">

| Task                          | Description                           |
|-------------------------------|---------------------------------------|
| 🔄 Regular Updates            | Keep dependencies up to date          |
| 📝 Documentation Sync         | Maintain current documentation        |
| 🧹 Remove Obsolete Tests      | Clean up outdated test cases          |
| 📊 Monitor Performance        | Track test execution times            |
| 🎯 Maintain Independence      | Ensure tests don't depend on others   |

</div>

---

## 🤝 Contributing

### How to Contribute

<div align="center">

| Step | Action                                                              |
|------|---------------------------------------------------------------------|
| 1    | **Fork** the repository                                             |
| 2    | **Create** a feature branch (`git checkout -b feature/AmazingFeature`) |
| 3    | **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)    |
| 4    | **Push** to the branch (`git push origin feature/AmazingFeature`)      |
| 5    | **Open** a Pull Request                                             |

</div>

### Contribution Guidelines

<div align="center">

| Guideline                | Description                           |
|--------------------------|---------------------------------------|
| 📝 Clear Commit Messages | Write descriptive commit messages     |
| ✅ Add Tests             | Include tests for new features        |
| 📚 Update Documentation  | Keep docs synchronized                |
| 🎨 Follow Code Style     | Maintain existing conventions         |
| 🧪 Pass All Tests        | Ensure tests pass before PR           |

</div>

---

## 👨‍💻 Author

<div align="center">

### S.A.I.B. Dharmasiri

| Field           | Details                                                    |
|-----------------|-------------------------------------------------------------|
| **Student ID**  | IT23822658                                                 |
| **Program**     | BSc (Hons) Information Technology - Year 3                 |
| **Batch**       | Weekend Batch                                              |
| **Institution** | Sri Lanka Institute of Information Technology (SLIIT)      |
| **Module**      | IT3040 - Information Technology Project Management         |
| **Assignment**  | Assignment 1 - Automated Testing Project                   |

---

📧 **Email**: [IT23822658@my.sliit.lk](mailto:IT23822658@my.sliit.lk)  
🐙 **GitHub**: [@Imesh-Bandar](https://github.com/Imesh-Bandar)

</div>

---

## 📄 License

<div align="center">

This project is developed for **educational purposes** as part of SLIIT IT3040 coursework.

```
Copyright (c) 2024 S.A.I.B. Dharmasiri

This software is provided for educational purposes only.
Unauthorized commercial use is prohibited.
```

</div>

---

## 📞 Support & Contact

### Need Help?

<div align="center">

| Contact Method | Details                    |
|----------------|----------------------------|
| 📧 Email       | IT23822658@my.sliit.lk    |

</div>

---

## 🏆 Acknowledgments

<div align="center">

| Entity                      | Contribution                          |
|-----------------------------|---------------------------------------|
| **SLIIT Faculty**           | Project guidance and support          |
| **Playwright Team**         | Excellent testing framework           |
| **SwiftTranslator**         | Translation system under test         |
| **Open Source Community**   | Inspiration and resources             |

</div>

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

---

| Version | Status              | Last Updated  |
|---------|---------------------|---------------|
| 2.0.0   | ✅ Production Ready | December 2024 |

---

Made with ❤️ by [S.A.I.B. Dharmasiri](https://github.com/Imesh-Bandar)

</div>
