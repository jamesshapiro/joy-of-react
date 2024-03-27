'use client';
import React from 'react';
import { Volume2, VolumeX } from 'react-feather';

import { SoundContext } from '../SoundProvider';

import VisuallyHidden from '../VisuallyHidden';
import MaxWidthWrapper from '../MaxWidthWrapper';
import styles from './Header.module.css';

function Header() {
  const id = React.useId();

  const { soundEnabled, setSoundEnabled } = React.useContext(SoundContext);

  return (
    <header className={styles.wrapper}>
      <MaxWidthWrapper
        className={styles.innerWrapper}
      >
        <a href="/">Kool Website</a>

        <button
          onClick={() => {
            setSoundEnabled((oldValue) => !oldValue)
          }}
        >
          {soundEnabled ? (
            <Volume2 />
          ) : (
            <VolumeX />
          )}
          <VisuallyHidden>
            {soundEnabled
              ? 'Disable sound effects'
              : 'Enable sound effects'}
          </VisuallyHidden>
        </button>
      </MaxWidthWrapper>
    </header>
  );
}

export default Header;
