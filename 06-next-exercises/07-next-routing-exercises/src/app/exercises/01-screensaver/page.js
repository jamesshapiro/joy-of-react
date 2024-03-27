import React from 'react';

import Link from 'next/link'

function ScreenSaverIndexPage() {
  const BASE_URL = '/exercises/01-screensaver'

  return (
    <main>
      <p>Choose your color:</p>
      <ul>
        <li><Link href={`${BASE_URL}/orange`}>Orange</Link>.</li>
        <li><Link href={`${BASE_URL}/blue`}>Blue</Link>.</li>
        <li><Link href={`${BASE_URL}/grey`}>Grey</Link>.</li>
        <li><Link href={`${BASE_URL}/red`}>Red</Link>.</li>
        <li><Link href={`${BASE_URL}/lightgrey`}>Light Grey</Link>.</li>
      </ul>
    </main>
  );
}

export default ScreenSaverIndexPage;
