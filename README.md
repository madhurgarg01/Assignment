# 🚀 PopX UI Clone – React Frontend Project

This is a **frontend UI clone** of the PopX application’s onboarding and account settings flow, built using **React**, **Vite**, **React Router**, and **CSS**. The goal was to demonstrate practical frontend skills including component-based architecture, client-side routing, responsive design, animations, and modern React practices.

🔗 **Live Demo**: [https://assignment-eight-sandy.vercel.app/](https://assignment-eight-sandy.vercel.app/)

---

## 📸 Screenshots


- **Welcome Page**  
- **Sign Up Page**  
- **Account Settings Page**

---

## ✨ Features

- **Welcome Screen**
  - Options: “Create Account” and “Already Registered? Login”
- **Sign Up Page**
  - Inputs:
    - Full Name (required)
    - Phone Number (required)
    - Email Address (required)
    - Password (required)
    - Company Name (optional)
    - Agency selection via radio buttons (required)
- **Sign In Page**
  - Login with Email and Password
- **Account Settings Page**
  - Displays mock user data: profile picture, name, email, description, and visual divider
- **Navigation Flow**
  - Welcome → Create Account → Sign Up → Account Settings  
  - Welcome → Already Registered → Login → Account Settings
- **Page Transitions**
  - Smooth animated transitions using `react-transition-group`
- **Responsive Design**
  - Mobile-first layout with centered interface and max-width constraint

---

## 🛠️ Tech Stack

- **React** (v18)
- **Vite**
- **React Router DOM** (v6)
- **React Transition Group** (v4)
- **CSS3**
- **JavaScript (ES6+)**
- **HTML5**

---

## 📁 Project Structure

my-react-app/
├── public/ # Static assets
├── src/
│ ├── pages/ # Page components (WelcomePage, SignUpPage, etc.)
│ ├── styles/ # Global styles
│ │ └── App.css
│ ├── App.jsx # Routing and page transitions
│ └── main.jsx # React entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md # Project documentation

yaml
Copy
Edit

---

## 🧪 How to Run Locally

### 1. Prerequisites

- Node.js ≥ 16.x
- npm or yarn

### 2. Clone & Install

```bash
git clone <your-repository-url>
cd my-react-app
npm install
# or
yarn install
3. Start Development Server
bash
Copy
Edit
npm run dev
# or
yarn dev
Visit http://localhost:5173 in your browser.

💡 Design & Development Highlights
Modular Architecture – Each page is a reusable React component.

Custom Styling – Built from scratch using CSS and Flexbox.

Animated Transitions – Implemented with react-transition-group and nodeRef for React 18 compatibility.

Controlled Forms – Managed via useState, pre-filled for demonstration.

Routing – Handled by react-router-dom with useNavigate for programmatic transitions.

🧠 Key Challenges & Learnings
React 18 Compatibility – Avoided deprecated findDOMNode via nodeRef in transitions.

Pixel-Perfect UI – Learned to match design mockups accurately.

Smooth Transitions – Improved UX by refining animation timing and behavior.

🚀 Future Enhancements
✅ Full client-side validation

✅ Backend integration (e.g., mock API)

✅ Global state management (e.g., Context API, Zustand)

✅ Accessibility improvements (ARIA, keyboard nav)

✅ Testing suite with Jest + RTL

✅ Profile picture upload support

📢 Final Notes
This project demonstrates my ability to develop clean, responsive, and interactive user interfaces using modern React tools and best practices. It's a reflection of my attention to detail, commitment to quality, and eagerness to grow as a frontend developer.

vbnet
Copy
Edit

Let me know if you'd like to add a license, GitHub badges, or contribution guidelines!
