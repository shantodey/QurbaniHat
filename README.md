# QurbaniHat - Livestock Booking Platform

**Author:** Shanto Dey 🐄

A modern and responsive livestock booking platform where users can explore halal Qurbani animals such as cows, goats, and bulls, view details, and place bookings after authentication.

---

## 🌐 Live Site

- **Live URL:** [QurbaniHat Live Site](https://scd-qurbanihat.vercel.app/)

## 📂 GitHub Repository

- **Repository:** [QurbaniHat GitHub Repo](https://github.com/shantodey/QurbaniHat)

## 📸 Preview

Project Preview

---

## 🎯 Project Purpose

QurbaniHat is a halal livestock marketplace designed for Qurbani animal booking. Users can browse verified animals, check detailed information such as breed, weight, age, price, and location, and place a booking after login.

This project was created as part of Assignment Category: category-A8-Pineapple.

---

## 🚀 Key Features

- Fully responsive design for mobile, tablet, and desktop
- Modern livestock marketplace UI
- Email/password authentication with Better Auth
- Google social login
- Protected private routes
- Dynamic animal details page
- Booking form with success toast
- Animal price sorting feature
- My Profile page for logged-in users
- Update profile information feature
- Custom 404 Not Found page
- Environment variables for authentication configuration
- Clean and reusable component structure

---

## 🛠️ Tech Stack

- Next.js
- React
- Tailwind CSS
- DaisyUI
- Better Auth
- MongoDB
- JavaScript
- HTML
- CSS

---

## 📦 NPM Packages Used

| Package | Purpose |
| --- | --- |
| next | Framework for React application |
| react | UI library |
| react-dom | React DOM rendering |
| tailwindcss | Utility-first CSS framework |
| daisyui | Tailwind CSS component library |
| better-auth | Authentication handling |
| @better-auth/mongo-adapter | MongoDB adapter for Better Auth |
| mongodb | MongoDB database driver |
| react-hot-toast | Toast notifications |
| react-icons | SVG icons |
| @heroui/styles | UI component styles |
| motion | Animation library |
| @tailwindcss/postcss | PostCSS plugin for Tailwind CSS |
| babel-plugin-react-compiler | React compiler plugin |
| eslint | Linting utility |
| eslint-config-next | ESLint configuration for Next.js |

---

## 📄 Main Pages

| Page | Description |
| --- | --- |
| Home | Landing page with hero, featured animals, Qurbani tips, and top breeds |
| All Animals | Displays all livestock with sorting option |
| Animal Details | Animal detail page with booking option |
| Login | User login with email/password and Google |
| Register | User registration with name, email, photo URL, and password |
| Profile | Shows logged-in user information and profile update option |
| Not Found | Custom 404 error page |

---

## 🔐 Authentication Features

- Register with name, email, photo URL, and password
- Login with email and password
- Login with Google
- Logout functionality
- Conditional navbar based on authentication status
- Private profile route
- User profile update via Better Auth

---

## 🐂 Animal Data Structure

The project uses a local JSON file containing livestock data.

Example:

```json
{
  "id": 1,
  "name": "Deshi Shahi Cow",
  "type": "Cow",
  "breed": "Local Deshi",
  "price": 120000,
  "weight": 280,
  "age": 3,
  "location": "Bogura",
  "description": "Healthy deshi cow suitable for Qurbani. Well fed with natural খাবার.",
  "image": "https://i.postimg.cc/example-cow1.jpg",
  "category": "Large Animal"
}
```

---

## 🔒 Environment Variables

Create a `.env.local` file in the root directory and add your authentication configuration values:

```env
AUTH_DB_URL="your_mongodb_connection_string"
BETTER_AUTH_URL="your_api_base_url"
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"
```

Make sure `.env.local` is added to `.gitignore`.

---

## 🧭 Routes

### Public Routes

- `/`
- `/all-animal`
- `/login`
- `/register`

### Private Routes

- `/all-animal/[id]`
- `/profile`

### Error Route

- `*`

---

## 📱 Responsive Design

The website is fully responsive and optimized for:

- Mobile devices
- Tablets
- Laptops
- Desktop screens

---

## ⚙️ Local Installation

Follow these steps to run the project locally:

```bash
git clone https://github.com/your-username/qurbanihat.git
cd qurbanihat
npm install
npm run dev
```

---

## 🚀 Deployment

This project can be deployed using Vercel or another compatible hosting provider.

---

## 📌 Challenges Implemented

1. **My Profile**
   - Logged-in users can view their profile information including:
     - Name
     - Email
     - Profile image

2. **Update Information**
   - Users can update their profile information using:
     - New name
     - New image URL

3. **Extra NPM Package**
   - Implemented `react-hot-toast` for toast notifications

---

## 🧪 Testing Checklist

- Home page loads correctly
- All Animals page displays at least 6 animals
- Sort by price works properly
- Details page shows animal details
- Login works with email and password
- Register works with email and password
- Google login works
- Logout works
- Booking form shows success toast
- My Profile page shows user data
- Update Profile page updates user info
- Navbar changes based on login status
- 404 page works
- Website is responsive on mobile, tablet, and desktop

---

## 👨‍💻 Author

**Shanto Dey**

GitHub: shantodey1


---

## 📜 License

This project is created for educational purposes as part of a programming assignment.
