# 🌐 Personal Portfolio — Alireza Sohrabizadeh

A modern, responsive portfolio built with **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.  
Designed to showcase my projects and frontend engineering skills as I apply for the **Wolt Software Engineering Internship (Frontend)**.

Live site → **https://alirezasohrabizadeh.netlify.app**

---

## 🚀 Features

### 🎨 Clean UI / UX
- Modern, minimalist design
- Light & dark themes (persistent)
- Smooth animations with Framer Motion
- Tab-based navigation (Projects / About / Contact)

### 💻 Frontend-Focused
- Fully built with React + TypeScript
- Component-driven architecture
- Responsive across all devices
- Organized, maintainable code structure

### ⚙️ Tech Stack
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Vite**
- **Framer Motion**
- **Lucide Icons**

### 📱 Mobile-First
- Optimized spacing for small screens
- Horizontal-scroll tabs (scrollbar hidden)
- Smooth layout transitions

---

## 📁 Project Structure

```
src/
 ├── assets/        # Profile image, favicon-related assets
 ├── components/    # Hero, Tabs, ProjectCard, ThemeToggle, etc.
 ├── sections/      # Projects, About, Contact sections
 ├── data/          # Project definitions (projects.ts)
 ├── hooks/         # Custom hooks (e.g., useTheme)
 ├── lib/           # Utilities (e.g., cn.ts)
 ├── App.tsx        # Main layout + tab navigation
 └── main.tsx       # App entry point
```

---

## 🧩 Key Components

### **Hero**
- Name, title, short intro
- GitHub, LinkedIn, CV buttons
- Avatar with glow effect
- Smooth animated entry

### **Tabs**
- Animated underline using Framer Motion
- Mobile-friendly horizontal scrolling
- Minimal, clean design

### **Project Cards**
- Reusable `ProjectCard` component
- Tech badges
- GitHub + Live demo links
- Smooth fade-in animations

### **Contact Section**
- Email, GitHub, LinkedIn actions
- Clear call-to-action with simple wording

---

## 🛠 Running the Project Locally

```bash
git clone https://github.com/sepahsalar/portfolio
cd portfolio
npm install
npm run dev
```

Then open:

```
http://localhost:5173
```

---

## 🚀 Deployment

The portfolio is deployed on **Netlify** with continuous deployment from GitHub.

Build command:

```bash
npm run build
```

Output directory:

```
dist/
```

---

## 🖼 Favicon

A custom green **AS** favicon (SVG + PNG) is included in:

```
public/favicon.svg
public/favicon.png
```

These are automatically used via `<link>` tags in `index.html`.

---

## 📬 Contact

Feel free to reach out:

- **Email:** alireza.sohrabizadeh@gmail.com  
- **LinkedIn:** https://linkedin.com/in/alireza-sohrabizadeh  
- **GitHub:** https://github.com/sepahsalar  

---

Built with ❤️ using React, TypeScript, Tailwind, and Framer Motion.