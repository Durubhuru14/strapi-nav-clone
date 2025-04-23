# Strapi Navigation Clone with Responsive Sidebar

A responsive navigation system with mobile sidebar and desktop dropdown menus, replicating Strapi's UI patterns.

## 📸 Screenshots

- For Desktop Screens( >= 992px):
![desktop screen](https://i.imgur.com/g3GPDEr.png)

- For smaller screens (< 992px):
![smaller screen](https://i.imgur.com/MFjZqcl.png)

## 🖼️ Figma Design

[Strapi Submenus](https://www.figma.com/file/rXeU2gYTyKL2FrYmUNgv4r/Strapi-Submenus?node-id=0%3A1&t=Nx5H36ryj9ArZCI6-1)


## ✨ Features

- **Dual-mode navigation**:
  - 🖥️ Desktop: Hover-activated dropdown submenus with 3D flip animation
  - 📱 Mobile: Full-screen sidebar with toggle button

- **State Management**:
  - Context API for global state
  - `isSidebarOpen` and `pageId` management
  - Custom hooks for clean component usage

- **UI/UX**:
  - Responsive breakpoint at 992px
  - CSS transitions for smooth animations
  - Accessible keyboard navigation

## 🛠 Technologies

- React 18 + Vite
- React Icons (Font Awesome)
- CSS3 (Flexbox/Grid)
- Context API (no external state libraries)

## 📂 Project Structure

```
.
├── public/
│   └── logo.svg
├── src/
│   ├── App.jsx            # Root component
│   ├── Context.jsx        # State provider
│   ├── data.jsx           # Navigation content
│   ├── Hero.jsx           # Landing section
│   ├── index.css          # Global styles
│   ├── main.jsx           # Entry point
│   ├── Navbar.jsx         # Navigation controller
│   ├── Navlinks.jsx       # Link generator
│   ├── Sidebar.jsx        # Mobile menu
│   └── Submenu.jsx        # Desktop dropdowns
```

## 🚀 Installation

```bash
git clone https://github.com/Durubhuru14/strapi-nav-clone.git
cd strapi-nav-clone
npm install
npm run dev
```

## 🎨 Design Specifications

### Color Scheme
```css
:root {
  --primary-500: #6366f1;  /* Main purple */
  --white: #fff;           /* Text/background */
  --grey-900: #0f172a;     /* Dark text */
}
```

### Animations
- **Sidebar**: 1s opacity fade
- **Submenu**: 0.3s 3D transform
- **Toggle Button**: Scale bounce effect

## 🖥 Usage

1. **Desktop**:
   - Hover nav links to show submenus
   - Mouse leave hides submenus automatically

2. **Mobile**:
   - Click ☰ to open sidebar
   - Click × or outside to close

## ✉️ Contact
[Durubhuru] - [durveshmore.drm@gmail.com]
[https://github.com/Durubhuru14]
