Stage 1 Task

This project builds on the Stage 0 profile card, expanding it into a multi-page application that includes **About Me** and **Contact Us** pages. The focus is on semantic HTML, accessibility, responsiveness, and proper validation.

---

## 🔗 Live Links

- **Live Site:** [https://mfonjames15.github.io/Profile-Card](https://mfonjames15.github.io/Profile-Card)  
- **Repository:** [https://github.com/Mfonjames15/Profile-Card](https://github.com/Mfonjames15/Profile-Card)

---

## 📂 Pages Overview

### 1. Contact Us Page
- Form fields (all required):
  - Full Name — `data-testid="test-contact-name"`
  - Email — `data-testid="test-contact-email"`
  - Subject — `data-testid="test-contact-subject"`
  - Message — `data-testid="test-contact-message"`
- Validation:
  - All fields must be filled.
  - Email must follow valid format.
  - Message must be at least 10 characters.
- Displays success message only after a valid submission.
- Accessible with labels, `aria-describedby`, and keyboard navigation.

### 2. About Me Page
- Sections (each with `data-testid`):
  - Bio — `test-about-bio`
  - Goals — `test-about-goals`
  - Areas of low confidence — `test-about-confidence`
  - Note to future self — `test-about-future-note`
  - Extra thoughts — `test-about-extra`
- Structured with `<main>` and `<section>` tags for semantic clarity.

---

## Tech Stack

- **HTML5** — Semantic and accessible structure  
- **CSS3** — Responsive and consistent layout  
- **JavaScript (ES6)** — Form validation logic  
- **GitHub Pages** — Hosting platform  

---

## How to Run Locally

```bash
# Clone the repository
git clone https://github.com/Mfonjames15/Profile-Card.git

# Navigate into the folder
cd Profile-Card

# Open index.html in your browser
