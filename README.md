# 💌 Valentine's Invitation Web App

A personalized, interactive web experience designed to ask the big question. It features a mischievous "running" No button, confetti celebrations, and a desktop-exclusive access gate.

## 🚀 Features

* **Dynamic Personalization:** Uses URL query parameters to greet the user by name.
* **Desktop & Mouse Enforcement:** Prevents mobile or touchscreen access to ensure the interactive elements (like button dodging) function correctly.
* **The "Runaway" No Button:** Uses mouse-hover detection to move the "No" button randomly, making it impossible to click.
* **Confetti Celebration:** Integrated with `canvas-confetti` (via tsparticles) for a high-energy "Yes" response.

---

## 🛠️ Setup & Usage

### 1. Dynamic Naming
To personalize the invitation, add `?name=YourName` to the end of the URL when sending the link.

| URL Example              | Resulting Greeting |
| :----------------------- | :----------------- |
| `index.html?name=Baby` | **Hi Gloria,**     |
| `index.html?name=Love`   | **Hi Love,**       |
| `index.html`             | **Hi,**            |

### 2. Device Requirements
The app is strictly gated for **Desktop users with a Mouse**. 
* **Logic:** It uses CSS Media Queries (`pointer: coarse`) to detect touchscreens.
* **Behavior:** If a user opens the link on a phone or tablet, a "Mobile Blocker" overlay will appear, preventing interaction.

---

## 📁 File Structure

* `index.html`: Contains the layout, the mobile blocker overlay, and the script link for confetti.
* `style.css`: Handles the romantic theme and the responsive "Blocker" logic.
* `app.js`: Contains the URL parsing logic, the button-dodging math, and the event listeners.

---

## 🧪 Technical Details

### Script Integration
The app uses the following CDN for the confetti effect. Ensure you have an active internet connection to load this:
```html
<script src="[https://cdn.jsdelivr.net/npm/@tsparticles/confetti@3.0.3/tsparticles.confetti.bundle.min.js](https://cdn.jsdelivr.net/npm/@tsparticles/confetti@3.0.3/tsparticles.confetti.bundle.min.js)"></script>