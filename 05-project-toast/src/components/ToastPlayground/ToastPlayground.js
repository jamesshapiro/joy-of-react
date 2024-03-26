import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf';
import { ToastContext } from '../ToastProvider';
import useKeypress from '../../hooks/use-keypress.hook'

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState('notice');
  const { addToast, removeToasts } = React.useContext(ToastContext);
  useKeypress('Escape', removeToasts)

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
                onChange={(e) => setMessage(e.target.value)}
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
              {VARIANT_OPTIONS.map((variantOption) => (

                <label
                  key={variantOption}
                  htmlFor={`variant-${variantOption}`}>
                  <input
                    id={`variant-${variantOption}`}
                    type="radio"

                    name="variant"
                    value={variantOption}
                    checked={variant === variantOption}
                    onChange={event => {
                      setVariant(variantOption)
                    }}
                  />
                  {variantOption}
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
