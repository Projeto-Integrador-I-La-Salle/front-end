import { createContext, useState } from 'react';
import { Modal } from '../components/Modal.component';

const ModalContext = createContext();

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

