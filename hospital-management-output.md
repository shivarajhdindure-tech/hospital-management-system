# 📁 PROJECT EXPORT FOR LLMs

## 📊 Project Information

- **Project Name**: `hospital-management`
- **Generated On**: 2026-05-19 13:22:57 (Asia/Calcutta / GMT+06:30)
- **Total Files Processed**: 15
- **Export Tool**: Easy Whole Project to Single Text File for LLMs v1.1.0
- **Tool Author**: Jota / José Guilherme Pandolfi

### ⚙️ Export Configuration

| Setting | Value |
|---------|-------|
| Language | `en` |
| Max File Size | `1 MB` |
| Include Hidden Files | `false` |
| Output Format | `both` |

## 🌳 Project Structure

```
├── 📁 config/
│   └── 📄 db.js (454 B)
├── 📁 css/
│   └── 📄 style.css (23.87 KB)
├── 📁 js/
│   └── 📄 app.js (11.68 KB)
├── 📄 appointments.html (44.07 KB)
├── 📄 billing.html (51.69 KB)
├── 📄 dashboard.html (27.38 KB)
├── 📄 doctors.html (41.6 KB)
├── 📄 index.html (1.98 KB)
├── 📄 login.html (27.71 KB)
├── 📄 package-lock.json (33.58 KB)
├── 📄 package.json (380 B)
├── 📄 patients.html (40.55 KB)
├── 📄 README.md (28 B)
├── 📄 server.js (11.49 KB)
└── 📄 settings.html (4.1 KB)
```

## 📑 Table of Contents

**Project Files:**

