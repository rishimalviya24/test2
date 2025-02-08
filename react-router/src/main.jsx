import React from "react";  // <-- Add this line
import { createRoot } from "react-dom/client";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import "./index.css";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";  // <-- Add this line
import Layout from "./Layout.jsx";
import Contact from "./components/Contact/Contact.jsx";  // <-- Add this line
import User from "./components/User/User.jsx";  // <-- Add this line
import Github from "./components/Github/Github.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,  // Ensure Layout is properly imported if needed
//     children: [
//       { path: "", element: <Home /> },
//       { path: "about", element: <About /> },
//       {path:'contact', element: <Contact />}
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path="" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="user/:userId" element={<User />} />
      <Route
      loader={githubInfoLoader}
       path="github" element={<Github />} />


        </Route>
))

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
