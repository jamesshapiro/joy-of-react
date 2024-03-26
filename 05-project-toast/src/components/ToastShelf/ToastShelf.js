import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

import { ToastContext } from '../ToastProvider';

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);

  return (
    <ol
      className={`${styles.wrapper} ToastShelf_wrapper`}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map((toast) => {
        return (
          <li className={styles.toastWrapper} key={toast.id}>
            <Toast
              variant={toast.variant}
              id={toast.id}
            >
              {toast.message}
            </Toast>
          </li>
        )
      })}
    </ol>
  );
}

export default ToastShelf;
