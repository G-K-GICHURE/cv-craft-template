# George Gichure Portfolio - Content Management Guide

## Project info

**URL**: https://lovable.dev/projects/77657f75-33fc-42f4-ae1c-85f99bd3537b

## 🎯 Easy Content Updates Without Coding

This guide shows you how to update your portfolio content by editing specific sections in the code files. Simply find the section you want to update and modify the text/data.

### 1. Personal Information (Contact Details)
**File:** `src/components/About.tsx`
**What to edit:** Look for the contact information section
```javascript
// Update your contact details here
email: "georgegichure@gmail.com",
phone: "+254 123 456 789", 
location: "Nairobi, Kenya",
```

### 2. Professional Experience
**File:** `src/components/Experience.tsx`
**What to edit:** Look for the `experiences` array (around line 6)
```javascript
// Add/edit your work experience here
{
  title: "Your Job Title",
  company: "Company Name",
  location: "City, Country", 
  period: "Start Date - End Date",
  description: "Detailed description of your role and achievements",
  technologies: ["Tech1", "Tech2", "Tech3"],
  achievements: ["Achievement 1", "Achievement 2"],
  type: "Industry/Sector Type"
}
```

### 3. Skills & Technologies  
**File:** `src/components/Skills.tsx`
**What to edit:** Look for the `skillCategories` array (around line 6)
```javascript
// Add/edit your skills here
{
  name: "Skill Name",
  certified: true/false // Set to true if you have certification
}
```

### 4. Professional Certifications
**File:** `src/components/Skills.tsx` 
**What to edit:** Look for the `certifications` array (around line 50)
```javascript
// Add/edit certifications here
{
  name: "Certification Name",
  issuer: "Issuing Organization",
  date: "Year Obtained", 
  verificationUrl: "https://verification-link.com",
  badgeUrl: "https://badge-image-url.com"
}
```

### 5. Projects
**File:** `src/components/Projects.tsx`
**What to edit:** Look for the `projectsByTechnology` object (around line 8)
```javascript
// Add new projects here
{
  title: "Project Name",
  description: "Project description", 
  type: "Professional" or "Personal",
  technologies: ["Tech1", "Tech2"],
  achievements: ["Achievement 1", "Achievement 2"],
  confidential: true/false,
  githubUrl: "https://github.com/your-repo" // Optional
}
```

### 6. Blog Articles
**File:** `src/components/Blogs.tsx`
**What to edit:** Look for the `blogPosts` array
```javascript
// Add new blog posts here
{
  title: "Blog Post Title",
  excerpt: "Brief description of the post",
  readTime: "5 min read",
  date: "Publication Date", 
  url: "https://linkedin.com/pulse/your-article"
}
```

### 7. Services & Expertise
**File:** `src/components/Services.tsx`
**What to edit:** Look for the `services` array (around line 6)
```javascript
// Add/edit services here
{
  title: "Service Name",
  description: "Service description",
  skills: ["Skill1", "Skill2"],
  tools: ["Tool1", "Tool2"]
}
```

## 🔧 How to Edit Files

**Option 1: Use Lovable (Recommended)**
1. Visit the [Lovable Project](https://lovable.dev/projects/77657f75-33fc-42f4-ae1c-85f99bd3537b)
2. Tell the AI what you want to update
3. Changes will be made automatically

**Option 2: Direct GitHub Editing**
1. Navigate to the file you want to edit
2. Click the "Edit" button (pencil icon)
3. Make your changes
4. Commit the changes

**Option 3: Use your preferred IDE**
Clone this repo and push changes:

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory  
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📥 How to Download and Host Locally

### Option 1: Download from GitHub
1. Go to your GitHub repository
2. Click the green "Code" button
3. Select "Download ZIP"
4. Extract the ZIP file
5. Open terminal/command prompt in the extracted folder
6. Run the commands above (`npm install` then `npm run dev`)

### Option 2: Clone Repository
```sh
# If you have Git installed, clone directly:
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
npm run dev
```

### Option 3: Use GitHub Codespaces (Cloud Development)
1. Go to your GitHub repository
2. Click "Code" → "Codespaces" → "New codespace"
3. Wait for environment to load
4. Run `npm run dev` in the terminal
5. Open the preview URL

### Requirements
- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Code editor** (VS Code recommended)

### After Setup
- Your portfolio will be available at `http://localhost:5173`
- Changes to files will automatically refresh the page
- To build for production: `npm run build`

## 🚀 Deploy to Other Platforms

### Netlify (Free)
1. Build your project: `npm run build`
2. Upload the `dist` folder to [Netlify](https://netlify.com)

### Vercel (Free)  
1. Connect your GitHub repo to [Vercel](https://vercel.com)
2. Auto-deploy on every push

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "npm run build && gh-pages -d dist"`
3. Run: `npm run deploy`

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
