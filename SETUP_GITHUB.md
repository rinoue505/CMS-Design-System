# Step-by-Step: Publish Design System to GitHub & Install

## Part 1: Create the GitHub Repo (if it doesn't exist)

1. Go to **https://github.com/new**
2. **Repository name:** `CMS-Design-System`
3. **Description:** (optional) "Design tokens, guidelines, and atoms for Campaign Manager"
4. Choose **Public**
5. **Do NOT** check "Add a README" (we already have one)
6. Click **Create repository**

---

## Part 2: Push Your Design System to GitHub

Open **Terminal** and run these commands one at a time:

### Step 1: Go to the design system folder
```bash
cd /Users/ray.inouewildfire.com/campaign-manager-design-system
```

### Step 2: Initialize git (if not already)
```bash
git init
```

### Step 3: Connect to your GitHub repo
```bash
git remote add origin https://github.com/rinoue505/CMS-Design-System.git
```

### Step 4: Add all files
```bash
git add .
```

### Step 5: Create first commit
```bash
git commit -m "Initial design system package"
```

### Step 6: Push to GitHub
```bash
git branch -M main
git push -u origin main
```

**Note:** You may be asked to log in. Use GitHub CLI, a personal access token, or SSH key depending on your setup.

---

## Part 3: Install in Your Project (e.g. infinity-admin)

### Step 1: Go to your project
```bash
cd /Users/ray.inouewildfire.com/infinity-admin
```

### Step 2: Install the design system from GitHub
```bash
npm install github:rinoue505/CMS-Design-System
```

### Step 3: Use it in your code
```javascript
// Import tokens
import tokens from '@campaign-manager/design-system';

// Import CSS
import '@campaign-manager/design-system/tokens.css';
import '@campaign-manager/design-system/atoms.css';
```

---

## Troubleshooting

**"Permission denied" or "Authentication failed"**
- Make sure you're logged into GitHub (try `gh auth login` if you use GitHub CLI)
- Or use a Personal Access Token: https://github.com/settings/tokens

**"Repository not found"**
- Double-check the repo exists at https://github.com/rinoue505/CMS-Design-System
- Make sure the repo name is exactly `CMS-Design-System`

**"Xcode license" error**
- Run: `sudo xcodebuild -license` and accept the agreement