- [📄 config/db.js](#📄-config-db-js)
- [📄 css/style.css](#📄-css-style-css)
- [📄 js/app.js](#📄-js-app-js)
- [📄 appointments.html](#📄-appointments-html)
- [📄 billing.html](#📄-billing-html)
- [📄 dashboard.html](#📄-dashboard-html)
- [📄 doctors.html](#📄-doctors-html)
- [📄 index.html](#📄-index-html)
- [📄 login.html](#📄-login-html)
- [📄 package-lock.json](#📄-package-lock-json)
- [📄 package.json](#📄-package-json)
- [📄 patients.html](#📄-patients-html)
- [📄 README.md](#📄-readme-md)
- [📄 server.js](#📄-server-js)
- [📄 settings.html](#📄-settings-html)

---

## 📈 Project Statistics

| Metric | Count |
|--------|-------|
| Total Files | 15 |
| Total Directories | 3 |
| Text Files | 15 |
| Binary Files | 0 |
| Total Size | 320.54 KB |

### 📄 File Types Distribution

| Extension | Count |
|-----------|-------|
| `.html` | 8 |
| `.js` | 3 |
| `.json` | 2 |
| `.css` | 1 |
| `.md` | 1 |

## 💻 File Code Contents

### <a id="📄-config-db-js"></a>📄 `config/db.js`

**File Info:**
- **Size**: 454 B
- **Extension**: `.js`
- **Language**: `javascript`
- **Location**: `config/db.js`
- **Relative Path**: `config`
- **Created**: 2026-05-12 08:50:27 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-05-19 13:16:17 (Asia/Calcutta / GMT+06:30)
- **MD5**: `f5275566ab1485473135dd9dcd86d784`
- **SHA256**: `449dabe3cd8dbe45a6de9d6f5c419b13673e3ee8802b07a26b81fa87c2740f10`
- **Encoding**: ASCII

**File code content:**

```javascript
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.DB_HOST,

  port: process.env.DB_PORT,

  user: process.env.DB_USER,

  password: process.env.DB_PASSWORD,

  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.log("Database connection failed");

    console.log(err);
  } else {
    console.log("Connected to Railway MySQL");
  }
});

module.exports = db;

```

---

### <a id="📄-css-style-css"></a>📄 `css/style.css`

**File Info:**
- **Size**: 23.87 KB
- **Extension**: `.css`
- **Language**: `css`
- **Location**: `css/style.css`
- **Relative Path**: `css`
- **Created**: 2026-05-12 05:38:51 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-05-12 05:40:51 (Asia/Calcutta / GMT+06:30)
- **MD5**: `3dfdbc2b605c9ee01f18919e149cffee`
- **SHA256**: `7dc90ee564901878aa4fb1f5f559b688ffbf96e4f778376aa4878e7119e2a622`
- **Encoding**: UTF-8

**File code content:**

```css
/* ============================================================
   HOSPITAL MANAGEMENT SYSTEM — css/style.css
   Color Palette:
     --white       : #ffffff
     --light-blue  : #e8f4fd  (backgrounds, accents)
     --mid-blue    : #3b9fd1  (interactive elements)
     --dark-blue   : #0d3b66  (sidebar, headings)
     --accent-blue : #1a73e8  (buttons, highlights)
   ============================================================ */

/* ── Google Fonts ─────────────────────────────────────────── */
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&display=swap");

/* ── CSS Custom Properties (variables) ───────────────────── */
:root {
  /* Colors */
  --white: #ffffff;
  --light-blue: #e8f4fd;
  --pale-blue: #f0f8ff;
  --mid-blue: #3b9fd1;
  --accent-blue: #1a73e8;
  --dark-blue: #0d3b66;
  --darker-blue: #092d50;
  --success: #27ae60;
  --warning: #f39c12;
  --danger: #e74c3c;
  --text-dark: #1a2a3a;
  --text-mid: #4a6080;
  --text-light: #8fa8c0;
  --border: #d0e8f5;
  --shadow-sm: 0 2px 8px rgba(13, 59, 102, 0.08);
  --shadow-md: 0 4px 20px rgba(13, 59, 102, 0.12);
  --shadow-lg: 0 8px 40px rgba(13, 59, 102, 0.18);

  /* Layout */
  --sidebar-width: 260px;
  --topbar-height: 68px;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 20px;

  /* Typography */
  --font-body: "DM Sans", sans-serif;
  --font-display: "Playfair Display", serif;

  /* Transitions */
  --transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ── Reset & Base ─────────────────────────────────────────── */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  font-size: 15px;
  color: var(--text-dark);
  background-color: var(--pale-blue);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

a {
  text-decoration: none;
  color: inherit;
}

ul,
ol {
  list-style: none;
}

img {
  max-width: 100%;
  display: block;
}

/* ── Layout Shell ─────────────────────────────────────────── */
.app-shell {
  display: flex;
  min-height: 100vh;
}

/* ── Sidebar ──────────────────────────────────────────────── */
.sidebar {
  width: var(--sidebar-width);
  background: linear-gradient(
    170deg,
    var(--darker-blue) 0%,
    var(--dark-blue) 100%
  );
  color: var(--white);
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 100;
  transition: var(--transition);
  overflow: hidden;
}

/* Decorative circle behind logo */
.sidebar::before {
  content: "";
  position: absolute;
  top: -60px;
  right: -60px;
  width: 200px;
  height: 200px;
  background: rgba(59, 159, 209, 0.12);
  border-radius: 50%;
  pointer-events: none;
}

/* Brand / Logo area */
.sidebar-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 28px 24px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.sidebar-brand .brand-icon {
  width: 42px;
  height: 42px;
  background: linear-gradient(135deg, var(--mid-blue), var(--accent-blue));
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(26, 115, 232, 0.4);
}

.sidebar-brand .brand-text h2 {
  font-family: var(--font-display);
  font-size: 17px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.3px;
}

.sidebar-brand .brand-text span {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

/* Navigation Menu */
.sidebar-nav {
  flex: 1;
  padding: 20px 0;
  overflow-y: auto;
}

/* Scrollbar for sidebar nav */
.sidebar-nav::-webkit-scrollbar {
  width: 4px;
}
.sidebar-nav::-webkit-scrollbar-track {
  background: transparent;
}
.sidebar-nav::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
}

.nav-section-label {
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.3);
  padding: 16px 24px 8px;
  font-weight: 600;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 11px 24px;
  margin: 2px 12px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: var(--transition);
  color: rgba(255, 255, 255, 0.65);
  font-weight: 500;
  font-size: 14px;
  position: relative;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.08);
  color: var(--white);
}

/* Active nav item */
.nav-item.active {
  background: linear-gradient(
    90deg,
    rgba(26, 115, 232, 0.9),
    rgba(59, 159, 209, 0.7)
  );
  color: var(--white);
  box-shadow: 0 4px 12px rgba(26, 115, 232, 0.35);
}

.nav-item.active::before {
  content: "";
  position: absolute;
  left: -12px;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 70%;
  background: var(--white);
  border-radius: 0 2px 2px 0;
}

.nav-item .nav-icon {
  font-size: 18px;
  width: 22px;
  text-align: center;
  flex-shrink: 0;
}

.nav-item .nav-badge {
  margin-left: auto;
  background: var(--danger);
  color: var(--white);
  font-size: 10px;
  font-weight: 700;
  padding: 2px 7px;
  border-radius: 20px;
}

/* Sidebar Footer */
.sidebar-footer {
  padding: 20px 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.sidebar-user {
  display: flex;
  align-items: center;
  gap: 12px;
}

.sidebar-user .user-avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--mid-blue), var(--accent-blue));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  flex-shrink: 0;
}

.sidebar-user .user-info h4 {
  font-size: 13px;
  font-weight: 600;
  color: var(--white);
}

.sidebar-user .user-info p {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.4);
}

/* ── Main Content Area ────────────────────────────────────── */
.main-content {
  margin-left: var(--sidebar-width);
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  transition: var(--transition);
}

/* ── Top Navbar ───────────────────────────────────────────── */
.topbar {
  height: var(--topbar-height);
  background: var(--white);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  padding: 0 28px;
  gap: 16px;
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow: var(--shadow-sm);
}

/* Hamburger menu (mobile) */
.topbar-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 22px;
  color: var(--dark-blue);
  padding: 6px;
  border-radius: var(--radius-sm);
  transition: var(--transition);
}

.topbar-toggle:hover {
  background: var(--light-blue);
}

/* Page title inside topbar */
.topbar-title {
  font-size: 20px;
  font-family: var(--font-display);
  color: var(--dark-blue);
  font-weight: 700;
}

/* Search bar */
.topbar-search {
  flex: 1;
  max-width: 380px;
  margin-left: 24px;
  position: relative;
}

.topbar-search input {
  width: 100%;
  padding: 9px 16px 9px 40px;
  border: 1.5px solid var(--border);
  border-radius: 30px;
  background: var(--pale-blue);
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--text-dark);
  transition: var(--transition);
  outline: none;
}

.topbar-search input:focus {
  border-color: var(--accent-blue);
  background: var(--white);
  box-shadow: 0 0 0 3px rgba(26, 115, 232, 0.1);
}

.topbar-search .search-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-light);
  font-size: 15px;
}

/* Right side actions */
.topbar-actions {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 8px;
}

.topbar-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: var(--pale-blue);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  color: var(--text-mid);
  transition: var(--transition);
  position: relative;
}

.topbar-btn:hover {
  background: var(--light-blue);
  color: var(--dark-blue);
}

/* Notification dot */
.topbar-btn .dot {
  position: absolute;
  top: 7px;
  right: 7px;
  width: 8px;
  height: 8px;
  background: var(--danger);
  border-radius: 50%;
  border: 2px solid var(--white);
}

/* Topbar user avatar */
.topbar-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--dark-blue), var(--mid-blue));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  color: var(--white);
  cursor: pointer;
  border: 2px solid var(--border);
  transition: var(--transition);
  margin-left: 4px;
}

.topbar-avatar:hover {
  border-color: var(--accent-blue);
}

/* ── Page Content Wrapper ─────────────────────────────────── */
.page-content {
  padding: 28px;
  flex: 1;
}

/* Page header */
.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
  flex-wrap: wrap;
  gap: 12px;
}

.page-header h1 {
  font-family: var(--font-display);
  font-size: 26px;
  color: var(--dark-blue);
  font-weight: 700;
}

.page-header p {
  font-size: 13px;
  color: var(--text-light);
  margin-top: 2px;
}

/* ── Stat Cards ───────────────────────────────────────────── */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-bottom: 28px;
}

.stat-card {
  background: var(--white);
  border-radius: var(--radius-md);
  padding: 24px;
  box-shadow: var(--shadow-sm);
  display: flex;
  align-items: center;
  gap: 18px;
  border: 1px solid var(--border);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  /* Staggered animation */
  opacity: 0;
  transform: translateY(20px);
  animation: fadeSlideUp 0.5s ease forwards;
}

/* Each card animates in with delay */
.stat-card:nth-child(1) {
  animation-delay: 0.05s;
}
.stat-card:nth-child(2) {
  animation-delay: 0.15s;
}
.stat-card:nth-child(3) {
  animation-delay: 0.25s;
}
.stat-card:nth-child(4) {
  animation-delay: 0.35s;
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--mid-blue);
}

/* Decorative stripe on left */
.stat-card::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 4px;
  background: var(--card-accent, var(--accent-blue));
  border-radius: 4px 0 0 4px;
}

.stat-card .stat-icon {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-sm);
  background: var(--card-bg, var(--light-blue));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  flex-shrink: 0;
}

.stat-card .stat-info h3 {
  font-size: 28px;
  font-weight: 700;
  color: var(--dark-blue);
  line-height: 1;
}

.stat-card .stat-info p {
  font-size: 13px;
  color: var(--text-mid);
  margin-top: 4px;
}

.stat-card .stat-change {
  margin-top: 6px;
  font-size: 12px;
  font-weight: 600;
}

.stat-change.up {
  color: var(--success);
}
.stat-change.down {
  color: var(--danger);
}

/* Color variants for stat cards */
.stat-card.blue {
  --card-accent: var(--accent-blue);
  --card-bg: #e8f1fd;
}
.stat-card.teal {
  --card-accent: #00bcd4;
  --card-bg: #e0f7fa;
}
.stat-card.green {
  --card-accent: var(--success);
  --card-bg: #e8f8f0;
}
.stat-card.orange {
  --card-accent: var(--warning);
  --card-bg: #fef6e7;
}

/* ── Content Grid (dashboard layout) ─────────────────────── */
.content-grid {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 20px;
}

/* On smaller screens, stack */
@media (max-width: 1100px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
}

/* ── Card (generic panel) ─────────────────────────────────── */
.card {
  background: var(--white);
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  /* Entry animation */
  opacity: 0;
  animation: fadeSlideUp 0.5s ease 0.4s forwards;
}

.card-header {
  padding: 18px 24px;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.card-header h2 {
  font-size: 16px;
  font-weight: 600;
  color: var(--dark-blue);
}

.card-header p {
  font-size: 12px;
  color: var(--text-light);
  margin-top: 2px;
}

.card-body {
  padding: 20px 24px;
}

/* ── Table ────────────────────────────────────────────────── */
.table-wrapper {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

table thead th {
  text-align: left;
  padding: 12px 16px;
  background: var(--pale-blue);
  color: var(--text-mid);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-bottom: 2px solid var(--border);
}

table tbody tr {
  border-bottom: 1px solid var(--border);
  transition: var(--transition);
}

table tbody tr:last-child {
  border-bottom: none;
}

table tbody tr:hover {
  background: var(--pale-blue);
}

table tbody td {
  padding: 13px 16px;
  color: var(--text-dark);
  vertical-align: middle;
}

/* Patient name with avatar */
.patient-cell {
  display: flex;
  align-items: center;
  gap: 10px;
}

.patient-cell .mini-avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--dark-blue), var(--mid-blue));
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  flex-shrink: 0;
}

.patient-cell .patient-name {
  font-weight: 600;
  font-size: 14px;
}

.patient-cell .patient-id {
  font-size: 11px;
  color: var(--text-light);
}

/* ── Status Badges ────────────────────────────────────────── */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.3px;
}

.badge::before {
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
}

.badge.confirmed {
  background: #e8f8f0;
  color: var(--success);
}
.badge.pending {
  background: #fef6e7;
  color: var(--warning);
}
.badge.cancelled {
  background: #fdecea;
  color: var(--danger);
}
.badge.completed {
  background: #e8f1fd;
  color: var(--accent-blue);
}

/* ── Buttons ──────────────────────────────────────────────── */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  border: 1.5px solid transparent;
  white-space: nowrap;
}

.btn-primary {
  background: linear-gradient(135deg, var(--accent-blue), var(--mid-blue));
  color: var(--white);
  box-shadow: 0 4px 12px rgba(26, 115, 232, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(26, 115, 232, 0.4);
}

.btn-outline {
  background: transparent;
  color: var(--accent-blue);
  border-color: var(--accent-blue);
}

.btn-outline:hover {
  background: var(--light-blue);
}

.btn-ghost {
  background: var(--pale-blue);
  color: var(--text-mid);
  border-color: var(--border);
}

.btn-ghost:hover {
  background: var(--light-blue);
  color: var(--dark-blue);
}

.btn-danger {
  background: #fdecea;
  color: var(--danger);
  border-color: #f5c6c2;
}

.btn-danger:hover {
  background: var(--danger);
  color: var(--white);
}

.btn-sm {
  padding: 6px 14px;
  font-size: 12px;
}

.btn-icon {
  width: 34px;
  height: 34px;
  padding: 0;
  justify-content: center;
  border-radius: var(--radius-sm);
  background: var(--pale-blue);
  color: var(--text-mid);
  border: 1px solid var(--border);
}

.btn-icon:hover {
  background: var(--light-blue);
  color: var(--dark-blue);
}

/* ── Forms ────────────────────────────────────────────────── */
.form-group {
  margin-bottom: 18px;
}

.form-group label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-mid);
  margin-bottom: 7px;
  letter-spacing: 0.3px;
}

.form-control {
  width: 100%;
  padding: 10px 14px;
  border: 1.5px solid var(--border);
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--text-dark);
  background: var(--white);
  transition: var(--transition);
  outline: none;
}

.form-control:focus {
  border-color: var(--accent-blue);
  box-shadow: 0 0 0 3px rgba(26, 115, 232, 0.1);
}

.form-control::placeholder {
  color: var(--text-light);
}

select.form-control {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24'%3E%3Cpath fill='%238fa8c0' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  padding-right: 36px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

/* ── Modal ────────────────────────────────────────────────── */
.modal-overlay {
  display: none; /* hidden by default */
  position: fixed;
  inset: 0;
  background: rgba(9, 45, 80, 0.5);
  backdrop-filter: blur(4px);
  z-index: 200;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

/* Show modal when active */
.modal-overlay.active {
  display: flex;
}

.modal {
  background: var(--white);
  border-radius: var(--radius-lg);
  width: 100%;
  max-width: 520px;
  box-shadow: var(--shadow-lg);
  animation: modalPop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}

.modal-header {
  padding: 22px 28px;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-header h3 {
  font-family: var(--font-display);
  font-size: 20px;
  color: var(--dark-blue);
}

.modal-close {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: var(--pale-blue);
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-mid);
  transition: var(--transition);
}

.modal-close:hover {
  background: #fdecea;
  color: var(--danger);
}

.modal-body {
  padding: 24px 28px;
}

.modal-footer {
  padding: 18px 28px;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

/* ── Mini Schedule / Sidebar Card ─────────────────────────── */
.schedule-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.schedule-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: var(--radius-sm);
  background: var(--pale-blue);
  border: 1px solid var(--border);
  transition: var(--transition);
}

.schedule-item:hover {
  border-color: var(--mid-blue);
  background: var(--light-blue);
}

.schedule-item .time-block {
  background: var(--dark-blue);
  color: var(--white);
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  min-width: 54px;
  flex-shrink: 0;
}

.schedule-item .appt-info strong {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-dark);
}

.schedule-item .appt-info span {
  font-size: 11px;
  color: var(--text-light);
}

/* ── Quick Stats / Summary Row ───────────────────────────── */
.summary-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 16px;
}

.summary-item {
  text-align: center;
  padding: 12px;
  background: var(--pale-blue);
  border-radius: var(--radius-sm);
}

.summary-item .num {
  font-size: 22px;
  font-weight: 700;
  color: var(--dark-blue);
}

.summary-item .label {
  font-size: 11px;
  color: var(--text-light);
  margin-top: 2px;
}

/* ── Animations ───────────────────────────────────────────── */
@keyframes fadeSlideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes modalPop {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* ── Utility Classes ──────────────────────────────────────── */
.text-center {
  text-align: center;
}
.text-right {
  text-align: right;
}
.mt-4 {
  margin-top: 4px;
}
.mt-8 {
  margin-top: 8px;
}
.mt-16 {
  margin-top: 16px;
}
.mb-16 {
  margin-bottom: 16px;
}
.flex {
  display: flex;
}
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.gap-8 {
  gap: 8px;
}
.gap-12 {
  gap: 12px;
}
.w-full {
  width: 100%;
}

/* Overlay for mobile sidebar */
.sidebar-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(9, 45, 80, 0.5);
  z-index: 99;
}

.sidebar-overlay.active {
  display: block;
}

/* ── Responsive Breakpoints ───────────────────────────────── */

/* Tablet */
@media (max-width: 900px) {
  .page-content {
    padding: 20px 16px;
  }
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile */
@media (max-width: 600px) {
  /* Sidebar hidden off screen by default on mobile */
  .sidebar {
    left: calc(-1 * var(--sidebar-width));
  }

  /* When .open class added via JS, sidebar slides in */
  .sidebar.open {
    left: 0;
    box-shadow: var(--shadow-lg);
  }

  .main-content {
    margin-left: 0;
  }

  .topbar-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .topbar-search {
    display: none;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .page-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .summary-row {
    grid-template-columns: 1fr;
  }
}

```

---

### <a id="📄-js-app-js"></a>📄 `js/app.js`

**File Info:**
- **Size**: 11.68 KB
- **Extension**: `.js`
- **Language**: `javascript`
- **Location**: `js/app.js`
- **Relative Path**: `js`
- **Created**: 2026-05-12 05:39:18 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-05-19 13:22:56 (Asia/Calcutta / GMT+06:30)
- **MD5**: `0dc0992b7979ef388e990211ed6f5085`
- **SHA256**: `43937cc0956679f73e2c118e40b109cb5d683b673346f325e75baa073a88da79`
- **Encoding**: UTF-8

**File code content:**

```javascript
/* ============================================================
   HOSPITAL MANAGEMENT SYSTEM — js/app.js
   Shared vanilla JavaScript used across all pages.
   No frameworks, no libraries — beginner-friendly & well-commented.
   ============================================================ */

/* ─────────────────────────────────────────────────────────────
   2.  HELPER UTILITIES
───────────────────────────────────────────────────────────── */

/**
 * Get initials from a full name string.
 * e.g. "Ayaan Kapoor" → "AK"
 */
function getInitials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

/**
 * Return a badge HTML string for a given appointment status.
 * @param {string} status - "confirmed" | "pending" | "cancelled" | "completed"
 */
function buildBadge(status) {
  const labels = {
    confirmed: "Confirmed",
    pending: "Pending",
    cancelled: "Cancelled",
    completed: "Completed",
  };
  return `<span class="badge ${status}">${labels[status] || status}</span>`;
}

/**
 * Format a number with commas.
 * e.g. 1284 → "1,284"
 */
function formatNumber(n) {
  return n.toLocaleString("en-IN");
}

/* ─────────────────────────────────────────────────────────────
   3.  SIDEBAR & TOPBAR BEHAVIOUR
───────────────────────────────────────────────────────────── */

/**
 * Initialise mobile sidebar toggle.
 * Adds/removes the .open class on sidebar and .active on overlay.
 */
function initSidebar() {
  const toggleBtn = document.getElementById("sidebarToggle");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebarOverlay");

  if (!toggleBtn || !sidebar) return; // guard if elements don't exist

  /* Open sidebar */
  toggleBtn.addEventListener("click", () => {
    sidebar.classList.add("open");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden"; // prevent scroll behind
  });

  /* Close sidebar when overlay is clicked */
  overlay.addEventListener("click", closeSidebar);

  function closeSidebar() {
    sidebar.classList.remove("open");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

/**
 * Mark the current page's nav item as active.
 * Matches using the href of each .nav-item anchor vs current filename.
 */
function setActiveNav() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navItems = document.querySelectorAll(".nav-item[data-page]");

  navItems.forEach((item) => {
    if (item.dataset.page === currentPage) {
      item.classList.add("active");
    }
  });
}

/* ─────────────────────────────────────────────────────────────
   4.  MODAL SYSTEM
   Open/close any modal by ID.
───────────────────────────────────────────────────────────── */

/**
 * Open a modal overlay by its ID.
 * @param {string} modalId - the id attribute of the .modal-overlay element
 */
function openModal(modalId) {
  const overlay = document.getElementById(modalId);
  if (!overlay) return;
  overlay.classList.add("active");
  document.body.style.overflow = "hidden"; // lock page scroll
}

/**
 * Close a modal overlay by its ID.
 * @param {string} modalId
 */
function closeModal(modalId) {
  const overlay = document.getElementById(modalId);
  if (!overlay) return;
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

/**
 * Attach close behaviour to all .modal-close buttons and
 * close when clicking the overlay background.
 */
function initModals() {
  /* Close buttons inside modals */
  document.querySelectorAll(".modal-close").forEach((btn) => {
    btn.addEventListener("click", () => {
      const overlay = btn.closest(".modal-overlay");
      if (overlay) {
        overlay.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  });

  /* Clicking the dark overlay itself also closes the modal */
  document.querySelectorAll(".modal-overlay").forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  });

  /* ESC key closes any open modal */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-overlay.active").forEach((overlay) => {
        overlay.classList.remove("active");
        document.body.style.overflow = "";
      });
    }
  });
}

/* ─────────────────────────────────────────────────────────────
   5.  DASHBOARD PAGE FUNCTIONS
───────────────────────────────────────────────────────────── */

/**
 * Animate a number counting up from start to end.
 * @param {HTMLElement} el     - the element to update
 * @param {number}      start  - starting value
 * @param {number}      end    - ending value
 * @param {number}      duration - ms
 */

async function renderAppointmentsTable() {
  const tbody = document.getElementById("appointmentsTableBody");

  if (!tbody) return;

  try {
    const response = await fetch(
      "https://hospital-management-system-ocss.onrender.com/appointments",
    );

    const appointments = await response.json();

    tbody.innerHTML = "";

    appointments.forEach((appt) => {
      const initials = getInitials(appt.patient_name);

      const row = document.createElement("tr");

      row.innerHTML = `

        <td>
          <div class="patient-cell">

            <div class="mini-avatar">
              ${initials}
            </div>

            <div>

              <div class="patient-name">
                ${appt.patient_name}
              </div>

              <div class="patient-id">
                ID: ${appt.patient_id}
              </div>

            </div>

          </div>
        </td>

        <td>
          ${appt.doctor_name}
        </td>

        <td>
          General
        </td>

        <td>
          ${appt.appointment_date}
          <br>
          <small style="color:var(--text-light)">
            ${appt.appointment_time}
          </small>
        </td>

        <td>

          <span class="badge confirmed">
            ${appt.status}
          </span>

        </td>

        <td>

          <div class="flex gap-8">

            <button
              class="btn-icon">
              👁️
            </button>

          </div>

        </td>
      `;

      tbody.appendChild(row);
    });
  } catch (error) {
    console.log(error);
  }
}

async function renderTodaySchedule() {
  const list = document.getElementById("scheduleList");

  if (!list) return;

  try {
    const response = await fetch(
      "https://hospital-management-system-ocss.onrender.com/appointments",
    );

    const appointments = await response.json();

    list.innerHTML = "";

    appointments.slice(0, 5).forEach((appt) => {
      const item = document.createElement("div");

      item.className = "schedule-item";

      item.innerHTML = `

        <div class="time-block">

          ${appt.appointment_time}

        </div>

        <div class="appt-info">

          <strong>
            ${appt.patient_name}
          </strong>

          <span>

            ${appt.doctor_name}

          </span>

        </div>
      `;

      list.appendChild(item);
    });
  } catch (error) {
    console.log(error);
  }
}

/* ─────────────────────────────────────────────────────────────
   6.  APPOINTMENT FORM (in modal)
───────────────────────────────────────────────────────────── */

/**
 * Handle the New Appointment form submission.
 * Currently just shows an alert — replace with real logic later.
 */
function initAppointmentForm() {
  const form = document.getElementById("newAppointmentForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent page reload

    /* Collect form values */
    const data = {
      patient: form.querySelector("#formPatient").value,
      doctor: form.querySelector("#formDoctor").value,
      date: form.querySelector("#formDate").value,
      time: form.querySelector("#formTime").value,
      department: form.querySelector("#formDepartment").value,
      notes: form.querySelector("#formNotes").value,
    };

    console.log("New appointment data:", data); // inspect in DevTools

    /* TODO: push to APP_DATA.recentAppointments and re-render table */
    alert(
      `✅ Appointment booked for ${data.patient} on ${data.date} at ${data.time}`,
    );

    /* Close modal and reset form */
    closeModal("newAppointmentModal");
    form.reset();
  });
}

/* ─────────────────────────────────────────────────────────────
   7.  CURRENT DATE / TIME IN TOPBAR
───────────────────────────────────────────────────────────── */

/**
 * Show a live clock and today's date in the topbar.
 */
function initClock() {
  const el = document.getElementById("topbarClock");
  if (!el) return;

  function update() {
    const now = new Date();
    const time = now.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const date = now.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    el.textContent = `${date}  •  ${time}`;
  }

  update();
  setInterval(update, 1000); // update every second
}

/* ─────────────────────────────────────────────────────────────
   8.  BOOTSTRAP — runs on every page load
───────────────────────────────────────────────────────────── */

document.addEventListener("DOMContentLoaded", () => {
  initSidebar(); // mobile sidebar toggle
  setActiveNav(); // highlight current page in nav
  initModals(); // wire up all modal close buttons
  initClock(); // live date/time display

  /* Dashboard-specific initialisers */

  renderAppointmentsTable();
  renderTodaySchedule();
  initAppointmentForm();
});

```

---

### <a id="📄-appointments-html"></a>📄 `appointments.html`

**File Info:**
- **Size**: 44.07 KB
- **Extension**: `.html`
- **Language**: `html`
- **Location**: `appointments.html`
- **Relative Path**: `root`
- **Created**: 2026-05-12 05:37:19 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-05-13 04:31:23 (Asia/Calcutta / GMT+06:30)
- **MD5**: `c43edb114096697d127865d5565a71c7`
- **SHA256**: `46c59f56f261800742cbc599e25d63075cec503bb365485a6722de2fe75536b3`
- **Encoding**: UTF-8

**File code content:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Appointments — MediCore HMS</title>

    <!-- Google Fonts: same as the rest of the project -->
    <link
      href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&display=swap"
      rel="stylesheet" />

    <!-- Link to the shared stylesheet (same folder structure as project) -->
    <link rel="stylesheet" href="css/style.css" />

    <style>
      /* ============================================================
         appointments.html — Page-specific styles only.
         All base styles (sidebar, navbar, buttons, badges, modals,
         tables, forms, animations) come from css/style.css.
         We only add what is unique to this page here.
         ============================================================ */

      /* ── Collapsible Form Panel ──────────────────────────────── */

      /* The form card sits above the table card */
      .form-card {
        background: var(--white);
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        box-shadow: var(--shadow-sm);
        margin-bottom: 24px;
        /* Entry animation (same as .card in style.css) */
        opacity: 0;
        animation: fadeSlideUp 0.5s ease 0.1s forwards;
      }

      /* Header row of the form card — holds title + toggle button */
      .form-card-header {
        padding: 18px 24px;
        border-bottom: 1px solid var(--border);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        cursor: pointer; /* clicking the header also toggles form */
        user-select: none;
      }

      .form-card-header h2 {
        font-size: 16px;
        font-weight: 600;
        color: var(--dark-blue);
        display: flex;
        align-items: center;
        gap: 8px;
      }

      /* The little arrow icon that rotates when form collapses */
      .toggle-arrow {
        display: inline-block;
        font-style: normal;
        transition: transform 0.3s ease;
        color: var(--text-light);
        font-size: 13px;
      }

      /* When the form is collapsed, rotate arrow to point right */
      .form-card.collapsed .toggle-arrow {
        transform: rotate(-90deg);
      }

      /* The collapsible body — animated open/close */
      .form-collapsible {
        overflow: hidden;
        max-height: 600px; /* large enough to never clip content */
        transition:
          max-height 0.4s ease,
          opacity 0.3s ease;
        opacity: 1;
      }

      /* Hidden state: collapse to zero height */
      .form-collapsible.hidden {
        max-height: 0;
        opacity: 0;
      }

      .form-card-body {
        padding: 24px;
      }

      /* Three-column row for the first set of fields */
      .form-row-3 {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 16px;
      }

      /* Two-column row for the second set */
      .form-row-2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
      }

      /* Read-only field styling (Appointment ID is auto-generated) */
      .form-control[readonly] {
        background: var(--pale-blue);
        color: var(--text-mid);
        cursor: not-allowed;
      }

      /* Inline feedback message below the form */
      .form-feedback {
        display: none; /* shown via JS */
        margin-top: 14px;
        padding: 10px 14px;
        border-radius: var(--radius-sm);
        font-size: 13px;
        font-weight: 500;
      }

      /* ── Table Section ───────────────────────────────────────── */

      /* Card wrapping the appointments table */
      .table-card {
        background: var(--white);
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        box-shadow: var(--shadow-sm);
        overflow: hidden;
        /* Slightly later entry animation */
        opacity: 0;
        animation: fadeSlideUp 0.5s ease 0.25s forwards;
      }

      /* Table card header: title on left, search + filter on right */
      .table-card-header {
        padding: 18px 24px;
        border-bottom: 1px solid var(--border);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        flex-wrap: wrap;
      }

      .table-card-header h2 {
        font-size: 16px;
        font-weight: 600;
        color: var(--dark-blue);
      }

      .table-card-header p {
        font-size: 12px;
        color: var(--text-light);
        margin-top: 2px;
      }

      /* Right side controls: search input + status filter */
      .table-controls {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
      }

      /* Search input inside the table header */
      .table-search {
        position: relative;
      }

      .table-search input {
        padding: 8px 14px 8px 36px;
        border: 1.5px solid var(--border);
        border-radius: 30px;
        font-family: var(--font-body);
        font-size: 13px;
        color: var(--text-dark);
        background: var(--pale-blue);
        outline: none;
        width: 220px;
        transition: var(--transition);
      }

      .table-search input:focus {
        border-color: var(--accent-blue);
        background: var(--white);
        box-shadow: 0 0 0 3px rgba(26, 115, 232, 0.1);
      }

      .table-search .search-icon {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        color: var(--text-light);
        font-size: 14px;
        pointer-events: none;
      }

      /* Status filter dropdown */
      .filter-select {
        padding: 8px 32px 8px 12px;
        border: 1.5px solid var(--border);
        border-radius: 30px;
        font-family: var(--font-body);
        font-size: 13px;
        color: var(--text-mid);
        background: var(--pale-blue);
        outline: none;
        cursor: pointer;
        appearance: none;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24'%3E%3Cpath fill='%238fa8c0' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 12px center;
        transition: var(--transition);
      }

      .filter-select:focus {
        border-color: var(--accent-blue);
        box-shadow: 0 0 0 3px rgba(26, 115, 232, 0.1);
      }

      /* ── Doctor cell in the table (icon + name) ──────────────── */
      .doctor-cell {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .doctor-cell .doc-avatar {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--mid-blue), #00bcd4);
        color: var(--white);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 11px;
        font-weight: 700;
        flex-shrink: 0;
      }

      /* ── Date/Time cell ──────────────────────────────────────── */
      .datetime-cell {
        line-height: 1.4;
      }

      .datetime-cell .date {
        font-weight: 600;
        font-size: 13px;
        color: var(--text-dark);
      }

      .datetime-cell .time {
        font-size: 11px;
        color: var(--text-light);
      }

      /* ── Empty state (shown when no rows match search/filter) ─── */
      .empty-state {
        text-align: center;
        padding: 48px 24px;
        color: var(--text-light);
      }

      .empty-state .empty-icon {
        font-size: 40px;
        margin-bottom: 12px;
        opacity: 0.5;
      }

      .empty-state p {
        font-size: 14px;
      }

      /* ── Delete Confirmation Dialog ──────────────────────────── */
      /* Reuses .modal-overlay / .modal from style.css;
         only needs the confirm text block styled */
      #deleteConfirmText {
        font-size: 14px;
        color: var(--text-mid);
        line-height: 1.6;
        text-align: center;
        padding: 8px 0 4px;
      }

      /* ── Responsive tweaks specific to this page ─────────────── */
      @media (max-width: 900px) {
        .form-row-3 {
          grid-template-columns: 1fr 1fr; /* 3 cols → 2 cols on tablet */
        }
      }

      @media (max-width: 600px) {
        .form-row-3,
        .form-row-2 {
          grid-template-columns: 1fr; /* stack all fields on mobile */
        }

        .table-controls {
          width: 100%;
        }

        .table-search input {
          width: 100%; /* full-width search on mobile */
        }
      }
    </style>
  </head>

  <body>
    <!-- ══════════════════════════════════════════════════════════
         APP SHELL — wraps sidebar + main content side by side
    ══════════════════════════════════════════════════════════ -->
    <div class="app-shell">
      <!-- ── SIDEBAR ─────────────────────────────────────────── -->
      <aside class="sidebar" id="sidebar">
        <!-- Brand / Logo -->
        <div class="sidebar-brand">
          <div class="brand-icon">🏥</div>
          <div class="brand-text">
            <h2>MediCore</h2>
            <span>HMS Portal</span>
          </div>
        </div>

        <!-- Navigation Menu -->
        <nav class="sidebar-nav">
          <!-- MAIN section label -->
          <p class="nav-section-label">Main</p>

          <!-- Dashboard link -->
          <a href="dashboard.html" class="nav-item">
            <span class="nav-icon">📊</span>
            Dashboard
          </a>

          <!-- PATIENT CARE section label -->
          <p class="nav-section-label">Patient Care</p>

          <!-- Patients link -->
          <a href="patients.html" class="nav-item">
            <span class="nav-icon">🧑‍⚕️</span>
            Patients
          </a>

          <!-- Doctors link -->
          <a href="doctors.html" class="nav-item">
            <span class="nav-icon">👨‍⚕️</span>
            Doctors
          </a>

          <!-- Appointments link — ACTIVE on this page -->
          <a href="appointments.html" class="nav-item active">
            <span class="nav-icon">📅</span>
            Appointments
            <!-- Badge shows pending count -->
            <span class="nav-badge">5</span>
          </a>

          <!-- ADMINISTRATION section -->
          <p class="nav-section-label">Administration</p>

          <!-- Billing link -->
          <a href="billing.html" class="nav-item">
            <span class="nav-icon">💳</span>
            Billing
          </a>

          <!-- Reports link (placeholder) -->
          <a href="#" class="nav-item">
            <span class="nav-icon">📈</span>
            Reports
          </a>

          <!-- Settings link (placeholder) -->
          <a href="#" class="nav-item">
            <span class="nav-icon">⚙️</span>
            Settings
          </a>
        </nav>

        <!-- Sidebar Footer: logged-in user info -->
        <div class="sidebar-footer">
          <div class="sidebar-user">
            <div class="user-avatar">👤</div>
            <div class="user-info">
              <h4>Dr. Admin</h4>
              <p>Administrator</p>
            </div>
          </div>
        </div>
      </aside>
      <!-- END sidebar -->

      <!-- Mobile overlay: tapping it closes the sidebar -->
      <div
        class="sidebar-overlay"
        id="sidebarOverlay"
        onclick="closeSidebar()"></div>

      <!-- ── MAIN CONTENT ─────────────────────────────────────── -->
      <div class="main-content">
        <!-- ── TOP NAVBAR ──────────────────────────────────────── -->
        <header class="topbar">
          <!-- Hamburger button (visible only on mobile) -->
          <button
            class="topbar-toggle"
            id="sidebarToggle"
            onclick="openSidebar()"
            aria-label="Open menu">
            ☰
          </button>

          <!-- Page title -->
          <span class="topbar-title">Appointments</span>

          <!-- Search bar (hidden on small screens via CSS) -->
          <div class="topbar-search">
            <span class="search-icon">🔍</span>
            <input type="text" placeholder="Search anything…" />
          </div>

          <!-- Right side: notification bell + user avatar -->
          <div class="topbar-actions">
            <!-- Bell icon with red dot -->
            <button class="topbar-btn" aria-label="Notifications">
              🔔
              <span class="dot"></span>
            </button>

            <!-- Calendar quick-access -->
            <button class="topbar-btn" aria-label="Calendar">📆</button>

            <!-- User avatar -->
            <div class="topbar-avatar" title="Logged in as Dr. Admin">👤</div>
          </div>
        </header>
        <!-- END topbar -->

        <!-- ── PAGE CONTENT ─────────────────────────────────────── -->
        <main class="page-content">
          <!-- Page Header: title + "Book Appointment" button -->
          <div class="page-header">
            <div>
              <h1>Appointment Management</h1>
              <p>Schedule, track and manage all patient appointments</p>
            </div>
            <!-- Clicking this opens the booking form if it was collapsed -->
            <button class="btn btn-primary" onclick="openFormPanel()">
              ➕ Book Appointment
            </button>
          </div>

          <!-- ── STAT CARDS ROW ──────────────────────────────────── -->
          <!-- Four summary cards at the top of the page -->
          <div class="stats-grid">
            <!-- Total Appointments -->
            <div class="stat-card blue">
              <div class="stat-icon">📅</div>
              <div class="stat-info">
                <h3>128</h3>
                <p>Total Appointments</p>
                <span class="stat-change up">↑ 8 this week</span>
              </div>
            </div>

            <!-- Pending -->
            <div class="stat-card orange">
              <div class="stat-icon">⏳</div>
              <div class="stat-info">
                <h3>37</h3>
                <p>Pending</p>
                <span class="stat-change up">↑ 3 today</span>
              </div>
            </div>

            <!-- Completed -->
            <div class="stat-card green">
              <div class="stat-icon">✅</div>
              <div class="stat-info">
                <h3>84</h3>
                <p>Completed</p>
                <span class="stat-change up">↑ 12 this week</span>
              </div>
            </div>

            <!-- Cancelled -->
            <div
              class="stat-card"
              style="--card-accent: var(--danger); --card-bg: #fdecea">
              <div class="stat-icon">❌</div>
              <div class="stat-info">
                <h3>7</h3>
                <p>Cancelled</p>
                <span class="stat-change down">↓ 2 this week</span>
              </div>
            </div>
          </div>
          <!-- END stat cards -->

          <!-- ══════════════════════════════════════════════════════
               BOOKING FORM CARD
               Collapsible — user can show/hide it via the header
          ══════════════════════════════════════════════════════ -->
          <div class="form-card" id="formCard">
            <!-- Clicking the header toggles open/close -->
            <div class="form-card-header" onclick="toggleFormCard()">
              <h2>
                📋 Book New Appointment
                <!-- Rotating arrow indicates open/collapsed state -->
                <i class="toggle-arrow" id="toggleArrow">▼</i>
              </h2>
              <span style="font-size: 12px; color: var(--text-light)"
                >Click to collapse</span
              >
            </div>

            <!-- Collapsible body -->
            <div class="form-collapsible" id="formCollapsible">
              <div class="form-card-body">
                <!-- BOOKING FORM — all fields inline-commented -->
                <form id="appointmentForm" novalidate>
                  <!-- ROW 1: Appointment ID | Patient Name | Doctor Name -->
                  <div class="form-row-3">
                    <!-- Appointment ID — auto-generated, read-only -->
                    <div class="form-group">
                      <label for="fApptId">Appointment ID</label>
                      <input
                        type="text"
                        id="fApptId"
                        class="form-control"
                        readonly
                        title="Auto-generated — cannot be edited" />
                    </div>

                    <!-- Patient Name — free text input -->
                    <div class="form-group">
                      <label for="fPatientName"
                        >Patient Name
                        <span style="color: var(--danger)">*</span></label
                      >
                      <input
                        type="number"
                        id="fPatientId"
                        class="form-control"
                        placeholder="Enter Patient ID" />
                    </div>

                    <!-- Doctor Name — dropdown list -->
                    <div class="form-group">
                      <label for="fDoctorName"
                        >Doctor Name
                        <span style="color: var(--danger)">*</span></label
                      >
                      <select id="fDoctorId" class="form-control">
                        <option value="">— Select Doctor —</option>

                        <option value="1">Doctor ID 1</option>

                        <option value="2">Doctor ID 2</option>

                        <option value="3">Doctor ID 3</option>
                      </select>
                    </div>
                  </div>
                  <!-- END ROW 1 -->

                  <!-- ROW 2: Appointment Date | Appointment Time | Status -->
                  <div class="form-row-3">
                    <!-- Appointment Date -->
                    <div class="form-group">
                      <label for="fDate"
                        >Appointment Date
                        <span style="color: var(--danger)">*</span></label
                      >
                      <input type="date" id="fDate" class="form-control" />
                    </div>

                    <!-- Appointment Time -->
                    <div class="form-group">
                      <label for="fTime"
                        >Appointment Time
                        <span style="color: var(--danger)">*</span></label
                      >
                      <input type="time" id="fTime" class="form-control" />
                    </div>

                    <!-- Status dropdown -->
                    <div class="form-group">
                      <label for="fStatus"
                        >Status
                        <span style="color: var(--danger)">*</span></label
                      >
                      <select id="fStatus" class="form-control">
                        <option value="">— Select Status —</option>
                        <option value="pending">⏳ Pending</option>
                        <option value="completed">✅ Completed</option>
                        <option value="cancelled">❌ Cancelled</option>
                      </select>
                    </div>
                  </div>
                  <!-- END ROW 2 -->

                  <!-- Inline feedback message (success / error) -->
                  <div class="form-feedback" id="formFeedback"></div>

                  <!-- Form action buttons -->
                  <div class="flex gap-8" style="margin-top: 4px">
                    <!-- Submit: adds appointment to table -->
                    <button type="submit" class="btn btn-primary">
                      ✅ Book Appointment
                    </button>
                    <!-- Reset: clears all fields -->
                    <button
                      type="button"
                      class="btn btn-ghost"
                      onclick="resetForm()">
                      🔄 Reset
                    </button>
                  </div>
                </form>
                <!-- END form -->
              </div>
            </div>
            <!-- END collapsible body -->
          </div>
          <!-- END form card -->

          <!-- ══════════════════════════════════════════════════════
               APPOINTMENTS TABLE CARD
          ══════════════════════════════════════════════════════ -->
          <div class="table-card">
            <!-- Table header: title + search + filter -->
            <div class="table-card-header">
              <div>
                <h2>All Appointments</h2>
                <p id="rowCountLabel">Showing all records</p>
              </div>

              <!-- Search input + status filter -->
              <div class="table-controls">
                <!-- Live search: filters rows as user types -->
                <div class="table-search">
                  <span class="search-icon">🔍</span>
                  <input
                    type="text"
                    id="tableSearch"
                    placeholder="Search appointments…"
                    oninput="filterTable()" />
                </div>

                <!-- Status filter dropdown -->
                <select
                  class="filter-select"
                  id="statusFilter"
                  onchange="filterTable()">
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
            </div>
            <!-- END table header -->

            <!-- Scrollable wrapper so table doesn't break on narrow screens -->
            <div class="table-wrapper">
              <table id="appointmentsTable">
                <!-- Table head: column labels -->
                <thead>
                  <tr>
                    <th>Appt. ID</th>
                    <th>Patient</th>
                    <th>Doctor</th>
                    <th>Date &amp; Time</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <!-- Table body: rows injected by JavaScript -->
                <tbody id="tableBody">
                  <!-- Rows are rendered by renderTable() on page load
                       and re-rendered whenever a new appointment is booked,
                       searched, or filtered. -->
                </tbody>
              </table>

              <!-- Empty state: shown when no rows match the search/filter -->
              <div class="empty-state" id="emptyState" style="display: none">
                <div class="empty-icon">📭</div>
                <p>No appointments found matching your search.</p>
              </div>
            </div>
            <!-- END table wrapper -->
          </div>
          <!-- END table card -->
        </main>
        <!-- END page content -->
      </div>
      <!-- END main content -->
    </div>
    <!-- END app-shell -->

    <!-- ══════════════════════════════════════════════════════════
         EDIT APPOINTMENT MODAL
         Pops up when user clicks the ✏️ Edit button on a row.
    ══════════════════════════════════════════════════════════ -->
    <div class="modal-overlay" id="editModal">
      <div class="modal">
        <!-- Modal header -->
        <div class="modal-header">
          <h3>✏️ Edit Appointment</h3>
          <button
            class="modal-close"
            onclick="closeModal('editModal')"
            aria-label="Close">
            ✕
          </button>
        </div>

        <!-- Modal body: edit form -->
        <div class="modal-body">
          <form id="editForm" novalidate>
            <!-- Hidden field: stores the row index being edited -->
            <input type="hidden" id="eIndex" />

            <!-- Row: Patient Name + Doctor Name -->
            <div class="form-row">
              <div class="form-group">
                <label for="ePatientName">Patient Name</label>
                <input type="text" id="ePatientName" class="form-control" />
              </div>

              <div class="form-group">
                <label for="eDoctorName">Doctor Name</label>
                <select id="eDoctorName" class="form-control">
                  <option value="Dr. Suresh Mehta">
                    Dr. Suresh Mehta — Cardiology
                  </option>
                  <option value="Dr. Ananya Iyer">
                    Dr. Ananya Iyer — Pediatrics
                  </option>
                  <option value="Dr. K. Reddy">Dr. K. Reddy — Neurology</option>
                  <option value="Dr. Harpreet Singh">
                    Dr. Harpreet Singh — Orthopedics
                  </option>
                  <option value="Dr. Meena Joshi">
                    Dr. Meena Joshi — General Medicine
                  </option>
                  <option value="Dr. Rajan Pillai">
                    Dr. Rajan Pillai — Dermatology
                  </option>
                  <option value="Dr. Sunita Das">
                    Dr. Sunita Das — Gynecology
                  </option>
                </select>
              </div>
            </div>

            <!-- Row: Date + Time -->
            <div class="form-row">
              <div class="form-group">
                <label for="eDate">Appointment Date</label>
                <input type="date" id="eDate" class="form-control" />
              </div>

              <div class="form-group">
                <label for="eTime">Appointment Time</label>
                <input type="time" id="eTime" class="form-control" />
              </div>
            </div>

            <!-- Status -->
            <div class="form-group">
              <label for="eStatus">Status</label>
              <select id="eStatus" class="form-control">
                <option value="pending">⏳ Pending</option>
                <option value="completed">✅ Completed</option>
                <option value="cancelled">❌ Cancelled</option>
              </select>
            </div>
          </form>
        </div>

        <!-- Modal footer: Save + Cancel buttons -->
        <div class="modal-footer">
          <button class="btn btn-ghost" onclick="closeModal('editModal')">
            Cancel
          </button>
          <button class="btn btn-primary" onclick="saveEdit()">
            💾 Save Changes
          </button>
        </div>
      </div>
    </div>
    <!-- END edit modal -->

    <!-- ══════════════════════════════════════════════════════════
         DELETE CONFIRMATION DIALOG
         Appears before permanently deleting a row.
    ══════════════════════════════════════════════════════════ -->
    <div
      class="modal-overlay"
      id="deleteConfirm"
      onclick="handleDeleteOverlayClick(event)">
      <div class="modal" style="max-width: 420px">
        <div class="modal-header">
          <h3>🗑️ Delete Appointment</h3>
          <button
            class="modal-close"
            onclick="closeModal('deleteConfirm')"
            aria-label="Close">
            ✕
          </button>
        </div>

        <div class="modal-body">
          <!-- Dynamic text filled by JS: shows patient name -->
          <p id="deleteConfirmText"></p>
        </div>

        <div class="modal-footer">
          <button class="btn btn-ghost" onclick="closeModal('deleteConfirm')">
            Cancel
          </button>
          <button class="btn btn-danger" id="confirmDeleteBtn">
            🗑️ Yes, Delete
          </button>
        </div>
      </div>
    </div>
    <!-- END delete confirm dialog -->

    <!-- ══════════════════════════════════════════════════════════
         JAVASCRIPT
         All logic for this page. Well-commented for beginners.
    ══════════════════════════════════════════════════════════ -->
    <script>
      const API_URL = "http://localhost:5000";

      /* Stores the index of the row pending deletion (set by confirmDelete) */
      let pendingDeleteIndex = null;

      /* ──────────────────────────────────────────────────────────
         2. HELPER FUNCTIONS
      ────────────────────────────────────────────────────────── */

      /**
       * getInitials(name)
       * Returns the first letter of each word in a name, up to 2 letters.
       * Example: "Ayaan Kapoor" → "AK"
       */
      function getInitials(name) {
        return name
          .split(" ")
          .map((word) => word[0])
          .join("")
          .toUpperCase()
          .slice(0, 2);
      }

      /**
       * formatDate(dateStr)
       * Converts "2026-05-12" (YYYY-MM-DD) to "12 May 2026" for display.
       */
      function formatDate(dateStr) {
        if (!dateStr) return "—";
        const [year, month, day] = dateStr.split("-");
        const months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        return `${parseInt(day)} ${months[parseInt(month) - 1]} ${year}`;
      }

      /**
       * formatTime(timeStr)
       * Converts "09:00" (24-hr) to "09:00 AM" / "02:00 PM".
       */
      function formatTime(timeStr) {
        if (!timeStr) return "—";
        const [hStr, mStr] = timeStr.split(":");
        let h = parseInt(hStr);
        const m = mStr;
        const ampm = h >= 12 ? "PM" : "AM";
        h = h % 12 || 12; // convert 0 → 12 for midnight
        return `${String(h).padStart(2, "0")}:${m} ${ampm}`;
      }

      /**
       * buildBadge(status)
       * Returns the HTML for a coloured status badge pill.
       * Status values: "pending" | "completed" | "cancelled"
       */
      function buildBadge(status) {
        /* Map status value → display label + CSS class */
        const map = {
          pending: { label: "Pending", cls: "pending" },
          completed: { label: "Completed", cls: "completed" },
          cancelled: { label: "Cancelled", cls: "cancelled" },
        };
        const s = map[status] || { label: status, cls: "pending" };
        return `<span class="badge ${s.cls}">${s.label}</span>`;
      }

      /* ──────────────────────────────────────────────────────────
         3. RENDER TABLE
         Draws all appointment rows into <tbody id="tableBody">.
         Filters by search text AND selected status if provided.
      ────────────────────────────────────────────────────────── */
      async function renderTable() {
        try {
          const response = await fetch(`${API_URL}/appointments`);

          const appointments = await response.json();

          const tbody = document.getElementById("tableBody");

          tbody.innerHTML = "";

          appointments.forEach((appt) => {
            const row = document.createElement("tr");

            row.innerHTML = `

        <td>${appt.appointment_id}</td>

        <td>${appt.patient_name}</td>

        <td>${appt.doctor_name}</td>

        <td>
          ${appt.appointment_date}
          <br>
          ${appt.appointment_time}
        </td>

        <td>${appt.status}</td>

        <td>

          <button
            class="btn btn-icon btn-danger"
            onclick="deleteAppointment(${appt.appointment_id})">
            🗑️
          </button>

        </td>
      `;

            tbody.appendChild(row);
          });
        } catch (error) {
          console.log(error);
        }
      }

      async function deleteAppointment(id) {
        const confirmDelete = confirm("Delete appointment?");

        if (!confirmDelete) return;

        try {
          const response = await fetch(`${API_URL}/delete-appointment/${id}`, {
            method: "DELETE",
          });

          const result = await response.text();

          alert(result);

          renderTable();
        } catch (error) {
          console.log(error);
        }
      }

      /* ──────────────────────────────────────────────────────────
         4. FORM: TOGGLE OPEN / COLLAPSE
      ────────────────────────────────────────────────────────── */

      /**
       * toggleFormCard()
       * Called when the form card header is clicked.
       * Toggles the .collapsed class on #formCard and
       * the .hidden class on the collapsible body.
       */
      function toggleFormCard() {
        const card = document.getElementById("formCard");
        const body = document.getElementById("formCollapsible");
        const arrow = document.getElementById("toggleArrow");
        const headerHint = card.querySelector(".form-card-header span");

        if (body.classList.contains("hidden")) {
          /* ── EXPAND ── */
          body.classList.remove("hidden");
          card.classList.remove("collapsed");
          headerHint.textContent = "Click to collapse";
        } else {
          /* ── COLLAPSE ── */
          body.classList.add("hidden");
          card.classList.add("collapsed");
          headerHint.textContent = "Click to expand";
        }
      }

      /**
       * openFormPanel()
       * Called by the "Book Appointment" button in the page header.
       * Ensures the form is visible and scrolls to it.
       */
      function openFormPanel() {
        const body = document.getElementById("formCollapsible");
        const card = document.getElementById("formCard");
        const headerHint = card.querySelector(".form-card-header span");

        /* Make sure the form is expanded */
        body.classList.remove("hidden");
        card.classList.remove("collapsed");
        headerHint.textContent = "Click to collapse";

        /* Scroll smoothly to the form */
        card.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      /* ──────────────────────────────────────────────────────────
         6. FORM FEEDBACK (success / error messages below the form)
      ────────────────────────────────────────────────────────── */

      function showFeedback(msg, type) {
        const el = document.getElementById("formFeedback");
        el.textContent = msg;
        el.style.display = "block";
        if (type === "success") {
          el.style.background = "#e8f8f0";
          el.style.color = "var(--success)";
          el.style.border = "1.5px solid #b7e5cc";
        } else {
          el.style.background = "#fdecea";
          el.style.color = "var(--danger)";
          el.style.border = "1.5px solid #f5c6c2";
        }
      }

      function hideFeedback() {
        document.getElementById("formFeedback").style.display = "none";
      }

      /* ──────────────────────────────────────────────────────────
         7. RESET FORM
         Clears all inputs and restores the auto-generated ID.
      ────────────────────────────────────────────────────────── */
      function resetForm() {
        document.getElementById("appointmentForm").reset();

        hideFeedback();
      }

      /* ──────────────────────────────────────────────────────────
         8. SUBMIT NEW APPOINTMENT
         Validates fields, pushes to array, re-renders table.
      ────────────────────────────────────────────────────────── */
      document
        .getElementById("appointmentForm")
        .addEventListener("submit", async function (e) {
          e.preventDefault();

          const patient_id = document.getElementById("fPatientId").value;

          const doctor_id = document.getElementById("fDoctorId").value;

          const appointment_date = document.getElementById("fDate").value;

          const appointment_time = document.getElementById("fTime").value;

          const status = document.getElementById("fStatus").value;

          const appointmentData = {
            patient_id,
            doctor_id,
            appointment_date,
            appointment_time,
            status,
          };

          try {
            const response = await fetch(`${API_URL}/add-appointment`, {
              method: "POST",

              headers: {
                "Content-Type": "application/json",
              },

              body: JSON.stringify(appointmentData),
            });

            const result = await response.text();

            alert(result);

            document.getElementById("appointmentForm").reset();

            renderTable();
          } catch (error) {
            console.log(error);
          }
        });

      /** Actually deletes the appointment when "Yes, Delete" is clicked */
      document
        .getElementById("confirmDeleteBtn")
        .addEventListener("click", () => {
          if (pendingDeleteIndex === null) return;

          appointments.splice(pendingDeleteIndex, 1); /* Remove from array */
          pendingDeleteIndex = null;

          closeModal("deleteConfirm");
          renderTable(); /* Redraw table without the deleted row */
        });

      /**
       * handleDeleteOverlayClick(event)
       * Closes the delete dialog when the user clicks the dark overlay
       * (outside the modal box).
       */
      function handleDeleteOverlayClick(event) {
        if (event.target === document.getElementById("deleteConfirm")) {
          closeModal("deleteConfirm");
          pendingDeleteIndex = null;
        }
      }

      /* ──────────────────────────────────────────────────────────
         13. MODAL HELPERS (open / close)
         Re-used for both the Edit modal and the Delete dialog.
      ────────────────────────────────────────────────────────── */
      function openModal(id) {
        document.getElementById(id).classList.add("active");
      }

      function closeModal(id) {
        document.getElementById(id).classList.remove("active");
      }

      /* Close any open modal when user presses Escape key */
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          closeModal("editModal");
          closeModal("deleteConfirm");
          pendingDeleteIndex = null;
        }
      });

      /* ──────────────────────────────────────────────────────────
         14. SIDEBAR TOGGLE (mobile)
         The hamburger button (☰) calls openSidebar().
         The overlay calls closeSidebar().
      ────────────────────────────────────────────────────────── */
      function openSidebar() {
        document.getElementById("sidebar").classList.add("open");
        document.getElementById("sidebarOverlay").classList.add("active");
      }

      function closeSidebar() {
        document.getElementById("sidebar").classList.remove("open");
        document.getElementById("sidebarOverlay").classList.remove("active");
      }

      /* ──────────────────────────────────────────────────────────
         15. INITIALISE PAGE
         Runs once when the entire HTML document has loaded.
      ────────────────────────────────────────────────────────── */
      document.addEventListener("DOMContentLoaded", () => {
        renderTable();
      });
    </script>
  </body>
</html>

```

---

### <a id="📄-billing-html"></a>📄 `billing.html`

**File Info:**
- **Size**: 51.69 KB
- **Extension**: `.html`
- **Language**: `html`
- **Location**: `billing.html`
- **Relative Path**: `root`
- **Created**: 2026-05-12 05:38:33 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-05-13 04:50:23 (Asia/Calcutta / GMT+06:30)
- **MD5**: `7bb89bc0bd8737c0676f6230f67db045`
- **SHA256**: `88ee42d9a5926c55f62007c3f4f0735e3fceb4ff94521f153ad56035681b539f`
- **Encoding**: UTF-8

**File code content:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Billing — MediCore HMS</title>

    <!-- Google Fonts: DM Sans (body) + Playfair Display (headings) -->
    <link
      href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&display=swap"
      rel="stylesheet" />

    <!-- Shared project stylesheet — all base styles live here -->
    <link rel="stylesheet" href="css/style.css" />

    <style>
      /* ============================================================
         billing.html — Page-specific styles only.
         Base styles (sidebar, navbar, cards, table, badges, modals,
         buttons, forms, animations) all come from css/style.css.
         Only billing-unique components are defined here.
         ============================================================ */

      /* ── Revenue Summary Bar ─────────────────────────────────
         A horizontal "at-a-glance" bar beneath the stat cards
         showing a visual split of paid vs pending vs overdue.
      ──────────────────────────────────────────────────────── */
      .revenue-bar-card {
        background: var(--white);
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        padding: 20px 24px;
        margin-bottom: 24px;
        opacity: 0;
        animation: fadeSlideUp 0.5s ease 0.3s forwards;
      }

      /* Row: label + bar + percent — one per payment category */
      .rev-row {
        display: flex;
        align-items: center;
        gap: 14px;
        margin-bottom: 12px;
        font-size: 13px;
      }

      .rev-row:last-child {
        margin-bottom: 0;
      }

      /* Left label */
      .rev-label {
        width: 84px;
        flex-shrink: 0;
        color: var(--text-mid);
        font-weight: 500;
      }

      /* The track + fill bar */
      .rev-track {
        flex: 1;
        background: var(--border);
        border-radius: 20px;
        height: 8px;
        overflow: hidden;
      }

      .rev-fill {
        height: 100%;
        border-radius: 20px;
        /* Width is set inline per row */
        transition: width 1.2s ease;
      }

      /* Right percent + amount */
      .rev-meta {
        display: flex;
        gap: 10px;
        align-items: center;
        min-width: 120px;
        justify-content: flex-end;
      }

      .rev-pct {
        font-weight: 700;
        color: var(--dark-blue);
        font-size: 13px;
        min-width: 36px;
        text-align: right;
      }

      .rev-amt {
        font-size: 12px;
        color: var(--text-light);
        min-width: 80px;
        text-align: right;
      }

      /* ── Billing Form Card ───────────────────────────────────
         Collapsible card above the table — same pattern as
         the appointments form card.
      ──────────────────────────────────────────────────────── */
      .form-card {
        background: var(--white);
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        box-shadow: var(--shadow-sm);
        margin-bottom: 24px;
        opacity: 0;
        animation: fadeSlideUp 0.5s ease 0.15s forwards;
      }

      /* Clicking the header collapses / expands the form */
      .form-card-header {
        padding: 18px 24px;
        border-bottom: 1px solid var(--border);
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        user-select: none;
      }

      .form-card-header h2 {
        font-size: 16px;
        font-weight: 600;
        color: var(--dark-blue);
        display: flex;
        align-items: center;
        gap: 8px;
      }

      /* Rotating arrow: points down when open, right when collapsed */
      .toggle-arrow {
        display: inline-block;
        font-style: normal;
        transition: transform 0.3s ease;
        color: var(--text-light);
        font-size: 13px;
      }

      .form-card.collapsed .toggle-arrow {
        transform: rotate(-90deg);
      }

      /* Animated slide open/close */
      .form-collapsible {
        overflow: hidden;
        max-height: 700px;
        transition:
          max-height 0.4s ease,
          opacity 0.3s ease;
        opacity: 1;
      }

      .form-collapsible.hidden {
        max-height: 0;
        opacity: 0;
      }

      .form-card-body {
        padding: 24px;
      }

      /* Three-column form row (Bill ID | Patient | Appointment ID) */
      .form-row-3 {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 16px;
      }

      /* Two-column form row (Amount | Payment Status) */
      .form-row-2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
      }

      /* Read-only field (Bill ID is auto-generated) */
      .form-control[readonly] {
        background: var(--pale-blue);
        color: var(--text-mid);
        cursor: not-allowed;
      }

      /* Currency prefix for Amount field */
      .input-prefix {
        position: relative;
      }

      .input-prefix .prefix-symbol {
        position: absolute;
        left: 14px;
        top: 50%;
        transform: translateY(-50%);
        color: var(--text-mid);
        font-weight: 600;
        font-size: 14px;
        pointer-events: none;
      }

      .input-prefix .form-control {
        padding-left: 30px; /* indent text past the ₹ symbol */
      }

      /* Inline success / error feedback */
      .form-feedback {
        display: none;
        margin-top: 14px;
        padding: 10px 14px;
        border-radius: var(--radius-sm);
        font-size: 13px;
        font-weight: 500;
      }

      /* ── Table Card ──────────────────────────────────────────
         Wraps the billing records table with its own header.
      ──────────────────────────────────────────────────────── */
      .table-card {
        background: var(--white);
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        box-shadow: var(--shadow-sm);
        overflow: hidden;
        opacity: 0;
        animation: fadeSlideUp 0.5s ease 0.35s forwards;
      }

      .table-card-header {
        padding: 18px 24px;
        border-bottom: 1px solid var(--border);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        flex-wrap: wrap;
      }

      .table-card-header h2 {
        font-size: 16px;
        font-weight: 600;
        color: var(--dark-blue);
      }

      .table-card-header p {
        font-size: 12px;
        color: var(--text-light);
        margin-top: 2px;
      }

      /* Right-side controls: search + filter */
      .table-controls {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
      }

      .table-search {
        position: relative;
      }

      .table-search input {
        padding: 8px 14px 8px 36px;
        border: 1.5px solid var(--border);
        border-radius: 30px;
        font-family: var(--font-body);
        font-size: 13px;
        color: var(--text-dark);
        background: var(--pale-blue);
        outline: none;
        width: 220px;
        transition: var(--transition);
      }

      .table-search input:focus {
        border-color: var(--accent-blue);
        background: var(--white);
        box-shadow: 0 0 0 3px rgba(26, 115, 232, 0.1);
      }

      .table-search .search-icon {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        color: var(--text-light);
        font-size: 14px;
        pointer-events: none;
      }

      /* Status filter dropdown */
      .filter-select {
        padding: 8px 32px 8px 12px;
        border: 1.5px solid var(--border);
        border-radius: 30px;
        font-family: var(--font-body);
        font-size: 13px;
        color: var(--text-mid);
        background: var(--pale-blue);
        outline: none;
        cursor: pointer;
        appearance: none;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24'%3E%3Cpath fill='%238fa8c0' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 12px center;
        transition: var(--transition);
      }

      .filter-select:focus {
        border-color: var(--accent-blue);
        box-shadow: 0 0 0 3px rgba(26, 115, 232, 0.1);
      }

      /* ── Amount cell ─────────────────────────────────────────
         Right-aligned, monospace-style, bold rupee amounts.
      ──────────────────────────────────────────────────────── */
      .amount-cell {
        font-weight: 700;
        font-size: 14px;
        color: var(--dark-blue);
        letter-spacing: 0.3px;
      }

      .amount-cell .currency {
        font-size: 11px;
        font-weight: 500;
        color: var(--text-light);
        margin-right: 1px;
      }

      /* ── Payment status badge colours ────────────────────────
         Extending the .badge system from style.css with a new
         "paid" variant (green) and reusing pending / cancelled.
      ──────────────────────────────────────────────────────── */
      .badge.paid {
        background: #e8f8f0;
        color: var(--success);
      }

      /* "overdue" gets a strong red */
      .badge.overdue {
        background: #fdecea;
        color: var(--danger);
      }

      /* ── Appointment ID chip inside table ────────────────────
         Small pill linking the bill to an appointment record.
      ──────────────────────────────────────────────────────── */
      .appt-chip {
        display: inline-block;
        background: var(--light-blue);
        color: var(--accent-blue);
        font-size: 11px;
        font-weight: 700;
        padding: 3px 9px;
        border-radius: 20px;
        letter-spacing: 0.3px;
      }

      /* ── Empty state ─────────────────────────────────────── */
      .empty-state {
        text-align: center;
        padding: 48px 24px;
        color: var(--text-light);
      }

      .empty-state .empty-icon {
        font-size: 40px;
        margin-bottom: 12px;
        opacity: 0.5;
      }

      .empty-state p {
        font-size: 14px;
      }

      /* ── Invoice Preview Modal ───────────────────────────────
         Wider modal to show a nicely formatted bill summary.
      ──────────────────────────────────────────────────────── */
      #invoiceModal .modal {
        max-width: 560px;
      }

      /* Invoice header block inside the modal */
      .invoice-header {
        background: linear-gradient(
          135deg,
          var(--darker-blue),
          var(--dark-blue)
        );
        border-radius: var(--radius-sm);
        padding: 20px 22px;
        color: var(--white);
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
      }

      .invoice-header .inv-brand {
        display: flex;
        align-items: center;
        gap: 10px;
        font-family: var(--font-display);
        font-size: 18px;
        font-weight: 700;
      }

      .invoice-header .inv-id {
        font-size: 12px;
        color: rgba(255, 255, 255, 0.55);
        letter-spacing: 0.8px;
      }

      /* Two-column detail grid inside invoice */
      .invoice-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
        margin-bottom: 18px;
      }

      .invoice-field {
        background: var(--pale-blue);
        border-radius: var(--radius-sm);
        padding: 10px 14px;
      }

      .invoice-field .field-label {
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 1.2px;
        text-transform: uppercase;
        color: var(--text-light);
        margin-bottom: 4px;
      }

      .invoice-field .field-value {
        font-size: 14px;
        font-weight: 600;
        color: var(--text-dark);
      }

      /* Total row at the bottom of invoice */
      .invoice-total {
        background: var(--light-blue);
        border: 1.5px solid var(--border);
        border-radius: var(--radius-sm);
        padding: 14px 18px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 8px;
      }

      .invoice-total .total-label {
        font-size: 14px;
        font-weight: 600;
        color: var(--dark-blue);
      }

      .invoice-total .total-amount {
        font-size: 22px;
        font-weight: 700;
        color: var(--accent-blue);
      }

      /* ── Responsive tweaks ───────────────────────────────────── */
      @media (max-width: 900px) {
        .form-row-3 {
          grid-template-columns: 1fr 1fr;
        }

        .invoice-grid {
          grid-template-columns: 1fr;
        }
      }

      @media (max-width: 600px) {
        .form-row-3,
        .form-row-2 {
          grid-template-columns: 1fr;
        }

        .table-search input {
          width: 100%;
        }

        .table-controls {
          width: 100%;
        }

        .revenue-bar-card .rev-amt {
          display: none; /* hide on very small screens to save space */
        }
      }
    </style>
  </head>

  <body>
    <!-- ══════════════════════════════════════════════════════════
         APP SHELL — sidebar + main content side by side
    ══════════════════════════════════════════════════════════ -->
    <div class="app-shell">
      <!-- ── SIDEBAR ─────────────────────────────────────────── -->
      <aside class="sidebar" id="sidebar">
        <!-- Brand -->
        <div class="sidebar-brand">
          <div class="brand-icon">🏥</div>
          <div class="brand-text">
            <h2>MediCore</h2>
            <span>HMS Portal</span>
          </div>
        </div>

        <!-- Navigation -->
        <nav class="sidebar-nav">
          <p class="nav-section-label">Main</p>

          <a href="dashboard.html" class="nav-item">
            <span class="nav-icon">📊</span>
            Dashboard
          </a>

          <p class="nav-section-label">Patient Care</p>

          <a href="patients.html" class="nav-item">
            <span class="nav-icon">🧑‍⚕️</span>
            Patients
          </a>

          <a href="doctors.html" class="nav-item">
            <span class="nav-icon">👨‍⚕️</span>
            Doctors
          </a>

          <a href="appointments.html" class="nav-item">
            <span class="nav-icon">📅</span>
            Appointments
          </a>

          <p class="nav-section-label">Administration</p>

          <!-- Billing is ACTIVE on this page -->
          <a href="billing.html" class="nav-item active">
            <span class="nav-icon">💳</span>
            Billing
            <!-- Badge shows pending bill count -->
            <span class="nav-badge">19</span>
          </a>

          <a href="#" class="nav-item">
            <span class="nav-icon">📈</span>
            Reports
          </a>

          <a href="#" class="nav-item">
            <span class="nav-icon">⚙️</span>
            Settings
          </a>
        </nav>

        <!-- Sidebar footer: logged-in user -->
        <div class="sidebar-footer">
          <div class="sidebar-user">
            <div class="user-avatar">👤</div>
            <div class="user-info">
              <h4>Dr. Admin</h4>
              <p>Administrator</p>
            </div>
          </div>
        </div>
      </aside>
      <!-- END sidebar -->

      <!-- Dark overlay shown behind sidebar on mobile -->
      <div
        class="sidebar-overlay"
        id="sidebarOverlay"
        onclick="closeSidebar()"></div>

      <!-- ── MAIN CONTENT ─────────────────────────────────────── -->
      <div class="main-content">
        <!-- ── TOP NAVBAR ──────────────────────────────────────── -->
        <header class="topbar">
          <!-- Hamburger toggle (mobile only) -->
          <button
            class="topbar-toggle"
            id="sidebarToggle"
            onclick="openSidebar()"
            aria-label="Open menu">
            ☰
          </button>

          <!-- Page title -->
          <span class="topbar-title">Billing</span>

          <!-- Global search bar (hidden on mobile) -->
          <div class="topbar-search">
            <span class="search-icon">🔍</span>
            <input type="text" placeholder="Search anything…" />
          </div>

          <!-- Right actions: notifications + avatar -->
          <div class="topbar-actions">
            <button class="topbar-btn" aria-label="Notifications">
              🔔
              <span class="dot"></span>
            </button>

            <button class="topbar-btn" aria-label="Export">📤</button>

            <div class="topbar-avatar" title="Dr. Admin">👤</div>
          </div>
        </header>
        <!-- END topbar -->

        <!-- ── PAGE CONTENT ─────────────────────────────────────── -->
        <main class="page-content">
          <!-- Page header: title + "Create Bill" CTA -->
          <div class="page-header">
            <div>
              <h1>Billing Management</h1>
              <p>Create bills, track payments and manage financial records</p>
            </div>
            <button class="btn btn-primary" onclick="openBillingForm()">
              ➕ Create New Bill
            </button>
          </div>

          <!-- ── STAT CARDS ────────────────────────────────────────
               Four summary cards: Total Revenue | Paid | Pending | Overdue
          ────────────────────────────────────────────────────────── -->
          <div class="stats-grid">
            <!-- Total Revenue -->
            <div class="stat-card blue">
              <div class="stat-icon">💰</div>
              <div class="stat-info">
                <h3>₹4,82,500</h3>
                <p>Total Revenue</p>
                <span class="stat-change up">↑ ₹32,000 this month</span>
              </div>
            </div>

            <!-- Paid Bills -->
            <div class="stat-card green">
              <div class="stat-icon">✅</div>
              <div class="stat-info">
                <h3 id="statPaidCount">0</h3>
                <p>Paid Bills</p>
                <span class="stat-change up">↑ 5 today</span>
              </div>
            </div>

            <!-- Pending Bills -->
            <div class="stat-card orange">
              <div class="stat-icon">⏳</div>
              <div class="stat-info">
                <h3 id="statPendingCount">0</h3>
                <p>Pending Bills</p>
                <span class="stat-change down">↓ 3 resolved today</span>
              </div>
            </div>

            <!-- Overdue Bills -->
            <div
              class="stat-card"
              style="--card-accent: var(--danger); --card-bg: #fdecea">
              <div class="stat-icon">🚨</div>
              <div class="stat-info">
                <h3 id="statOverdueCount">0</h3>
                <p>Overdue</p>
                <span class="stat-change down">↑ 2 flagged</span>
              </div>
            </div>
          </div>
          <!-- END stat cards -->

          <!-- ── REVENUE DISTRIBUTION BAR ───────────────────────── -->
          <div class="revenue-bar-card">
            <!-- Section label -->
            <div
              style="
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 16px;
              ">
              <div>
                <p
                  style="
                    font-size: 14px;
                    font-weight: 600;
                    color: var(--dark-blue);
                  ">
                  Revenue Breakdown
                </p>
                <p
                  style="
                    font-size: 12px;
                    color: var(--text-light);
                    margin-top: 2px;
                  ">
                  Payment collection status for this month
                </p>
              </div>
              <span style="font-size: 12px; color: var(--text-light)"
                >May 2026</span
              >
            </div>

            <!-- Paid row -->
            <div class="rev-row">
              <span class="rev-label">💚 Paid</span>
              <div class="rev-track">
                <div
                  class="rev-fill"
                  style="
                    width: 64%;
                    background: linear-gradient(90deg, var(--success), #52d68a);
                  "></div>
              </div>
              <div class="rev-meta">
                <span class="rev-pct">64%</span>
                <span class="rev-amt">₹3,08,800</span>
              </div>
            </div>

            <!-- Pending row -->
            <div class="rev-row">
              <span class="rev-label">🟡 Pending</span>
              <div class="rev-track">
                <div
                  class="rev-fill"
                  style="
                    width: 28%;
                    background: linear-gradient(90deg, var(--warning), #f5c842);
                  "></div>
              </div>
              <div class="rev-meta">
                <span class="rev-pct">28%</span>
                <span class="rev-amt">₹1,35,100</span>
              </div>
            </div>

            <!-- Overdue row -->
            <div class="rev-row">
              <span class="rev-label">🔴 Overdue</span>
              <div class="rev-track">
                <div
                  class="rev-fill"
                  style="
                    width: 8%;
                    background: linear-gradient(90deg, var(--danger), #f57f7f);
                  "></div>
              </div>
              <div class="rev-meta">
                <span class="rev-pct">8%</span>
                <span class="rev-amt">₹38,600</span>
              </div>
            </div>
          </div>
          <!-- END revenue bar -->

          <!-- ══════════════════════════════════════════════════════
               BILLING FORM CARD (collapsible)
          ══════════════════════════════════════════════════════ -->
          <div class="form-card" id="formCard">
            <!-- Clicking the header toggles the form open/closed -->
            <div class="form-card-header" onclick="toggleFormCard()">
              <h2>
                🧾 Create New Bill
                <i class="toggle-arrow" id="toggleArrow">▼</i>
              </h2>
              <span
                style="font-size: 12px; color: var(--text-light)"
                id="formHint"
                >Click to collapse</span
              >
            </div>

            <!-- Collapsible form body -->
            <div class="form-collapsible" id="formCollapsible">
              <div class="form-card-body">
                <form id="billingForm" novalidate>
                  <!-- ── ROW 1: Bill ID | Patient Name | Appointment ID ── -->
                  <div class="form-row-3">
                    <!-- Bill ID — auto-generated, cannot be edited -->
                    <div class="form-group">
                      <label for="fBillId">Bill ID</label>
                      <input
                        type="text"
                        id="fBillId"
                        class="form-control"
                        readonly
                        title="Auto-generated" />
                    </div>

                    <!-- Patient Name — free text -->
                    <div class="form-group">
                      <label for="fPatient">
                        Patient Name <span style="color: var(--danger)">*</span>
                      </label>
                      <input
                        type="number"
                        id="fPatientId"
                        class="form-control"
                        placeholder="Enter Patient ID" />
                    </div>

                    <!-- Appointment ID — links this bill to an appointment -->
                    <div class="form-group">
                      <label for="fApptId">
                        Appointment ID
                        <span style="color: var(--danger)">*</span>
                      </label>
                      <input
                        type="number"
                        id="fAppointmentId"
                        class="form-control"
                        placeholder="Enter Appointment ID" />
                    </div>
                  </div>
                  <!-- END ROW 1 -->

                  <!-- ── ROW 2: Amount | Payment Status ── -->
                  <div class="form-row-2">
                    <!-- Amount — prefixed with ₹ symbol -->
                    <div class="form-group">
                      <label for="fAmount">
                        Amount (₹) <span style="color: var(--danger)">*</span>
                      </label>
                      <div class="input-prefix">
                        <!-- ₹ prefix symbol shown inside the input -->
                        <span class="prefix-symbol">₹</span>
                        <input
                          type="number"
                          id="fAmount"
                          class="form-control"
                          placeholder="e.g. 2500"
                          min="0"
                          step="1" />
                      </div>
                    </div>

                    <!-- Payment Status -->
                    <div class="form-group">
                      <label for="fStatus">
                        Payment Status
                        <span style="color: var(--danger)">*</span>
                      </label>
                      <select id="fStatus" class="form-control">
                        <option value="">— Select Status —</option>
                        <option value="paid">✅ Paid</option>
                        <option value="pending">⏳ Pending</option>
                        <option value="overdue">🚨 Overdue</option>
                      </select>
                    </div>
                  </div>
                  <!-- END ROW 2 -->

                  <!-- Success / error feedback message -->
                  <div class="form-feedback" id="formFeedback"></div>

                  <!-- Action buttons -->
                  <div class="flex gap-8" style="margin-top: 4px">
                    <button type="submit" class="btn btn-primary">
                      💾 Save Bill
                    </button>
                    <button
                      type="button"
                      class="btn btn-ghost"
                      onclick="resetForm()">
                      🔄 Reset
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <!-- END collapsible -->
          </div>
          <!-- END form card -->

          <!-- ══════════════════════════════════════════════════════
               BILLING RECORDS TABLE CARD
          ══════════════════════════════════════════════════════ -->
          <div class="table-card">
            <!-- Table card header -->
            <div class="table-card-header">
              <div>
                <h2>Billing Records</h2>
                <p id="rowCountLabel">Showing all records</p>
              </div>

              <!-- Search + status filter -->
              <div class="table-controls">
                <div class="table-search">
                  <span class="search-icon">🔍</span>
                  <input
                    type="text"
                    id="tableSearch"
                    placeholder="Search bills…"
                    oninput="filterTable()" />
                </div>

                <select
                  class="filter-select"
                  id="statusFilter"
                  onchange="filterTable()">
                  <option value="all">All Status</option>
                  <option value="paid">Paid</option>
                  <option value="pending">Pending</option>
                  <option value="overdue">Overdue</option>
                </select>
              </div>
            </div>

            <!-- Scrollable table wrapper -->
            <div class="table-wrapper">
              <table id="billingTable">
                <thead>
                  <tr>
                    <th>Bill ID</th>
                    <th>Patient</th>
                    <th>Appointment ID</th>
                    <th>Amount</th>
                    <th>Date Issued</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <!-- Rows injected by renderTable() -->
                <tbody id="tableBody"></tbody>
              </table>

              <!-- Shown when no rows match the search / filter -->
              <div class="empty-state" id="emptyState" style="display: none">
                <div class="empty-icon">🗂️</div>
                <p>No billing records found matching your search.</p>
              </div>
            </div>
          </div>
          <!-- END table card -->
        </main>
        <!-- END page content -->
      </div>
      <!-- END main content -->
    </div>
    <!-- END app-shell -->

    <!-- ══════════════════════════════════════════════════════════
         EDIT BILL MODAL
    ══════════════════════════════════════════════════════════ -->
    <div class="modal-overlay" id="editModal">
      <div class="modal">
        <div class="modal-header">
          <h3>✏️ Edit Bill</h3>
          <button
            class="modal-close"
            onclick="closeModal('editModal')"
            aria-label="Close">
            ✕
          </button>
        </div>

        <div class="modal-body">
          <form id="editForm" novalidate>
            <!-- Hidden: stores the index of the bill being edited -->
            <input type="hidden" id="eIndex" />

            <!-- Patient Name + Appointment ID -->
            <div class="form-row">
              <div class="form-group">
                <label for="ePatient">Patient Name</label>
                <input type="text" id="ePatient" class="form-control" />
              </div>
              <div class="form-group">
                <label for="eApptId">Appointment ID</label>
                <input type="text" id="eApptId" class="form-control" />
              </div>
            </div>

            <!-- Amount + Status -->
            <div class="form-row">
              <div class="form-group">
                <label for="eAmount">Amount (₹)</label>
                <div class="input-prefix">
                  <span class="prefix-symbol">₹</span>
                  <input
                    type="number"
                    id="eAmount"
                    class="form-control"
                    min="0"
                    step="1" />
                </div>
              </div>
              <div class="form-group">
                <label for="eStatus">Payment Status</label>
                <select id="eStatus" class="form-control">
                  <option value="paid">✅ Paid</option>
                  <option value="pending">⏳ Pending</option>
                  <option value="overdue">🚨 Overdue</option>
                </select>
              </div>
            </div>
          </form>
        </div>

        <div class="modal-footer">
          <button class="btn btn-ghost" onclick="closeModal('editModal')">
            Cancel
          </button>
          <button class="btn btn-primary" onclick="saveEdit()">
            💾 Save Changes
          </button>
        </div>
      </div>
    </div>
    <!-- END edit modal -->

    <!-- ══════════════════════════════════════════════════════════
         INVOICE PREVIEW MODAL
         Shows a clean invoice summary before printing / sharing.
    ══════════════════════════════════════════════════════════ -->
    <div class="modal-overlay" id="invoiceModal">
      <div class="modal" style="max-width: 520px">
        <div class="modal-header">
          <h3>🧾 Invoice Preview</h3>
          <button
            class="modal-close"
            onclick="closeModal('invoiceModal')"
            aria-label="Close">
            ✕
          </button>
        </div>

        <div class="modal-body">
          <!-- Hospital brand header -->
          <div class="invoice-header">
            <div class="inv-brand">🏥 MediCore HMS</div>
            <div style="text-align: right">
              <div style="font-size: 14px; font-weight: 700" id="invBillId">
                BILL-001
              </div>
              <div class="inv-id" id="invDate">Issued: —</div>
            </div>
          </div>

          <!-- Detail fields grid -->
          <div class="invoice-grid">
            <div class="invoice-field">
              <div class="field-label">Patient Name</div>
              <div class="field-value" id="invPatient">—</div>
            </div>
            <div class="invoice-field">
              <div class="field-label">Appointment ID</div>
              <div class="field-value" id="invApptId">—</div>
            </div>
            <div class="invoice-field">
              <div class="field-label">Payment Status</div>
              <div class="field-value" id="invStatus">—</div>
            </div>
            <div class="invoice-field">
              <div class="field-label">Bill ID</div>
              <div class="field-value" id="invBillIdSmall">—</div>
            </div>
          </div>

          <!-- Total amount row -->
          <div class="invoice-total">
            <span class="total-label">Total Amount Due</span>
            <span class="total-amount" id="invAmount">₹0</span>
          </div>

          <p
            style="
              font-size: 11px;
              color: var(--text-light);
              text-align: center;
              margin-top: 8px;
            ">
            Thank you for choosing MediCore Hospital. Get well soon! 🌿
          </p>
        </div>

        <div class="modal-footer">
          <button class="btn btn-ghost" onclick="closeModal('invoiceModal')">
            Close
          </button>
          <button class="btn btn-primary" onclick="window.print()">
            🖨️ Print Invoice
          </button>
        </div>
      </div>
    </div>
    <!-- END invoice modal -->

    <!-- ══════════════════════════════════════════════════════════
         DELETE CONFIRMATION DIALOG
    ══════════════════════════════════════════════════════════ -->
    <div
      class="modal-overlay"
      id="deleteConfirm"
      onclick="handleOverlayClick(event)">
      <div class="modal" style="max-width: 420px">
        <div class="modal-header">
          <h3>🗑️ Delete Bill</h3>
          <button
            class="modal-close"
            onclick="closeModal('deleteConfirm')"
            aria-label="Close">
            ✕
          </button>
        </div>

        <div class="modal-body">
          <p
            id="deleteConfirmText"
            style="
              font-size: 14px;
              color: var(--text-mid);
              line-height: 1.6;
              text-align: center;
              padding: 8px 0 4px;
            "></p>
        </div>

        <div class="modal-footer">
          <button class="btn btn-ghost" onclick="closeModal('deleteConfirm')">
            Cancel
          </button>
          <button class="btn btn-danger" id="confirmDeleteBtn">
            🗑️ Yes, Delete
          </button>
        </div>
      </div>
    </div>
    <!-- END delete confirm -->

    <!-- ══════════════════════════════════════════════════════════
         JAVASCRIPT — All page logic, well-commented for beginners
    ══════════════════════════════════════════════════════════ -->
    <script>
      const API_URL = "http://localhost:5000";

      /* Index of the bill awaiting delete confirmation */
      let pendingDeleteIndex = null;

      /* ──────────────────────────────────────────────────────────
         2. HELPER FUNCTIONS
      ────────────────────────────────────────────────────────── */

      /**
       * getInitials(name)
       * Returns up to 2 capital initials from a full name.
       * "Ayaan Kapoor" → "AK"
       */
      function getInitials(name) {
        return name
          .split(" ")
          .map((w) => w[0])
          .join("")
          .toUpperCase()
          .slice(0, 2);
      }

      /**
       * formatDate(dateStr)
       * "2026-05-12" → "12 May 2026"
       */
      function formatDate(dateStr) {
        if (!dateStr) return "—";
        const [yr, mo, dy] = dateStr.split("-");
        const months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        return `${parseInt(dy)} ${months[parseInt(mo) - 1]} ${yr}`;
      }

      /**
       * formatAmount(n)
       * Formats a number as Indian rupee style: 11500 → "11,500"
       */
      function formatAmount(n) {
        return Number(n).toLocaleString("en-IN");
      }

      /**
       * buildBadge(status)
       * Returns the HTML for a coloured status pill badge.
       * Statuses: "paid" | "pending" | "overdue"
       */
      function buildBadge(status) {
        const map = {
          paid: { label: "✅ Paid", cls: "paid" },
          pending: { label: "⏳ Pending", cls: "pending" },
          overdue: { label: "🚨 Overdue", cls: "overdue" },
        };
        const s = map[status] || { label: status, cls: "pending" };
        return `<span class="badge ${s.cls}">${s.label}</span>`;
      }

      /* ──────────────────────────────────────────────────────────
         4. RENDER TABLE
         Builds table rows from the bills array.
         Filters by search text AND the selected status.
      ────────────────────────────────────────────────────────── */
      async function renderTable() {
        try {
          const response = await fetch(`${API_URL}/bills`);

          const bills = await response.json();

          const tbody = document.getElementById("tableBody");

          tbody.innerHTML = "";

          bills.forEach((bill) => {
            const row = document.createElement("tr");

            row.innerHTML = `

        <td>${bill.bill_id}</td>

        <td>${bill.patient_name}</td>

        <td>${bill.appointment_id}</td>

        <td>₹${bill.amount}</td>

        <td>${bill.billing_date}</td>

        <td>${bill.payment_status}</td>

        <td>

          <button
            class="btn btn-icon btn-danger"
            onclick="deleteBill(${bill.bill_id})">
            🗑️
          </button>

        </td>
      `;

            tbody.appendChild(row);
          });
        } catch (error) {
          console.log(error);
        }
      }

      async function deleteBill(id) {
        const confirmDelete = confirm("Delete bill?");

        if (!confirmDelete) return;

        try {
          const response = await fetch(`${API_URL}/delete-bill/${id}`, {
            method: "DELETE",
          });

          const result = await response.text();

          alert(result);

          renderTable();
        } catch (error) {
          console.log(error);
        }
      }
      /* ──────────────────────────────────────────────────────────
         5. FORM: TOGGLE (collapse / expand)
      ────────────────────────────────────────────────────────── */
      function toggleFormCard() {
        const card = document.getElementById("formCard");
        const body = document.getElementById("formCollapsible");
        const hint = document.getElementById("formHint");

        if (body.classList.contains("hidden")) {
          body.classList.remove("hidden");
          card.classList.remove("collapsed");
          hint.textContent = "Click to collapse";
        } else {
          body.classList.add("hidden");
          card.classList.add("collapsed");
          hint.textContent = "Click to expand";
        }
      }

      /**
       * openBillingForm()
       * Called by the "Create New Bill" button in the page header.
       * Ensures the form is expanded and scrolls to it.
       */
      function openBillingForm() {
        const body = document.getElementById("formCollapsible");
        const card = document.getElementById("formCard");
        const hint = document.getElementById("formHint");

        body.classList.remove("hidden");
        card.classList.remove("collapsed");
        hint.textContent = "Click to collapse";

        card.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      /* ──────────────────────────────────────────────────────────
         7. FORM FEEDBACK (inline success / error messages)
      ────────────────────────────────────────────────────────── */
      function showFeedback(msg, type) {
        const el = document.getElementById("formFeedback");
        el.textContent = msg;
        el.style.display = "block";
        el.style.background = type === "success" ? "#e8f8f0" : "#fdecea";
        el.style.color =
          type === "success" ? "var(--success)" : "var(--danger)";
        el.style.border =
          type === "success" ? "1.5px solid #b7e5cc" : "1.5px solid #f5c6c2";
      }

      function hideFeedback() {
        document.getElementById("formFeedback").style.display = "none";
      }

      /* ──────────────────────────────────────────────────────────
         8. RESET FORM
      ────────────────────────────────────────────────────────── */
      function resetForm() {
        document.getElementById("billingForm").reset();
        setNextBillId();
        hideFeedback();
      }

      /* ──────────────────────────────────────────────────────────
         9. SUBMIT NEW BILL
      ────────────────────────────────────────────────────────── */
      document
        .getElementById("billingForm")
        .addEventListener("submit", async function (e) {
          e.preventDefault();

          const appointment_id =
            document.getElementById("fAppointmentId").value;

          const amount = document.getElementById("fAmount").value;

          const payment_status = document.getElementById("fStatus").value;

          const billData = {
            appointment_id,
            amount,
            payment_status,
          };

          try {
            const response = await fetch(`${API_URL}/add-bill`, {
              method: "POST",

              headers: {
                "Content-Type": "application/json",
              },

              body: JSON.stringify(billData),
            });

            const result = await response.text();

            alert(result);

            document.getElementById("billingForm").reset();

            renderTable();
          } catch (error) {
            console.log(error);
          }
        });

      document
        .getElementById("confirmDeleteBtn")
        .addEventListener("click", () => {
          if (pendingDeleteIndex === null) return;
          bills.splice(pendingDeleteIndex, 1); /* Remove from array */
          pendingDeleteIndex = null;
          closeModal("deleteConfirm");
          renderTable();
          updateStatCards();
        });

      /* Close delete dialog if user clicks the dark overlay */
      function handleOverlayClick(event) {
        if (event.target === document.getElementById("deleteConfirm")) {
          closeModal("deleteConfirm");
          pendingDeleteIndex = null;
        }
      }

      /* ──────────────────────────────────────────────────────────
         15. MODAL HELPERS
      ────────────────────────────────────────────────────────── */
      function openModal(id) {
        document.getElementById(id).classList.add("active");
        document.body.style.overflow = "hidden";
      }

      function closeModal(id) {
        document.getElementById(id).classList.remove("active");
        document.body.style.overflow = "";
      }

      /* ESC key closes any open modal */
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          ["editModal", "invoiceModal", "deleteConfirm"].forEach(closeModal);
          pendingDeleteIndex = null;
        }
      });

      /* ──────────────────────────────────────────────────────────
         16. SIDEBAR TOGGLE (mobile)
      ────────────────────────────────────────────────────────── */
      function openSidebar() {
        document.getElementById("sidebar").classList.add("open");
        document.getElementById("sidebarOverlay").classList.add("active");
        document.body.style.overflow = "hidden";
      }

      function closeSidebar() {
        document.getElementById("sidebar").classList.remove("open");
        document.getElementById("sidebarOverlay").classList.remove("active");
        document.body.style.overflow = "";
      }

      /* ──────────────────────────────────────────────────────────
         17. INITIALISE PAGE
         Runs once the HTML is fully loaded.
      ────────────────────────────────────────────────────────── */
      document.addEventListener("DOMContentLoaded", () => {
        renderTable();
      });
    </script>
  </body>
</html>

```

---

### <a id="📄-dashboard-html"></a>📄 `dashboard.html`

**File Info:**
- **Size**: 27.38 KB
- **Extension**: `.html`
- **Language**: `html`
- **Location**: `dashboard.html`
- **Relative Path**: `root`
- **Created**: 2026-05-12 05:37:01 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-05-19 12:04:41 (Asia/Calcutta / GMT+06:30)
- **MD5**: `8dc2e89d47a0bbb9a3621ff60350f945`
- **SHA256**: `32d0b72947d549a8dc9b5b412bb878b29ac9fd97124f28bf0e622da7a387f8e3`
- **Encoding**: UTF-8

**File code content:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dashboard — MedCare HMS</title>

    <!-- Shared stylesheet -->
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <!-- ═══════════════════════════════════════════════════════════
     MOBILE SIDEBAR OVERLAY
     Dark backdrop shown on mobile when sidebar is open.
     Clicking it closes the sidebar.
══════════════════════════════════════════════════════════════ -->
    <div class="sidebar-overlay" id="sidebarOverlay"></div>

    <!-- ═══════════════════════════════════════════════════════════
     APP SHELL — flex container holding sidebar + main content
══════════════════════════════════════════════════════════════ -->
    <div class="app-shell">
      <!-- ─────────────────────────────────────────────────────────
       SIDEBAR NAVIGATION
  ────────────────────────────────────────────────────────── -->
      <aside class="sidebar" id="sidebar">
        <!-- Brand / Logo -->
        <div class="sidebar-brand">
          <div class="brand-icon">🏥</div>
          <div class="brand-text">
            <h2>MedCare</h2>
            <span>Hospital System</span>
          </div>
        </div>

        <!-- Navigation Links -->
        <nav class="sidebar-nav">
          <!-- Main section -->
          <div class="nav-section-label">Main Menu</div>

          <!-- data-page matches the HTML filename for auto-active highlighting -->
          <div
            class="nav-item active"
            data-page="dashboard.html"
            onclick="location.href = 'dashboard.html'">
            <span class="nav-icon">📊</span>
            Dashboard
          </div>

          <div
            class="nav-item"
            data-page="appointments.html"
            onclick="location.href = 'appointments.html'">
            <span class="nav-icon">📅</span>
            Appointments
            <span class="nav-badge">5</span>
          </div>

          <div
            class="nav-item"
            data-page="patients.html"
            onclick="location.href = 'patients.html'">
            <span class="nav-icon">🧑‍⚕️</span>
            Patients
          </div>

          <div
            class="nav-item"
            data-page="doctors.html"
            onclick="location.href = 'doctors.html'">
            <span class="nav-icon">👨‍⚕️</span>
            Doctors
          </div>

          <!-- Management section -->
          <div class="nav-section-label">Management</div>

          <div
            class="nav-item"
            data-page="billing.html"
            onclick="location.href = 'billing.html'">
            <span class="nav-icon">💳</span>
            Billing
          </div>

          <div
            class="nav-item"
            data-page="settings.html"
            onclick="location.href = 'settings.html'">
            <span class="nav-icon">⚙️</span>
            Settings
          </div>
        </nav>

        <!-- Logged-in user info at bottom of sidebar -->
        <div class="sidebar-footer">
          <div class="sidebar-user">
            <div class="user-avatar">👤</div>
            <div class="user-info">
              <h4 id="loggedUserName">Loading...</h4>

              <p id="loggedUserRole">Loading...</p>
            </div>
          </div>
        </div>
        <button class="btn btn-danger" onclick="logoutUser()">Logout</button>
      </aside>
      <!-- /sidebar -->

      <!-- ─────────────────────────────────────────────────────────
       MAIN CONTENT AREA
  ────────────────────────────────────────────────────────── -->
      <div class="main-content">
        <!-- ───────────────────────────────────────────────────────
         TOP NAVBAR
    ──────────────────────────────────────────────────────── -->
        <header class="topbar">
          <!-- Hamburger button — only visible on mobile -->
          <button
            class="topbar-toggle"
            id="sidebarToggle"
            aria-label="Toggle navigation">
            ☰
          </button>

          <!-- Page title -->
          <div class="topbar-title">Dashboard</div>

          <!-- Search bar -->
          <!-- <div class="topbar-search">
            <span class="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search patients, doctors, appointments…" />
          </div> -->

          <!-- Right-side action buttons -->
        </header>
        <!-- /topbar -->

        <!-- ───────────────────────────────────────────────────────
         PAGE CONTENT
    ──────────────────────────────────────────────────────── -->
        <main class="page-content">
          <!-- Page header row -->
          <div class="page-header">
            <div>
              <h1>Good Morning, Dr. Admin 👋</h1>
              <p>Here's what's happening at MedCare today.</p>
            </div>
            <!-- Button opens the New Appointment modal -->
            <button
              class="btn btn-primary"
              onclick="openModal('newAppointmentModal')">
              ➕ New Appointment
            </button>
          </div>

          <!-- ─────────────────────────────────────────────────────
           STAT CARDS ROW
      ──────────────────────────────────────────────────────── -->
          <div class="stats-grid">
            <!-- Card 1 — Total Patients -->
            <div class="stat-card blue">
              <div class="stat-icon">🧑‍⚕️</div>
              <div class="stat-info">
                <!-- id used by JS to inject animated count -->
                <h3 id="stat-patients">0</h3>
                <p>Total Patients</p>
                <div class="stat-change up">▲ 3.2% this month</div>
              </div>
            </div>

            <!-- Card 2 — Doctors -->
            <div class="stat-card teal">
              <div class="stat-icon">👨‍⚕️</div>
              <div class="stat-info">
                <h3 id="stat-doctors">0</h3>
                <p>Active Doctors</p>
                <div class="stat-change up">▲ 2 new this week</div>
              </div>
            </div>

            <!-- Card 3 — Today's Appointments -->
            <div class="stat-card green">
              <div class="stat-icon">📅</div>
              <div class="stat-info">
                <h3 id="stat-appointments">0</h3>
                <p>Today's Appointments</p>
                <div class="stat-change up">▲ 8 more than yesterday</div>
              </div>
            </div>

            <!-- Card 4 — Pending Bills -->
            <div class="stat-card orange">
              <div class="stat-icon">💳</div>
              <div class="stat-info">
                <h3 id="stat-bills">0</h3>
                <p>Pending Bills</p>
                <div class="stat-change down">▼ 4 resolved today</div>
              </div>
            </div>
          </div>
          <!-- /stats-grid -->

          <!-- ─────────────────────────────────────────────────────
           MAIN 2-COLUMN GRID
           Left: Recent appointments table
           Right: Today's schedule + quick summary
      ──────────────────────────────────────────────────────── -->
          <div class="content-grid">
            <!-- ── LEFT: Recent Appointments Table ────────────── -->
            <div class="card">
              <div class="card-header">
                <div>
                  <h2>Recent Appointments</h2>
                  <p>Showing today's appointment activity</p>
                </div>
                <!-- Filter / view all buttons -->
                <div class="flex gap-8">
                  <button
                    class="btn btn-outline btn-sm"
                    onclick="location.href = 'appointments.html'">
                    View All
                  </button>
                </div>
              </div>

              <div class="card-body" style="padding: 0">
                <div class="table-wrapper">
                  <table>
                    <thead>
                      <tr>
                        <th>Patient</th>
                        <th>Doctor</th>
                        <th>Department</th>
                        <th>Date & Time</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <!-- tbody is filled by JS renderAppointmentsTable() -->
                    <tbody id="appointmentsTableBody">
                      <!-- rows injected by app.js -->
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <!-- /card -->

            <!-- ── RIGHT COLUMN ────────────────────────────────── -->
            <div style="display: flex; flex-direction: column; gap: 20px">
              <!-- Today's Schedule card -->
              <div class="card">
                <div class="card-header">
                  <div>
                    <h2>Today's Schedule</h2>
                    <p>12 May 2026</p>
                  </div>
                </div>
                <div class="card-body">
                  <!-- List populated by JS renderTodaySchedule() -->
                  <div class="schedule-list" id="scheduleList">
                    <!-- items injected by app.js -->
                  </div>
                </div>
              </div>

              <!-- Quick Summary card -->
              <div class="card">
                <div class="card-header">
                  <div>
                    <h2>Appointment Summary</h2>
                    <p>Today's breakdown</p>
                  </div>
                </div>
                <div class="card-body">
                  <div class="summary-row">
                    <div class="summary-item">
                      <div class="num" style="color: var(--success)">18</div>
                      <div class="label">Confirmed</div>
                    </div>
                    <div class="summary-item">
                      <div class="num" style="color: var(--warning)">12</div>
                      <div class="label">Pending</div>
                    </div>
                    <div class="summary-item">
                      <div class="num" style="color: var(--danger)">7</div>
                      <div class="label">Cancelled</div>
                    </div>
                  </div>

                  <!-- Simple visual progress bar -->
                  <div style="margin-top: 20px">
                    <div
                      style="
                        display: flex;
                        justify-content: space-between;
                        font-size: 12px;
                        color: var(--text-mid);
                        margin-bottom: 6px;
                      ">
                      <span>Completion rate</span>
                      <span style="font-weight: 700; color: var(--dark-blue)"
                        >49%</span
                      >
                    </div>
                    <div
                      style="
                        background: var(--border);
                        border-radius: 20px;
                        height: 8px;
                        overflow: hidden;
                      ">
                      <div
                        style="
                          width: 49%;
                          height: 100%;
                          background: linear-gradient(
                            90deg,
                            var(--accent-blue),
                            var(--mid-blue)
                          );
                          border-radius: 20px;
                          transition: width 1s ease;
                        "></div>
                    </div>
                  </div>

                  <!-- Department breakdown -->
                  <div
                    style="
                      margin-top: 20px;
                      display: flex;
                      flex-direction: column;
                      gap: 10px;
                    ">
                    <div
                      style="
                        font-size: 12px;
                        font-weight: 700;
                        color: var(--text-mid);
                        letter-spacing: 1px;
                        text-transform: uppercase;
                        margin-bottom: 4px;
                      ">
                      By Department
                    </div>

                    <!-- Each row: dept name + count + mini-bar -->
                    <div
                      class="dept-row"
                      style="
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        font-size: 13px;
                      ">
                      <span style="width: 90px; color: var(--text-mid)"
                        >Cardiology</span
                      >
                      <div
                        style="
                          flex: 1;
                          background: var(--border);
                          border-radius: 20px;
                          height: 6px;
                        ">
                        <div
                          style="
                            width: 65%;
                            height: 100%;
                            background: var(--accent-blue);
                            border-radius: 20px;
                          "></div>
                      </div>
                      <span
                        style="
                          font-weight: 600;
                          color: var(--dark-blue);
                          min-width: 20px;
                        "
                        >8</span
                      >
                    </div>

                    <div
                      class="dept-row"
                      style="
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        font-size: 13px;
                      ">
                      <span style="width: 90px; color: var(--text-mid)"
                        >Neurology</span
                      >
                      <div
                        style="
                          flex: 1;
                          background: var(--border);
                          border-radius: 20px;
                          height: 6px;
                        ">
                        <div
                          style="
                            width: 42%;
                            height: 100%;
                            background: var(--mid-blue);
                            border-radius: 20px;
                          "></div>
                      </div>
                      <span
                        style="
                          font-weight: 600;
                          color: var(--dark-blue);
                          min-width: 20px;
                        "
                        >5</span
                      >
                    </div>

                    <div
                      class="dept-row"
                      style="
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        font-size: 13px;
                      ">
                      <span style="width: 90px; color: var(--text-mid)"
                        >General</span
                      >
                      <div
                        style="
                          flex: 1;
                          background: var(--border);
                          border-radius: 20px;
                          height: 6px;
                        ">
                        <div
                          style="
                            width: 58%;
                            height: 100%;
                            background: var(--success);
                            border-radius: 20px;
                          "></div>
                      </div>
                      <span
                        style="
                          font-weight: 600;
                          color: var(--dark-blue);
                          min-width: 20px;
                        "
                        >7</span
                      >
                    </div>

                    <div
                      class="dept-row"
                      style="
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        font-size: 13px;
                      ">
                      <span style="width: 90px; color: var(--text-mid)"
                        >Pediatrics</span
                      >
                      <div
                        style="
                          flex: 1;
                          background: var(--border);
                          border-radius: 20px;
                          height: 6px;
                        ">
                        <div
                          style="
                            width: 30%;
                            height: 100%;
                            background: var(--warning);
                            border-radius: 20px;
                          "></div>
                      </div>
                      <span
                        style="
                          font-weight: 600;
                          color: var(--dark-blue);
                          min-width: 20px;
                        "
                        >4</span
                      >
                    </div>

                    <div
                      class="dept-row"
                      style="
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        font-size: 13px;
                      ">
                      <span style="width: 90px; color: var(--text-mid)"
                        >Orthopedics</span
                      >
                      <div
                        style="
                          flex: 1;
                          background: var(--border);
                          border-radius: 20px;
                          height: 6px;
                        ">
                        <div
                          style="
                            width: 25%;
                            height: 100%;
                            background: var(--danger);
                            border-radius: 20px;
                          "></div>
                      </div>
                      <span
                        style="
                          font-weight: 600;
                          color: var(--dark-blue);
                          min-width: 20px;
                        "
                        >3</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <!-- /quick summary card -->
            </div>
            <!-- /right column -->
          </div>
          <!-- /content-grid -->
        </main>
        <!-- /page-content -->
      </div>
      <!-- /main-content -->
    </div>
    <!-- /app-shell -->

    <!-- ═══════════════════════════════════════════════════════════
     NEW APPOINTMENT MODAL
     Triggered by the "New Appointment" button in the page header.
══════════════════════════════════════════════════════════════ -->
    <div class="modal-overlay" id="newAppointmentModal">
      <div class="modal">
        <!-- Modal Header -->
        <div class="modal-header">
          <h3>📅 Book New Appointment</h3>
          <button class="modal-close" aria-label="Close modal">✕</button>
        </div>

        <!-- Modal Body — Appointment Form -->
        <div class="modal-body">
          <form id="newAppointmentForm" novalidate>
            <!-- Patient Name + Doctor (2-column row) -->
            <div class="form-row">
              <div class="form-group">
                <label for="formPatient">Patient Name</label>
                <input
                  type="text"
                  id="formPatient"
                  class="form-control"
                  placeholder="e.g. Ayaan Kapoor"
                  required />
              </div>
              <div class="form-group">
                <label for="formDoctor">Doctor</label>
                <select id="formDoctor" class="form-control" required>
                  <option value="">— Select Doctor —</option>
                  <option>Dr. Suresh Mehta</option>
                  <option>Dr. Ananya Iyer</option>
                  <option>Dr. K. Reddy</option>
                  <option>Dr. Harpreet Singh</option>
                </select>
              </div>
            </div>

            <!-- Department -->
            <div class="form-group">
              <label for="formDepartment">Department</label>
              <select id="formDepartment" class="form-control" required>
                <option value="">— Select Department —</option>
                <option>Cardiology</option>
                <option>Neurology</option>
                <option>General</option>
                <option>Pediatrics</option>
                <option>Orthopedics</option>
              </select>
            </div>

            <!-- Date + Time (2-column row) -->
            <div class="form-row">
              <div class="form-group">
                <label for="formDate">Appointment Date</label>
                <input
                  type="date"
                  id="formDate"
                  class="form-control"
                  required />
              </div>
              <div class="form-group">
                <label for="formTime">Time Slot</label>
                <input
                  type="time"
                  id="formTime"
                  class="form-control"
                  required />
              </div>
            </div>

            <!-- Notes -->
            <div class="form-group">
              <label for="formNotes">Notes / Reason</label>
              <textarea
                id="formNotes"
                class="form-control"
                rows="3"
                placeholder="Brief reason for visit…"
                style="resize: vertical"></textarea>
            </div>
          </form>
        </div>
        <!-- /modal-body -->

        <!-- Modal Footer -->
        <div class="modal-footer">
          <button
            class="btn btn-ghost"
            onclick="closeModal('newAppointmentModal')">
            Cancel
          </button>
          <!-- Triggers the form's submit event -->
          <button
            class="btn btn-primary"
            onclick="
              document.getElementById('newAppointmentForm').requestSubmit()
            ">
            ✅ Book Appointment
          </button>
        </div>
      </div>
      <!-- /modal -->
    </div>
    <!-- /modal-overlay -->

    <!-- ── Shared JavaScript ─────────────────────────────────── -->
    <script src="js/app.js"></script>
    <!-- Dashboard Login Script -->
    <script>
      /* -----------------------------------
     CHECK LOGIN
  ----------------------------------- */

      const user = JSON.parse(localStorage.getItem("loggedInUser"));

      if (!user) {
        window.location.href = "login.html";
      }

      /* -----------------------------------
     SHOW USER INFO
  ----------------------------------- */

      document.getElementById("loggedUserName").textContent = user.full_name;

      document.getElementById("loggedUserRole").textContent = user.role;

      /* -----------------------------------
     LOGOUT
  ----------------------------------- */

      function logoutUser() {
        localStorage.removeItem("loggedInUser");

        window.location.href = "login.html";
      }
      /* -----------------------------------
   FETCH DASHBOARD STATS
----------------------------------- */

      async function fetchDashboardStats() {
        try {
          const response = await fetch("http://localhost:5000/dashboard-stats");

          const data = await response.json();

          document.getElementById("stat-patients").textContent =
            data.totalPatients;

          document.getElementById("stat-doctors").textContent =
            data.totalDoctors;

          document.getElementById("stat-appointments").textContent =
            data.totalAppointments;

          document.getElementById("stat-bills").textContent =
            `₹${data.totalRevenue}`;
        } catch (error) {
          console.log(error);
        }
      }
      fetchDashboardStats();
    </script>
  </body>
</html>

```

---

### <a id="📄-doctors-html"></a>📄 `doctors.html`

**File Info:**
- **Size**: 41.6 KB
- **Extension**: `.html`
- **Language**: `html`
- **Location**: `doctors.html`
- **Relative Path**: `root`
- **Created**: 2026-05-12 05:37:12 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-05-13 04:20:18 (Asia/Calcutta / GMT+06:30)
- **MD5**: `6c2064ebb24353d66c3d8ec7be1e2e61`
- **SHA256**: `67740739fbe448aa47ed8c712f2957a65c5a7a9e8a0f1f7d2af1c242a9b86779`
- **Encoding**: UTF-8

**File code content:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Doctors — MedCare HMS</title>

    <!-- Shared stylesheet -->
    <link rel="stylesheet" href="css/style.css" />

    <!-- ─────────────────────────────────────────────────────────
       DOCTORS PAGE — page-specific styles only
  ────────────────────────────────────────────────────────── -->
    <style>
      /* ── Page entry animations ──────────────────────────── */
      .anim-1 {
        opacity: 0;
        animation: fadeSlideUp 0.5s ease 0.08s forwards;
      }
      .anim-2 {
        opacity: 0;
        animation: fadeSlideUp 0.5s ease 0.22s forwards;
      }
      .anim-3 {
        opacity: 0;
        animation: fadeSlideUp 0.5s ease 0.36s forwards;
      }

      /* ── Summary stat mini-cards below page header ───────── */
      .doctor-stats {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;
        margin-bottom: 24px;
      }

      .doc-stat {
        background: var(--white);
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        padding: 18px 20px;
        display: flex;
        align-items: center;
        gap: 14px;
        box-shadow: var(--shadow-sm);
        transition: var(--transition);
        opacity: 0;
        animation: fadeSlideUp 0.5s ease forwards;
      }

      .doc-stat:nth-child(1) {
        animation-delay: 0.05s;
      }
      .doc-stat:nth-child(2) {
        animation-delay: 0.15s;
      }
      .doc-stat:nth-child(3) {
        animation-delay: 0.25s;
      }
      .doc-stat:nth-child(4) {
        animation-delay: 0.35s;
      }

      .doc-stat:hover {
        transform: translateY(-3px);
        box-shadow: var(--shadow-md);
      }

      .doc-stat-icon {
        width: 46px;
        height: 46px;
        border-radius: var(--radius-sm);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 22px;
        flex-shrink: 0;
      }

      .doc-stat-info .num {
        font-size: 24px;
        font-weight: 700;
        color: var(--dark-blue);
        line-height: 1;
      }
      .doc-stat-info .lbl {
        font-size: 12px;
        color: var(--text-light);
        margin-top: 3px;
      }

      @media (max-width: 900px) {
        .doctor-stats {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      @media (max-width: 480px) {
        .doctor-stats {
          grid-template-columns: 1fr;
        }
      }

      /* ── Registration form card ──────────────────────────── */
      .form-card {
        background: var(--white);
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        box-shadow: var(--shadow-sm);
        margin-bottom: 24px;
        overflow: hidden;
      }

      .form-card-bar {
        height: 4px;
        /* teal gradient to differentiate from patients page */
        background: linear-gradient(90deg, #00bcd4, var(--mid-blue));
      }

      .form-card-inner {
        padding: 22px 28px 28px;
      }

      /* Collapse / expand toggle */
      .form-toggle-btn {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        font-weight: 600;
        color: var(--accent-blue);
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
        transition: var(--transition);
      }
      .form-toggle-btn:hover {
        color: var(--dark-blue);
      }
      .form-toggle-btn .arrow {
        display: inline-block;
        transition: transform 0.25s ease;
        font-style: normal;
      }
      .form-toggle-btn.collapsed .arrow {
        transform: rotate(-90deg);
      }

      /* Animated collapse wrapper */
      .form-collapsible {
        overflow: hidden;
        max-height: 600px;
        transition:
          max-height 0.4s ease,
          opacity 0.3s ease,
          margin 0.3s ease;
        opacity: 1;
        margin-top: 20px;
      }
      .form-collapsible.hidden {
        max-height: 0;
        opacity: 0;
        margin-top: 0;
      }

      /* 3-column grid for fields */
      .form-grid-3 {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
      }
      @media (max-width: 900px) {
        .form-grid-3 {
          grid-template-columns: 1fr 1fr;
        }
      }
      @media (max-width: 540px) {
        .form-grid-3 {
          grid-template-columns: 1fr;
        }
      }

      .form-actions {
        display: flex;
        gap: 12px;
        margin-top: 20px;
        flex-wrap: wrap;
      }

      /* Inline feedback */
      #formFeedback {
        display: none;
        margin-top: 14px;
        padding: 10px 14px;
        border-radius: var(--radius-sm);
        font-size: 13px;
        font-weight: 500;
      }

      /* ── Table card ──────────────────────────────────────── */
      .table-card {
        background: var(--white);
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        box-shadow: var(--shadow-sm);
        overflow: hidden;
      }

      .table-toolbar {
        padding: 18px 24px;
        border-bottom: 1px solid var(--border);
        display: flex;
        align-items: center;
        gap: 14px;
        flex-wrap: wrap;
      }
      .table-toolbar h2 {
        font-size: 16px;
        font-weight: 600;
        color: var(--dark-blue);
        margin-right: auto;
      }

      .count-pill {
        background: var(--light-blue);
        color: var(--accent-blue);
        font-size: 12px;
        font-weight: 700;
        padding: 3px 10px;
        border-radius: 20px;
        border: 1px solid var(--border);
      }

      .toolbar-search {
        position: relative;
        width: 240px;
      }
      .toolbar-search input {
        width: 100%;
        padding: 8px 14px 8px 36px;
        border: 1.5px solid var(--border);
        border-radius: 30px;
        font-family: var(--font-body);
        font-size: 13px;
        color: var(--text-dark);
        background: var(--pale-blue);
        outline: none;
        transition: var(--transition);
      }
      .toolbar-search input:focus {
        border-color: var(--accent-blue);
        background: var(--white);
        box-shadow: 0 0 0 3px rgba(26, 115, 232, 0.1);
      }
      .toolbar-search .s-icon {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 13px;
        color: var(--text-light);
        pointer-events: none;
      }

      @media (max-width: 768px) {
        .toolbar-search {
          width: 100%;
          order: 3;
        }
        .hide-mobile {
          display: none;
        }
      }

      /* ── Doctor avatar in table ──────────────────────────── */
      .doc-avatar {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        font-weight: 700;
        color: var(--white);
        flex-shrink: 0;
      }

      /* Rotating hue per avatar so each doctor looks distinct */
      .doc-avatar.c0 {
        background: linear-gradient(135deg, #0d3b66, #1a73e8);
      }
      .doc-avatar.c1 {
        background: linear-gradient(135deg, #00796b, #26c6da);
      }
      .doc-avatar.c2 {
        background: linear-gradient(135deg, #6a1b9a, #ab47bc);
      }
      .doc-avatar.c3 {
        background: linear-gradient(135deg, #c62828, #ef5350);
      }
      .doc-avatar.c4 {
        background: linear-gradient(135deg, #e65100, #ffa726);
      }
      .doc-avatar.c5 {
        background: linear-gradient(135deg, #1565c0, #42a5f5);
      }
      .doc-avatar.c6 {
        background: linear-gradient(135deg, #2e7d32, #66bb6a);
      }

      /* ── Specialization badge ────────────────────────────── */
      .spec-badge {
        display: inline-block;
        padding: 3px 10px;
        border-radius: 20px;
        font-size: 11px;
        font-weight: 600;
        background: var(--light-blue);
        color: var(--dark-blue);
        border: 1px solid var(--border);
      }

      /* ── Availability dot ────────────────────────────────── */
      .avail-dot {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 12px;
        font-weight: 600;
      }
      .avail-dot::before {
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 50%;
      }
      .avail-dot.available {
        color: var(--success);
      }
      .avail-dot.available::before {
        background: var(--success);
      }
      .avail-dot.busy {
        color: var(--warning);
      }
      .avail-dot.busy::before {
        background: var(--warning);
      }
      .avail-dot.off {
        color: var(--text-light);
      }
      .avail-dot.off::before {
        background: var(--text-light);
      }

      /* ── Empty state ─────────────────────────────────────── */
      .empty-row td {
        text-align: center;
        padding: 40px 16px;
        color: var(--text-light);
        font-size: 14px;
      }

      /* ── Delete confirmation overlay ─────────────────────── */
      .del-confirm {
        display: none;
        position: fixed;
        inset: 0;
        background: rgba(9, 45, 80, 0.45);
        backdrop-filter: blur(3px);
        z-index: 300;
        align-items: center;
        justify-content: center;
        padding: 20px;
      }
      .del-confirm.active {
        display: flex;
      }

      .del-box {
        background: var(--white);
        border-radius: var(--radius-md);
        padding: 32px 36px;
        max-width: 400px;
        width: 100%;
        text-align: center;
        box-shadow: var(--shadow-lg);
        animation: modalPop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) both;
      }
      .del-box .del-icon {
        font-size: 44px;
        margin-bottom: 12px;
      }
      .del-box h3 {
        font-size: 20px;
        color: var(--dark-blue);
        margin-bottom: 8px;
      }
      .del-box p {
        font-size: 14px;
        color: var(--text-mid);
        margin-bottom: 24px;
        line-height: 1.6;
      }
      .del-box .del-actions {
        display: flex;
        gap: 12px;
        justify-content: center;
      }

      /* Highlight edited row */
      tr.editing-row td {
        background: #f0f8ff !important;
      }
    </style>
  </head>

  <body>
    <!-- Mobile sidebar overlay -->
    <div class="sidebar-overlay" id="sidebarOverlay"></div>

    <!-- ═══════════════════════════════════════════════════════════
     APP SHELL
══════════════════════════════════════════════════════════════ -->
    <div class="app-shell">
      <!-- ── SIDEBAR ─────────────────────────────────────────── -->
      <aside class="sidebar" id="sidebar">
        <div class="sidebar-brand">
          <div class="brand-icon">🏥</div>
          <div class="brand-text">
            <h2>MedCare</h2>
            <span>Hospital System</span>
          </div>
        </div>

        <nav class="sidebar-nav">
          <div class="nav-section-label">Main Menu</div>

          <div
            class="nav-item"
            data-page="dashboard.html"
            onclick="location.href = 'dashboard.html'">
            <span class="nav-icon">📊</span> Dashboard
          </div>
          <div
            class="nav-item"
            data-page="appointments.html"
            onclick="location.href = 'appointments.html'">
            <span class="nav-icon">📅</span> Appointments
            <span class="nav-badge">5</span>
          </div>
          <div
            class="nav-item"
            data-page="patients.html"
            onclick="location.href = 'patients.html'">
            <span class="nav-icon">🧑‍⚕️</span> Patients
          </div>
          <!-- Active page -->
          <div
            class="nav-item active"
            data-page="doctors.html"
            onclick="location.href = 'doctors.html'">
            <span class="nav-icon">👨‍⚕️</span> Doctors
          </div>

          <div class="nav-section-label">Management</div>
          <div
            class="nav-item"
            data-page="billing.html"
            onclick="location.href = 'billing.html'">
            <span class="nav-icon">💳</span> Billing
          </div>
          <div class="nav-item"><span class="nav-icon">📈</span> Reports</div>
          <div class="nav-item"><span class="nav-icon">⚙️</span> Settings</div>
        </nav>

        <div class="sidebar-footer">
          <div class="sidebar-user">
            <div class="user-avatar">👤</div>
            <div class="user-info">
              <h4>Dr. Admin</h4>
              <p>Super Admin</p>
            </div>
          </div>
        </div>
      </aside>

      <!-- ── MAIN CONTENT ────────────────────────────────────── -->
      <div class="main-content">
        <!-- TOP NAVBAR -->
        <header class="topbar">
          <button
            class="topbar-toggle"
            id="sidebarToggle"
            aria-label="Toggle navigation">
            ☰
          </button>
          <div class="topbar-title">Doctors</div>

          <div class="topbar-search">
            <span class="search-icon">🔍</span>
            <input type="text" placeholder="Search doctors, departments…" />
          </div>

          <div class="topbar-actions">
            <span
              id="topbarClock"
              style="
                font-size: 13px;
                color: var(--text-mid);
                white-space: nowrap;
              "></span>
            <button class="topbar-btn" title="Notifications">
              🔔<span class="dot"></span>
            </button>
            <button class="topbar-btn" title="Messages">✉️</button>
            <div class="topbar-avatar" title="My Profile">👤</div>
          </div>
        </header>

        <!-- ── PAGE CONTENT ──────────────────────────────────── -->
        <main class="page-content">
          <!-- Page header -->
          <div class="page-header anim-1">
            <div>
              <h1>Doctor Management</h1>
              <p>Register new doctors and manage existing staff records</p>
            </div>
            <button
              class="btn btn-outline"
              onclick="
                document
                  .getElementById('doctorTable')
                  .scrollIntoView({ behavior: 'smooth' })
              ">
              📋 View All Doctors
            </button>
          </div>

          <!-- ── SUMMARY STAT CARDS ──────────────────────────── -->
          <div class="doctor-stats">
            <div class="doc-stat">
              <div class="doc-stat-icon" style="background: #e8f1fd">👨‍⚕️</div>
              <div class="doc-stat-info">
                <div class="num" id="statTotal">0</div>
                <div class="lbl">Total Doctors</div>
              </div>
            </div>

            <div class="doc-stat">
              <div class="doc-stat-icon" style="background: #e8f8f0">🟢</div>
              <div class="doc-stat-info">
                <div class="num" id="statAvailable">0</div>
                <div class="lbl">Available Today</div>
              </div>
            </div>

            <div class="doc-stat">
              <div class="doc-stat-icon" style="background: #fef6e7">🏥</div>
              <div class="doc-stat-info">
                <div class="num" id="statDepts">0</div>
                <div class="lbl">Departments</div>
              </div>
            </div>

            <div class="doc-stat">
              <div class="doc-stat-icon" style="background: #fdecea">🩺</div>
              <div class="doc-stat-info">
                <div class="num" id="statSpecs">0</div>
                <div class="lbl">Specializations</div>
              </div>
            </div>
          </div>

          <!-- ══════════════════════════════════════════════════
           REGISTRATION FORM CARD
      ═══════════════════════════════════════════════════ -->
          <div class="form-card anim-2">
            <div class="form-card-bar"></div>
            <div class="form-card-inner">
              <!-- Header row -->
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  flex-wrap: wrap;
                  gap: 10px;
                ">
                <div>
                  <h2
                    style="
                      font-size: 17px;
                      font-weight: 700;
                      color: var(--dark-blue);
                    ">
                    ➕ Register New Doctor
                  </h2>
                  <p
                    style="
                      font-size: 13px;
                      color: var(--text-light);
                      margin-top: 3px;
                    ">
                    Complete all required fields marked with
                    <span style="color: var(--danger)">*</span>
                  </p>
                </div>
                <button
                  class="form-toggle-btn"
                  id="formToggleBtn"
                  onclick="toggleForm()">
                  <i class="arrow">▼</i> Hide Form
                </button>
              </div>

              <!-- Collapsible form body -->
              <div class="form-collapsible" id="formCollapsible">
                <form id="doctorForm" novalidate>
                  <!-- Row 1: Doctor ID · Name · Specialization -->
                  <div class="form-grid-3">
                    <div class="form-group">
                      <label for="fDoctorId">
                        Doctor ID <span style="color: var(--danger)">*</span>
                      </label>
                      <!-- readonly — auto-generated -->
                      <input
                        type="text"
                        id="fDoctorId"
                        class="form-control"
                        placeholder="e.g. D-1010"
                        readonly />
                    </div>

                    <div class="form-group">
                      <label for="fName">
                        Full Name <span style="color: var(--danger)">*</span>
                      </label>
                      <input
                        type="text"
                        id="fName"
                        class="form-control"
                        placeholder="e.g. Dr. Ananya Iyer"
                        required />
                    </div>

                    <div class="form-group">
                      <label for="fSpec">
                        Specialization
                        <span style="color: var(--danger)">*</span>
                      </label>
                      <select id="fSpec" class="form-control" required>
                        <option value="">— Select —</option>
                        <option>Cardiologist</option>
                        <option>Neurologist</option>
                        <option>Pediatrician</option>
                        <option>Orthopedic Surgeon</option>
                        <option>General Physician</option>
                        <option>Dermatologist</option>
                        <option>Gynecologist</option>
                        <option>Ophthalmologist</option>
                        <option>Psychiatrist</option>
                        <option>Radiologist</option>
                        <option>Oncologist</option>
                        <option>ENT Specialist</option>
                      </select>
                    </div>
                  </div>
                  <!-- /row 1 -->

                  <!-- Row 2: Department · Phone · Email -->
                  <div class="form-grid-3">
                    <div class="form-group">
                      <label for="fDept">
                        Department <span style="color: var(--danger)">*</span>
                      </label>
                      <select id="fDept" class="form-control" required>
                        <option value="">— Select —</option>

                        <option value="1">Cardiology</option>

                        <option value="2">Neurology</option>

                        <option value="3">Orthopedics</option>

                        <option value="4">Pediatrics</option>

                        <option value="5">Dermatology</option>
                      </select>
                    </div>

                    <div class="form-group">
                      <label for="fPhone">
                        Phone <span style="color: var(--danger)">*</span>
                      </label>
                      <input
                        type="tel"
                        id="fPhone"
                        class="form-control"
                        placeholder="e.g. 9876543210"
                        required />
                    </div>

                    <div class="form-group">
                      <label for="fEmail">
                        Email <span style="color: var(--danger)">*</span>
                      </label>
                      <input
                        type="email"
                        id="fEmail"
                        class="form-control"
                        placeholder="e.g. doctor@medcare.com"
                        required />
                    </div>
                  </div>
                  <!-- /row 2 -->

                  <!-- Row 3: Availability + Experience (optional extras) -->
                  <div class="form-grid-3">
                    <div class="form-group">
                      <label for="fAvail">Availability</label>
                      <select id="fAvail" class="form-control">
                        <option value="available">Available</option>
                        <option value="busy">Busy</option>
                        <option value="off">Off Duty</option>
                      </select>
                    </div>

                    <div class="form-group">
                      <label for="fExp">Experience (years)</label>
                      <input
                        type="number"
                        id="fExp"
                        class="form-control"
                        placeholder="e.g. 12"
                        min="0"
                        max="60" />
                    </div>

                    <div class="form-group">
                      <label for="fQual">Qualification</label>
                      <input
                        type="text"
                        id="fQual"
                        class="form-control"
                        placeholder="e.g. MBBS, MD" />
                    </div>
                  </div>
                  <!-- /row 3 -->

                  <!-- Buttons -->
                  <div class="form-actions">
                    <button type="submit" class="btn btn-primary">
                      ✅ Register Doctor
                    </button>
                    <button
                      type="button"
                      class="btn btn-ghost"
                      onclick="resetForm()">
                      🔄 Reset Form
                    </button>
                  </div>

                  <!-- Inline feedback message -->
                  <div id="formFeedback"></div>
                </form>
              </div>
              <!-- /form-collapsible -->
            </div>
            <!-- /form-card-inner -->
          </div>
          <!-- /form-card -->

          <!-- ══════════════════════════════════════════════════
           DOCTORS TABLE CARD
      ═══════════════════════════════════════════════════ -->
          <div class="table-card anim-3" id="doctorTable">
            <!-- Toolbar -->
            <div class="table-toolbar">
              <h2>Doctor Records</h2>
              <span class="count-pill" id="doctorCount">0 doctors</span>

              <!-- Live search -->
              <div class="toolbar-search">
                <span class="s-icon">🔍</span>
                <input
                  type="text"
                  id="tableSearch"
                  placeholder="Search by name, dept…"
                  oninput="filterTable(this.value)" />
              </div>

              <!-- Department filter -->
              <select
                class="form-control btn-sm"
                id="deptFilter"
                style="width: auto; padding: 7px 14px; border-radius: 30px"
                onchange="
                  filterTable(document.getElementById('tableSearch').value)
                ">
                <option value="">All Departments</option>
              </select>

              <button
                class="btn btn-ghost btn-sm"
                onclick="alert('Export coming soon!')">
                ⬇️ Export
              </button>
            </div>

            <!-- Table -->
            <div class="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Doctor ID</th>
                    <th>Name</th>
                    <th>Specialization</th>
                    <th class="hide-mobile">Department</th>
                    <th class="hide-mobile">Experience</th>
                    <th class="hide-mobile">Phone</th>
                    <th class="hide-mobile">Email</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <!-- Rows injected by JS -->
                <tbody id="doctorTableBody"></tbody>
              </table>
            </div>
          </div>
          <!-- /table-card -->
        </main>
      </div>
      <!-- /main-content -->
    </div>
    <!-- /app-shell -->

    <!-- ═══════════════════════════════════════════════════════════
     EDIT DOCTOR MODAL
══════════════════════════════════════════════════════════════ -->
    <div class="modal-overlay" id="editDoctorModal">
      <div class="modal">
        <div class="modal-header">
          <h3>✏️ Edit Doctor Record</h3>
          <button class="modal-close">✕</button>
        </div>

        <div class="modal-body">
          <form id="editDoctorForm" novalidate>
            <!-- Hidden index to know which record to update -->
            <input type="hidden" id="eIndex" />

            <div class="form-row">
              <div class="form-group">
                <label for="eDoctorId">Doctor ID</label>
                <input
                  type="text"
                  id="eDoctorId"
                  class="form-control"
                  readonly />
              </div>
              <div class="form-group">
                <label for="eName"
                  >Full Name <span style="color: var(--danger)">*</span></label
                >
                <input type="text" id="eName" class="form-control" required />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="eSpec"
                  >Specialization
                  <span style="color: var(--danger)">*</span></label
                >
                <select id="eSpec" class="form-control" required>
                  <option>Cardiologist</option>
                  <option>Neurologist</option>
                  <option>Pediatrician</option>
                  <option>Orthopedic Surgeon</option>
                  <option>General Physician</option>
                  <option>Dermatologist</option>
                  <option>Gynecologist</option>
                  <option>Ophthalmologist</option>
                  <option>Psychiatrist</option>
                  <option>Radiologist</option>
                  <option>Oncologist</option>
                  <option>ENT Specialist</option>
                </select>
              </div>
              <div class="form-group">
                <label for="eDept"
                  >Department <span style="color: var(--danger)">*</span></label
                >
                <select id="eDept" class="form-control" required>
                  <option>Cardiology</option>
                  <option>Neurology</option>
                  <option>Pediatrics</option>
                  <option>Orthopedics</option>
                  <option>General Medicine</option>
                  <option>Dermatology</option>
                  <option>Gynecology</option>
                  <option>Ophthalmology</option>
                  <option>Psychiatry</option>
                  <option>Radiology</option>
                  <option>Oncology</option>
                  <option>ENT</option>
                </select>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="ePhone"
                  >Phone <span style="color: var(--danger)">*</span></label
                >
                <input type="tel" id="ePhone" class="form-control" required />
              </div>
              <div class="form-group">
                <label for="eEmail"
                  >Email <span style="color: var(--danger)">*</span></label
                >
                <input type="email" id="eEmail" class="form-control" required />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="eAvail">Availability</label>
                <select id="eAvail" class="form-control">
                  <option value="available">Available</option>
                  <option value="busy">Busy</option>
                  <option value="off">Off Duty</option>
                </select>
              </div>
              <div class="form-group">
                <label for="eExp">Experience (yrs)</label>
                <input
                  type="number"
                  id="eExp"
                  class="form-control"
                  min="0"
                  max="60" />
              </div>
            </div>

            <div class="form-group">
              <label for="eQual">Qualification</label>
              <input type="text" id="eQual" class="form-control" />
            </div>
          </form>
        </div>

        <div class="modal-footer">
          <button class="btn btn-ghost" onclick="closeModal('editDoctorModal')">
            Cancel
          </button>
          <button
            class="btn btn-primary"
            onclick="document.getElementById('editDoctorForm').requestSubmit()">
            💾 Save Changes
          </button>
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════════════════
     DELETE CONFIRMATION DIALOG
══════════════════════════════════════════════════════════════ -->
    <div class="del-confirm" id="deleteConfirm">
      <div class="del-box">
        <div class="del-icon">🗑️</div>
        <h3>Remove Doctor?</h3>
        <p id="deleteConfirmText">
          Are you sure you want to permanently remove this doctor record?
        </p>
        <div class="del-actions">
          <button
            class="btn btn-ghost"
            onclick="
              document
                .getElementById('deleteConfirm')
                .classList.remove('active')
            ">
            Cancel
          </button>
          <button class="btn btn-danger" id="confirmDeleteBtn">
            Yes, Remove
          </button>
        </div>
      </div>
    </div>

    <!-- Shared JS -->
    <script src="js/app.js"></script>

    <!-- ─────────────────────────────────────────────────────────
     DOCTORS PAGE — JavaScript
────────────────────────────────────────────────────────── -->
    <script>
      const API_URL = "http://localhost:5000";
      async function renderDoctors() {
        try {
          const response = await fetch(`${API_URL}/doctors`);

          const doctors = await response.json();

          const tbody = document.getElementById("doctorTableBody");

          tbody.innerHTML = "";

          doctors.forEach((doctor) => {
            const row = document.createElement("tr");

            row.innerHTML = `

<td>${doctor.doctor_id}</td>

<td>${doctor.doctor_name}</td>

<td>${doctor.specialization}</td>

<td>${doctor.department_id}</td>

<td>-</td>

<td>${doctor.phone}</td>

<td>${doctor.email}</td>

<td>Available</td>

<td>

  <button
    class="btn-icon btn-danger"
    onclick="deleteDoctor(${doctor.doctor_id})">
    🗑️
  </button>

</td>
`;

            tbody.appendChild(row);
          });
        } catch (error) {
          console.log(error);
        }
      }
      document
        .getElementById("doctorForm")
        .addEventListener("submit", async function (e) {
          e.preventDefault();

          const doctor_name = document.getElementById("fName").value;

          const specialization = document.getElementById("fSpec").value;

          const phone = document.getElementById("fPhone").value;

          const email = document.getElementById("fEmail").value;

          const department_id = document.getElementById("fDept").value;

          const doctorData = {
            doctor_name,
            specialization,
            phone,
            email,
            department_id,
          };

          try {
            const response = await fetch(`${API_URL}/add-doctor`, {
              method: "POST",

              headers: {
                "Content-Type": "application/json",
              },

              body: JSON.stringify(doctorData),
            });

            const result = await response.text();

            alert(result);

            document.getElementById("doctorForm").reset();

            renderDoctors();
          } catch (error) {
            console.log(error);
          }
        });

      async function deleteDoctor(id) {
        const confirmDelete = confirm("Delete this doctor?");

        if (!confirmDelete) return;

        try {
          const response = await fetch(`${API_URL}/delete-doctor/${id}`, {
            method: "DELETE",
          });

          const result = await response.text();

          alert(result);

          renderDoctors();
        } catch (error) {
          console.log(error);
        }
      }
      /* Which record is pending deletion */
      let pendingDeleteIndex = null;

      /* ══════════════════════════════════════════════════════════
        

    

      

     
      /* ══════════════════════════════════════════════════════════
         6. FORM COLLAPSE / EXPAND TOGGLE
      ══════════════════════════════════════════════════════════ */
      function toggleForm() {
        const body = document.getElementById("formCollapsible");
        const btn = document.getElementById("formToggleBtn");
        const isHidden = body.classList.contains("hidden");

        if (isHidden) {
          body.classList.remove("hidden");
          btn.classList.remove("collapsed");
          btn.innerHTML = `<i class="arrow">▼</i> Hide Form`;
        } else {
          body.classList.add("hidden");
          btn.classList.add("collapsed");
          btn.innerHTML = `<i class="arrow">▼</i> Show Form`;
        }
      }

      /* ══════════════════════════════════════════════════════════
         8. RESET REGISTRATION FORM
      ══════════════════════════════════════════════════════════ */
      function resetForm() {
        document.getElementById("doctorForm").reset();
        hideFeedback();
      }

      /* ══════════════════════════════════════════════════════════
         9. FEEDBACK HELPERS
      ══════════════════════════════════════════════════════════ */
      function showFeedback(msg, type) {
        const el = document.getElementById("formFeedback");
        el.textContent = msg;
        el.style.display = "block";
        el.style.background = type === "success" ? "#e8f8f0" : "#fdecea";
        el.style.color =
          type === "success" ? "var(--success)" : "var(--danger)";
        el.style.border =
          type === "success" ? "1.5px solid #b7e5cc" : "1.5px solid #f5c6c2";
      }

      function hideFeedback() {
        document.getElementById("formFeedback").style.display = "none";
      }

      document
        .getElementById("confirmDeleteBtn")
        .addEventListener("click", () => {
          if (pendingDeleteIndex === null) return;
          doctors.splice(pendingDeleteIndex, 1);
          pendingDeleteIndex = null;
          document.getElementById("deleteConfirm").classList.remove("active");
          rebuildDeptFilter();
          renderTable(document.getElementById("tableSearch").value);
        });

      /* Close delete dialog with Escape key */
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          document.getElementById("deleteConfirm").classList.remove("active");
          pendingDeleteIndex = null;
        }
      });

      /* Close delete dialog by clicking the backdrop */
      document
        .getElementById("deleteConfirm")
        .addEventListener("click", function (e) {
          if (e.target === this) {
            this.classList.remove("active");
            pendingDeleteIndex = null;
          }
        });

      /* ══════════════════════════════════════════════════════════
         15. INITIALISE PAGE
      ══════════════════════════════════════════════════════════ */
      document.addEventListener("DOMContentLoaded", () => {
        renderDoctors();
      });
    </script>
  </body>
</html>

```

---

### <a id="📄-index-html"></a>📄 `index.html`

**File Info:**
- **Size**: 1.98 KB
- **Extension**: `.html`
- **Language**: `html`
- **Location**: `index.html`
- **Relative Path**: `root`
- **Created**: 2026-05-12 05:36:49 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-05-18 12:02:22 (Asia/Calcutta / GMT+06:30)
- **MD5**: `173df865dfbda2e33cccfcaf50dd5a1b`
- **SHA256**: `c85ad2c30b41458c8f560e386372017a8332280634bfe18efb5748eedb3acf0d`
- **Encoding**: ASCII

**File code content:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Hospital Management System</title>

    <link rel="stylesheet" href="css/style.css" />

    <style>
      body {
        display: flex;
        align-items: center;
        justify-content: center;

        min-height: 100vh;

        background: linear-gradient(135deg, #0d3b66, #1a73e8);

        color: white;

        font-family: "DM Sans", sans-serif;

        overflow: hidden;
      }

      .welcome-card {
        text-align: center;

        background: rgba(255, 255, 255, 0.1);

        padding: 50px;

        border-radius: 20px;

        backdrop-filter: blur(10px);

        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);

        animation: fadeIn 1s ease;
      }

      .welcome-card h1 {
        font-size: 42px;

        margin-bottom: 10px;
      }

      .welcome-card p {
        font-size: 16px;

        opacity: 0.9;

        margin-bottom: 30px;
      }

      .loader {
        width: 50px;
        height: 50px;

        border: 5px solid rgba(255, 255, 255, 0.3);

        border-top: 5px solid white;

        border-radius: 50%;

        margin: auto;

        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        100% {
          transform: rotate(360deg);
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }

        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    </style>
  </head>

  <body>
    <div class="welcome-card">
      <h1>🏥 Hospital Management System</h1>

      <p>Loading Secure Portal...</p>

      <div class="loader"></div>
    </div>

    <script>
      setTimeout(() => {
        window.location.href = "login.html";
      }, 2500);
    </script>
  </body>
</html>

```

---

### <a id="📄-login-html"></a>📄 `login.html`

**File Info:**
- **Size**: 27.71 KB
- **Extension**: `.html`
- **Language**: `html`
- **Location**: `login.html`
- **Relative Path**: `root`
- **Created**: 2026-05-12 05:36:55 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-05-19 13:22:33 (Asia/Calcutta / GMT+06:30)
- **MD5**: `f02645f0833b2ffaa6239c7e49fe5926`
- **SHA256**: `c4cb31b3e203edf62d928f9c7dcefcf4cd9c65d529632209e40e8099c34fea49`
- **Encoding**: UTF-8

**File code content:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login — MedCare HMS</title>

    <!-- Shared stylesheet from the project -->
    <link rel="stylesheet" href="css/style.css" />

    <!-- ─────────────────────────────────────────────────────────
       LOGIN PAGE — page-specific styles
       These only apply to login.html so they live here,
       not in the shared style.css
  ────────────────────────────────────────────────────────── -->
    <style>
      /* ── Override body background for login page ── */
      body {
        background: var(--pale-blue);
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        padding: 20px;
      }

      /* ── Outer wrapper — the split-screen card ─────────────
       Two columns side by side:
       Left  = branding / illustration panel
       Right = login form panel
    ────────────────────────────────────────────────────── */
      .login-card {
        width: 100%;
        max-width: 960px;
        min-height: 580px;
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-lg);
        display: grid;
        grid-template-columns: 1fr 1fr; /* equal halves */
        overflow: hidden;

        /* Animate the whole card sliding in on load */
        opacity: 0;
        transform: translateY(30px);
        animation: fadeSlideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.1s forwards;
      }

      /* ══════════════════════════════════════════════════════
       LEFT PANEL — branding & illustration
    ══════════════════════════════════════════════════════ */
      .login-left {
        background: linear-gradient(
          150deg,
          var(--darker-blue) 0%,
          var(--dark-blue) 50%,
          #1a5a9a 100%
        );
        color: var(--white);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 48px 40px;
        position: relative;
        overflow: hidden;
        text-align: center;
      }

      /* Decorative background circles (pure CSS) */
      .login-left::before,
      .login-left::after {
        content: "";
        position: absolute;
        border-radius: 50%;
        pointer-events: none;
      }

      /* Large circle — top right */
      .login-left::before {
        width: 320px;
        height: 320px;
        top: -100px;
        right: -100px;
        background: rgba(59, 159, 209, 0.15);
      }

      /* Small circle — bottom left */
      .login-left::after {
        width: 200px;
        height: 200px;
        bottom: -70px;
        left: -70px;
        background: rgba(26, 115, 232, 0.12);
      }

      /* Extra decorative ring — mid panel */
      .deco-ring {
        position: absolute;
        width: 160px;
        height: 160px;
        border-radius: 50%;
        border: 2px solid rgba(255, 255, 255, 0.06);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
      }

      /* Hospital cross / logo icon */
      .brand-emblem {
        width: 80px;
        height: 80px;
        background: linear-gradient(
          135deg,
          var(--mid-blue),
          var(--accent-blue)
        );
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 38px;
        box-shadow: 0 8px 32px rgba(26, 115, 232, 0.45);
        margin-bottom: 24px;
        position: relative;
        z-index: 1;

        /* Subtle pulse animation */
        animation: pulse 3s ease-in-out infinite;
      }

      @keyframes pulse {
        0%,
        100% {
          box-shadow: 0 8px 32px rgba(26, 115, 232, 0.45);
        }
        50% {
          box-shadow: 0 8px 48px rgba(26, 115, 232, 0.75);
        }
      }

      /* Hospital name */
      .login-left h1 {
        font-family: var(--font-display);
        font-size: 32px;
        font-weight: 700;
        letter-spacing: 0.5px;
        margin-bottom: 10px;
        position: relative;
        z-index: 1;
      }

      /* Tagline under name */
      .login-left .tagline {
        font-size: 14px;
        color: rgba(255, 255, 255, 0.6);
        line-height: 1.6;
        max-width: 260px;
        position: relative;
        z-index: 1;
      }

      /* Divider line between tagline and feature list */
      .left-divider {
        width: 50px;
        height: 2px;
        background: rgba(59, 159, 209, 0.6);
        border-radius: 2px;
        margin: 24px auto;
        position: relative;
        z-index: 1;
      }

      /* Feature / highlight list */
      .feature-list {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 12px;
        text-align: left;
        position: relative;
        z-index: 1;
      }

      .feature-list li {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 13px;
        color: rgba(255, 255, 255, 0.75);
      }

      /* Icon chip for each feature */
      .feature-list li .feat-icon {
        width: 28px;
        height: 28px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        flex-shrink: 0;
      }

      /* ══════════════════════════════════════════════════════
       RIGHT PANEL — login form
    ══════════════════════════════════════════════════════ */
      .login-right {
        background: var(--white);
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 48px 44px;
      }

      /* "Welcome back" heading */
      .login-right .form-heading {
        margin-bottom: 6px;
      }

      .login-right .form-heading h2 {
        font-family: var(--font-display);
        font-size: 28px;
        font-weight: 700;
        color: var(--dark-blue);
      }

      .login-right .form-heading p {
        font-size: 14px;
        color: var(--text-light);
        margin-top: 4px;
      }

      /* Separator bar under heading */
      .form-divider {
        width: 40px;
        height: 3px;
        background: linear-gradient(90deg, var(--accent-blue), var(--mid-blue));
        border-radius: 2px;
        margin: 16px 0 28px;
      }

      /* ── Input wrapper — icon + field ───────────────────── */
      .input-wrapper {
        position: relative;
      }

      /* Icon inside input on the left */
      .input-wrapper .input-icon {
        position: absolute;
        left: 14px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 16px;
        color: var(--text-light);
        pointer-events: none; /* don't block clicks */
        transition: var(--transition);
      }

      /* Shift input text so it doesn't overlap the icon */
      .input-wrapper .form-control {
        padding-left: 42px;
      }

      /* When the input is focused, colour the icon */
      .input-wrapper:focus-within .input-icon {
        color: var(--accent-blue);
      }

      /* Password toggle button (👁 / 🙈) */
      .pw-toggle {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        cursor: pointer;
        font-size: 16px;
        color: var(--text-light);
        padding: 4px;
        transition: var(--transition);
      }

      .pw-toggle:hover {
        color: var(--accent-blue);
      }

      /* ── Remember me + Forgot password row ─────────────── */
      .form-extras {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 24px;
        flex-wrap: wrap;
        gap: 8px;
      }

      /* Custom styled checkbox */
      .remember-label {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        color: var(--text-mid);
        cursor: pointer;
        user-select: none;
      }

      .remember-label input[type="checkbox"] {
        appearance: none;
        width: 16px;
        height: 16px;
        border: 2px solid var(--border);
        border-radius: 4px;
        background: var(--white);
        cursor: pointer;
        transition: var(--transition);
        flex-shrink: 0;
        position: relative;
      }

      /* Checked state */
      .remember-label input[type="checkbox"]:checked {
        background: var(--accent-blue);
        border-color: var(--accent-blue);
      }

      /* Checkmark drawn with pseudo-element */
      .remember-label input[type="checkbox"]:checked::after {
        content: "";
        position: absolute;
        top: 1px;
        left: 4px;
        width: 5px;
        height: 9px;
        border: 2px solid var(--white);
        border-top: none;
        border-left: none;
        transform: rotate(45deg);
      }

      /* Forgot password link */
      .forgot-link {
        font-size: 13px;
        color: var(--accent-blue);
        font-weight: 600;
        cursor: pointer;
        transition: var(--transition);
      }

      .forgot-link:hover {
        color: var(--dark-blue);
        text-decoration: underline;
      }

      /* ── Login button — full width ──────────────────────── */
      .btn-login {
        width: 100%;
        justify-content: center;
        padding: 13px 20px;
        font-size: 15px;
        border-radius: var(--radius-sm);
        letter-spacing: 0.3px;
        position: relative;
        overflow: hidden;
      }

      /* Ripple / shimmer effect on hover */
      .btn-login::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(255, 255, 255, 0.15),
          transparent
        );
        transform: translateX(-100%);
        transition: transform 0.5s ease;
      }

      .btn-login:hover::after {
        transform: translateX(100%);
      }

      /* Inline spinner shown while "logging in" */
      .btn-login .spinner {
        display: none; /* hidden until JS shows it */
        width: 16px;
        height: 16px;
        border: 2px solid rgba(255, 255, 255, 0.4);
        border-top-color: var(--white);
        border-radius: 50%;
        animation: spin 0.7s linear infinite;
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }

      /* ── Error / success message box ───────────────────── */
      .form-message {
        display: none; /* shown by JS */
        padding: 11px 14px;
        border-radius: var(--radius-sm);
        font-size: 13px;
        font-weight: 500;
        margin-bottom: 20px;
        border: 1.5px solid transparent;
      }

      .form-message.error {
        background: #fdecea;
        color: var(--danger);
        border-color: #f5c6c2;
      }

      .form-message.success {
        background: #e8f8f0;
        color: var(--success);
        border-color: #b7e5cc;
      }

      /* ── Footer link — sign up / contact ───────────────── */
      .login-footer {
        margin-top: 28px;
        padding-top: 20px;
        border-top: 1px solid var(--border);
        text-align: center;
        font-size: 13px;
        color: var(--text-light);
      }

      .login-footer a {
        color: var(--accent-blue);
        font-weight: 600;
      }

      .login-footer a:hover {
        text-decoration: underline;
      }

      /* ── Input shake animation on wrong password ────────── */
      @keyframes shake {
        0%,
        100% {
          transform: translateX(0);
        }
        20% {
          transform: translateX(-8px);
        }
        40% {
          transform: translateX(8px);
        }
        60% {
          transform: translateX(-6px);
        }
        80% {
          transform: translateX(6px);
        }
      }

      .shake {
        animation: shake 0.4s ease;
      }

      /* ── Responsive: stack panels vertically on mobile ─── */
      @media (max-width: 700px) {
        body {
          padding: 0;
          align-items: flex-start;
        }

        .login-card {
          grid-template-columns: 1fr; /* single column */
          border-radius: 0;
          min-height: 100vh;
          box-shadow: none;
        }

        /* Shrink left panel on mobile */
        .login-left {
          padding: 36px 28px 32px;
          min-height: auto;
        }

        .login-left h1 {
          font-size: 26px;
        }

        /* Hide feature list on very small screens */
        .feature-list {
          display: none;
        }
        .left-divider {
          display: none;
        }

        .login-right {
          padding: 36px 24px 40px;
        }
      }
    </style>
  </head>

  <body>
    <!-- ═══════════════════════════════════════════════════════════
     LOGIN CARD — Split screen layout
     Left panel:  branding / hospital info
     Right panel: login form
══════════════════════════════════════════════════════════════ -->
    <div class="login-card">
      <!-- ─────────────────────────────────────────────────────────
       LEFT PANEL — Branding & illustration
  ────────────────────────────────────────────────────────── -->
      <div class="login-left">
        <!-- Decorative ring (CSS circle in background) -->
        <div class="deco-ring"></div>

        <!-- Hospital logo / emblem -->
        <div class="brand-emblem">🏥</div>

        <!-- Hospital name -->
        <h1>MedCare HMS</h1>

        <!-- Short description -->
        <p class="tagline">
          Your complete hospital appointment &amp; patient management platform.
        </p>

        <!-- Decorative horizontal line -->
        <div class="left-divider"></div>

        <!-- Feature highlights list -->
        <ul class="feature-list">
          <li>
            <span class="feat-icon">📅</span>
            Smart appointment scheduling
          </li>
          <li>
            <span class="feat-icon">🧑‍⚕️</span>
            Patient records &amp; history
          </li>
          <li>
            <span class="feat-icon">👨‍⚕️</span>
            Doctor availability management
          </li>
          <li>
            <span class="feat-icon">💳</span>
            Billing &amp; invoicing system
          </li>
          <!-- <li>
            <span class="feat-icon">📊</span>
            Real-time dashboard analytics
          </li> -->
        </ul>
      </div>
      <!-- /login-left -->

      <!-- ─────────────────────────────────────────────────────────
       RIGHT PANEL — Login form
  ────────────────────────────────────────────────────────── -->
      <div class="login-right">
        <!-- Heading -->
        <div class="form-heading">
          <h2>Welcome Back 👋</h2>
          <p>Sign in to your MedCare account to continue.</p>
        </div>

        <!-- Blue accent line under heading -->
        <div class="form-divider"></div>

        <!-- ── Error / success message (shown by JS) ────────── -->
        <div class="form-message" id="formMessage"></div>

        <!-- ════════════════════════════════════════════════════
         LOGIN FORM
         novalidate = we handle validation ourselves in JS
    ═══════════════════════════════════════════════════════ -->
        <form id="loginForm" novalidate>
          <!-- Email field -->
          <div class="form-group">
            <label for="loginEmail">Email Address</label>
            <div class="input-wrapper">
              <span class="input-icon">✉️</span>
              <input
                type="email"
                id="email"
                class="form-control"
                placeholder="you@medcare.com"
                autocomplete="email" />
            </div>
          </div>

          <!-- Password field -->
          <div class="form-group">
            <label for="loginPassword">Password</label>
            <div class="input-wrapper">
              <span class="input-icon">🔒</span>
              <input
                type="password"
                id="password"
                class="form-control"
                placeholder="Enter your password"
                autocomplete="current-password" />
              <!-- Toggle password visibility -->
              <!-- <button
                type="button"
                class="pw-toggle"
                id="pwToggle"
                aria-label="Toggle password visibility"
                title="Show / hide password">
                👁️
              </button> -->
            </div>
          </div>

          <!-- Remember Me + Forgot Password -->
          <div class="form-extras">
            <!-- Remember me checkbox -->
            <label class="remember-label">
              <input type="checkbox" id="rememberMe" />
              Remember me for 30 days
            </label>

            <!-- Forgot password — opens modal -->
            <!-- <span
              class="forgot-link"
              onclick="openModal('forgotPasswordModal')">
              Forgot password?
            </span> -->
          </div>

          <!-- Login submit button -->
          <button type="submit" class="btn btn-primary btn-login" id="loginBtn">
            <!-- Spinner (hidden until loading) -->
            <span class="spinner" id="loginSpinner"></span>
            <!-- Button text -->
            <span id="loginBtnText">Sign In →</span>
          </button>
        </form>
        <!-- /loginForm -->

        <!-- Footer: contact admin link -->
        <div class="login-footer">
          New staff member?
          <a href="mailto:admin@gmail.com">Contact your administrator</a>
          to get access.
        </div>
      </div>
      <!-- /login-right -->
    </div>
    <!-- /login-card -->

    <!-- ═══════════════════════════════════════════════════════════
     FORGOT PASSWORD MODAL
     Opened by clicking "Forgot password?" link.
     Uses the shared modal system from app.js.
══════════════════════════════════════════════════════════════ -->
    <div class="modal-overlay" id="forgotPasswordModal">
      <div class="modal">
        <!-- Modal header -->
        <div class="modal-header">
          <h3>🔑 Reset Password</h3>
          <button class="modal-close" aria-label="Close">✕</button>
        </div>

        <!-- Modal body -->
        <div class="modal-body">
          <p
            style="
              font-size: 14px;
              color: var(--text-mid);
              margin-bottom: 20px;
              line-height: 1.6;
            ">
            Enter the email address associated with your account and we'll send
            you a password reset link.
          </p>

          <form id="forgotForm" novalidate>
            <div class="form-group" style="margin-bottom: 0">
              <label for="forgotEmail">Email Address</label>
              <div class="input-wrapper">
                <span class="input-icon">✉️</span>
                <input
                  type="email"
                  id="forgotEmail"
                  class="form-control"
                  placeholder="you@medcare.com" />
              </div>
            </div>
          </form>
        </div>

        <!-- Modal footer -->
        <div class="modal-footer">
          <button
            class="btn btn-ghost"
            onclick="closeModal('forgotPasswordModal')">
            Cancel
          </button>
          <button
            class="btn btn-primary"
            id="forgotSubmitBtn"
            onclick="handleForgotPassword()">
            Send Reset Link
          </button>
        </div>
      </div>
    </div>
    <!-- /forgotPasswordModal -->

    <!-- ── Shared JavaScript ─────────────────────────────────── -->
    <script src="js/app.js"></script>

    <!-- ─────────────────────────────────────────────────────────
     LOGIN PAGE — page-specific JavaScript
     Kept separate from app.js since it only applies here.
────────────────────────────────────────────────────────── -->
    <script>
      const API_URL = "https://hospital-management-system-ocss.onrender.com";

      /* ── Helpers to show / hide the message box ─────────── */

      /**
       * Show a message above the form.
       * @param {string} text    - message to display
       * @param {string} type    - "error" | "success"
       */
      function showMessage(text, type) {
        const box = document.getElementById("formMessage");
        box.textContent = text;
        box.className = `form-message ${type}`;
        box.style.display = "block";
      }

      /** Hide the message box */
      function hideMessage() {
        const box = document.getElementById("formMessage");
        box.style.display = "none";
      }

      /* ── Password visibility toggle ─────────────────────── */
      // document
      //   .getElementById("pwToggle")
      //   .addEventListener("click", function () {
      //     const pwField = document.getElementById("loginPassword");

      //     if (pwField.type === "password") {
      //       pwField.type = "text"; /* show password */
      //       this.textContent = "🙈"; /* closed eye emoji */
      //     } else {
      //       pwField.type = "password"; /* hide password */
      //       this.textContent = "👁️"; /* open eye emoji */
      //     }
      //   });

      document
        .getElementById("loginForm")
        .addEventListener("submit", async function (e) {
          e.preventDefault();

          const email = document.getElementById("email").value;

          const password = document.getElementById("password").value;

          try {
            const response = await fetch(`${API_URL}/login`, {
              method: "POST",

              headers: {
                "Content-Type": "application/json",
              },

              body: JSON.stringify({
                email,
                password,
              }),
            });

            const data = await response.json();

            if (data.success) {
              alert("Login Successful");

              // Save logged-in user
              localStorage.setItem("loggedInUser", JSON.stringify(data.user));

              // Redirect
              window.location.href = "dashboard.html";
            } else {
              alert(data.message);
            }
          } catch (error) {
            console.log(error);

            alert("Server Error");
          }
        });

      /* ── Forgot password modal handler ──────────────────── */
      function handleForgotPassword() {
        const email = document.getElementById("forgotEmail").value.trim();

        if (!email) {
          alert("⚠️ Please enter your email address first.");
          return;
        }

        /* Simulate sending reset email */
        const submitBtn = document.getElementById("forgotSubmitBtn");
        submitBtn.textContent = "Sending…";
        submitBtn.disabled = true;

        setTimeout(() => {
          closeModal("forgotPasswordModal");

          /* Show confirmation message on the main form */
          showMessage(
            `📧 A password reset link has been sent to ${email}`,
            "success",
          );

          /* Reset the forgot form */
          document.getElementById("forgotEmail").value = "";
          submitBtn.textContent = "Send Reset Link";
          submitBtn.disabled = false;
        }, 1500);
      }

      /* ── Auto-fill email if "Remember me" was checked before */
      window.addEventListener("DOMContentLoaded", () => {
        const saved = localStorage.getItem("hms_remembered_email");
        if (saved) {
          document.getElementById("loginEmail").value = saved;
          document.getElementById("rememberMe").checked = true;
          /* Move focus to password field since email is already filled */
          document.getElementById("loginPassword").focus();
        }
      });

      /* ── Hint text below form (for demo purposes) ────────── */
      /* Shows the demo credentials so testers know what to use */
      const hint = document.createElement("p");
      hint.style.cssText = `
    margin-top: 14px;
    font-size: 12px;
    color: var(--text-light);
    text-align: center;
    background: var(--pale-blue);
    padding: 8px 12px;
    border-radius: var(--radius-sm);
    border: 1px dashed var(--border);
  `;
      hint.innerHTML = `
    🧪 <strong>Demo credentials:</strong>
    admin@gmail.com &nbsp;/&nbsp; admin123
  `;
      document.getElementById("loginForm").appendChild(hint);
    </script>
  </body>
</html>

```

---

### <a id="📄-package-lock-json"></a>📄 `package-lock.json`

**File Info:**
- **Size**: 33.58 KB
- **Extension**: `.json`
- **Language**: `json`
- **Location**: `package-lock.json`
- **Relative Path**: `root`
- **Created**: 2026-05-12 08:49:49 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-05-12 08:49:49 (Asia/Calcutta / GMT+06:30)
- **MD5**: `65659a0d95331ccbd8b40fb801e78943`
- **SHA256**: `50db4eb55cbd27c7dc81bde83a19652df79cd361fdeeea8059567476cded2a22`
- **Encoding**: ASCII

**File code content:**

```json
{
  "name": "hospital-management",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "hospital-management",
      "version": "1.0.0",
      "license": "ISC",
      "dependencies": {
        "body-parser": "^2.2.2",
        "cors": "^2.8.6",
        "express": "^5.2.1",
        "mysql2": "^3.22.3"
      }
    },
    "node_modules/@types/node": {
      "version": "25.7.0",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-25.7.0.tgz",
      "integrity": "sha512-z+pdZyxE+RTQE9AcboAZCb4otwcrvgHD+GlBpPgn0emDVt0ohrTMhAwlr2Wd9nZ+nihhYFxO2pThz3C5qSu2Eg==",
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "undici-types": "~7.21.0"
      }
    },
    "node_modules/accepts": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/accepts/-/accepts-2.0.0.tgz",
      "integrity": "sha512-5cvg6CtKwfgdmVqY1WIiXKc3Q1bkRqGLi+2W/6ao+6Y7gu/RCwRuAhGEzh5B4KlszSuTLgZYuqFqo5bImjNKng==",
      "license": "MIT",
      "dependencies": {
        "mime-types": "^3.0.0",
        "negotiator": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/aws-ssl-profiles": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/aws-ssl-profiles/-/aws-ssl-profiles-1.1.2.tgz",
      "integrity": "sha512-NZKeq9AfyQvEeNlN0zSYAaWrmBffJh3IELMZfRpJVWgrpEbtEpnjvzqBPf+mxoI287JohRDoa+/nsfqqiZmF6g==",
      "license": "MIT",
      "engines": {
        "node": ">= 6.0.0"
      }
    },
    "node_modules/body-parser": {
      "version": "2.2.2",
      "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-2.2.2.tgz",
      "integrity": "sha512-oP5VkATKlNwcgvxi0vM0p/D3n2C3EReYVX+DNYs5TjZFn/oQt2j+4sVJtSMr18pdRr8wjTcBl6LoV+FUwzPmNA==",
      "license": "MIT",
      "dependencies": {
        "bytes": "^3.1.2",
        "content-type": "^1.0.5",
        "debug": "^4.4.3",
        "http-errors": "^2.0.0",
        "iconv-lite": "^0.7.0",
        "on-finished": "^2.4.1",
        "qs": "^6.14.1",
        "raw-body": "^3.0.1",
        "type-is": "^2.0.1"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/bytes": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
      "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/call-bind-apply-helpers": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
      "integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/call-bound": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/call-bound/-/call-bound-1.0.4.tgz",
      "integrity": "sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "get-intrinsic": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/content-disposition": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-1.1.0.tgz",
      "integrity": "sha512-5jRCH9Z/+DRP7rkvY83B+yGIGX96OYdJmzngqnw2SBSxqCFPd0w2km3s5iawpGX8krnwSGmF0FW5Nhr0Hfai3g==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/content-type": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.5.tgz",
      "integrity": "sha512-nTjqfcBFEipKdXCv4YDQWCfmcLZKm81ldF0pAopTvyrFGVbcR6P/VAAd5G7N+0tTr8QqiU0tFadD6FK4NtJwOA==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/cookie": {
      "version": "0.7.2",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.7.2.tgz",
      "integrity": "sha512-yki5XnKuf750l50uGTllt6kKILY4nQ1eNIQatoXEByZ5dWgnKqbnqmTrBE5B4N7lrMJKQ2ytWMiTO2o0v6Ew/w==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/cookie-signature": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.2.2.tgz",
      "integrity": "sha512-D76uU73ulSXrD1UXF4KE2TMxVVwhsnCgfAyTg9k8P6KGZjlXKrOLe4dJQKI3Bxi5wjesZoFXJWElNWBjPZMbhg==",
      "license": "MIT",
      "engines": {
        "node": ">=6.6.0"
      }
    },
    "node_modules/cors": {
      "version": "2.8.6",
      "resolved": "https://registry.npmjs.org/cors/-/cors-2.8.6.tgz",
      "integrity": "sha512-tJtZBBHA6vjIAaF6EnIaq6laBBP9aq/Y3ouVJjEfoHbRBcHBAHYcMh/w8LDrk2PvIMMq8gmopa5D4V8RmbrxGw==",
      "license": "MIT",
      "dependencies": {
        "object-assign": "^4",
        "vary": "^1"
      },
      "engines": {
        "node": ">= 0.10"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/denque": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/denque/-/denque-2.1.0.tgz",
      "integrity": "sha512-HVQE3AAb/pxF8fQAoiqpvg9i3evqug3hoiwakOyZAwJm+6vZehbkYXZ0l4JxS+I3QxM97v5aaRNhj8v5oBhekw==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/depd": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
      "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/dunder-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
      "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.1",
        "es-errors": "^1.3.0",
        "gopd": "^1.2.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/ee-first": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
      "integrity": "sha512-WMwm9LhRUo+WUaRN+vRuETqG89IgZphVSNkdFgeb6sS/E4OrDIN7t48CAewSHXc6C8lefD8KKfr5vY61brQlow==",
      "license": "MIT"
    },
    "node_modules/encodeurl": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-2.0.0.tgz",
      "integrity": "sha512-Q0n9HRi4m6JuGIV1eFlmvJB7ZEVxu93IrMyiMsGC0lrMJMWzRgx6WGquyfQgZVb31vhGgXnfmPNNXmxnOkRBrg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/es-define-property": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
      "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
      "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-object-atoms": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.1.tgz",
      "integrity": "sha512-FGgH2h8zKNim9ljj7dankFPcICIK9Cp5bm+c2gQSYePhpaG5+esrLODihIorn+Pe6FGJzWhXQotPv73jTaldXA==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/escape-html": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
      "integrity": "sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow==",
      "license": "MIT"
    },
    "node_modules/etag": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
      "integrity": "sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/express": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/express/-/express-5.2.1.tgz",
      "integrity": "sha512-hIS4idWWai69NezIdRt2xFVofaF4j+6INOpJlVOLDO8zXGpUVEVzIYk12UUi2JzjEzWL3IOAxcTubgz9Po0yXw==",
      "license": "MIT",
      "dependencies": {
        "accepts": "^2.0.0",
        "body-parser": "^2.2.1",
        "content-disposition": "^1.0.0",
        "content-type": "^1.0.5",
        "cookie": "^0.7.1",
        "cookie-signature": "^1.2.1",
        "debug": "^4.4.0",
        "depd": "^2.0.0",
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "etag": "^1.8.1",
        "finalhandler": "^2.1.0",
        "fresh": "^2.0.0",
        "http-errors": "^2.0.0",
        "merge-descriptors": "^2.0.0",
        "mime-types": "^3.0.0",
        "on-finished": "^2.4.1",
        "once": "^1.4.0",
        "parseurl": "^1.3.3",
        "proxy-addr": "^2.0.7",
        "qs": "^6.14.0",
        "range-parser": "^1.2.1",
        "router": "^2.2.0",
        "send": "^1.1.0",
        "serve-static": "^2.2.0",
        "statuses": "^2.0.1",
        "type-is": "^2.0.1",
        "vary": "^1.1.2"
      },
      "engines": {
        "node": ">= 18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/finalhandler": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-2.1.1.tgz",
      "integrity": "sha512-S8KoZgRZN+a5rNwqTxlZZePjT/4cnm0ROV70LedRHZ0p8u9fRID0hJUZQpkKLzro8LfmC8sx23bY6tVNxv8pQA==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.4.0",
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "on-finished": "^2.4.1",
        "parseurl": "^1.3.3",
        "statuses": "^2.0.1"
      },
      "engines": {
        "node": ">= 18.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/forwarded": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.2.0.tgz",
      "integrity": "sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/fresh": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/fresh/-/fresh-2.0.0.tgz",
      "integrity": "sha512-Rx/WycZ60HOaqLKAi6cHRKKI7zxWbJ31MhntmtwMoaTeF7XFH9hhBp8vITaMidfljRQ6eYWCKkaTK+ykVJHP2A==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/generate-function": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/generate-function/-/generate-function-2.3.1.tgz",
      "integrity": "sha512-eeB5GfMNeevm/GRYq20ShmsaGcmI81kIX2K9XQx5miC8KdHaC6Jm0qQ8ZNeGOi7wYB8OsdxKs+Y2oVuTFuVwKQ==",
      "license": "MIT",
      "dependencies": {
        "is-property": "^1.0.2"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz",
      "integrity": "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "function-bind": "^1.1.2",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
      "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/gopd": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
      "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
      "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/hasown": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.3.tgz",
      "integrity": "sha512-ej4AhfhfL2Q2zpMmLo7U1Uv9+PyhIZpgQLGT1F9miIGmiCJIoCgSmczFdrc97mWT4kVY72KA+WnnhJ5pghSvSg==",
      "license": "MIT",
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/http-errors": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.1.tgz",
      "integrity": "sha512-4FbRdAX+bSdmo4AUFuS0WNiPz8NgFt+r8ThgNWmlrjQjt1Q7ZR9+zTlce2859x4KSXrwIsaeTqDoKQmtP8pLmQ==",
      "license": "MIT",
      "dependencies": {
        "depd": "~2.0.0",
        "inherits": "~2.0.4",
        "setprototypeof": "~1.2.0",
        "statuses": "~2.0.2",
        "toidentifier": "~1.0.1"
      },
      "engines": {
        "node": ">= 0.8"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/iconv-lite": {
      "version": "0.7.2",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.7.2.tgz",
      "integrity": "sha512-im9DjEDQ55s9fL4EYzOAv0yMqmMBSZp6G0VvFyTMPKWxiSBHUj9NW/qqLmXUwXrrM7AvqSlTCfvqRb0cM8yYqw==",
      "license": "MIT",
      "dependencies": {
        "safer-buffer": ">= 2.1.2 < 3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "license": "ISC"
    },
    "node_modules/ipaddr.js": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
      "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/is-promise": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/is-promise/-/is-promise-4.0.0.tgz",
      "integrity": "sha512-hvpoI6korhJMnej285dSg6nu1+e6uxs7zG3BYAm5byqDsgJNWwxzM6z6iZiAgQR4TJ30JmBTOwqZUw3WlyH3AQ==",
      "license": "MIT"
    },
    "node_modules/is-property": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-property/-/is-property-1.0.2.tgz",
      "integrity": "sha512-Ks/IoX00TtClbGQr4TWXemAnktAQvYB7HzcCxDGqEZU6oCmb2INHuOoKxbtR+HFkmYWBKv/dOZtGRiAjDhj92g==",
      "license": "MIT"
    },
    "node_modules/long": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/long/-/long-5.3.2.tgz",
      "integrity": "sha512-mNAgZ1GmyNhD7AuqnTG3/VQ26o760+ZYBPKjPvugO8+nLbYfX6TVpJPseBvopbdY+qpZ/lKUnmEc1LeZYS3QAA==",
      "license": "Apache-2.0"
    },
    "node_modules/lru.min": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/lru.min/-/lru.min-1.1.4.tgz",
      "integrity": "sha512-DqC6n3QQ77zdFpCMASA1a3Jlb64Hv2N2DciFGkO/4L9+q/IpIAuRlKOvCXabtRW6cQf8usbmM6BE/TOPysCdIA==",
      "license": "MIT",
      "engines": {
        "bun": ">=1.0.0",
        "deno": ">=1.30.0",
        "node": ">=8.0.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wellwelwel"
      }
    },
    "node_modules/math-intrinsics": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
      "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/media-typer": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-1.1.0.tgz",
      "integrity": "sha512-aisnrDP4GNe06UcKFnV5bfMNPBUw4jsLGaWwWfnH3v02GnBuXX2MCVn5RbrWo0j3pczUilYblq7fQ7Nw2t5XKw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/merge-descriptors": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-2.0.0.tgz",
      "integrity": "sha512-Snk314V5ayFLhp3fkUREub6WtjBfPdCPY1Ln8/8munuLuiYhsABgBVWsozAG+MWMbVEvcdcpbi9R7ww22l9Q3g==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/mime-db": {
      "version": "1.54.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.54.0.tgz",
      "integrity": "sha512-aU5EJuIN2WDemCcAp2vFBfp/m4EAhWJnUNSSw0ixs7/kXbd6Pg64EmwJkNdFhB8aWt1sH2CTXrLxo/iAGV3oPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime-types": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-3.0.2.tgz",
      "integrity": "sha512-Lbgzdk0h4juoQ9fCKXW4by0UJqj+nOOrI9MJ1sSj4nI8aI2eo1qmvQEie4VD1glsS250n15LsWsYtCugiStS5A==",
      "license": "MIT",
      "dependencies": {
        "mime-db": "^1.54.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "license": "MIT"
    },
    "node_modules/mysql2": {
      "version": "3.22.3",
      "resolved": "https://registry.npmjs.org/mysql2/-/mysql2-3.22.3.tgz",
      "integrity": "sha512-uWWxvZSRvRhtBdh2CdcuK83YcOfPdmEeEYB069bAmPnV93QApDGVPuvCQOLjlh7tYHEWdgQPrn6kosDxHBVLkA==",
      "license": "MIT",
      "dependencies": {
        "aws-ssl-profiles": "^1.1.2",
        "denque": "^2.1.0",
        "generate-function": "^2.3.1",
        "iconv-lite": "^0.7.2",
        "long": "^5.3.2",
        "lru.min": "^1.1.4",
        "named-placeholders": "^1.1.6",
        "sql-escaper": "^1.3.3"
      },
      "engines": {
        "node": ">= 8.0"
      },
      "peerDependencies": {
        "@types/node": ">= 8"
      }
    },
    "node_modules/named-placeholders": {
      "version": "1.1.6",
      "resolved": "https://registry.npmjs.org/named-placeholders/-/named-placeholders-1.1.6.tgz",
      "integrity": "sha512-Tz09sEL2EEuv5fFowm419c1+a/jSMiBjI9gHxVLrVdbUkkNUUfjsVYs9pVZu5oCon/kmRh9TfLEObFtkVxmY0w==",
      "license": "MIT",
      "dependencies": {
        "lru.min": "^1.1.0"
      },
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/negotiator": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-1.0.0.tgz",
      "integrity": "sha512-8Ofs/AUQh8MaEcrlq5xOX0CQ9ypTF5dl78mjlMNfOK08fzpgTHQRQPBxcPlEtIw0yRpws+Zo/3r+5WRby7u3Gg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-inspect": {
      "version": "1.13.4",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.4.tgz",
      "integrity": "sha512-W67iLl4J2EXEGTbfeHCffrjDfitvLANg0UlX3wFUUSTx92KXRFegMHUVgSqE+wvhAbi4WqjGg9czysTV2Epbew==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/on-finished": {
      "version": "2.4.1",
      "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.4.1.tgz",
      "integrity": "sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg==",
      "license": "MIT",
      "dependencies": {
        "ee-first": "1.1.1"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
      "license": "ISC",
      "dependencies": {
        "wrappy": "1"
      }
    },
    "node_modules/parseurl": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
      "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/path-to-regexp": {
      "version": "8.4.2",
      "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-8.4.2.tgz",
      "integrity": "sha512-qRcuIdP69NPm4qbACK+aDogI5CBDMi1jKe0ry5rSQJz8JVLsC7jV8XpiJjGRLLol3N+R5ihGYcrPLTno6pAdBA==",
      "license": "MIT",
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/proxy-addr": {
      "version": "2.0.7",
      "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.7.tgz",
      "integrity": "sha512-llQsMLSUDUPT44jdrU/O37qlnifitDP+ZwrmmZcoSKyLKvtZxpyV0n2/bD/N4tBAAZ/gJEdZU7KMraoK1+XYAg==",
      "license": "MIT",
      "dependencies": {
        "forwarded": "0.2.0",
        "ipaddr.js": "1.9.1"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/qs": {
      "version": "6.15.1",
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.15.1.tgz",
      "integrity": "sha512-6YHEFRL9mfgcAvql/XhwTvf5jKcOiiupt2FiJxHkiX1z4j7WL8J/jRHYLluORvc1XxB5rV20KoeK00gVJamspg==",
      "license": "BSD-3-Clause",
      "dependencies": {
        "side-channel": "^1.1.0"
      },
      "engines": {
        "node": ">=0.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/range-parser": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
      "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/raw-body": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-3.0.2.tgz",
      "integrity": "sha512-K5zQjDllxWkf7Z5xJdV0/B0WTNqx6vxG70zJE4N0kBs4LovmEYWJzQGxC9bS9RAKu3bgM40lrd5zoLJ12MQ5BA==",
      "license": "MIT",
      "dependencies": {
        "bytes": "~3.1.2",
        "http-errors": "~2.0.1",
        "iconv-lite": "~0.7.0",
        "unpipe": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/router": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/router/-/router-2.2.0.tgz",
      "integrity": "sha512-nLTrUKm2UyiL7rlhapu/Zl45FwNgkZGaCpZbIHajDYgwlJCOzLSk+cIPAnsEqV955GjILJnKbdQC1nVPz+gAYQ==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.4.0",
        "depd": "^2.0.0",
        "is-promise": "^4.0.0",
        "parseurl": "^1.3.3",
        "path-to-regexp": "^8.0.0"
      },
      "engines": {
        "node": ">= 18"
      }
    },
    "node_modules/safer-buffer": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
      "license": "MIT"
    },
    "node_modules/send": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/send/-/send-1.2.1.tgz",
      "integrity": "sha512-1gnZf7DFcoIcajTjTwjwuDjzuz4PPcY2StKPlsGAQ1+YH20IRVrBaXSWmdjowTJ6u8Rc01PoYOGHXfP1mYcZNQ==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.4.3",
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "etag": "^1.8.1",
        "fresh": "^2.0.0",
        "http-errors": "^2.0.1",
        "mime-types": "^3.0.2",
        "ms": "^2.1.3",
        "on-finished": "^2.4.1",
        "range-parser": "^1.2.1",
        "statuses": "^2.0.2"
      },
      "engines": {
        "node": ">= 18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/serve-static": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-2.2.1.tgz",
      "integrity": "sha512-xRXBn0pPqQTVQiC8wyQrKs2MOlX24zQ0POGaj0kultvoOCstBQM5yvOhAVSUwOMjQtTvsPWoNCHfPGwaaQJhTw==",
      "license": "MIT",
      "dependencies": {
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "parseurl": "^1.3.3",
        "send": "^1.2.0"
      },
      "engines": {
        "node": ">= 18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/setprototypeof": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
      "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw==",
      "license": "ISC"
    },
    "node_modules/side-channel": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.1.0.tgz",
      "integrity": "sha512-ZX99e6tRweoUXqR+VBrslhda51Nh5MTQwou5tnUDgbtyM0dBgmhEDtWGP/xbKn6hqfPRHujUNwz5fy/wbbhnpw==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.3",
        "side-channel-list": "^1.0.0",
        "side-channel-map": "^1.0.1",
        "side-channel-weakmap": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-list": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/side-channel-list/-/side-channel-list-1.0.1.tgz",
      "integrity": "sha512-mjn/0bi/oUURjc5Xl7IaWi/OJJJumuoJFQJfDDyO46+hBWsfaVM65TBHq2eoZBhzl9EchxOijpkbRC8SVBQU0w==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-map": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/side-channel-map/-/side-channel-map-1.0.1.tgz",
      "integrity": "sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==",
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-weakmap": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/side-channel-weakmap/-/side-channel-weakmap-1.0.2.tgz",
      "integrity": "sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==",
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3",
        "side-channel-map": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/sql-escaper": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/sql-escaper/-/sql-escaper-1.3.3.tgz",
      "integrity": "sha512-BsTCV265VpTp8tm1wyIm1xqQCS+Q9NHx2Sr+WcnUrgLrQ6yiDIvHYJV5gHxsj1lMBy2zm5twLaZao8Jd+S8JJw==",
      "license": "MIT",
      "engines": {
        "bun": ">=1.0.0",
        "deno": ">=2.0.0",
        "node": ">=12.0.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/mysqljs/sql-escaper?sponsor=1"
      }
    },
    "node_modules/statuses": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.2.tgz",
      "integrity": "sha512-DvEy55V3DB7uknRo+4iOGT5fP1slR8wQohVdknigZPMpMstaKJQWhwiYBACJE3Ul2pTnATihhBYnRhZQHGBiRw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/toidentifier": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
      "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==",
      "license": "MIT",
      "engines": {
        "node": ">=0.6"
      }
    },
    "node_modules/type-is": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/type-is/-/type-is-2.0.1.tgz",
      "integrity": "sha512-OZs6gsjF4vMp32qrCbiVSkrFmXtG/AZhY3t0iAMrMBiAZyV9oALtXO8hsrHbMXF9x6L3grlFuwW2oAz7cav+Gw==",
      "license": "MIT",
      "dependencies": {
        "content-type": "^1.0.5",
        "media-typer": "^1.1.0",
        "mime-types": "^3.0.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/undici-types": {
      "version": "7.21.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-7.21.0.tgz",
      "integrity": "sha512-w9IMgQrz4O0YN1LtB7K5P63vhlIOvC7opSmouCJ+ZywlPAlO9gIkJ+otk6LvGpAs2wg4econaCz3TvQ9xPoyuQ==",
      "license": "MIT",
      "peer": true
    },
    "node_modules/unpipe": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
      "integrity": "sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/vary": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
      "integrity": "sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
      "license": "ISC"
    }
  }
}

```

---

### <a id="📄-package-json"></a>📄 `package.json`

**File Info:**
- **Size**: 380 B
- **Extension**: `.json`
- **Language**: `json`
- **Location**: `package.json`
- **Relative Path**: `root`
- **Created**: 2026-05-12 08:49:35 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-05-12 08:49:49 (Asia/Calcutta / GMT+06:30)
- **MD5**: `a9d83b7798aaa6851340fc1124eeb4c4`
- **SHA256**: `028d327c404207811163ee29f1af4009901a1b2a6d2ad113d59b9992457dfb61`
- **Encoding**: ASCII

**File code content:**

```json
{
  "name": "hospital-management",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs",
  "dependencies": {
    "body-parser": "^2.2.2",
    "cors": "^2.8.6",
    "express": "^5.2.1",
    "mysql2": "^3.22.3"
  }
}

```

---

### <a id="📄-patients-html"></a>📄 `patients.html`

**File Info:**
- **Size**: 40.55 KB
- **Extension**: `.html`
- **Language**: `html`
- **Location**: `patients.html`
- **Relative Path**: `root`
- **Created**: 2026-05-12 05:37:07 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-05-19 13:22:38 (Asia/Calcutta / GMT+06:30)
- **MD5**: `46088042fc747e0df59748eee59f1977`
- **SHA256**: `fcdf7fd1b557c1227e4ec358f672703c1e57d7c63a3dced12777644986621d5d`
- **Encoding**: UTF-8

**File code content:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Patients — MedCare HMS</title>

    <!-- Shared stylesheet -->
    <link rel="stylesheet" href="css/style.css" />

    <!-- ─────────────────────────────────────────────────────────
       PATIENTS PAGE — page-specific styles
  ────────────────────────────────────────────────────────── -->
    <style>
      /* ── Registration form card ──────────────────────────── */
      .form-card {
        background: var(--white);
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        box-shadow: var(--shadow-sm);
        margin-bottom: 24px;
        overflow: hidden;

        /* slide-in animation */
        opacity: 0;
        animation: fadeSlideUp 0.5s ease 0.1s forwards;
      }

      /* Coloured top bar on the form card */
      .form-card-bar {
        height: 4px;
        background: linear-gradient(90deg, var(--accent-blue), var(--mid-blue));
      }

      .form-card-inner {
        padding: 24px 28px 28px;
      }

      /* Toggle button — collapses/expands registration form */
      .form-toggle-btn {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        font-weight: 600;
        color: var(--accent-blue);
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
        transition: var(--transition);
      }

      .form-toggle-btn:hover {
        color: var(--dark-blue);
      }

      .form-toggle-btn .arrow {
        display: inline-block;
        transition: transform 0.25s ease;
        font-style: normal;
      }

      /* Rotate arrow when form is collapsed */
      .form-toggle-btn.collapsed .arrow {
        transform: rotate(-90deg);
      }

      /* Collapsible form body */
      .form-collapsible {
        overflow: hidden;
        max-height: 600px; /* large enough to show all fields */
        transition:
          max-height 0.4s ease,
          opacity 0.3s ease,
          margin 0.3s ease;
        opacity: 1;
        margin-top: 20px;
      }

      .form-collapsible.hidden {
        max-height: 0;
        opacity: 0;
        margin-top: 0;
      }

      /* 3-column grid for form fields */
      .form-grid-3 {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
      }

      @media (max-width: 900px) {
        .form-grid-3 {
          grid-template-columns: 1fr 1fr;
        }
      }
      @media (max-width: 600px) {
        .form-grid-3 {
          grid-template-columns: 1fr;
        }
      }

      /* Address field spans full width */
      .col-span-3 {
        grid-column: 1 / -1;
      }

      /* Form action buttons row */
      .form-actions {
        display: flex;
        gap: 12px;
        margin-top: 20px;
        flex-wrap: wrap;
      }

      /* ── Table card ────────────────────────────────────────── */
      .table-card {
        background: var(--white);
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        box-shadow: var(--shadow-sm);
        overflow: hidden;

        opacity: 0;
        animation: fadeSlideUp 0.5s ease 0.25s forwards;
      }

      /* Table toolbar — search + stats */
      .table-toolbar {
        padding: 18px 24px;
        border-bottom: 1px solid var(--border);
        display: flex;
        align-items: center;
        gap: 14px;
        flex-wrap: wrap;
      }

      .table-toolbar h2 {
        font-size: 16px;
        font-weight: 600;
        color: var(--dark-blue);
        margin-right: auto;
      }

      /* Patient count pill */
      .count-pill {
        background: var(--light-blue);
        color: var(--accent-blue);
        font-size: 12px;
        font-weight: 700;
        padding: 3px 10px;
        border-radius: 20px;
        border: 1px solid var(--border);
      }

      /* Search input inside toolbar */
      .toolbar-search {
        position: relative;
        width: 240px;
      }

      .toolbar-search input {
        width: 100%;
        padding: 8px 14px 8px 36px;
        border: 1.5px solid var(--border);
        border-radius: 30px;
        font-family: var(--font-body);
        font-size: 13px;
        color: var(--text-dark);
        background: var(--pale-blue);
        outline: none;
        transition: var(--transition);
      }

      .toolbar-search input:focus {
        border-color: var(--accent-blue);
        background: var(--white);
        box-shadow: 0 0 0 3px rgba(26, 115, 232, 0.1);
      }

      .toolbar-search .s-icon {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 13px;
        color: var(--text-light);
        pointer-events: none;
      }

      /* Gender badge pill */
      .gender-pill {
        display: inline-block;
        padding: 3px 10px;
        border-radius: 20px;
        font-size: 11px;
        font-weight: 600;
      }

      .gender-pill.male {
        background: #e8f1fd;
        color: var(--accent-blue);
      }
      .gender-pill.female {
        background: #fce8f6;
        color: #c0399a;
      }
      .gender-pill.other {
        background: #f0ede8;
        color: #7a6040;
      }

      /* "No results" row */
      .empty-row td {
        text-align: center;
        padding: 40px 16px;
        color: var(--text-light);
        font-size: 14px;
      }

      /* Delete confirm overlay (simple inline confirm) */
      .del-confirm {
        display: none;
        position: fixed;
        inset: 0;
        background: rgba(9, 45, 80, 0.45);
        backdrop-filter: blur(3px);
        z-index: 300;
        align-items: center;
        justify-content: center;
        padding: 20px;
      }

      .del-confirm.active {
        display: flex;
      }

      .del-box {
        background: var(--white);
        border-radius: var(--radius-md);
        padding: 32px 36px;
        max-width: 400px;
        width: 100%;
        text-align: center;
        box-shadow: var(--shadow-lg);
        animation: modalPop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) both;
      }

      .del-box .del-icon {
        font-size: 44px;
        margin-bottom: 12px;
      }
      .del-box h3 {
        font-size: 20px;
        color: var(--dark-blue);
        margin-bottom: 8px;
      }
      .del-box p {
        font-size: 14px;
        color: var(--text-mid);
        margin-bottom: 24px;
      }
      .del-box .del-actions {
        display: flex;
        gap: 12px;
        justify-content: center;
      }

      /* Highlight row being edited */
      tr.editing-row td {
        background: #f0f8ff !important;
      }

      /* Responsive: hide less-important columns on small screens */
      @media (max-width: 768px) {
        .hide-mobile {
          display: none;
        }
        .toolbar-search {
          width: 100%;
          order: 3;
        }
      }
    </style>
  </head>

  <body>
    <!-- Mobile sidebar overlay -->
    <div class="sidebar-overlay" id="sidebarOverlay"></div>

    <!-- ═══════════════════════════════════════════════════════════
     APP SHELL
══════════════════════════════════════════════════════════════ -->
    <div class="app-shell">
      <!-- ─────────────────────────────────────────────────────────
       SIDEBAR — identical structure on every page
  ────────────────────────────────────────────────────────── -->
      <aside class="sidebar" id="sidebar">
        <div class="sidebar-brand">
          <div class="brand-icon">🏥</div>
          <div class="brand-text">
            <h2>MedCare</h2>
            <span>Hospital System</span>
          </div>
        </div>

        <nav class="sidebar-nav">
          <div class="nav-section-label">Main Menu</div>

          <div
            class="nav-item"
            data-page="dashboard.html"
            onclick="location.href = 'dashboard.html'">
            <span class="nav-icon">📊</span> Dashboard
          </div>

          <div
            class="nav-item"
            data-page="appointments.html"
            onclick="location.href = 'appointments.html'">
            <span class="nav-icon">📅</span> Appointments
            <span class="nav-badge">5</span>
          </div>

          <!-- Active page -->
          <div
            class="nav-item active"
            data-page="patients.html"
            onclick="location.href = 'patients.html'">
            <span class="nav-icon">🧑‍⚕️</span> Patients
          </div>

          <div
            class="nav-item"
            data-page="doctors.html"
            onclick="location.href = 'doctors.html'">
            <span class="nav-icon">👨‍⚕️</span> Doctors
          </div>

          <div class="nav-section-label">Management</div>

          <div
            class="nav-item"
            data-page="billing.html"
            onclick="location.href = 'billing.html'">
            <span class="nav-icon">💳</span> Billing
          </div>

          <div class="nav-item"><span class="nav-icon">📈</span> Reports</div>
          <div class="nav-item"><span class="nav-icon">⚙️</span> Settings</div>
        </nav>

        <div class="sidebar-footer">
          <div class="sidebar-user">
            <div class="user-avatar">👤</div>
            <div class="user-info">
              <h4>Dr. Admin</h4>
              <p>Super Admin</p>
            </div>
          </div>
        </div>
      </aside>

      <!-- ─────────────────────────────────────────────────────────
       MAIN CONTENT
  ────────────────────────────────────────────────────────── -->
      <div class="main-content">
        <!-- TOP NAVBAR -->
        <header class="topbar">
          <button
            class="topbar-toggle"
            id="sidebarToggle"
            aria-label="Toggle navigation">
            ☰
          </button>
          <div class="topbar-title">Patients</div>

          <div class="topbar-search">
            <span class="search-icon">🔍</span>
            <input type="text" placeholder="Search patients, doctors…" />
          </div>

          <div class="topbar-actions">
            <span
              id="topbarClock"
              style="
                font-size: 13px;
                color: var(--text-mid);
                white-space: nowrap;
              "></span>
            <button class="topbar-btn" title="Notifications">
              🔔<span class="dot"></span>
            </button>
            <button class="topbar-btn" title="Messages">✉️</button>
            <div class="topbar-avatar" title="My Profile">👤</div>
          </div>
        </header>

        <!-- PAGE CONTENT -->
        <main class="page-content">
          <!-- Page header -->
          <div class="page-header">
            <div>
              <h1>Patient Management</h1>
              <p>Register new patients and manage existing records</p>
            </div>
            <!-- Shortcut to scroll down to table -->
            <button
              class="btn btn-outline"
              onclick="
                document
                  .getElementById('patientTable')
                  .scrollIntoView({ behavior: 'smooth' })
              ">
              📋 View All Records
            </button>
          </div>

          <!-- ═══════════════════════════════════════════════════
           REGISTRATION FORM CARD
      ════════════════════════════════════════════════════ -->
          <div class="form-card">
            <!-- Coloured top stripe -->
            <div class="form-card-bar"></div>

            <div class="form-card-inner">
              <!-- Card header row: title + collapse toggle -->
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  flex-wrap: wrap;
                  gap: 10px;
                ">
                <div>
                  <h2
                    style="
                      font-size: 17px;
                      font-weight: 700;
                      color: var(--dark-blue);
                    ">
                    ➕ Register New Patient
                  </h2>
                  <p
                    style="
                      font-size: 13px;
                      color: var(--text-light);
                      margin-top: 3px;
                    ">
                    Fill in all required fields and click Submit.
                  </p>
                </div>
                <!-- Toggle collapse/expand the form -->
                <button
                  class="form-toggle-btn"
                  id="formToggleBtn"
                  onclick="toggleForm()">
                  <i class="arrow">▼</i> Hide Form
                </button>
              </div>

              <!-- Collapsible form section -->
              <div class="form-collapsible" id="formCollapsible">
                <form id="patientForm" novalidate>
                  <!-- Row 1: Patient ID · Name · Age -->
                  <div class="form-grid-3">
                    <div class="form-group">
                      <label for="fPatientId"
                        >Patient ID
                        <span style="color: var(--danger)">*</span></label
                      >
                      <input
                        type="text"
                        id="fPatientId"
                        class="form-control"
                        placeholder="e.g. P-1090"
                        readonly
                        title="Auto-generated — you may edit if needed" />
                    </div>

                    <div class="form-group">
                      <label for="fName"
                        >Full Name
                        <span style="color: var(--danger)">*</span></label
                      >
                      <input
                        type="text"
                        id="fName"
                        class="form-control"
                        placeholder="e.g. Arjun Sharma"
                        required />
                    </div>

                    <div class="form-group">
                      <label for="fAge"
                        >Age <span style="color: var(--danger)">*</span></label
                      >
                      <input
                        type="number"
                        id="fAge"
                        class="form-control"
                        placeholder="e.g. 34"
                        min="0"
                        max="130"
                        required />
                    </div>
                  </div>
                  <!-- /row 1 -->

                  <!-- Row 2: Gender · Phone · Blood Group -->
                  <div class="form-grid-3">
                    <div class="form-group">
                      <label for="fGender"
                        >Gender
                        <span style="color: var(--danger)">*</span></label
                      >
                      <select id="fGender" class="form-control" required>
                        <option value="">— Select —</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div class="form-group">
                      <label for="fPhone"
                        >Phone
                        <span style="color: var(--danger)">*</span></label
                      >
                      <input
                        type="tel"
                        id="fPhone"
                        class="form-control"
                        placeholder="e.g. 9876543210"
                        required />
                    </div>

                    <div class="form-group">
                      <label for="fBlood">Blood Group</label>
                      <select id="fBlood" class="form-control">
                        <option value="">— Select —</option>
                        <option>A+</option>
                        <option>A−</option>
                        <option>B+</option>
                        <option>B−</option>
                        <option>O+</option>
                        <option>O−</option>
                        <option>AB+</option>
                        <option>AB−</option>
                      </select>
                    </div>
                  </div>
                  <!-- /row 2 -->

                  <!-- Row 3: Address (full width) -->
                  <div class="form-grid-3">
                    <div class="form-group col-span-3">
                      <label for="fAddress">Address</label>
                      <input
                        type="text"
                        id="fAddress"
                        class="form-control"
                        placeholder="e.g. 12, MG Road, Bengaluru, Karnataka" />
                    </div>
                  </div>

                  <!-- Form action buttons -->
                  <div class="form-actions">
                    <button type="submit" class="btn btn-primary">
                      ✅ Submit Patient
                    </button>
                    <button
                      type="button"
                      class="btn btn-ghost"
                      onclick="resetForm()">
                      🔄 Reset Form
                    </button>
                  </div>

                  <!-- Inline success / error message -->
                  <div
                    id="formFeedback"
                    style="
                      display: none;
                      margin-top: 14px;
                      padding: 10px 14px;
                      border-radius: var(--radius-sm);
                      font-size: 13px;
                      font-weight: 500;
                    "></div>
                </form>
              </div>
              <!-- /form-collapsible -->
            </div>
            <!-- /form-card-inner -->
          </div>
          <!-- /form-card -->

          <!-- ═══════════════════════════════════════════════════
           PATIENT RECORDS TABLE CARD
      ════════════════════════════════════════════════════ -->
          <div class="table-card" id="patientTable">
            <!-- Toolbar: title · count · search · export -->
            <div class="table-toolbar">
              <h2>Patient Records</h2>
              <span class="count-pill" id="patientCount">0 patients</span>

              <!-- Search bar -->
              <div class="toolbar-search">
                <span class="s-icon">🔍</span>
                <input
                  type="text"
                  id="tableSearch"
                  placeholder="Search by name or ID…"
                  oninput="filterTable(this.value)" />
              </div>

              <!-- Export placeholder button -->
              <button
                class="btn btn-ghost btn-sm"
                onclick="alert('Export feature coming soon!')">
                ⬇️ Export
              </button>
            </div>

            <!-- Table -->
            <div class="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Patient ID</th>
                    <th>Name</th>
                    <th class="hide-mobile">Age</th>
                    <th>Gender</th>
                    <th class="hide-mobile">Phone</th>
                    <th class="hide-mobile">Blood</th>
                    <th class="hide-mobile">Address</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <!-- Rows injected by JavaScript -->
                <tbody id="patientTableBody"></tbody>
              </table>
            </div>
          </div>
          <!-- /table-card -->
        </main>
      </div>
      <!-- /main-content -->
    </div>
    <!-- /app-shell -->

    <!-- ═══════════════════════════════════════════════════════════
     EDIT PATIENT MODAL
     Populated by JS when edit button is clicked.
══════════════════════════════════════════════════════════════ -->
    <div class="modal-overlay" id="editPatientModal">
      <div class="modal">
        <div class="modal-header">
          <h3>✏️ Edit Patient Record</h3>
          <button class="modal-close">✕</button>
        </div>

        <div class="modal-body">
          <form id="editPatientForm" novalidate>
            <!-- hidden field stores which patient is being edited -->
            <input type="hidden" id="eIndex" />

            <div class="form-row">
              <div class="form-group">
                <label for="ePatientId">Patient ID</label>
                <input
                  type="text"
                  id="ePatientId"
                  class="form-control"
                  readonly />
              </div>
              <div class="form-group">
                <label for="eName"
                  >Full Name <span style="color: var(--danger)">*</span></label
                >
                <input type="text" id="eName" class="form-control" required />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="eAge"
                  >Age <span style="color: var(--danger)">*</span></label
                >
                <input
                  type="number"
                  id="eAge"
                  class="form-control"
                  min="0"
                  max="130"
                  required />
              </div>
              <div class="form-group">
                <label for="eGender"
                  >Gender <span style="color: var(--danger)">*</span></label
                >
                <select id="eGender" class="form-control" required>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="ePhone"
                  >Phone <span style="color: var(--danger)">*</span></label
                >
                <input type="tel" id="ePhone" class="form-control" required />
              </div>
              <div class="form-group">
                <label for="eBlood">Blood Group</label>
                <select id="eBlood" class="form-control">
                  <option value="">— Select —</option>
                  <option>A+</option>
                  <option>A−</option>
                  <option>B+</option>
                  <option>B−</option>
                  <option>O+</option>
                  <option>O−</option>
                  <option>AB+</option>
                  <option>AB−</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="eAddress">Address</label>
              <input type="text" id="eAddress" class="form-control" />
            </div>
          </form>
        </div>

        <div class="modal-footer">
          <button
            class="btn btn-ghost"
            onclick="closeModal('editPatientModal')">
            Cancel
          </button>
          <button
            class="btn btn-primary"
            onclick="
              document.getElementById('editPatientForm').requestSubmit()
            ">
            💾 Save Changes
          </button>
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════════════════
     DELETE CONFIRMATION DIALOG
══════════════════════════════════════════════════════════════ -->
    <div class="del-confirm" id="deleteConfirm">
      <div class="del-box">
        <div class="del-icon">🗑️</div>
        <h3>Delete Patient?</h3>
        <p id="deleteConfirmText">
          Are you sure you want to permanently remove this patient record? This
          action cannot be undone.
        </p>
        <div class="del-actions">
          <button
            class="btn btn-ghost"
            onclick="
              document
                .getElementById('deleteConfirm')
                .classList.remove('active')
            ">
            Cancel
          </button>
          <button class="btn btn-danger" id="confirmDeleteBtn">
            Yes, Delete
          </button>
        </div>
      </div>
    </div>

    <!-- Shared JS -->
    <script src="js/app.js"></script>

    <!-- ─────────────────────────────────────────────────────────
     PATIENTS PAGE — JavaScript
     All logic specific to patients.html lives here.
────────────────────────────────────────────────────────── -->
    <script>
      /* ══════════════════════════════════════════════════════════
     1. PATIENT DATA STORE
     This array is the "database" for this page.
     Add / edit / delete all modify this array, then re-render.
  ══════════════════════════════════════════════════════════ */
      let patients = [];

      /* Index of patient scheduled for deletion (set when delete btn clicked) */
      let pendingDeleteIndex = null;
      const API_URL = "https://hospital-management-system-ocss.onrender.com";
      /* ══════════════════════════════════════════════════════════
     2. RENDER TABLE
     Clears and rebuilds all rows from the patients array.
     Optionally filters by a search string.
  ══════════════════════════════════════════════════════════ */
      async function renderTable(filter = "") {
        try {
          const response = await fetch(`${API_URL}/patients`);
          const patients = await response.json();

          const tbody = document.getElementById("patientTableBody");
          tbody.innerHTML = "";

          const filtered = patients.filter(
            (p) =>
              p.patient_name.toLowerCase().includes(filter.toLowerCase()) ||
              p.patient_id.toString().includes(filter.toLowerCase()),
          );

          document.getElementById("patientCount").textContent =
            `${filtered.length} patient${filtered.length !== 1 ? "s" : ""}`;

          if (filtered.length === 0) {
            tbody.innerHTML = `
      <tr class="empty-row">
        <td colspan="8">
          No patients found
        </td>
      </tr>
      `;

            return;
          }

          filtered.forEach((p) => {
            const row = document.createElement("tr");

            const gClass =
              p.gender === "Male"
                ? "male"
                : p.gender === "Female"
                  ? "female"
                  : "other";

            row.innerHTML = `
        <td>${p.patient_id}</td>

        <td>${p.patient_name}</td>

        <td class="hide-mobile">${p.age}</td>

        <td>
          <span class="gender-pill ${gClass}">
            ${p.gender}
          </span>
        </td>

        <td class="hide-mobile">${p.phone}</td>

        <td class="hide-mobile">${p.address}</td>

        <td>

  <button
    class="btn-icon"
    onclick='editPatient(
      ${JSON.stringify(p)}
    )'>
    ✏️
  </button>

  <button
    class="btn-icon btn-danger"
    onclick="deletePatient(${p.patient_id})">
    🗑️
  </button>

</td>
      `;

            tbody.appendChild(row);
          });
        } catch (error) {
          console.log(error);
        }
      }

      /* ══════════════════════════════════════════════════════════
     3. SEARCH — filter table on keypress
  ══════════════════════════════════════════════════════════ */
      function filterTable(query) {
        renderTable(query);
      }
      async function deletePatient(id) {
        const confirmDelete = confirm(
          "Are you sure you want to delete this patient?",
        );

        if (!confirmDelete) return;

        try {
          const response = await fetch(`${API_URL}/delete-patient/${id}`, {
            method: "DELETE",
          });

          const result = await response.text();

          alert(result);

          renderTable();
        } catch (error) {
          console.log(error);
        }
      }
      function editPatient(patient) {
        document.getElementById("fName").value = patient.patient_name;

        document.getElementById("fAge").value = patient.age;

        document.getElementById("fGender").value = patient.gender;

        document.getElementById("fPhone").value = patient.phone;

        document.getElementById("fAddress").value = patient.address;

        window.editingPatientId = patient.patient_id;

        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
      /* ══════════════════════════════════════════════════════════
     4. REGISTRATION FORM — collapse / expand toggle
  ══════════════════════════════════════════════════════════ */
      function toggleForm() {
        const body = document.getElementById("formCollapsible");
        const btn = document.getElementById("formToggleBtn");
        const isHidden = body.classList.contains("hidden");

        if (isHidden) {
          body.classList.remove("hidden");
          btn.classList.remove("collapsed");
          btn.innerHTML = `<i class="arrow">▼</i> Hide Form`;
        } else {
          body.classList.add("hidden");
          btn.classList.add("collapsed");
          btn.innerHTML = `<i class="arrow">▼</i> Show Form`;
        }
      }

      /* ══════════════════════════════════════════════════════════
     5. AUTO-GENERATE PATIENT ID
     Called on page load and after each new patient is added.
  ══════════════════════════════════════════════════════════ */
      function setNextPatientId() {
        document.getElementById("fPatientId").value = `P-${nextIdNum}`;
      }

      /* ══════════════════════════════════════════════════════════
     6. RESET FORM
  ══════════════════════════════════════════════════════════ */
      function resetForm() {
        document.getElementById("patientForm").reset();
        setNextPatientId(); // restore the auto-generated ID
        hideFeedback();
      }

      /* ══════════════════════════════════════════════════════════
     7. FORM FEEDBACK HELPERS
  ══════════════════════════════════════════════════════════ */
      function showFeedback(msg, type) {
        const el = document.getElementById("formFeedback");
        el.textContent = msg;
        el.style.display = "block";
        el.style.background = type === "success" ? "#e8f8f0" : "#fdecea";
        el.style.color =
          type === "success" ? "var(--success)" : "var(--danger)";
        el.style.border =
          type === "success" ? "1.5px solid #b7e5cc" : "1.5px solid #f5c6c2";
      }

      function hideFeedback() {
        document.getElementById("formFeedback").style.display = "none";
      }

      /* ══════════════════════════════════════════════════════════
     8. SUBMIT NEW PATIENT
  ══════════════════════════════════════════════════════════ */
      document
        .getElementById("patientForm")
        .addEventListener("submit", async function (e) {
          e.preventDefault();

          const patient_name = document.getElementById("fName").value;

          const age = document.getElementById("fAge").value;

          const gender = document.getElementById("fGender").value;

          const phone = document.getElementById("fPhone").value;

          const address = document.getElementById("fAddress").value;

          const patientData = {
            patient_name,
            age,
            gender,
            phone,
            address,
          };

          try {
            let url = `${API_URL}/add-patient`;
            let method = "POST";

            if (window.editingPatientId) {
              url = `${API_URL}/update-patient/${window.editingPatientId}`;

              method = "PUT";
            }

            const response = await fetch(url, {
              method: method,

              headers: {
                "Content-Type": "application/json",
              },

              body: JSON.stringify(patientData),
            });

            const result = await response.text();

            alert(result);

            document.getElementById("patientForm").reset();

            window.editingPatientId = null;

            renderTable();
          } catch (error) {
            console.log(error);
          }
        });

      /* ══════════════════════════════════════════════════════════
     10. SAVE EDIT
  ══════════════════════════════════════════════════════════ */
      document
        .getElementById("editPatientForm")
        .addEventListener("submit", function (e) {
          e.preventDefault();

          const index = parseInt(document.getElementById("eIndex").value);
          const name = document.getElementById("eName").value.trim();
          const age = document.getElementById("eAge").value.trim();
          const phone = document.getElementById("ePhone").value.trim();

          /* Basic validation */
          if (!name) {
            alert("⚠️ Name is required.");
            return;
          }
          if (!age) {
            alert("⚠️ Age is required.");
            return;
          }
          if (!phone) {
            alert("⚠️ Phone is required.");
            return;
          }

          /* Update the patient record in the array */
          patients[index] = {
            id: document.getElementById("ePatientId").value,
            name,
            age: parseInt(age),
            gender: document.getElementById("eGender").value,
            phone,
            blood: document.getElementById("eBlood").value,
            address: document.getElementById("eAddress").value.trim(),
          };

          /* Close modal, re-render, remove row highlight */
          closeModal("editPatientModal");
          renderTable(document.getElementById("tableSearch").value);
          document
            .querySelectorAll("tr.editing-row")
            .forEach((r) => r.classList.remove("editing-row"));
        });

      /* Confirm delete button handler */
      document
        .getElementById("confirmDeleteBtn")
        .addEventListener("click", () => {
          if (pendingDeleteIndex === null) return;

          /* Remove from array */
          patients.splice(pendingDeleteIndex, 1);
          pendingDeleteIndex = null;

          /* Hide dialog and re-render */
          document.getElementById("deleteConfirm").classList.remove("active");
          renderTable(document.getElementById("tableSearch").value);
        });

      /* Close delete dialog on Escape key */
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          document.getElementById("deleteConfirm").classList.remove("active");
          pendingDeleteIndex = null;
        }
      });

      /* Close delete dialog on overlay click */
      document
        .getElementById("deleteConfirm")
        .addEventListener("click", function (e) {
          if (e.target === this) {
            this.classList.remove("active");
            pendingDeleteIndex = null;
          }
        });

      /* ══════════════════════════════════════════════════════════
     12. INITIALISE PAGE
     Runs once when the DOM is ready.
  ══════════════════════════════════════════════════════════ */
      document.addEventListener("DOMContentLoaded", () => {
        renderTable(); // draw all rows
      });
    </script>
  </body>
</html>

```

---

### <a id="📄-readme-md"></a>📄 `README.md`

**File Info:**
- **Size**: 28 B
- **Extension**: `.md`
- **Language**: `text`
- **Location**: `README.md`
- **Relative Path**: `root`
- **Created**: 2026-05-19 12:28:36 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-05-19 12:28:36 (Asia/Calcutta / GMT+06:30)
- **MD5**: `965ea616523b4498ee2bbeeec78c716c`
- **SHA256**: `f660540b67c3a53b54b771107693ce6a86a2e6dc32839692311651db0858ad99`
- **Encoding**: ASCII

**File code content:**

````markdown
# hospital-management-system
````

---

### <a id="📄-server-js"></a>📄 `server.js`

**File Info:**
- **Size**: 11.49 KB
- **Extension**: `.js`
- **Language**: `javascript`
- **Location**: `server.js`
- **Relative Path**: `root`
- **Created**: 2026-05-12 08:50:12 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-05-19 11:57:47 (Asia/Calcutta / GMT+06:30)
- **MD5**: `bd9e5c53fcd81851be471e6985233582`
- **SHA256**: `2a47ebb743bd1bc6cea2d54d77197b63e667863edc304a89279b7b478cb84e17`
- **Encoding**: ASCII

**File code content:**

```javascript
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const db = require("./config/db");

const app = express();

app.use(cors());
app.use(bodyParser.json());

/* -----------------------------------
   HOME ROUTE
----------------------------------- */

app.get("/", (req, res) => {
  res.send("Hospital Management Backend Running");
});

/* -----------------------------------
   ADD PATIENT API
----------------------------------- */

app.post("/add-patient", (req, res) => {
  const { patient_name, age, gender, phone, address } = req.body;

  const sql = `
        INSERT INTO Patients
        (patient_name, age, gender, phone, address)
        VALUES (?, ?, ?, ?, ?)
    `;

  db.query(sql, [patient_name, age, gender, phone, address], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error inserting patient");
    } else {
      res.send("Patient added successfully");
    }
  });
});

/* -----------------------------------
   GET ALL PATIENTS API
----------------------------------- */

app.get("/patients", (req, res) => {
  const sql = "SELECT * FROM Patients";

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error fetching patients");
    } else {
      res.json(result);
    }
  });
});

/* -----------------------------------
   DELETE PATIENT API
----------------------------------- */

app.delete("/delete-patient/:id", (req, res) => {
  const patientId = req.params.id;

  const sql = "DELETE FROM Patients WHERE patient_id = ?";

  db.query(sql, [patientId], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error deleting patient");
    } else {
      res.send("Patient deleted successfully");
    }
  });
});

/* -----------------------------------
   UPDATE PATIENT API
----------------------------------- */

app.put("/update-patient/:id", (req, res) => {
  const patientId = req.params.id;

  const { patient_name, age, gender, phone, address } = req.body;

  const sql = `
        UPDATE Patients
        SET
            patient_name = ?,
            age = ?,
            gender = ?,
            phone = ?,
            address = ?
        WHERE patient_id = ?
    `;

  db.query(
    sql,
    [patient_name, age, gender, phone, address, patientId],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error updating patient");
      } else {
        res.send("Patient updated successfully");
      }
    },
  );
});

