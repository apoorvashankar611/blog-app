# CA Monk – Blog Application

This project is a Blog Application built as part of the **CA Monk Blog Application Assignment**.  
The goal of the assignment is to demonstrate frontend development skills using React, TypeScript, TanStack Query, Tailwind CSS, and shadcn/ui.

The application allows users to view a list of blogs, read full blog details, and create new blog posts using a mock backend powered by JSON Server.

---

## Tech Stack

- **React + TypeScript**
- **Vite**
- **TanStack Query** – for server state management
- **Tailwind CSS** – for styling
- **shadcn/ui** – for reusable UI components
- **JSON Server** – mock REST API backend

---

##  Features Implemented

- Fetch and display all blogs (`GET /blogs`)
- View blog details by ID (`GET /blogs/:id`)
- Create a new blog (`POST /blogs`)
- Automatic query invalidation after blog creation
- Loading and error states for all API calls
- Responsive two-column layout
- Clean and modular component structure
- Navigation bar and hero section inspired by the reference design

---

## UI Overview

- **Left Panel**: Blog list with category, title, and short description  
- **Right Panel**: Blog detail view with cover image and full content  

> Note: The UI is inspired by the provided reference design.  
> Pixel-perfect replication was not required as per the assignment instructions.

---

##  Project Structure

src/
├─ components/
│ ├─ BlogList.tsx
│ ├─ BlogDetail.tsx
│ ├─ CreateBlogForm.tsx
│ ├─ Navbar.tsx
│ ├─ Hero.tsx
│ └─ ui/
├─ hooks/
│ └─ useBlogs.ts
├─ services/
│ └─ blogApi.ts
├─ App.tsx
├─ main.tsx
db.json
package.json
vite.config.ts



---

##  Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- Git

---

### 1️ Clone the repository
bash
git clone https://github.com/apoorvashankar611/blog-app.git

cd blog-app
npm install
npx json-server db.json --port 4000
API will run at:
http://localhost:4000/blogs

Start the Development Server

Open a new terminal and run:

npm run dev
The app will run at:

http://localhost:5173

Implementation Notes

TanStack Query is used for all API interactions

Queries are conditionally enabled to prevent invalid requests

After creating a blog, relevant queries are invalidated

Blog content is rendered as plain text (no HTML formatting)

JSON Server is used as required instead of a custom backend

## Assignment Requirements Checklist

✅ TypeScript used throughout the project

✅ TanStack Query implemented correctly

✅ Tailwind CSS and shadcn/ui used for styling

✅ JSON Server used as backend

✅ Loading and error states handled

✅ Responsive layout

✅ Clean code organization

## Author

Apoorva Shankar
GitHub: https://github.com/apoorvashankar611
