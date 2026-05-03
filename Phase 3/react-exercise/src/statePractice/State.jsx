import React, { useEffect } from 'react';

function State() {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      // These two lines trigger the standard browser confirmation popup
      event.preventDefault();
      event.returnValue = ''; // Required for most browsers
    };

    // Add the event listener when the component mounts
    window.addEventListener('beforeunload', handleBeforeUnload);

    // CLEANUP: Remove it when the component unmounts
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return <div>Try to refresh or close this tab!</div>;
}

export default State;