/* -----------------------------------
   ADD DOCTOR API
----------------------------------- */

app.post("/add-doctor", (req, res) => {
  const { doctor_name, specialization, phone, email, department_id } = req.body;

  const sql = `
        INSERT INTO Doctors
        (doctor_name, specialization, phone, email, department_id)
        VALUES (?, ?, ?, ?, ?)
    `;

  db.query(
    sql,
    [doctor_name, specialization, phone, email, department_id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error adding doctor");
      } else {
        res.send("Doctor added successfully");
      }
    },
  );
});

/* -----------------------------------
   GET ALL DOCTORS
----------------------------------- */

app.get("/doctors", (req, res) => {
  const sql = "SELECT * FROM Doctors";

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error fetching doctors");
    } else {
      res.json(result);
    }
  });
});

/* -----------------------------------
   DELETE DOCTOR
----------------------------------- */

app.delete("/delete-doctor/:id", (req, res) => {
  const doctorId = req.params.id;

  const sql = "DELETE FROM Doctors WHERE doctor_id = ?";

  db.query(sql, [doctorId], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error deleting doctor");
    } else {
      res.send("Doctor deleted successfully");
    }
  });
});

/* -----------------------------------
   UPDATE DOCTOR
----------------------------------- */

app.put("/update-doctor/:id", (req, res) => {
  const doctorId = req.params.id;

  const { doctor_name, specialization, phone, email, department_id } = req.body;

  const sql = `
        UPDATE Doctors
        SET
            doctor_name = ?,
            specialization = ?,
            phone = ?,
            email = ?,
            department_id = ?
        WHERE doctor_id = ?
    `;

  db.query(
    sql,
    [doctor_name, specialization, phone, email, department_id, doctorId],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error updating doctor");
      } else {
        res.send("Doctor updated successfully");
      }
    },
  );
});

