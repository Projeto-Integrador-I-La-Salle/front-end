import { StrictMode } from 'react'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from './routes/router';
import React from "react";
import ReactDOM from "react-dom/client";
import { Modal } from './components/Modal.component';
import { ModalProvider } from './contexts/ModalContext';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <ModalProvider>
      <RouterProvider router={router} />
    </ModalProvider>
  </StrictMode>
);

