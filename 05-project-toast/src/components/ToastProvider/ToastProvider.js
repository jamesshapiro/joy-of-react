import React from 'react';
import * as style from './ToastProvider.module.css'

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([])

  function removeToast(id) {
    setToasts((oldToasts) => {
      return oldToasts.filter((toast) => {
        return toast.id !== id
      })
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
