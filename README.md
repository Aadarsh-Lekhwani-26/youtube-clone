# 🎬 MyTube – YouTube Clone with Smart Content Discovery

## 🚀 Project Overview

MyTube is a React-based YouTube clone that integrates the YouTube Data API v3 to fetch and display real-time video content. The application allows users to browse categorized videos, search dynamically, watch videos within the platform, and use personalized features like watchlist and watch time tracking.

---

## ✨ Features

### 🏠 Homepage

* Categorized sections:

  * 🔥 Trending
  * 🎬 Movies & Series
  * 🍥 Anime
  * 🧸 Kids
* Data fetched using YouTube API
* **Load More button** for each section (pagination)

---

### ▶️ Video Player

* Plays videos inside the app using YouTube embed (iframe)
* Displays title, description, and related videos

---

### 🔍 Search

* Real-time search using YouTube API
* Displays dynamic results

---

### 🔐 Authentication

* Login & Signup using localStorage
* Persistent login
* Auth managed using React Context

---

### 🔒 Watchlist

* Save videos for later
* Protected route (only accessible after login)

---

### ⏱️ Watch Time Tracking

* Tracks how long a user watches a video
* Stores data in localStorage
* Enables basic user activity tracking

---

## 🛠️ Tech Stack

* **Frontend:** React (Vite)
* **Routing:** React Router DOM
* **API:** YouTube Data API v3
* **State Management:** useState, useEffect, Context API
* **Storage:** localStorage
* **Styling:** CSS Modules

---

## 📂 Folder Structure

```bash
src/
├── components/
├── pages/
├── context/
├── services/
├── utils/
├── assets/
├── App.jsx
├── main.jsx
```

---

## ⚙️ Setup Instructions

1. Clone the repository:

```bash
git clone <your-repo-link>
```

2. Navigate to project folder:

```bash
cd mytube
```

3. Install dependencies:

```bash
npm install
```

4. Add your YouTube API key in:

```bash
src/services/youtubeApi.js
```

5. Run the development server:

```bash
npm run dev
```

---

## 🔑 API Usage

This project uses the YouTube Data API v3 to:

* Fetch videos based on categories
* Search videos dynamically
* Implement pagination using `nextPageToken`

---

## 👥 Team Contribution

* **Member 1:** API Integration, Routing, Homepage Logic
* **Member 2:** UI/UX Design, Components, Styling
* **Member 3:** Authentication, Watchlist, Watch Time

---

## 📦 Deliverables

* Deployed application
* GitHub repository
* Presentation/demo video

---

## 🎯 Project Goals

* Demonstrate React fundamentals (components, hooks, routing)
* Implement API-based dynamic content
* Build a clean and responsive UI
* Add user-focused features like authentication and tracking

---

## 🧠 Key Learning Outcomes

* API integration using fetch
* State and context management
* Component-based architecture
* Routing and protected routes
* Handling real-time data

---

## 💯 Conclusion

MyTube is a feature-rich frontend application that combines real-time data with user-centric features, delivering a structured and interactive video browsing experience.

---

⭐ If you like this project, consider giving it a star!