/* -----------------------------------
   ADD APPOINTMENT
----------------------------------- */

app.post("/add-appointment", (req, res) => {
  const { patient_id, doctor_id, appointment_date, appointment_time, status } =
    req.body;

  const sql = `
        INSERT INTO Appointments
        (
            patient_id,
            doctor_id,
            appointment_date,
            appointment_time,
            status
        )
        VALUES (?, ?, ?, ?, ?)
    `;

  db.query(
    sql,
    [patient_id, doctor_id, appointment_date, appointment_time, status],
    (err, result) => {
      if (err) {
        console.log(err);

        res.status(500).send("Error adding appointment");
      } else {
        res.send("Appointment added successfully");
      }
    },
  );
});

/* -----------------------------------
   GET APPOINTMENTS
----------------------------------- */

app.get("/appointments", (req, res) => {
  const sql = `
        SELECT
            a.*,
            p.patient_name,
            d.doctor_name
        FROM Appointments a

        JOIN Patients p
        ON a.patient_id = p.patient_id

        JOIN Doctors d
        ON a.doctor_id = d.doctor_id
    `;

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);

      res.status(500).send("Error fetching appointments");
    } else {
      res.json(result);
    }
  });
});

/* -----------------------------------
   DELETE APPOINTMENT
----------------------------------- */

