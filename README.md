# 🌍 WorldWise

WorldWise is a travel application that allows users to track their travel experiences across cities and countries. It helps you visualize where you've been and keeps a log of your adventures.

## ✨ Features
- Interactive Map: Explore cities you've visited and track your journeys.
- User Authentication: Secure login to protect your travel history.
- Protected Routes: Access the app's dashboard only after logging in.
- City & Country Listings: Detailed city and country lists to record your travels.
- Simple Pricing: Affordable pricing plan for premium features.

## 🖥️ Demo
You can check **live website** [World Wise](world-wise1.vercel.app).

🚀 Technologies Used
- React: Front-end `library`
- React Router DOM: For routing between pages
- Context API: For managing city and authentication state
- Custom Hooks: 
- CSS Modules: For component-scoped styling
- Vercel: For deployment

🔐 Authentication
This project uses a fake authentication context for managing user login. To access the main application, login with the following default credentials:
- Email: mahmoud@example.com
- Password: qwerty

📦 Installation
1. Clone the repository:
```
git clone https://github.com/your-username/worldwise.git
```
2. Navigate into the project directory:
```
cd worldwise
```

3. Install dependencies:
```
npm install
```

🔄 Usage
1. Run the application locally:
```
npm run dev
```
2. Run fake database 
```
npm run server
```
3. Open [http://localhost:5173/](http://localhost:5173/) to view it in the browser.



📖 How It Works
- Homepage: Provides a welcoming interface with a call to action to start tracking your travels.
- Login: Users can log in securely to access the app.
- Protected Routes: Only authenticated users can access features like adding or viewing cities and countries.
- App Layout: Displays the interactive map and user information.
- City & Country Management: Use the CityList and CountryList components to manage your travel data.

## 📂 Project Structure

├── src
│   ├── components
│   │   ├── ...
│   │   ├── ...
│   
│   ├── contexts
│   │   ├── CitiesContext.jsx
│   │   └── FakeAuthContext.jsx
│   
│   ├── hooks
│   │   ├── useFetch.js
│   │   ├── useGeolocation.js
│   │   └── useUrlPosition.jsx
│   
│   ├── pages
│   │   ├── AppLayout.jsx
│   │   ├── Homepage.jsx
│   │   ├── Login.jsx
│   │   ├── Pricing.jsx
│   │   ├── Product.jsx
│   │   └── PageNotFound.jsx
│   
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
└── ...





## 🤝 Contributing
Feel free to contribute to this project by creating issues, submitting pull requests or emiling me `mahmoud.alaa.dev1@gmail.com`.




