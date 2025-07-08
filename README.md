# 3D Library Navigation System

This is a web-based 3D virtual library built using React and Babylon.js. It allows users to explore the library in a first-person view and locate specific books by searching their names or IDs. When a book is selected, a realistic path is generated using A\* pathfinding logic from the reception desk to the bookshelf.

---

## Features

* First-person POV navigation using WASD keys
* Realistic layout: shelves, reception desk, windows, dome structure
* Searchable book catalog with path-based navigation
* A\* pathfinding for realistic movement (Python backend)
* Clickable book spots show modal popups with details
* Waypoint-based navigation with visual path highlighting

---

## Tech Stack

* **Frontend:** React, Babylon.js
* **Data Storage:** JSON (book and waypoint mappings)
* **Pathfinding:** Custom A\* algorithm using waypoint nodes

---

## Problem Solved

Large physical libraries can be hard to navigate. This system turns the process into an immersive digital experience where users can interactively walk through a 3D space and get guided to any book location in real-time.

---

## Installation & Setup

### Run the following steps:

```bash
git clone https://github.com/yourusername/3D-Library-Navigation.git
cd 3D-Library-Navigation
npm install
npm run dev
```

Visit the app at:

```
http://localhost:5173
```



## Screenshots / GIF Preview

![image](https://github.com/user-attachments/assets/9a696d59-af8e-4cb2-aa36-6db1e39e00f1)
![image](https://github.com/user-attachments/assets/4d0fa34d-90b0-49c6-8ba0-c0654fe2f015)
![image](https://github.com/user-attachments/assets/bf8c44ac-43c1-400c-8589-ba357864add6)
![image](https://github.com/user-attachments/assets/c89cd334-c224-46c0-8d2b-3847edd6787c)
![image](https://github.com/user-attachments/assets/8caaaf14-3170-4424-8099-0fd6d4723f1a)


