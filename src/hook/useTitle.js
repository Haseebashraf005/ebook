import { useEffect } from 'react';

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - CodeBook`; // Set the document title
  }, [title]); // Run this effect when the title changes
};
