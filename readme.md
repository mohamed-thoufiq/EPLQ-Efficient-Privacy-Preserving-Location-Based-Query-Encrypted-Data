# EPLQ Mobile Shield – Efficient Privacy-Preserving Location Query

## Project Overview

EPLQ Mobile Shield is a web-based application that provides **privacy-preserving location-based queries**. Users can search for points of interest (POIs) near them without revealing their exact location, ensuring complete privacy and security.

The platform supports **role-based access**:

- **User** – Can search POIs and view results anonymously.
- **Admin** – Can manage POIs, view analytics, and access enhanced dashboard features.

The system leverages **Firebase Authentication**, **local storage**, and cloud-powered **POI management**. The project now also includes an **intro landing page** with a background image and smooth animations.

**Live Demo:** [EPLQ Project Live](https://epql-project.web.app/)

---

## Features

- **Landing Page:** Welcome page with background image, animations, and Sign Up / Login buttons.
- **Secure Authentication:** Email/Password signup and login with role-based redirection.
- **Privacy-Preserving POI Search:** Search for popular POIs near you without exposing your real location.
- **Enter Key Support:** Login and signup forms support the Enter key for improved UX.
- **End-to-End Encryption Simulation:** Demonstrates secure query handling.
- **Role-Based Dashboard:** Users see their results; Admins see analytics and additional data.
- **Analytics for Admins:** Charts powered by Chart.js to visualize POI data.
- **Responsive Design:** Fully mobile-friendly with animations and hover effects.
- **Interactive Cards:** POI results displayed in animated, readable cards with light backgrounds.

---

## Folder Structure

```

EPLQ-Project/
│
├─ index.html          → Landing page with Sign Up / Login buttons
├─ login.html          → Login page (form with Enter key support)
├─ signup.html         → Signup page (form with Enter key support)
├─ dashboard.html      → Role-based dashboard (POI search + admin analytics)
├─ style.css           → CSS with animations, responsive design, and POI card styles
├─ auth.js             → Firebase authentication logic
├─ dashboard.js        → Dashboard functionality (POI search, analytics, simulated POI data)
├─ 404.html            → Custom “Page Not Found” page for invalid routes
└─ README.md           → This file

````

---

## Firebase Setup

1. **Create a Firebase Project**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click **Add Project** and follow the prompts.

2. **Add Web App**
   - Copy the Firebase config and replace placeholders in your project.

3. **Enable Authentication**
   - Navigate to **Authentication → Sign-in methods → Email/Password → Enable**.

4. **Optional: Firestore**
   - Use Firestore to store POIs and user roles for scalable production deployment.

5. **Hosting (Optional)**
   ```bash
   npm install -g firebase-tools
   firebase login
   firebase init
   firebase deploy
``

---

## How to Run Locally

1. Clone or download the repository.
2. Ensure all files are in the same directory.
3. Serve locally using Live Server:

   ```bash
   npx live-server
   ```
4. Open `index.html` to start the application.
5. Sign up or login and navigate to the dashboard.

---

## Usage

### Sign Up

* Choose a role (User or Admin).
* Fill in email and password.

### Login

* Enter credentials and press **Enter** or click **Login**.

### Dashboard

* **Users:** Search POIs and view results anonymously.
* **Admins:** View analytics charts, manage POIs, and explore enhanced dashboard features.

### Logout

* Click the logout button to return to the login/landing page.

---

## Technologies Used

* HTML5, CSS3, JavaScript
* Firebase v9 (Auth & Hosting)
* Chart.js for Admin analytics
* Responsive design with CSS animations
* Privacy-preserving location simulation

---

## Notes

* POI data is currently simulated in `dashboard.js`.
* Role-based access is managed via localStorage; for production, use Firestore.
* Animations include hover effects on cards and smooth button transitions.
* Enter key support is added for login and signup forms.

---

## Future Enhancements

* Full integration with Firestore for real-time POI storage.
* Location-based map view with privacy-preserving queries.
* Encrypted data storage using actual encryption algorithms.
* Mobile app version with React Native or Flutter.
* More visually appealing landing page animations.

---

## Author

**Mohamed Thoufiq** – Full-stack development, UI/UX design, Firebase integration.

---
