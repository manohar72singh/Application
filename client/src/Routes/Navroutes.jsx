import React from "react";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import EmailVerify from "../Pages/EmailVerify";
import ResetPassword from "../Pages/ResetPassword";
export default function Navroutes() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/email-verify" element={<EmailVerify />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </>
  );
}
