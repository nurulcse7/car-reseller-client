import { useEffect } from 'react';

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Car Reseller`;
  }, [title]);
};

export default useTitle;

//
