'use client'
import React from 'react';

function CodePreview({ children }) {
  const [
    isSnippetShown,
    setIsSnippetShown,
  ] = React.useState(false);

  const result = isSnippetShown ?
    (
      children
    ) : (
      <div className="reveal">
        <button
          onClick={() =>
            setIsSnippetShown(true)
          }
        >
          Reveal Content
        </button>
      </div>
    )

  return (
    result
  );
}

export default CodePreview;
