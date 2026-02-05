# 💖 Valentine Card – Interactive Next.js App

A cute, romantic, and playful Valentine card built with **Next.js App Router**, featuring:
- Progressive questions
- A playful “No” button
- A romantic YES flow
- Smooth card flip animation
- Mobile-responsive baby-pink theme

Perfect for creating a fun and memorable Valentine proposal 💌

---

## ✨ Features

- 🐱 Cute Valentine flow with images  
- 💕 Progressive questions on “No”  
- 😈 Dodging “No” button  
- 🔄 Card flip animation for final reveal  
- 📱 Fully mobile responsive  
- 🎨 Soft romantic pink theme  

---

## 🛠️ Tech Stack

- **Next.js (App Router)**
- **React**
- **CSS + Tailwind base**
- **Next/Image**
- **Client-side state management**

---

## 📂 Project Structure

app/
├─ page.js          → Main UI & logic
├─ layout.js        → App layout
├─ globals.css      → Global + theme styles
├─ helper-text.js   → ALL content (texts, buttons, images)

public/
└─ images (cats, gifts, etc.)

---

## 🧠 How the Flow Works

| Step Value | Meaning |
|-----------|--------|
| step > 0 | Normal questions (No flow) |
| step === 0 | YES accepted screen |
| step === -1 | Back side (final romantic reveal) |

---

## ✏️ How to Change Content (IMPORTANT)

👉 **All text & images live in `helper-text.js`**  
You never need to touch `page.js` to update content.

---

### 1️⃣ Change the subtitle at the top

export const subTitle = "Valentine's 2026";

---

### 2️⃣ Change the question flow

Edit `textArray` in helper-text.js

---

### 3️⃣ Change YES screen text

Edit `yesTextObject` in helper-text.js

---

### 4️⃣ Change final back-card reveal

Edit `backCardTextObject` in helper-text.js

---

## 🖼️ Change Images

Place images inside `/public` and update paths.

---

## 🚀 Run Locally

npm install  
npm run dev  

Open http://localhost:3000

---

## ❤️ Made With Love

Built to make someone smile, laugh, and feel special.

Made with love ❤️
