import { useState } from "react";

import { ModalContext } from "../contexts/ModalContext";

import { Modal } from '../components/Modal.component';

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen, message, setMessage }}>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        {children}
      </Modal>
    </ModalContext.Provider>
  );
}

