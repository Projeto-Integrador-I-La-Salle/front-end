import { useContext } from "react";
import { ModalContext } from "./src/contexts/ModalContext";

export function useModal() {
  return useContext(ModalContext);
}

