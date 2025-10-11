import { StrictMode } from 'react'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from './routes/router';
import ReactDOM from "react-dom/client";
import { ModalProvider } from './providers/ModalProvider';
import { LoaderProvider } from './providers/LoaderProvider';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <LoaderProvider>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </LoaderProvider>
  </StrictMode>
);