app.delete("/delete-appointment/:id", (req, res) => {
  const appointmentId = req.params.id;

  const sql = "DELETE FROM Appointments WHERE appointment_id = ?";

  db.query(sql, [appointmentId], (err, result) => {
    if (err) {
      console.log(err);

      res.status(500).send("Error deleting appointment");
    } else {
      res.send("Appointment deleted successfully");
    }
  });
});
/* -----------------------------------
   ADD BILL
----------------------------------- */

app.post("/add-bill", (req, res) => {
  const { patient_id, appointment_id, amount, payment_status } = req.body;

  const sql = `
        INSERT INTO Billing
        (
            appointment_id,
            amount,
            payment_status
        )
        VALUES (?, ?, ?)
    `;

  db.query(sql, [appointment_id, amount, payment_status], (err, result) => {
    if (err) {
      console.log(err);

      res.status(500).send("Error adding bill");
    } else {
      res.send("Bill added successfully");
    }
  });
});

/* -----------------------------------
   GET BILLS
----------------------------------- */

app.get("/bills", (req, res) => {
  const sql = `
    SELECT
        b.bill_id,
        b.appointment_id,
        b.amount,
        b.payment_status,
        a.patient_id,
        p.patient_name
    FROM Billing b

    JOIN Appointments a
    ON b.appointment_id = a.appointment_id

    JOIN Patients p
    ON a.patient_id = p.patient_id
`;

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);

      res.status(500).send("Error fetching bills");
    } else {
      res.json(result);
    }
  });
});

