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

- **ES6 `class Book`** with `crypto.randomUUID()` for unique IDs.
- **Prototype method** `toggleReadStatus()` to encapsulate logic.
- **Dynamic DOM manipulation** to add, display, and remove books.
- **Event delegation** on the table body (`<tbody>`) for performance.
- Graceful handling of invalid input with clear warning messages.

---

## 🔄 Updates

- ✅ Migrated from constructor function to ES6 `class Book`.
- ✅ Stored `isRead` as a boolean instead of a string for logical clarity.
- ✅ Added stricter validation for the "pages" field using `Number.isInteger()` and positive integer checks.
- ✅ Improved warning handling: reusable `clearWarnings()` function and multiple-focus safety.
- ✅ Used consistent event delegation to simplify DOM event logic.
- ✅ Fully modular code structure separating logic (data) and view (DOM).
- ✅ Cleaned up and removed repeated logic for better maintainability.
