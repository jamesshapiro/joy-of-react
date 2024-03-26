import React from 'react';
import * as style from './ToastProvider.module.css'

import useKeypress from '../../hooks/use-keypress.hook'

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([])

  const handleEscape = React.useCallback(removeToasts, []);
  useKeypress('Escape', handleEscape)

  function removeToast(id) {
    setToasts((oldToasts) => {
      const nextToasts = oldToasts.filter((toast) => {
        return toast.id !== id
      })
      return nextToasts
    })
  }

  function removeToasts() {
    setToasts([])
  }

  function addToast(toast) {
    setToasts((oldToasts) => [...oldToasts, toast])
  }

  const value = { toasts, setToasts, removeToast, addToast, removeToasts }

  return (
    <ToastContext.Provider
      value={value}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
