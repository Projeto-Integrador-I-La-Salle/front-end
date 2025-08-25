import { StrictMode } from 'react'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from './routes/router';
import React from "react";
import ReactDOM from "react-dom/client";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

