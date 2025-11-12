# 🧩 Projectify — Task Management App

Projectify is a lightweight React-based task management application built with **Vite**, **TailwindCSS**, **Context API**, and **useReducer**.  
It allows users to create, edit, delete, sort, and search tasks — all without page reloads.

---

## 🚀 Project Requirements

1. When the **Add** button is clicked, a modal appears where the user can enter task details.  
   After clicking **Create Task**, the new task be added to the **Task List** under the selected **Category**.

   - The fields in the modal include:
     - **Title**
     - **Description**
     - **Date**
     - **Category**

2. **Validation:**  
   - If any field (Title, Description, Date, or Category) is missing, the form not submit.

3. **Task Editing:**  
   - Each task card includes a **Pencil (✏️)** icon.  
   - Clicking it opens the popup with pre-filled task data for editing.

4. **Task Deletion:**  
   - Clicking the **Delete** button removes a task from the Task List immediately.

5. **Search Feature:**  
   - The search bar filters tasks **by Title** (case-insensitive).  
   - If the search bar is empty, all tasks are shown.

6. **Empty State:**  
   - When no tasks exist, show:  
     **“Task List is empty!”**

7. **Sorting:**  
   - Each column header includes a **Sort icon**.  
   - Clicking it sorts tasks in that column by **Date** (ascending ↔ descending).

8. **Task Counters:**  
   - Each column title display the number of tasks inside parentheses, e.g. `In Progress (4)`.


---

## ✨ Features Overview

### 1. Add Task (Popup)
- Custom popup (no external package) with input fields for task creation.
- Adds tasks under the selected category column.
- Automatically updates counts.

### 2. Validation & Warnings
- Required fields: Title, Description, Date, Category.
- Shows alert or inline warning if validation fails.
- React Toastify optional for better UX.

### 3. Category Columns
- Tasks appear in category-based columns.
- Category determines card placement.

### 4. Edit Task
- Pencil icon opens the popup with editable data.
- On saving, updates the existing task instantly.

### 5. Delete Task
- Removes a task from the list and updates count.

### 6. Search (Title-only)
- Filters visible tasks across all categories.
- Matches only title text.
- Shows all tasks when search is cleared.

### 7. Empty State
- Shows “Task List is empty!” when no tasks exist.

### 8. Column Sorting by Date
- Sort tasks in each column individually.
- Toggle between ascending and descending order.

### 9. Task Counts
- Dynamic counters in category headers.


---

## ⚙️ Dependencies

| Type | Package | Description |
|------|----------|-------------|
| Core | react | UI framework |
| Core | react-dom | DOM bindings for React |
| Build Tool | vite | Development/build tool |
| Styling | tailwindcss | CSS utility framework |
| ESLint | eslint, @eslint/js | Linting & formatting |
| Plugin | @vitejs/plugin-react | React plugin for Vite |
| Types | @types/react, @types/react-dom | React type support |
| Dev Tools | eslint-plugin-react-hooks, eslint-plugin-react-refresh | ESLint React rules |

---

## 🧑‍💻 Setup & Installation

1. Clone or download this repository:  
   `git clone https://github.com/yourusername/projectify.git  `
   
   `cd projectify`

2. Install dependencies:  
   `npm install`

3. Run development server:  
   `npm run dev`  (App runs locally at http://localhost:5173)

4. Build for production:  
   `npm run build`

5. Preview production build:  
   `npm run preview`

6. Lint the codebase:  
   `npm run lint`

---

## 🧠 Tech Stack

- Frontend: React + TailwindCSS  
- Build Tool: Vite  
- State Management: Context API + useReducer  
- Validation: Native + optional Toastify  
- Linting: ESLint (React Hooks, Refresh plugins)

---

## ✅ Summary

Projectify demonstrates strong React fundamentals — component-based UI, context-based state management, and dynamic UI updates — all implemented cleanly without unnecessary dependencies or page reloads.