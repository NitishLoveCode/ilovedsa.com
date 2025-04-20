# 💖 i💖dsa.com

**ilovedsa.com** is a social platform for developers — built like Tinder, but for coders. It's a place where developers can swipe, connect, chat, solve questions, video call, screen share, collaborate in real-time, and even listen to music while coding.

## 🤝 Contributing

We welcome developers from all over the world to contribute and help make **i💖dsa.com** the go-to platform for developer connection and collaboration.

Whether you're into frontend, backend, DevOps, UI/UX, testing, or just have awesome ideas — there's a place for you here!

### Ways to Contribute

- 🧠 Improve features or add new ones
- 🐛 Report or fix bugs
- 📝 Improve documentation
- 🎨 Suggest UI/UX improvements
- 🚀 Optimize performance
- 💡 Share ideas for making the platform more fun and helpful

### How to Start

1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m "Add some feature"`
4. Push to the branch: `git push origin feature-name`
5. Open a Pull Request

Together, let's build a better platform for developers — by developers! 💻❤️

---

## 🔥 Features

- 🔍 **Developer Matchmaking** (Tinder-style swiping to find coding partners)
- 💬 **Online Chat & Voice Calling**
- 🎥 **Video Calling + Screen Sharing**
- ❓ **Daily Coding Questions & Solved DSA Bank**
- 💻 **Online Compiler** (Code, Run, Debug in-browser)
- 🎧 **Music While Coding**
- 👤 **Developer Profiles & Activity Logs**
- 🧠 **Collaboration Mode for Pair Programming**

---

## ⚙️ Tech Stack

- ⚛️ **React** (Vite)
- 🧠 **Redux / Zustand** (State Management)
- 🌐 **WebSockets / Socket.IO** (Real-time Communication)
- 📹 **WebRTC** (Video & Screen Sharing)
- 🎵 **Spotify API / Custom Player** (Music)
- 🧪 **CodeMirror / Monaco Editor** (Online Compiler)
- 🔐 **Firebase/Auth / JWT** (Authentication)
- 🌈 **TailwindCSS** (UI & Styling)

---

## 🧱 Folder Structure

```bash
ilovedsa/
├── public/
├── src/
│   ├── assets/               # Static files (images, fonts, icons, music, etc.)
│   ├── components/           # Reusable UI components (buttons, modals, cards, etc.)
│   ├── features/             # Major features grouped by domain
│   │   ├── auth/             # Login, register, social auth
│   │   ├── matchmaking/      # Tinder-like swiping, matching devs
│   │   ├── questions/        # Solve, browse, submit questions
│   │   ├── videoCall/        # Video call, screen share
│   │   ├── chat/             # Messaging, online presence
│   │   ├── call/             # Voice call logic
│   │   ├── compiler/         # Online code editor and compiler
│   │   ├── music/            # Music player integration
│   │   ├── profile/          # User profile, settings, activity
│   │   └── dashboard/        # Main logged-in view or landing
│   ├── hooks/                # Custom React hooks
│   ├── layouts/              # Layouts (SidebarLayout, AuthLayout, etc.)
│   ├── pages/                # Route-based pages (if using React Router or Next.js)
│   ├── services/             # API calls (axios/fetch logic)
│   ├── store/                # Global state (Redux, Zustand, Context API)
│   ├── utils/                # Utility functions, validators, helpers
│   ├── constants/            # Static data, enums, configs
│   ├── App.jsx               # Root component
│   ├── index.js              # Entry point
│   └── index.css             # Global styles
├── .env
├── .gitignore
├── package.json
└── README.md
