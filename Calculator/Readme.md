# Simple Web Calculator 🧮

This is a basic web-based calculator built using **HTML**, **CSS**, and **JavaScript**. It supports standard arithmetic operations including addition, subtraction, multiplication, division, percentage, and clear/delete functionality. It's designed for mobile-friendly interaction using on-screen buttons only (keyboard input is disabled).

---

## 🚀 Features

- ✅ Clean and minimal UI
- ✅ Responsive layout for desktop & mobile
- ✅ Basic arithmetic operations: `+`, `-`, `×`, `÷`
- ✅ Percentage calculation (`%`)
- ✅ Clear (`AC`) and backspace (`⌫`) functionality
- ✅ Prevents manual keyboard typing in the input
- ✅ Blinking cursor with read-only input field

---

## 📁 File Structure

Calculator/
│
├── calculator.html # Main HTML structure
├── calculator.css # Styles for layout and design
└── calculator.js # JavaScript logic for calculator functionality

## 📦 How to Use

1. Clone or download the repository.
2. Open `calculator.html` in your browser.
3. Try giving different input values with different operations. It also supports chain operations.

⚙️ Controls
Button	          Action
AC         ->  Clears the entire input
⌫         ->  Deletes the last character
+ - × ÷    ->  Arithmetic operations
%          ->  Converts value to percent
=          ->  Evaluates the expression
0–9, 00, . ->  Input numbers

🧑‍💻 Developer Notes
-> Uses readonly on the <textarea> to block keyboard input and only allow button input.

-> Operations can be single binary expressions (like 12+5) and also chain operations (12+5-3).

-> Multiplication uses X visually, but handled internally in JS.

-> Division uses ➗ visually, also handled properly in JS logic.

📃 License
This project is open-source and free to use under the MIT License.