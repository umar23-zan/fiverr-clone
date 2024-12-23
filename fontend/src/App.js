import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from "./components/Dashboard";
// import Messaging from "./components/Messaging";
import GigManagement from "./components/GigManagement";
import Orders from "./components/Orders";
import Login from './components/Login';
import Signup from './components/Signup';
import ResetPassword from './components/ResetPassword';
import ForgotPassword from './components/ForgotPassword';
import ChatApp from "./components/ChatApp";
// import Gigs from './components/Gigs';
import Profile from "./components/Profile";
import GidDetail from "./components/GidDetail";
import SearchResults from "./components/SearchResults";
import ProtectedRoute from "./components/ProtectedRoute"; // Import ProtectedRoute

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgetpassword" element={<ForgotPassword />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          
          {/* Protected Routes */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          {/* <Route 
            path="/messages" 
            element={
              <ProtectedRoute>
                <Messaging />
              </ProtectedRoute>
            } 
          /> */}
          <Route 
            path="/chatapp" 
            element={
              <ProtectedRoute>
                <ChatApp />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/gig" 
            element={
              <ProtectedRoute>
                <GigManagement />
              </ProtectedRoute>
            } 
          />
          {/* <Route 
            path="/gigs" 
            element={
              <ProtectedRoute>
                <Gigs />
              </ProtectedRoute>
            } 
          /> */}
          <Route 
            path="/gigdetail/:id" 
            element={
              <ProtectedRoute>
                <GidDetail />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/orders" 
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/searchResults" 
            element={
              <ProtectedRoute>
                <SearchResults />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
