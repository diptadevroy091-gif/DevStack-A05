# 🚀 Dev Stack

## 📖 About The Project

Dev Stack is a modern and responsive technology showcase website that I built to explore and organize different web development technologies.

Users can explore different technologies, check their category, difficulty level, rating, description, and badge. They can also add technologies to their own stack and remove them whenever they want.

I built this project as part of my Programming Hero assignment. I focused on making the website clean, modern, responsive, and easy to use.

## 🌐 Live Website

**Live Link:**
https://diptadevroy091-gif.github.io/DevStack-A05/

## ⚙️ Technologies Used

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Vite
- React Icons
- React-Toastify
- JSON

## ✨ Main Features

### 1. Explore Technologies

Users can explore different modern technologies with their name, category, description, difficulty level, rating, badge, and icon.

### 2. Build Your Own Stack

Users can add technologies to their own stack. Added technologies can be removed individually or all technologies can be removed at once.

### 3. Responsive Design

I made the website responsive so that it works properly on desktop, tablet, and mobile devices.

## 🔔 Notifications

I used **React-Toastify** to show notifications when:

- A technology is added
- A technology is already in the stack
- A technology is removed
- All technologies are removed
- Technology data cannot be loaded

## 📂 Data Management

The technology information is stored in a JSON file.

The JSON data contains information such as:

- Technology name
- Category
- Description
- Icon
- Rating
- Difficulty
- Badge

The data is loaded dynamically into the React application.

## 📚 What I Learned

While building this project, I practiced:

- React components
- React state management
- `useState`
- `useEffect`
- JSON data fetching
- Array `.map()`
- Conditional rendering
- Responsive CSS
- React-Toastify
- Git and GitHub
- GitHub Pages deployment

# ❓ React Questions & Answers

## 1. What is JSX, and why is it used in React?

**Ans:** JSX is a syntax that allows us to write HTML-like code inside JavaScript. I used JSX in my React components because it makes creating and understanding the UI easier.

## 2. What is the difference between props and state?

**Ans:** Props are used to pass data from a parent component to a child component. State is used to store and manage data that can change inside a component.

## 3. What does the `useState` hook do, and where did you use it in this project?

**Ans:** The `useState` hook is used to create and manage changing data in a React component.

I used `useState` in the Technology section to manage:

- Technology data
- Selected technologies
- Loading state

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

**Ans:** The `useEffect` hook runs code after a component renders or when specific values change.

I used `useEffect` to fetch the `technologies.json` file when the Technology section loads.

## 5. Why does every item in a `.map()` list need a unique `key` prop?

**Ans:** React uses the `key` to identify each item in a list.

A unique key helps React understand which item has changed, been added, or removed, so it can update the UI correctly.

## 6. What is conditional rendering? Show one place you used it.

**Ans:** Conditional rendering means showing different UI based on a condition.

I used it in the **Your Stack** section. When the stack is empty, it shows an empty-stack message. When technologies are selected, it shows the selected technologies.

Example:

<!-- jsx -->

{
stack.length === 0 ? (
<div className="empty-stack">
<p>Select technologies to build your stack.</p>
</div>
) : (
stack.map((technology) => <div key={technology.id}>{technology.name}</div>)
);
}

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

**Ans:** A parent component can pass data to a child component using **props**.

A child component can send information back to the parent by calling a function that the parent passes to it through props.

## ❤️ About This Project

I built this project as part of my Programming Hero learning journey.

This project helped me improve my React skills and understand how to work with JSON data, state, effects, responsive design, and user interactions.

Thanks for visiting my project! ❤️

## 📌 Project Status

**Completed ✅**

Built with React + Vite and deployed using GitHub Pages.
