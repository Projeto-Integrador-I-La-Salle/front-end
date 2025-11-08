import { useState, useRef, useEffect } from "react";
import { ModalContext } from "../contexts/ModalContext";

export function ModalProvider({ children }) {
  const dialogRef = useRef(null);

  const [content, setContent] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showCloseButton, setShowCloseButton] = useState(true);

  function openModal(component, options = {}) {
    setContent(component);
    setShowCloseButton(options.showCloseButton ?? true);

    dialogRef.current?.showModal();
    requestAnimationFrame(() => setIsVisible(true));
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setIsVisible(false);

    setTimeout(() => {
      dialogRef.current?.close();
      setContent(null);
      document.body.style.overflow = "";
    }, 200);
  }

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") closeModal();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      <dialog
        ref={dialogRef}
        className={`
          fixed inset-0 z-50 p-0 border-none bg-transparent
          transition-colors duration-200
          ${isVisible ? "backdrop:bg-black/50" : "backdrop:bg-black/0"}
        `}
        onClick={(e) => {
          if (e.target === dialogRef.current) closeModal();
        }}
      >
        <div
          className={`
            bg-white rounded-xl p-6 max-w-lg mx-auto
            transform transition-all duration-200
            ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
          `}
        >
          {content}

          {showCloseButton && (
            <button
              className="mt-6 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
              onClick={closeModal}
            >
              Fechar
            </button>
          )}
        </div>
      </dialog>
    </ModalContext.Provider>
  );
}

