# 🎓 Zustand Courses Listing

![Banner](/public//image.png)

A modern course listing application built with React, Zustand for state management, and Vite for blazing-fast development. Features include course management, theme switching, and persistent state.

## ✨ Features

- 📚 Browse and manage courses
- ✅ Toggle course completion status
- 🌓 Dark/Light theme with persistence
- 💾 State persistence using Zustand middleware
- 🎨 Clean, responsive UI with Tailwind CSS
- 🔧 Redux DevTools integration

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ or **Bun** 1.0+

### Installation

**With npm:**

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

**With Bun:**

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build
```

The app will be available at `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── CourseItem.jsx   # Individual course card
│   ├── CourseList.jsx   # Grid of courses
│   ├── Header.jsx       # App header with branding
│   ├── Sidebar.jsx      # Navigation & stats
│   └── ThemeToggle.jsx  # Dark/light mode toggle
├── store/               # Zustand stores
│   ├── coursesStore.js  # Course state & actions
│   ├── themeStore.js    # Theme preferences
│   └── index.js         # Store exports
├── constants/           # Static data
│   └── courses.ts       # Dummy course data
├── App.jsx              # Root component
└── main.jsx             # App entry point
```

## 🏗️ Architecture & Best Practices

### State Management with Zustand

**Store Organization:**

- Each store handles a specific domain (courses, theme)
- Actions are co-located with state for better organization
- Middleware (devtools, persist) enhance functionality

**Immutability Pattern:**

```javascript
// ✅ Correct: Create new references
set((state) => ({
  courses: state.courses.map((course) =>
    course.id === id ? { ...course, completed: !course.completed } : course,
  ),
}));

// ❌ Wrong: Mutating state
state.courses[0].completed = true;
```

**Selective Subscription:**

```javascript
// Only re-renders when courses change
const courses = useCourseStore((state) => state.courses);
```

### Component Design

- **Functional components** with hooks
- **Single responsibility** - each component does one thing well
- **Props drilling avoided** via Zustand
- **Responsive design** with Tailwind utility classes

### Performance Optimizations

1. **Structural Sharing:** Only creates new objects where data changes
2. **Selective Subscriptions:** Components subscribe to specific state slices
3. **Lazy Evaluation:** State updates only trigger necessary re-renders

## 🔧 Tech Stack

- **React 18** - UI library
- **Zustand** - Lightweight state management
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first styling
- **Redux DevTools** - State debugging

## 📚 Learning Resources

- [Zustand Documentation](https://docs.pmnd.rs/zustand)
- [React Patterns](https://react.dev/learn)
- [Immutability in React](https://react.dev/learn/updating-objects-in-state)

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

MIT License - feel free to use this project for learning and development.

---

Built with ❤️ using React & Zustand