/* -----------------------------------
   DELETE BILL
----------------------------------- */

app.delete("/delete-bill/:id", (req, res) => {
  const billId = req.params.id;

  const sql = "DELETE FROM Billing WHERE bill_id = ?";

  db.query(sql, [billId], (err, result) => {
    if (err) {
      console.log(err);

      res.status(500).send("Error deleting bill");
    } else {
      res.send("Bill deleted successfully");
    }
  });
});

/* -----------------------------------
   LOGIN API
----------------------------------- */

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = `
        SELECT *
        FROM Users
        WHERE email = ?
        AND password = ?
    `;

  db.query(sql, [email, password], (err, result) => {
    if (err) {
      console.log(err);

      res.status(500).send("Server Error");
    } else {
      if (result.length > 0) {
        res.json({
          success: true,
          user: result[0],
        });
      } else {
        res.json({
          success: false,
          message: "Invalid Email or Password",
        });
      }
    }
  });
});

/* -----------------------------------
   DASHBOARD STATS
----------------------------------- */

app.get("/dashboard-stats", (req, res) => {
  const patientSql = "SELECT COUNT(*) AS totalPatients FROM Patients";

  const doctorSql = "SELECT COUNT(*) AS totalDoctors FROM Doctors";

  const appointmentSql =
    "SELECT COUNT(*) AS totalAppointments FROM Appointments";

  const revenueSql = "SELECT SUM(amount) AS totalRevenue FROM Billing";

  db.query(patientSql, (err1, patientResult) => {
    if (err1) {
      console.log(err1);

      return res.status(500).send("Error");
    }

    db.query(doctorSql, (err2, doctorResult) => {
      if (err2) {
        console.log(err2);

        return res.status(500).send("Error");
      }

      db.query(appointmentSql, (err3, appointmentResult) => {
        if (err3) {
          console.log(err3);

          return res.status(500).send("Error");
        }

        db.query(revenueSql, (err4, revenueResult) => {
          if (err4) {
            console.log(err4);

            return res.status(500).send("Error");
          }

          res.json({
            totalPatients: patientResult[0].totalPatients,

            totalDoctors: doctorResult[0].totalDoctors,

            totalAppointments: appointmentResult[0].totalAppointments,

            totalRevenue: revenueResult[0].totalRevenue || 0,
          });
        });
      });
    });
  });
});

