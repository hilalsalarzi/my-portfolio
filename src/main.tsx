import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  // Public route (Login)
  {
    path: "/login",
    element: <Login />, // No layout here
  },

  // Protected routes FIRST, then Layout inside
  {
    element: <ProtectedRoute />,  // ✅ Check auth before showing layout
    children: [
      {
        path: "/",
        element: <AppLayout />,   // ✅ Layout comes after auth
        errorElement: <h1>⚠️ 404 - Page Not Found</h1>,
        children: [
          { index: true, element: <Home /> },     // `/`
          { path: "home", element: <Home /> },    // `/home`
          { path: "about", element: <About /> },  // `/about`
          { path: "contact", element: <Contact /> }, // `/contact`
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
