## EPLQ Mobile Shield – Efficient Privacy-Preserving Location Query
## Project Overview

EPLQ Mobile Shield is a web-based application that provides privacy-preserving location-based queries. Users can search for points of interest (POIs) near them without revealing their exact location, ensuring complete privacy and security.

The platform supports role-based access:

User – Can search POIs and view results anonymously.

Admin – Can manage POIs, view analytics, and access enhanced dashboard features.

The system leverages Firebase Authentication, local storage, and cloud-powered POI management.

## Features

Secure Authentication: Email/Password signup and login with role-based redirection.

Privacy-Preserving Search: Search for POIs without exposing real location data.

End-to-End Encryption Simulation: Demonstrates secure query handling.

Role-Based Dashboard: Users see their results; Admins see analytics.

Analytics for Admins: Visual charts for POI data.

Responsive Design: Fully mobile-friendly with animations and hover effects.

## Folder Structure
EPLQ-Project/
│
├─ index.html          → Optional homepage or redirect to login
├─ login.html          → Login page
├─ signup.html         → Signup page
├─ dashboard.html      → Role-based dashboard
├─ style.css           → CSS with animations and responsive design
├─ auth.js             → Firebase authentication logic
├─ dashboard.js        → Dashboard functionality (POI search + analytics)
└─ README.md           → This file

## Firebase Setup

Create a Firebase Project

Go to Firebase Console
.

Click Add project and follow the prompts.

Add Web App

Copy the Firebase config and replace placeholders in firebase-config.js.

Enable Authentication

Navigate to Authentication → Sign-in methods → Email/Password → Enable.

Use Firestore to store POIs and user roles if scaling beyond localStorage.

Hosting (Optional)

Install Firebase CLI: npm install -g firebase-tools

Initialize hosting: firebase init

Deploy: firebase deploy

## How to Run Locally

Clone or download the repository.

Ensure all files are in the same directory.

Serve locally using Live Server:

npx live-server


Open login.html to start the application.

Signup or login and navigate to the dashboard.

Usage

Sign Up

Choose a role (User or Admin).

Login

Enter your credentials.

Dashboard

Users can search POIs.

Admins see analytics charts and additional info.

Logout

Click the logout button to return to login.

## Technologies Used

HTML5, CSS3, JavaScript

Firebase v9 (Auth & Hosting)

Chart.js for Admin analytics

Responsive design with CSS animations

## Notes

Currently, POI data is simulated in dashboard.js.

Role-based access is managed via localStorage; for production, use Firestore.

Animations include hover effects on cards and smooth transitions for buttons.

## Future Enhancements

Full integration with Firestore for real-time POI storage.

Location-based map view with privacy-preserving queries.

Encrypted data storage using actual encryption algorithms.

Mobile app version with React Native or Flutter.

## Author : Mohamed Thoufiq 
 Full-stack development, UI/UX design, Firebase integration.