/* -----------------------------------
   UPDATE PROFILE
----------------------------------- */

app.put("/update-profile/:id", (req, res) => {
  const userId = req.params.id;

  const { full_name, email, password } = req.body;

  const sql = `
        UPDATE Users
        SET
            full_name = ?,
            email = ?,
            password = ?
        WHERE user_id = ?
    `;

  db.query(sql, [full_name, email, password, userId], (err, result) => {
    if (err) {
      console.log(err);

      res.status(500).send("Error updating profile");
    } else {
      res.send("Profile updated successfully");
    }
  });
});
/* -----------------------------------
   START SERVER
----------------------------------- */
app.listen(5000, () => {
  console.log("Server running on port 5000");
});

```

---

### <a id="📄-settings-html"></a>📄 `settings.html`

**File Info:**
- **Size**: 4.1 KB
- **Extension**: `.html`
- **Language**: `html`
- **Location**: `settings.html`
- **Relative Path**: `root`
- **Created**: 2026-05-19 11:57:29 (Asia/Calcutta / GMT+06:30)
- **Modified**: 2026-05-19 13:22:43 (Asia/Calcutta / GMT+06:30)
- **MD5**: `bb132ed093d180a6347fbdc493902c4b`
- **SHA256**: `615f9fa384b5a2e71435987fddb8cbb90f165ab1e513dfc47a6c7bd1bff8cafa`
- **Encoding**: UTF-8

**File code content:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Settings — MedCare HMS</title>

    <link rel="stylesheet" href="css/style.css" />
  </head>

  <body>
    <div class="app-shell">
      <!-- SIDEBAR -->
      <aside class="sidebar">
        <div class="sidebar-brand">
          <div class="brand-icon">🏥</div>

          <div class="brand-text">
            <h2>MedCare</h2>

            <span>Hospital System</span>
          </div>
        </div>

        <nav class="sidebar-nav">
          <div class="nav-item" onclick="location.href = 'dashboard.html'">
            📊 Dashboard
          </div>

          <div class="nav-item active">⚙️ Settings</div>
        </nav>
      </aside>

      <!-- MAIN CONTENT -->
      <div class="main-content">
        <header class="topbar">
          <div class="topbar-title">Settings</div>
        </header>

        <main class="page-content">
          <div class="card">
            <div class="card-header">
              <div>
                <h2>Profile Settings</h2>

                <p>Update your account information</p>
              </div>
            </div>

            <div class="card-body">
              <form id="settingsForm">
                <div class="form-group">
                  <label>Full Name</label>

                  <input
                    type="text"
                    id="fullName"
                    class="form-control"
                    required />
                </div>

                <div class="form-group">
                  <label>Email</label>

                  <input
                    type="email"
                    id="email"
                    class="form-control"
                    required />
                </div>

                <div class="form-group">
                  <label>Password</label>

                  <input
                    type="password"
                    id="password"
                    class="form-control"
                    required />
                </div>

                <button type="submit" class="btn btn-primary">
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>

    <script>
      const API_URL = "https://hospital-management-system-ocss.onrender.com";

      const user = JSON.parse(localStorage.getItem("loggedInUser"));

      if (!user) {
        window.location.href = "login.html";
      }

      /* LOAD USER DATA */

      document.getElementById("fullName").value = user.full_name;

      document.getElementById("email").value = user.email;

      document.getElementById("password").value = user.password;

      /* UPDATE PROFILE */

      document
        .getElementById("settingsForm")
        .addEventListener("submit", async function (e) {
          e.preventDefault();

          const full_name = document.getElementById("fullName").value;

          const email = document.getElementById("email").value;

          const password = document.getElementById("password").value;

          try {
            const response = await fetch(
              `${API_URL}/update-profile/${user.user_id}`,
              {
                method: "PUT",

                headers: {
                  "Content-Type": "application/json",
                },

                body: JSON.stringify({
                  full_name,
                  email,
                  password,
                }),
              },
            );

            const result = await response.text();

            alert(result);

            /* UPDATE LOCAL STORAGE */

            user.full_name = full_name;
            user.email = email;
            user.password = password;

            localStorage.setItem("loggedInUser", JSON.stringify(user));
          } catch (error) {
            console.log(error);
          }
        });
    </script>
  </body>
</html>

```

---

