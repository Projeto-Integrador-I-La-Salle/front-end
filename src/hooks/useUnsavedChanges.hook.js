import { useEffect } from "react";
import { useBlocker } from "react-router";

/**
 * @param {boolean} hasUnsavedChanges Value that indicates if the form has unsaved changes.
 * @param {string} message The content to be displayed on the confirm dialog.
 * */
export default function useUnsavedChanges(hasUnsavedChanges, message) {
  useBlocker(
    function() {
      if (hasUnsavedChanges) {
        const confirmLeave = window.confirm(message);
        return !confirmLeave;

      }
      return false;
    }
  );

  useEffect(function() {
    function handleBeforeUnload(e) {
      if (hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = message; // Browser-specific requirement
      }
    };

    if (hasUnsavedChanges) {
      window.addEventListener("beforeunload", handleBeforeUnload);
    }

    return function() {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [hasUnsavedChanges, message]);
};

