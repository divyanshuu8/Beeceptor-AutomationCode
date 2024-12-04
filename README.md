# Beeceptor Proxy Rule Automation Script

This script automates the process of creating a proxy or callout rule on Beeceptor using Playwright. It simplifies repetitive workflows by programmatically logging into Beeceptor, accessing the project console, and defining rules.

---

## Features

- Automates login to Beeceptor.
- Accesses a specific project console (`softintern`).
- Creates a proxy or callout rule with a custom path and target endpoint.
- Saves the rule and outputs the newly created proxy URL.

---

## Prerequisites

Before running the script, ensure the following:

1. **Node.js**: Install Node.js from [Node.js Official Website](https://nodejs.org/).
2. **Playwright**: Install Playwright via npm:
   ```bash
   npm install playwright
   node script.js

