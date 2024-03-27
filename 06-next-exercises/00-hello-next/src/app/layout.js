import React from 'react';

import './styles.css';

function RootLayout({ children }) {
  const date = new Date();

  return (
    <html lang="en">
      <body>
        {children}
        <footer>Page rendered on {date.toLocaleString()}</footer>
      </body>
    </html>
  );
}

export default RootLayout;
