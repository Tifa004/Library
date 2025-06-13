# 📚 Library Book Tracker

A simple and elegant **book tracking web app** where you can add, remove, and update the read status of books using an interactive form and table display.

---

## ✨ Features

- 📘 Add books with title, author, number of pages, and read status.
- 🔄 Toggle a book's read status directly from the table.
- ❌ Remove books instantly from the list.
- 📋 All books are displayed in a clean, responsive table format.
- 🧠 Uses `Book.prototype` methods for clean object logic.

---

## 🧪 Tech Used

### 🔹 HTML

- Semantic HTML with a native `<dialog>` element for the book form.
- Form validation using the `required` attribute.
  
### 🔹 CSS

- **Flexbox layout** for form responsiveness.
- Clean and modern UI with hover effects and shadows.
- Mobile-first, responsive design using `max-width` constraints.

### 🔹 JavaScript

- **Object constructor** (`books`) with `crypto.randomUUID()` for unique IDs.
- **Prototype method** `toggleReadStatus()` to handle logic cleanly.
- **Dynamic DOM manipulation** to add, display, and remove books.
- **Event delegation** on the table body (`tbody`) for performance.
- Graceful handling of missing inputs with warning messages.

---

