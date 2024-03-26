import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf';
import { ToastContext } from '../ToastProvider';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const { addToast } = React.useContext(ToastContext);

  return (

    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf />

      <form
        onSubmit={(event) => {
          event.preventDefault();
          addToast({ variant, message, id: Math.random() })
          setMessage('')
          setVariant('notice')
        }}
      >
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div
              key='variant-text-field'
              className={styles.label}>Variant</div>
            <div
              key='radio-input-wrapper'
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              {VARIANT_OPTIONS.map((option) => (

                <label
                  key={option}
                  htmlFor={`variant-${option}`}>
                  <input
                    id={`variant-${option}`}
                    type="radio"

                    name="variant"
                    value={option}
                    checked={variant === option}
                    onChange={event => {
                      setVariant(event.target.value)
                    }}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              <Button>
                Pop Toast!
              </Button>
            </div>

          </div>

        </div>
      </form>

    </div >
  );
}

export default ToastPlayground;
