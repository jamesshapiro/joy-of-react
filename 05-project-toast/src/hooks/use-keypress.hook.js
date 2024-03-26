import React from 'react';

function useKeypress(keyCode, callback) {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === keyCode) {
        callback();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [keyCode, callback]);
}

export default useKeypress;