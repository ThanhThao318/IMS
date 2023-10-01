import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { UserListPage } from "./pages/UserListPage/UserListPage.jsx";
import { UserDetailsPage } from "./pages/UserDetailsPage/UserDetailsPage.jsx";
import { UserProfilePage } from "./pages/UserProfilePage/UserProfilePage.jsx";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import UserLoginPage from "./pages/UserLoginPage/UserLoginPage.jsx";
import UserRegisterPage from "./pages/UserRegisterPage/UserRegisterPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<App />}> */}
      <Route path="/sign-in" element={<UserLoginPage />} />
      <Route path="/register" element={<UserRegisterPage />} />
      <Route path="/user-list" element={<UserListPage />} />
      <Route path="/user-details/:userId" element={<UserDetailsPage />} />
      <Route path="/user-profile" element={<UserProfilePage />} />
      {/* </Route> */}
    </Routes>
  </BrowserRouter>
);
