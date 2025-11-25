# Sudoku+ — Project 2 (React, State Management)

Author: **Shuhan Sheng**

This project is a single-player Sudoku web application built with React. 
The goal of this project was to expand on the original HTML/CSS mock-up 
and build a functional, interactive Sudoku game using modern JavaScript, 
React Router, and Context API for state management.

The application includes two different game modes (Easy and Normal), 
navigation between multiple pages, and real-time validation of Sudoku 
rules.

---

## Live Links

- **GitHub Repository:**  
  https://github.com/shuhansheng01/shuhan-sheng-project2  

- **Live App (Render):**  
  https://shuhan-sheng-project2.onrender.com  

- **Demo Video:**  
  https://youtu.be/x03Ef4McdDU  

---

## Pages Included

The following pages are implemented according to the assignment 
requirements:

- Home Page (`/`)
- Game Selection Page (`/games`)
- Easy Mode Game Page (`/games/easy`)
- Normal Mode Game Page (`/games/normal`)
- Rules Page (`/rules`)
- High Scores Page (`/scores`)
- Login Page (`/login`)
- Register Page (`/register`)

All non-game pages are implemented as mock/static views as requested.

---

## Features Implemented

- Dynamic Sudoku board generation for:
  - 6×6 (Easy Mode)
  - 9×9 (Normal Mode)
- Real-time validation for:
  - Rows
  - Columns
  - Sub-grids
- Red highlighting of incorrect user inputs
- Non-editable prefilled cells
- Reset and New Game buttons
- Game timer
- Board lock and congratulatory message when completed correctly
- Fully responsive layout for desktop and mobile

---

## Technologies Used

- React
- React Router
- Context API for global state management
- JavaScript (ES6+)
- HTML5
- CSS3
- Vite (build tool)

No server-side backend is used, as this project is frontend-focused.

---

## Collaborator

This project was completed **individually** with no collaborator.

---

## Writeup

### What were some challenges you faced while making this app?
One of the biggest challenges I faced while building this Sudoku app was 
implementing the core game logic, especially validating rows, columns, 
and subgrids in real time. It took time to fully understand how to 
structure the checks so that the game could accurately identify incorrect 
inputs without breaking the user experience. Another challenge was 
working with React Context for state management, since I had to carefully 
design how the game state flows through different components. I also 
spent a lot of time debugging edge cases, such as handling empty inputs, 
deletions, and re-entering values. Although these parts were difficult, 
they helped me really understand how React applications manage complex 
state and user interactions.

### What decisions did you make for mobile friendliness?
When making the site mobile friendly, I focused on ensuring that the 
layout could adjust smoothly to smaller screen sizes. I used flexible 
grid layouts and media queries so that the Sudoku board would resize 
proportionally and remain readable on phones. I also modified the 
navigation layout so that it stacks items vertically on smaller devices 
to avoid crowding the screen. Button sizes and input areas were designed 
to stay large enough for touch interaction. I continually tested the site 
in mobile view using browser developer tools to ensure that everything 
remained accessible and easy to use on different device sizes.

### What did you take into account when developing the design?
While developing the design of the website, I prioritized clarity, 
readability, and user comfort. I selected soft background colors and 
consistent spacing to create a clean interface that would not distract 
from the gameplay. I made sure that important elements such as selected 
cells and incorrect inputs had clear visual feedback through color 
changes and borders. I also added hover effects and smooth transitions to 
make the experience feel more interactive and polished. One aspect I am 
particularly proud of is how the visual design supports usability, for 
example making it immediately clear which cells are editable and which 
are fixed.

### Given more time, what additional features would you add?
If I had more time, I would add more advanced features to improve both 
functionality and user experience. I would like to implement a hint 
system that helps users when they get stuck by highlighting possible 
valid moves. I would also add a progress-saving feature so that users can 
refresh the page or close the browser without losing their current game. 
Another feature I would consider is adding multiple difficulty levels and 
user-selectable themes. Finally, I would improve the animations and 
transitions to give the site a more polished and professional feel.

### How long did this assignment take to complete?
This assignment took approximately **12–15 hours** to complete, including 
planning, development, debugging, and styling.

### What assumptions did you make while working on this assignment?
While working on this assignment, I assumed that the game only needed to 
support standard 6×6 and 9×9 Sudoku boards as specified in the project 
instructions. I also assumed that pages like Login and Register were 
intended to be mock pages and did not require real authentication or 
backend integration. In addition, I assumed that as long as the 
application met the functional and visual rubric requirements, the 
overall user experience would be considered acceptable. These assumptions 
helped me stay focused on the core project goals.

### Bonus Points Attempted
No bonus features were attempted for this assignment.

---

## How to Run Locally

```bash
npm install
npm run dev
# Sudoku+ — Project 2 
(React, State Management)

Author: **Shuhan Sheng**

This project is a single-player Sudoku web application built with React, React Router, and the Context API. It supports a 6×6 easy mode and a 9×9 normal mode, with random puzzles, error highlighting, a timer, and navigation pages that match the assignment specification.
