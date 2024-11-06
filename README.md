
# Fake Store App

An e-commerce mobile application built with React Native and Expo, utilizing Node.js for server-side functionality. This app fetches data from the [Fake Store API](https://fakestoreapi.com/) and provides users with a seamless shopping experience, including browsing product categories, viewing product details, managing a shopping cart, and viewing order history.

## Features

### 1. Splash Screen
- Displays a splash screen on app launch with the title "Fake Store."
- Automatically transitions to the main application after a few seconds.

### 2. Product Category List Screen
- Accessible only to logged-in users. If not logged in, users are prompted to sign in or sign up.
- Fetches product categories from the Fake Store API and caches results for faster subsequent loads.
- Displays a list of categories and the developer's name as proof of app creation.
- Tapping a category navigates to the Product List Screen for that category.

### 3. Product List Screen
- Displays a list of products based on the selected category, fetched from the Fake Store API with cached data for efficiency.
- Each product includes a thumbnail, title, and price.
- Users can navigate to the Product Detail Screen by tapping on a product.

### 4. Product Detail Screen
- Shows detailed information about the selected product, including a large image, title, rating, price, and description.
- Includes an "Add to Cart" button, which updates the badge count on the shopping cart icon.
- Features a "Back" button to navigate to the Product List Screen.

### 5. Shopping Cart Screen
- Accessible only to logged-in users.
- Displays the list of products in the cart, total quantity, and total cost.
- Users can adjust the quantity of each product or remove items entirely.
- Includes a "Check Out" button to finalize the purchase and create a new order.

### 6. My Orders Screen
- Accessible only to logged-in users.
- Displays user orders categorized by status (New, Paid, Delivered).
- Allows users to pay for or mark orders as received, updating the order status accordingly.

### 7. User Profile Screen
- Shows logged-in user's name and email with options to update profile information or sign out.
- Users can edit their name and password through a pop-up form.

### 8. Authentication (Sign In & Sign Up Screens)
- **Sign In**: Allows users to log in with email and password, providing session management with token expiration.
- **Sign Up**: New users can register by entering their name, email, and password, with server-side validation.

## Tech Stack
- **Frontend**: React Native, Expo
- **Backend**: Node.js
- **API**: [Fake Store API](https://fakestoreapi.com/)

