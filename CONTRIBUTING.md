# Contributing to PrebuiltUI

Thanks for your interest in contributing! We truly appreciate your efforts to make **PrebuiltUI** better for everyone.  
Please read these guidelines before you start contributing.

---

## Contribution Workflow

Follow these steps to add a new component:

1. **Clone the repo**
   ```bash
   git clone https://github.com/prebuiltui/prebuiltui.git
   cd prebuiltui
   ````

2. **Create a new branch**

   ```bash
   git checkout -b add-my-component
   ```

3. **Create a component folder**

   * Navigate to the correct category (e.g., `components/buttons/`, `components/cards/`)
   * Create a new folder for your component (e.g., `fancy-button/`)

4. **Add your files**

   * If you have **HTML only** → add `component.html`
     *(If there’s no `<script>` tag, JSX will be auto-generated on the website)*
   * If you have **JSX only** → add `component.jsx`
     *(HTML will not be auto-generated)*
   * If you have **both** → add both `component.html` and `component.jsx`
   * (Optional) Add preview images inside the same folder

5. **Commit & Push**

   ```bash
   git add .
   git commit -m "Added FancyButton component"
   git push origin add-my-component
   ```

6. **Open a Pull Request**

   * Go to the original repo on GitHub
   * Click **New Pull Request**
   * Add a clear description and (if possible) screenshots of your component

---

## Guidelines

* Name files in **CamelCase** (e.g., `HoverButton.jsx`, `InteractiveCard.jsx`, `DarkThemeFooter.html`).
* Keep components clean and reusable.
* Add a short description in your PR.
* Include comments if the code isn’t self-explanatory.
* Add screenshots (optional but recommended) in your PR.

> Your contribution makes PrebuiltUI better for everyone!